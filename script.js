import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";

import nodes from "./data/nodes.json";
import edges from "./data/edges.json";

cytoscape.use(coseBilkent);

const cy = cytoscape({
	container: document.getElementById("cy"),
	elements: [...nodes, ...edges],

	style: [
		// the stylesheet for the graph
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
				"target-arrow-shape": "",
				"curve-style": "bezier",
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
	],

	layout: {
		name: "cose-bilkent",
		nodeDimensionsIncludeLabels: true, // Consider node labels in node dimensions
		// rows: 20,
		// idealEdgeLength: 100, // Adjust the ideal edge length as needed
		// nodeOverlap: 20, // Adjust node overlap as needed
		// refresh: 20, // Refresh the layout every 20 iterations (you can adjust this value)
		// fit: true, // Fit the graph in the viewport
		padding: 30, // Add padding around the graph
		randomize: true, // Randomize node positions on load
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
		isHighlighted = false;
	} else {
		// If edges are not highlighted, highlight them
		connectedEdges.style("width", "8");
		isHighlighted = true;
	}
});

document.getElementById("fit").addEventListener("click", () => {
	cy.fit();
});
