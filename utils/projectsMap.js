import nodes from "../data/nodes.json";

export const projectsMap = new Map(
	nodes.map((node) => {
		return [node.data.label, node.data.id];
	})
);
