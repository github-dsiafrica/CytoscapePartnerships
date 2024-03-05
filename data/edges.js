import { nodesMap } from "../utils/nodesMap";

export const edges = [
	{
		data: {
			id: `edge_${nodesMap.get(
				"UZIMA-DS: UtiliZing health Information for Meaningful impact in East Africa through Data Science"
			)}_${nodesMap.get("eLwazi (Open Data Science Platform)")}`,
			source: nodesMap.get(
				"UZIMA-DS: UtiliZing health Information for Meaningful impact in East Africa through Data Science"
			),
			target: nodesMap.get("eLwazi (Open Data Science Platform)"),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"Research Training in Data Science for Health in Rwanda"
			)}_${nodesMap.get("eLwazi (Open Data Science Platform)")}`,
			source: nodesMap.get(
				"Research Training in Data Science for Health in Rwanda"
			),
			target: nodesMap.get("eLwazi (Open Data Science Platform)"),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"eLwazi (Open Data Science Platform)"
			)}_${nodesMap.get(
				"MADIVA (Multimorbidity in Africa: Digital innovation, visualisation and application)"
			)}`,
			source: nodesMap.get("eLwazi (Open Data Science Platform)"),
			target: nodesMap.get(
				"MADIVA (Multimorbidity in Africa: Digital innovation, visualisation and application)"
			),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"eLwazi (Open Data Science Platform)"
			)}_${nodesMap.get(
				"Role of Data Streams In Informing Infection Dynamics in Africa- INFORM Africa"
			)}`,
			source: nodesMap.get("eLwazi (Open Data Science Platform)"),
			target: nodesMap.get(
				"Role of Data Streams In Informing Infection Dynamics in Africa- INFORM Africa"
			),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"eLwazi (Open Data Science Platform)"
			)}_${nodesMap.get(
				"Makerere University Data Science Research Training to Strengthen Evidence-Based Health Innovation"
			)}`,
			source: nodesMap.get("eLwazi (Open Data Science Platform)"),
			target: nodesMap.get(
				"Makerere University Data Science Research Training to Strengthen Evidence-Based Health Innovation"
			),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"DS-I Africa Coordinating Center"
			)}_${nodesMap.get(
				"Public Understanding of Big data in Genomics Medicine in Africa (PUBGEM-Africa)"
			)}`,
			source: nodesMap.get("DS-I Africa Coordinating Center"),
			target: nodesMap.get(
				"Public Understanding of Big data in Genomics Medicine in Africa (PUBGEM-Africa)"
			),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"DS-I Africa Coordinating Center"
			)}_${nodesMap.get("eLwazi (Open Data Science Platform)")}`,
			source: nodesMap.get("DS-I Africa Coordinating Center"),
			target: nodesMap.get("eLwazi (Open Data Science Platform)"),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"DS-I Africa Coordinating Center"
			)}_${nodesMap.get("University of Cape Town")}`,
			source: nodesMap.get("DS-I Africa Coordinating Center"),
			target: nodesMap.get("University of Cape Town"),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get("University of Cape Town")}_${nodesMap.get(
				"South Africa"
			)}`,
			source: nodesMap.get("University of Cape Town"),
			target: nodesMap.get("South Africa"),
		},
	},
	{
		data: {
			id: `edge_${nodesMap.get(
				"DS-I Africa Coordinating Center"
			)}_${nodesMap.get("MUST Data Science Research Hub (MUDSReH)")}`,
			source: nodesMap.get("DS-I Africa Coordinating Center"),
			target: nodesMap.get("MUST Data Science Research Hub (MUDSReH)"),
		},
	},
];
