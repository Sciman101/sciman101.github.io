// Get all art
const allArt = document.querySelectorAll('.art');
const allTags = document.querySelectorAll('.tag-selector');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightbox = document.getElementById('lightbox');
let activeTags = [];

// Define click function
const onTagButtonClick = function() {
	// Toggle active class
	this.classList.toggle('active');
	// Figure out if we're active
	const active = this.classList.contains('active');
	const tag = this.innerText;

	if (active) {
		activeTags.push(tag);
	}else{
		//Remove tag element
		const index = activeTags.indexOf(tag);
		if (index > -1) {
			activeTags.splice(index,1);
		}
	}

	// Create new hash
	let hash = "";
	activeTags.forEach(tag => {
		hash += "," + tag
	});;
	window.location.hash = hash.substring(1);

	// apply to art
	allArt.forEach(art => {
		art.style.display='block';
		// See if we need to hide
		if (activeTags.length != 0) {
			const myTags = art.dataset.tags.split(", ");
			for (let i=0;i<activeTags.length;i++) {
				if (myTags.indexOf(activeTags[i]) < 0) {
					art.style.display='none';
					break;
				}
			}
		}
	});
	// apply to tags
	/*allTags.forEach(tag => {
		tag.style.display='span';
		// See if we need to hide
		if (activeTags.length != 0) {
			allArt.forEach(art => {
				if (art.style.display == 'block') {
					const artTags = art.dataset.tags.split(", ");
					if (artTags.indexOf(tag.innerText) < 0) {
						tag.style.display='none';
					}
				}
			});
		}
	}); Commented out for now for being inefficient and also not working*/

}

// When the document loads...
window.addEventListener("load",function() {

	// load active tags
	const urlTags = window.location.hash.substring(1).split(",");
	console.log(urlTags);

	// Assign onclick to all buttons
	allTags.forEach(btn => {
		btn.onclick = onTagButtonClick;
		if (urlTags.indexOf(btn.innerText) != -1) {
			btn.onclick();
		}
	});
	// Assign onclick to all art
	allArt.forEach(art => {
		art.onclick = function() {
			lightbox.style.display = 'flex';
			// Clear image
			lightboxImg.src = '';
			// Load new image
			lightboxImg.src = this.src.replace('/thumb','');
			lightboxCaption.innerHTML = art.alt;
		}
	});

	lightbox.onclick = function() {
		// Hide lightbox
		this.style.display = 'none';
	}
	

},false);