import { projectsMap } from "../utils/projectsMap";

export const edges = [
	{
		data: {
			id: "edge_am_q",
			source: projectsMap.get(
				"UZIMA-DS: UtiliZing health Information for Meaningful impact in East Africa through Data Science"
			),
			target: projectsMap.get("eLwazi (Open Data Science Platform)"),
		},
	},
	{
		data: {
			id: "edge_ah_q",
			source: projectsMap.get(
				"Research Training in Data Science for Health in Rwanda"
			),
			target: projectsMap.get("eLwazi (Open Data Science Platform)"),
		},
	},
	{
		data: {
			id: "edge_q_aa",
			source: projectsMap.get("eLwazi (Open Data Science Platform)"),
			target: projectsMap.get(
				"MADIVA (Multimorbidity in Africa: Digital innovation, visualization, and application)"
			),
		},
	},
	{
		data: {
			id: "edge_q_aj",
			source: projectsMap.get("eLwazi (Open Data Science Platform)"),
			target: projectsMap.get(
				"Role of Data Streams In Informing Infection Dynamics in Africa- INFORM Africa"
			),
		},
	},
	{
		data: {
			id: "edge_q_ab",
			source: projectsMap.get("eLwazi (Open Data Science Platform)"),
			target: projectsMap.get(
				"Makerere University Data Science Research Training to Strengthen Evidence-Based Health Innovation"
			),
		},
	},
	{
		data: {
			id: "edge_o_af",
			source: projectsMap.get("DS-I Africa Coordinating Center"),
			target: projectsMap.get(
				"Public Understanding of Big data in Genomics Medicine in Africa (PUBGEM-Africa)"
			),
		},
	},
];
