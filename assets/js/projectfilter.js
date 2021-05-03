const filter = document.getElementById('filter');
const allProjects = document.querySelectorAll('.project-container');

// When the document loads...
window.addEventListener("load",function() {

	filter.onchange = function() {

		const selection = this.options[this.selectedIndex].value;
		allProjects.forEach(proj => {
			proj.style.display = (selection == 'all' || selection == proj.dataset.type) ? 'flex' : 'none';
		});

	};

},false);