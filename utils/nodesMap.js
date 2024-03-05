import nodes from "../data/nodes.json";

export const nodesMap = new Map(
	nodes.map((node) => {
		return [node.data.label, node.data.id];
	})
);
