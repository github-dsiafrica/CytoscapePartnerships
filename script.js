import cytoscape from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";

import nodes from "./data/nodes.json";

cytoscape.use(coseBilkent);

const cy = cytoscape({
	container: document.getElementById("cy"),
	elements: [
		...nodes,
		{
			data: {
				id: "edge_am_aa",
				source: "am",
				target: "aa",
			},
		},
		{
			data: {
				id: "edge_am_m",
				source: "am",
				target: "m",
			},
		},
		{
			data: {
				id: "edge_am_ae",
				source: "am",
				target: "ae",
			},
		},
		{
			data: {
				id: "edge_am_n",
				source: "am",
				target: "n",
			},
		},
		{
			data: {
				id: "edge_am_g",
				source: "am",
				target: "g",
			},
		},
		{
			data: {
				id: "edge_am_q",
				source: "am",
				target: "q",
			},
		},
		{
			data: {
				id: "edge_am_r",
				source: "am",
				target: "r",
			},
		},
		{
			data: {
				id: "edge_am_y",
				source: "am",
				target: "y",
			},
		},
		{
			data: {
				id: "edge_ac_y",
				source: "ac",
				target: "y",
			},
		},
		{
			data: {
				id: "edge_ac_y",
				source: "aa",
				target: "y",
			},
		},
		{
			data: {
				id: "edge_aa_n",
				source: "aa",
				target: "n",
			},
		},
		{
			data: {
				id: "edge_aj_ag",
				source: "aj",
				target: "ag",
			},
		},
		{
			data: {
				id: "edge_v_g",
				source: "v",
				target: "g",
			},
		},
		{
			data: {
				id: "edge_m_b",
				source: "m",
				target: "b",
			},
		},
		{
			data: {
				id: "edge_m_aa",
				source: "m",
				target: "aa",
			},
		},
		{
			data: {
				id: "edge_ae_b",
				source: "ae",
				target: "b",
			},
		},
		{
			data: {
				id: "edge_ab_ai",
				source: "ab",
				target: "ai",
			},
		},
		{
			data: {
				id: "edge_ai_m",
				source: "ai",
				target: "m",
			},
		},
		{
			data: {
				id: "edge_j_q",
				source: "j",
				target: "q",
			},
		},
		{
			data: {
				id: "edge_j_ah",
				source: "j",
				target: "ah",
			},
		},
		{
			data: {
				id: "edge_ah_n",
				source: "ah",
				target: "n",
			},
		},
		{
			data: {
				id: "edge_ah_q",
				source: "ah",
				target: "q",
			},
		},
		{
			data: {
				id: "edge_ah_ak",
				source: "ah",
				target: "ak",
			},
		},

		{
			data: {
				id: "edge_n_m",
				source: "n",
				target: "m",
			},
		},
		{
			data: {
				id: "edge_af_an",
				source: "af",
				target: "an",
			},
		},
		{
			data: {
				id: "edge_af_ac",
				source: "af",
				target: "ac",
			},
		},
		{
			data: {
				id: "edge_af_i",
				source: "af",
				target: "i",
			},
		},
		{
			data: {
				id: "edge_x_aa",
				source: "x",
				target: "aa",
			},
		},
		{
			data: {
				id: "edge_al_ab",
				source: "al",
				target: "ab",
			},
		},
		{
			data: {
				id: "edge_h_m",
				source: "h",
				target: "m",
			},
		},
		{
			data: {
				id: "edge_t_aj",
				source: "t",
				target: "aj",
			},
		},
		{
			data: {
				id: "edge_r_aj",
				source: "r",
				target: "aj",
			},
		},
		{
			data: {
				id: "edge_c_l",
				source: "c",
				target: "l",
			},
		},
		{
			data: {
				id: "edge_q_aa",
				source: "q",
				target: "aa",
			},
		},
		{
			data: {
				id: "edge_q_aj",
				source: "q",
				target: "aj",
			},
		},

		{
			data: {
				id: "edge_q_ab",
				source: "q",
				target: "ab",
			},
		},
	],

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
