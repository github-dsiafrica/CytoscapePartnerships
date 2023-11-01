import cytoscape from "cytoscape";

const cy = cytoscape({
	container: document.getElementById("cy"),
	elements: [
		{
			data: {
				label:
					"Advancing discovery for developmental disorders - expanded analysis of the DDD-Africa resource (DDD-Africa)",
				id: "a",
			},
		},
		{
			data: {
				label:
					"Advancing Public Health Research in Eastern Africa through Data Science Training (APHREA-DST)",
				id: "b",
			},
		},
		{
			data: {
				label:
					"Application of Data Science to Build Research Capacity in Zoonoses and Foodborne Infections in West Africa (DS-ZOOFOOD)",
				id: "c",
			},
		},
		{
			data: {
				label:
					"Artificial Intelligence assisted echocardiography to facilitate optimal image extraction for congenital heart defects diagnosis in Sub-Saharan Africa",
				id: "d",
			},
		},
		{
			data: {
				label:
					"Automated Mobile Microscopy for Malaria Diagnosis and surveillance in Uganda",
				id: "e",
			},
		},
		{
			data: {
				label:
					"BCX-Africa: Utilizing data science to evaluate the applicability of blood cell traits polygenic risk scores for disease prediction in Africa",
				id: "f",
			},
		},
		{
			data: {
				label:
					"Bridging Gaps in the ELSI of Data Science Health Research in Nigeria (BridgELSI)",
				id: "g",
			},
		},
		{
			data: {
				label:
					"CHaracterizing Effects of Air Quality In Maternal, Newborn and Child Health: The CHEAQI-MNCH Research Project",
				id: "h",
			},
		},
		{
			data: {
				label:
					"Combatting AntiMicrobial Resistance in Africa Using Data Science (CAMRA)",
				id: "i",
			},
		},
		{
			data: {
				label: "Computational Omics and Biomedical Informatics Program (COBIP)",
				id: "j",
			},
		},
		{
			data: {
				label:
					"Data Science and Medical Image Analysis Training for Improved Health Care Delivery in Nigeria (DATICAN)",
				id: "k",
			},
		},
		{
			data: {
				label: "Data Science for Child Health Now in Ghana (DS-CHANGE)",
				id: "l",
			},
		},
		{
			data: {
				label:
					"Developing data science solutions to mitigate the health impacts of climate change in Africa: the HE2AT Center (HEAT)",
				id: "m",
			},
		},
		{
			data: { label: "DS-I Africa - LAW", id: "n" },
		},
		{
			data: { label: "DS-I Africa Coordinating Center", id: "o" },
		},
		{
			data: {
				label:
					"DSpace: Utilizing Data Science to Predict and Improve Health Outcomes in Pediatric HIV",
				id: "p",
			},
		},
		{
			data: { label: "eLwazi (Open Data Science Platform)", id: "q" },
		},
		{
			data: {
				label:
					"Eneza Data Science: Enhancing Data Science Capability and Tools for Health in East Africa",
				id: "r",
			},
		},
		{
			data: {
				label:
					"Genome-wide characterization of complex variants and their phenotypic effects in African populations",
				id: "s",
			},
		},
		{
			data: {
				label:
					"Geo-enabled detect and respond system for antimalarial resistance in Ghana: GDRS - Ghana",
				id: "t",
			},
		},
		{
			data: {
				label:
					"Growing Data-science Research in Africa to Stimulate Progress (GRASP)",
				id: "u",
			},
		},
		{
			data: {
				label:
					"Harnessing Data Science to Promote Equity in Injury and Surgery for Africa (D-SINE)",
				id: "v",
			},
		},
		{
			data: {
				label: "INnovative data Science to Impact the TB Epidemic (INSITE)",
				id: "w",
			},
		},
		{
			data: {
				label:
					"Integrated modeLs for Early Risk-prediction in Africa (ILERA) study",
				id: "x",
			},
		},
		{
			data: {
				label:
					"Leveraging artificial intelligence/machine learning-based technology to overcome specialized training and technology barriers for the diagnosis and prognostication of colorectal cancer in Africa",
				id: "y",
			},
		},
		{
			data: {
				label:
					"Leveraging Data Science Applications to Improve Children's Environmental Health in Sub-Saharan Africa (DICE Project)",
				id: "z",
			},
		},
		{
			data: {
				label:
					"MADIVA (Multimorbidity in Africa: Digital innovation, visualisationj and application)",
				id: "aa",
			},
		},
		{
			data: {
				label:
					"Makerere University Data Science Research Training to Strengthen Evidence-Based Health Innovation",
				id: "ab",
			},
		},
		{
			data: { label: "MUST Data Science Research Hub (MUDSReH)", id: "ac" },
		},
		{
			data: { label: "National Institutes of Health (NIH)", id: "ad" },
		},
		{
			data: {
				label: "NYU-Moi Data Science for Social Determinants Training Program",
				id: "ae",
			},
		},
		{
			data: {
				label:
					"Public Understanding of Big data in Genomics Medicine in Africa (PUBGEM-Africa)",
				id: "af",
			},
		},
		{
			data: {
				label: "Research for Ethical Data Science in Southern Africa (REDSSA)",
				id: "ag",
			},
		},
		{
			data: {
				label: "Research Training in Data Science for Health in Rwanda",
				id: "ah",
			},
		},
		{
			data: {
				label:
					"Research Training on Harnessing Data Science for Global Health Priorities in Africa",
				id: "ai",
			},
		},
		{
			data: {
				label:
					"Role of Data Streams In Informing Infection Dynamics in Africa- INFORM Africa",
				id: "aj",
			},
		},
		{
			data: {
				label:
					"SYNthetic Healthcare DAta Platform for Data SciEnce Training ('SYNAPSE')",
				id: "ak",
			},
		},
		{
			data: {
				label:
					"Tuberculosis in households with infectious cases in Kampala city: Harnessing health data science for new insights on TB transmission and treatment response (DS-IAFRICA-TB)",
				id: "al",
			},
		},
		{
			data: {
				label:
					"UZIMA-DS: UtiliZing health Information for Meaningful impact in East Africa through Data Science",
				id: "am",
			},
		},
		{
			data: {
				label:
					"West Africa Center of Excellence for Data Science Research Education",
				id: "an",
			},
		},
		{
			// edge ab
			data: {
				id: "edge_ab",
				source: "a",
				target: "b",
			},
		},
		{
			// edge ab
			data: {
				id: "edge_ac",
				source: "a",
				target: "c",
			},
		},
	],

	style: [
		// the stylesheet for the graph
		{
			selector: "node",
			style: {
				"background-color": "#ff0000",
				label: "data(label)",
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
		name: "cose",
		// rows: 1,
		idealEdgeLength: 100, // Adjust the ideal edge length as needed
		// nodeOverlap: 20, // Adjust node overlap as needed
		// refresh: 20, // Refresh the layout every 20 iterations (you can adjust this value)
		fit: true, // Fit the graph in the viewport
		padding: 30, // Add padding around the graph
		// randomize: true, // Randomize node positions on load
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
