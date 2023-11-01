import cytoscape from "cytoscape";

const cy = cytoscape({
	container: document.getElementById("cy"),
	elements: [
		{
			data: {
				group: "research",
				short_name: "DDD-Africa",
				label:
					"Advancing discovery for developmental disorders - expanded analysis of the DDD-Africa resource (DDD-Africa)",
				id: "a",
			},
		},
		{
			data: {
				group: "training",
				short_name: "APHREA-DST",
				label:
					"Advancing Public Health Research in Eastern Africa through Data Science Training (APHREA-DST)",
				id: "b",
			},
		},
		{
			data: {
				group: "research_education",
				short_name: "DS-ZOOFOOD",
				label:
					"Application of Data Science to Build Research Capacity in Zoonoses and Foodborne Infections in West Africa (DS-ZOOFOOD)",
				id: "c",
			},
		},
		{
			data: {
				group: "research",
				short_name:
					"Artificial Intelligence assisted echocardiography to facilitate optimal image extraction for congenital heart defects diagnosis in Sub-Saharan Africa",
				label:
					"Artificial Intelligence assisted echocardiography to facilitate optimal image extraction for congenital heart defects diagnosis in Sub-Saharan Africa",
				id: "d",
			},
		},
		{
			data: {
				group: "research",
				short_name:
					"Automated Mobile Microscopy for Malaria Diagnosis and surveillance in Uganda",
				label:
					"Automated Mobile Microscopy for Malaria Diagnosis and surveillance in Uganda",
				id: "e",
			},
		},
		{
			data: {
				group: "research",
				short_name: "BCX-Africa",
				label:
					"BCX-Africa: Utilizing data science to evaluate the applicability of blood cell traits polygenic risk scores for disease prediction in Africa",
				id: "f",
			},
		},
		{
			data: {
				group: "elsi",
				short_name: "BridgELSI",
				label:
					"Bridging Gaps in the ELSI of Data Science Health Research in Nigeria (BridgELSI)",
				id: "g",
			},
		},
		{
			data: {
				group: "research",
				short_name: "CHEAQI-MNCH",
				label:
					"CHaracterizing Effects of Air Quality In Maternal, Newborn and Child Health: The CHEAQI-MNCH Research Project",
				id: "h",
			},
		},
		{
			data: {
				group: "research_hub",
				short_name: "CAMRA",
				label:
					"Combatting AntiMicrobial Resistance in Africa Using Data Science (CAMRA)",
				id: "i",
			},
		},
		{
			data: {
				group: "training",
				short_name: "COBIP",
				label: "Computational Omics and Biomedical Informatics Program (COBIP)",
				id: "j",
			},
		},
		{
			data: {
				group: "",
				short_name: "DATICAN",
				label:
					"Data Science and Medical Image Analysis Training for Improved Health Care Delivery in Nigeria (DATICAN)",
				id: "k",
			},
		},
		{
			data: {
				group: "training",
				short_name: "DS-CHANGE",
				label: "Data Science for Child Health Now in Ghana (DS-CHANGE)",
				id: "l",
			},
		},
		{
			data: {
				group: "research_hub",
				short_name: "HEAT",
				label:
					"Developing data science solutions to mitigate the health impacts of climate change in Africa: the HE2AT Center (HEAT)",
				id: "m",
			},
		},
		{
			data: {
				group: "elsi",
				short_name: "DS-I - LAW",
				label: "DS-I Africa - LAW",
				id: "n",
			},
		},
		{
			data: {
				group: "cc",
				short_name: "DS-I Africa CC",
				label: "DS-I Africa Coordinating Center",
				id: "o",
			},
		},
		{
			data: {
				group: "",
				short_name: "DSpace",
				label:
					"DSpace: Utilizing Data Science to Predict and Improve Health Outcomes in Pediatric HIV",
				id: "p",
			},
		},
		{
			data: {
				group: "elwazi",
				short_name: "eLwazi",
				label: "eLwazi (Open Data Science Platform)",
				id: "q",
			},
		},
		{
			data: {
				group: "research_education",
				short_name: "Eneza",
				label:
					"Eneza Data Science: Enhancing Data Science Capability and Tools for Health in East Africa",
				id: "r",
			},
		},
		{
			data: {
				group: "research",
				short_name:
					"Genome-wide characterization of complex variants and their phenotypic effects in African populations",
				label:
					"Genome-wide characterization of complex variants and their phenotypic effects in African populations",
				id: "s",
			},
		},
		{
			data: {
				group: "research",
				short_name: "GDRS - Ghana",
				label:
					"Geo-enabled detect and respond system for antimalarial resistance in Ghana: GDRS - Ghana",
				id: "t",
			},
		},
		{
			data: {
				group: "research_education",
				short_name: "GRASP",
				label:
					"Growing Data-science Research in Africa to Stimulate Progress (GRASP)",
				id: "u",
			},
		},
		{
			data: {
				group: "research_hub",
				short_name: "D-SINE",
				label:
					"Harnessing Data Science to Promote Equity in Injury and Surgery for Africa (D-SINE)",
				id: "v",
			},
		},
		{
			data: {
				group: "research",
				short_name: "INSITE",
				label: "INnovative data Science to Impact the TB Epidemic (INSITE)",
				id: "w",
			},
		},
		{
			data: {
				group: "research",
				short_name: "ILERA",
				label:
					"Integrated modeLs for Early Risk-prediction in Africa (ILERA) study",
				id: "x",
			},
		},
		{
			data: {
				group: "research",
				short_name:
					"Leveraging artificial intelligence/machine learning-based technology to overcome specialized training and technology barriers for the diagnosis and prognostication of colorectal cancer in Africa",
				label:
					"Leveraging artificial intelligence/machine learning-based technology to overcome specialized training and technology barriers for the diagnosis and prognostication of colorectal cancer in Africa",
				id: "y",
			},
		},
		{
			data: {
				group: "research",
				short_name: "DICE",
				label:
					"Leveraging Data Science Applications to Improve Children's Environmental Health in Sub-Saharan Africa (DICE Project)",
				id: "z",
			},
		},
		{
			data: {
				group: "research_hub",
				short_name: "MADIVA",
				label:
					"MADIVA (Multimorbidity in Africa: Digital innovation, visualisationj and application)",
				id: "aa",
			},
		},
		{
			data: {
				group: "training",
				short_name: "MakDARTA",
				label:
					"Makerere University Data Science Research Training to Strengthen Evidence-Based Health Innovation",
				id: "ab",
			},
		},
		{
			data: {
				group: "research_hub",
				short_name: "MUDSReH",
				label: "MUST Data Science Research Hub (MUDSReH)",
				id: "ac",
			},
		},
		{
			data: {
				group: "training",
				short_name: "DSSD",
				label: "NYU-Moi Data Science for Social Determinants Training Program",
				id: "ae",
			},
		},
		{
			data: {
				group: "elsi",
				short_name: "PUBGEM",
				label:
					"Public Understanding of Big data in Genomics Medicine in Africa (PUBGEM-Africa)",
				id: "af",
			},
		},
		{
			data: {
				group: "elsi",
				short_name: "REDSSA",
				label: "Research for Ethical Data Science in Southern Africa (REDSSA)",
				id: "ag",
			},
		},
		{
			data: {
				group: "training",
				short_name: "Research Training in Data Science for Health in Rwanda",
				label: "Research Training in Data Science for Health in Rwanda",
				id: "ah",
			},
		},
		{
			data: {
				group: "training",
				short_name: "WASHA-Takwimu",
				label:
					"Research Training on Harnessing Data Science for Global Health Priorities in Africa",
				id: "ai",
			},
		},
		{
			data: {
				group: "research_hub",
				short_name: "INFORM",
				label:
					"Role of Data Streams In Informing Infection Dynamics in Africa- INFORM Africa",
				id: "aj",
			},
		},
		{
			data: {
				group: "research_education",
				short_name: "SYNAPSE",
				label:
					"SYNthetic Healthcare DAta Platform for Data SciEnce Training ('SYNAPSE')",
				id: "ak",
			},
		},
		{
			data: {
				group: "research",
				short_name: "DS-IAFRICA-TB",
				label:
					"Tuberculosis in households with infectious cases in Kampala city: Harnessing health data science for new insights on TB transmission and treatment response (DS-IAFRICA-TB)",
				id: "al",
			},
		},
		{
			data: {
				group: "research_hub",
				short_name: "UZIMA-DS",
				label:
					"UZIMA-DS: UtiliZing health Information for Meaningful impact in East Africa through Data Science",
				id: "am",
			},
		},
		{
			data: {
				group: "research_education",
				short_name:
					"West Africa Center of Excellence for Data Science Research Education",
				label:
					"West Africa Center of Excellence for Data Science Research Education",
				id: "an",
			},
		},
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
				id: "edge_ac_af",
				source: "ac",
				target: "af",
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
				id: "edge_m_am",
				source: "m",
				target: "am",
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
				id: "edge_ae_am",
				source: "ae",
				target: "am",
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
				id: "edge_ai_ab",
				source: "ai",
				target: "ab",
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
				id: "edge_ah_j",
				source: "ah",
				target: "j",
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
				id: "edge_b_ae",
				source: "b",
				target: "ae",
			},
		},
		{
			data: {
				id: "edge_b_m",
				source: "b",
				target: "m",
			},
		},
		{
			data: {
				id: "edge_ag_aj",
				source: "ag",
				target: "aj",
			},
		},
		{
			data: {
				id: "edge_g_am",
				source: "g",
				target: "am",
			},
		},
		{
			data: {
				id: "edge_g_v",
				source: "g",
				target: "v",
			},
		},
		{
			data: {
				id: "edge_n_aa",
				source: "n",
				target: "aa",
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
				id: "edge_y_am",
				source: "y",
				target: "am",
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
				id: "edge_ak_ah",
				source: "ak",
				target: "ah",
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
				id: "edge_q_j",
				source: "q",
				target: "j",
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
		name: "grid",
		rows: 10,
		// idealEdgeLength: 100, // Adjust the ideal edge length as needed
		// nodeOverlap: 20, // Adjust node overlap as needed
		// refresh: 20, // Refresh the layout every 20 iterations (you can adjust this value)
		fit: true, // Fit the graph in the viewport
		// padding: 30, // Add padding around the graph
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
