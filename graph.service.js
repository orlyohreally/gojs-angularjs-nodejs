angular.module("myApp").factory("GraphService", GraphService);
GraphService.$inject = [];
function GraphService() {
  return {
    getNodes: getNodes,
    getConnections: getConnections
  };

  function getNodes(data) {
    let nodes = [];
    data.forEach(element => {
      nodes.push({
        key: element.id,
        text: element.name,
        color: element.type === "protein" ? "#4caf50" : "#2196f3"
      });
    });
    return nodes;
  }

  function getConnections(data) {
    connections = [];
    data.forEach(element => {
      connections.push({
        from: element.from_node_id,
        to: element.to_node_id
      });
    });
    return connections;
  }
}
