"use client";

import React, { useMemo } from "react";
import { useNodesState, Controls, NodeTypes, MiniMap } from "reactflow";
import ReactFlow, { Node } from "reactflow";
import SharedNode from "./SharedNode";
import { useTranslations } from "next-intl";

import { getNodesData } from "./defaultData";

import "reactflow/dist/style.css";
import styles from "./styles.module.scss";
import cssVars from "@/shared/styles/vars.module.scss";

const Flow = () => {
    const t = useTranslations("projects");
    const nodesData = getNodesData(t);

    const nodeTypes: NodeTypes = useMemo(
        () =>
            nodesData.reduce((obj, node) => {
                const { coordinates, ...sharedNodeProps } = node;
                return { ...obj, [node.name]: () => <SharedNode {...sharedNodeProps} /> };
            }, {}),
        []
    );

    const customNodes: Node[] = useMemo(
        () =>
            nodesData.map((node, index) => ({
                id: index + "",
                type: node.name,
                data: {},
                position: node.coordinates
            })),
        []
    );

    const [nodes, _, onNodesChange] = useNodesState<Node[]>(customNodes);

    return (
        <div className={styles.flowWrapper}>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                edges={[]}
                onNodesChange={onNodesChange}
                fitView
            >
                <MiniMap nodeColor={cssVars.gray} nodeStrokeWidth={3} zoomable pannable />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default Flow;
