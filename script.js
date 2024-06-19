import cytoscape from "cytoscape";
import { saveAs } from "file-saver";

import nodes from "./data/nodes.json";
import { edges } from "./data/edges";

// Get the custom property values
const rootElement = document.documentElement;

const elsiColour = getComputedStyle(rootElement).getPropertyValue("--elsi");
const researchColour =
	getComputedStyle(rootElement).getPropertyValue("--research");
const researchHubColour =
	getComputedStyle(rootElement).getPropertyValue("--hubs");
const trainingColour =
	getComputedStyle(rootElement).getPropertyValue("--training");
const researchEducationColour =
	getComputedStyle(rootElement).getPropertyValue("--education");
const elwaziColour =
	getComputedStyle(rootElement).getPropertyValue("--elwazicc");
const ccColour = getComputedStyle(rootElement).getPropertyValue("--elwazicc");
const institutionColour =
	getComputedStyle(rootElement).getPropertyValue("--institution");
const countryColour =
	getComputedStyle(rootElement).getPropertyValue("--country");
const externalPartnerColour =
	getComputedStyle(rootElement).getPropertyValue("--external");

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
				"background-opacity": 0.4,
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
			selector: 'node[id="elsi"], node[group="elsi"]',
			style: {
				"background-color": elsiColour,
			},
		},
		{
			selector: 'node[id="research"], node[group="research"]',
			style: {
				"background-color": researchColour,
			},
		},
		{
			selector: 'node[id="research_hub"], node[group="research_hub"]',
			style: {
				"background-color": researchHubColour,
			},
		},
		{
			selector: 'node[id="training"], node[group="training"]',
			style: {
				"background-color": trainingColour,
			},
		},
		{
			selector:
				'node[id="research_education"], node[group="research_education"]',
			style: {
				"background-color": researchEducationColour,
			},
		},
		{
			selector: 'node[id="elwazi"], node[group="elwazi"]',
			style: {
				"background-color": elwaziColour,
			},
		},
		{
			selector: 'node[id="cc"], node[group="cc"]',
			style: {
				"background-color": ccColour,
			},
		},
		{
			selector: 'node[id="institution"], node[group="institution"]',
			style: {
				"background-color": institutionColour,
			},
		},
		{
			selector: 'node[id="country"], node[group="country"]',
			style: {
				"background-color": countryColour,
			},
		},
		{
			selector: 'node[id="external-partner"], node[group="external-partner"]',
			style: {
				"background-color": externalPartnerColour,
			},
		},
	],

	layout: {
		name: "preset",
		nodeDimensionsIncludeLabels: true, // Consider node labels in node dimensions
		padding: 30, // Add padding around the graph
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
		connectedEdges.style("width", "12");
		connectedEdges.style("line-color", "black");
		isHighlighted = true;
	}
});

// Add event listener to fit the graph to the container.
document.getElementById("fit").addEventListener("click", () => {
	cy.fit();
});

// Add event listener to export the graph as a PNG image.
document.getElementById("export").addEventListener("click", async () => {
	const blob = await cy.png({
		bg: "white",
		scale: 9,
		output: "blob-promise",
	});
	saveAs(blob, "graph.png");
});

// Add event listener to log the position of the nodes to the console.
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
