import cytoscape from "cytoscape";

import nodes from "./data/nodes.json";
import { edges } from "./data/edges";

// Initialise cytoscape
const cy = cytoscape({
	// Set container for graph.
	container: document.getElementById("cy"),

	// Define the nodes and edges for the graph.
	elements: [...nodes, ...edges],

	// Define the stylesheet for the graph
	style: [
		{
			selector: "node",
			style: {
				"background-color": "orange",
				label: "data(label)",
				"font-family": "Futura Std Book, sans-serif",
				"font-weight": "bold",
				"font-size": "80rem",
				"text-outline-color": "white",
				"text-outline-width": "10px",
				width: 90,
				height: 90,
			},
		},
		{
			selector: "node:parent",
			style: {
				"background-opacity": 0.5,
			},
		},
		{
			selector: "edge",
			style: {
				width: 7,
				"line-color": "grey",
				"target-arrow-color": "#333",
				"curve-style": "unbundled-bezier",
			},
		},
		{
			selector: 'node[id="elsi"]',
			style: {
				"background-color": "red",
			},
		},
		{
			selector: 'node[id="research"]',
			style: {
				"background-color": "skyblue",
			},
		},
		{
			selector: 'node[id="research_hub"]',
			style: {
				"background-color": "green",
			},
		},
		{
			selector: 'node[id="training"]',
			style: {
				"background-color": "orange",
			},
		},
		{
			selector: 'node[id="research_education"]',
			style: {
				"background-color": "grey",
			},
		},
		{
			selector: 'node[id="elwazi"]',
			style: {
				"background-color": "blue",
			},
		},
		{
			selector: 'node[id="cc"]',
			style: {
				"background-color": "blue",
			},
		},
		{
			selector: 'node[id="institution"]',
			style: {
				"background-color": "lightgreen",
			},
		},
		{
			selector: 'node[id="country"]',
			style: {
				"background-color": "purple",
			},
		},
		{
			selector: 'node[id="external-partner"]',
			style: {
				"background-color": "pink",
			},
		},
		{
			selector: 'node[id="continent"]',
			style: {
				"background-color": "black",
			},
		},
	],

	layout: {
		name: "preset",
		nodeDimensionsIncludeLabels: true, // Consider node labels in node dimensions
		padding: 30, // Add padding around the graph
	},
	ready: function (e) {
		const cy = e.cy;

		// Filter to select nodes with edges
		// cy.nodes().forEach(function (node) {
		// 	if (node.connectedEdges().length === 0) {
		// 		node.style("display", "none"); // Hide nodes without edges
		// 	}
		// });
	},
});

// Use a variable to track the highlight state
let isHighlighted = false;

// Add a click event handler for nodes
cy.on("tap", "node", function (event) {
	const targetNode = event.target;

	// Get all connected edges to the clicked node
	const connectedEdges = targetNode.connectedEdges();

	if (isHighlighted) {
		// If edges are already highlighted, unhighlight them
		connectedEdges.style("width", "7");
		connectedEdges.style("line-color", "grey");
		isHighlighted = false;
	} else {
		// If edges are not highlighted, highlight them
		connectedEdges.style("width", "8");
		connectedEdges.style("line-color", "#286090");
		isHighlighted = true;
	}
});

cy.on("mouseover", "node", (event) => {
	const node = event.target;
	node.style("label", node.data("label"));
});

cy.on("mouseout", "node", (event) => {
	const node = event.target;
	node.style("label", ""); // Hide the label on mouseout
});

document.getElementById("fit").addEventListener("click", () => {
	cy.fit();
});

document.getElementById("export").addEventListener("click", () => {
	const png64 = cy.png({ bg: "white", full: true });

	document.querySelector("#png").setAttribute("src", png64);
});

document.getElementById("position").addEventListener("click", () => {
	const nodesDataWithPositions = nodes.map((node) => {
		const nodeId = node.data.id;
		const position = cy.$(`#${nodeId}`).position();
		return {
			...node,
			data: {
				...node.data,
			},
			position: {
				x: position.x,
				y: position.y,
			},
		};
	});

	console.log(nodesDataWithPositions);
});
