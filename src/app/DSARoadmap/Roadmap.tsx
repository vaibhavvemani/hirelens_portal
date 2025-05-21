
import { Background, Controls, MarkerType, NodeTypes, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { edges,nodes } from "./roadmapContent";
import TopicCard from "./TopicCard";



const nodeType: NodeTypes = {
    customCard: TopicCard
};


const Roadmap = () => {


  return (
    <div className="h-full">
      <ReactFlow proOptions={{ hideAttribution: true }} nodes={nodes} edges={edges} nodeTypes={nodeType} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Roadmap;
