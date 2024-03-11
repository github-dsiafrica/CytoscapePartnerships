import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";

import nodes from "./data/nodes.json";
import { edges } from "./data/edges";

cytoscape.use(coseBilkent);

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
				"background-color": "#ff0000",
				label: "data(short_name)",
				"font-family": "Futura Std Book, sans-serif",
			},
		},
		{
			selector: "edge",
			style: {
				width: 3,
				"line-color": "#ccc",
				"target-arrow-color": "#333",
				"curve-style": "unbundled-bezier",
			},
		},
		{
			selector: 'node[group="elsi"]',
			style: {
				"background-color": "red",
			},
		},
		{
			selector: 'node[group="research"]',
			style: {
				"background-color": "skyblue",
			},
		},
		{
			selector: 'node[group="research_hub"]',
			style: {
				"background-color": "green",
			},
		},
		{
			selector: 'node[group="training"]',
			style: {
				"background-color": "orange",
			},
		},
		{
			selector: 'node[group="research_education"]',
			style: {
				"background-color": "grey",
			},
		},
		{
			selector: 'node[group="elwazi"]',
			style: {
				"background-color": "blue",
			},
		},
		{
			selector: 'node[group="cc"]',
			style: {
				"background-color": "blue",
			},
		},
		{
			selector: 'node[group="institution"]',
			style: {
				"background-color": "lightgreen",
			},
		},
		{
			selector: 'node[group="country"]',
			style: {
				"background-color": "purple",
			},
		},
		{
			selector: 'node[group="external-partner"]',
			style: {
				"background-color": "pink",
			},
		},
		{
			selector: "label",
			style: {
				"text-outline-color": "white",
				"font-size": 30,
			},
		},
	],

	layout: {
		name: "cose-bilkent",
		nodeDimensionsIncludeLabels: true, // Consider node labels in node dimensions
		padding: 30, // Add padding around the graph
	},
	ready: function (e) {
		const cy = e.cy;

		// Filter to select nodes with edges
		cy.nodes().forEach(function (node) {
			if (node.connectedEdges().length === 0) {
				node.style("display", "none"); // Hide nodes without edges
			}
		});
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
		connectedEdges.style("width", "3");
		connectedEdges.style("line-color", "#ccc");
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
