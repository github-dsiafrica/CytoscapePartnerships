import cytoscape from "cytoscape";

const cy = cytoscape({
	container: document.getElementById("cy"),
	elements: [
		// list of graph elements to start with
		{
			// node a
			data: { id: "a" },
		},
		{
			// node b
			data: { id: "b" },
		},
		{
			// edge ab
			data: { id: "ab", source: "a", target: "b" },
		},
	],

	style: [
		// the stylesheet for the graph
		{
			selector: "node",
			style: {
				"background-color": "#ff0000",
				label: "data(id)",
			},
		},

		{
			selector: "edge",
			style: {
				width: 3,
				"line-color": "#ccc",
				"target-arrow-color": "#ccc",
				"target-arrow-shape": "triangle",
				"curve-style": "bezier",
			},
		},
	],

	layout: {
		name: "grid",
		rows: 1,
	},
});
