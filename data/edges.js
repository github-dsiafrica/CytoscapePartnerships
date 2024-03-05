import { projectsMap } from "../utils/projectsMap";

export const edges = [
	{
		data: {
			id: `edge_${projectsMap.get(
				"UZIMA-DS: UtiliZing health Information for Meaningful impact in East Africa through Data Science"
			)}_${projectsMap.get("eLwazi (Open Data Science Platform)")}`,
			source: projectsMap.get(
				"UZIMA-DS: UtiliZing health Information for Meaningful impact in East Africa through Data Science"
			),
			target: projectsMap.get("eLwazi (Open Data Science Platform)"),
		},
	},
	{
		data: {
			id: `edge_${projectsMap.get(
				"Research Training in Data Science for Health in Rwanda"
			)}_${projectsMap.get("eLwazi (Open Data Science Platform)")}`,
			source: projectsMap.get(
				"Research Training in Data Science for Health in Rwanda"
			),
			target: projectsMap.get("eLwazi (Open Data Science Platform)"),
		},
	},
	{
		data: {
			id: `edge_${projectsMap.get(
				"eLwazi (Open Data Science Platform)"
			)}_${projectsMap.get(
				"MADIVA (Multimorbidity in Africa: Digital innovation, visualization, and application)"
			)}`,
			source: projectsMap.get("eLwazi (Open Data Science Platform)"),
			target: projectsMap.get(
				"MADIVA (Multimorbidity in Africa: Digital innovation, visualization, and application)"
			),
		},
	},
	{
		data: {
			id: `edge_${projectsMap.get(
				"eLwazi (Open Data Science Platform)"
			)}_${projectsMap.get(
				"Role of Data Streams In Informing Infection Dynamics in Africa- INFORM Africa"
			)}`,
			source: projectsMap.get("eLwazi (Open Data Science Platform)"),
			target: projectsMap.get(
				"Role of Data Streams In Informing Infection Dynamics in Africa- INFORM Africa"
			),
		},
	},
	{
		data: {
			id: `edge_${projectsMap.get(
				"eLwazi (Open Data Science Platform)"
			)}_${projectsMap.get(
				"Makerere University Data Science Research Training to Strengthen Evidence-Based Health Innovation"
			)}`,
			source: projectsMap.get("eLwazi (Open Data Science Platform)"),
			target: projectsMap.get(
				"Makerere University Data Science Research Training to Strengthen Evidence-Based Health Innovation"
			),
		},
	},
	{
		data: {
			id: `edge_${projectsMap.get(
				"DS-I Africa Coordinating Center"
			)}_${projectsMap.get(
				"Public Understanding of Big data in Genomics Medicine in Africa (PUBGEM-Africa)"
			)}`,
			source: projectsMap.get("DS-I Africa Coordinating Center"),
			target: projectsMap.get(
				"Public Understanding of Big data in Genomics Medicine in Africa (PUBGEM-Africa)"
			),
		},
	},
];
