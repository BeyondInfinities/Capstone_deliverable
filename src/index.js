import TOC from "./diagrams/toc.svelte"
import Image from "./diagrams/image.svelte"
import Image1 from "./diagrams/image1.svelte"
import Unmasker from "./diagrams/unmasker.svelte"
import Vectors from "./diagrams/vectors.svelte"
import Charts from "./diagrams/charts.svelte"
// lazily initialize any diagram below the fold. E.G:
// const exampleTag = document.getElementById("unmasker");
// let example;
// exampleTag.addEventListener("ready", () => {
// 	const target = exampleTag.querySelector("#unmasker");
// 	example = new Unmasker({ target });
// });

const charts = new Charts({
	target: document.getElementById('charts')
});

const toc = new TOC({
	target: document.getElementById('toc')
});

const image = new Image({
	target: document.getElementById('image')
});

const image1 = new Image1({
	target: document.getElementById('image1')
});

const vectorPlay = new Vectors({
	target: document.getElementById('vectors')
});

const unmasker = new Unmasker({
	target: document.getElementById('unmasker')
});


