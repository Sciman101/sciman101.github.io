---
layout: post
title: Making a Minecraft Clone, part 1
---

A few years ago, I had tried to make a simple voxel mesher in Unity when I should have been paying attention in my math class. Blocks used the default Unity diffuse shader, there were no textures, and most importantly, it didn't work.

I gave up on that, and went to work on other stuff. Lately, though, I haven't been doing much game development, and figured it'd be fun to try again, having gained more experience as a programmer since my last attempt. I was also inspired by [this video from jdh](https://www.youtube.com/watch?v=4O0_-1NaWnY) where he makes Minecraft in 2 days from scratch, and it inspired me to want to try again. Unlike jdh though, I'll be taking an easier route and using Unity as my engine of choice. That said, as time goes on, I plan on trying to avoid actually *using* a lot of Unity's features like collision detection, lighting, and instead rolling my own solutions that act more like how they do in regular Minecraft.

Before I can focus on any of that, though, there's one core feature I need for this game to actually work - a world. Minecraft's world is made of blocks, and to render this world to the screen in a way that's efficient, I need to create 2 systems - a voxel mesher, and a chunk system.

## Meshing
Since this won't be using any raytracing or other fancy rendering techniques, the easiest way to show a bunch of cubes on screen would be to make a cube for every single block in the world. Except, if you've seen anyone else try making a voxel game, you'll know this isn't a good approach.

![A 5x5x5 wiremesh of cubes](/assets/img/blog/voxel/innercubes.png)
By doing it like this, we have hundreds of cube faces that are completely hidden from view, but are still being rendered. The better solution is to only generate faces that are guarenteed to be visible, which we can do by checking if there is a block adjacent to each face of the cube. I wrote some simple code that would run this on a 16x16x16 grid of 'blocks' (for now, just booleans indicating the precense or lack of a block), and voila!

![It's almost there](/assets/img/blog/voxel/issues.png)
... Well, that's almost right. Writing meshing code means generating a list of points, and a list of connections between those points, and sometimes getting those to line up is a little annoying. But a few changes later, and-

![There we go](/assets/img/blog/voxel/terrain.png)
There we go! I also changed my terrain from a solid cube of blocks to have some interesting elevation differences, using `Mathf.PerlinNoise`, which we'll probably be seeing a lot of as I keep working on this. Finally, I changed my code around so instead of using on/off values, each block was represented by a byte. This limits me to 256 unique blocks, including air, but for the time being I figured that was more than enough.

To give the blocks texture, I added UV coordinates to my mesh, and I was starting to have something that looked like Minecraft.
![Dirt](/assets/img/blog/voxel/dirt.png)
(I'm just using Minecraft textures for now, obviously these'll change in the future)

Now, right now, each cube is being given 24 vertices - 4 for each face. We aren't sharing common points on the corners, which feels wasteful, but there isn't a good alternative. When I did my first experiment years ago, I tried making blocks share common points, but among other issues, it changed how normals were being calculated. This messed with lighting calculations, and in the end my blocks looked like this.
![Blender cubes showing the difference between split and shared vertices](/assets/img/blog/voxel/vertices.png)
So, for now, we'll stick with split verices.

One more thing - if we try and make the volume of blocks we have bigger, weird glitches start happening. The reason for this is that meshes in Unity have a 65k vertex limit, and we're already scraping that with our 16 block chunks. But it turns out, there's actually a way to get around this limitation, with a single line of code.<br>
`mesh.indexFormat = Rendering.IndexFormat.UInt32;`<br>
This tells Unity to use 32-bit numbers to represent vertex indices, instead of 16-bit, which gives us *way* more vertices to play with. It does raise some compatability issues with certain platforms, but for my purposes this is a fine fix for now.


## Chunks
So now, we have a 16x16x16 cube of blocks, and all we need to make Minecraft is to scale those values to infinity. Except, we can't do that. Not to mention regenerating a chunk mesh already takes a bit of time, and scaling it up will only make it take longer.

So, the solution is to divide the world into chunks, like what Minecraft does. If you're not familiar, a chunk is basically what we have right now - a limited slice of the world - that we can stack next to one another, to make a much bigger environment. We can take chunks too far from the player and unload them, and load in new chunks closer to the player, to give the illusion of an infinite world. Chunks also won't be stored in an array like blocks, but a dictionary associating points in 3d space (in this case `Vector3Int`s) to chunk GameObjects, meaning we can be more flexible with where they're positioned.

I'm also doing something a little different here. In Minecraft, each chunk is 16x256x16 blocks, (soon to be higher in 1.18), and these are stacked in a 2d grid next to one another. This gives you infinte space in X and Z, but limits the height of the world. An alternate solution is something called *Cubic Chunks*, which makes chunks generate as cubes in a 3d grid, like how blocks work. This gives you infinite space in *every* direction, and it's what I wanted to try for my game.

