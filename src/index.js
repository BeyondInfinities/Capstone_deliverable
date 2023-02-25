import TOC from "./diagrams/toc.svelte"
import Image from "./diagrams/image.svelte"
import Unmasker from "./diagrams/unmasker.svelte"
import Vectors from "./diagrams/vectors.svelte"
// lazily initialize any diagram below the fold. E.G:
// const exampleTag = document.getElementById("svelte-example-dfigure");
// let example;
// exampleTag.addEventListener("ready", () => {
	// const target = exampleTag.querySelector("#svelte-example-target");
	// example = new Example({ target });
// });


const toc = new TOC({
	target: document.getElementById('toc')
});

const image = new Image({
	target: document.getElementById('image')
});


const unmasker = new Unmasker({
	target: document.getElementById('unmasker')
});

const vectors = new Vectors({
	target: document.getElementById('vectors')
});




const target = document.getElementById('details-illustration');
target.addEventListener('ready', () => {
	import('./diagrams/details-illustration.svelte').then(_Element => {
		new _Element.default({ target });
	});
})