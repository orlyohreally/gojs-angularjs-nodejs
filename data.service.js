angular.module("myApp").factory("DataService", DataService);
DataService.$inject = ["$http"];
function DataService($http) {
  return {
    get: get
  };

  function get() {
    return $http({
      method: "GET",
      url: "/api/data"
    }).then(
      function successCallback(response) {
        console.log(response);
        return;
      },
      function errorCallback(response) {
        console.log("error");
        var nodes = [
          { id: 1, name: "Neutral ceramidase", type: "protein" },
          { id: 2, name: "Parafibromin", type: "protein" },
          { id: 3, name: "Fibrinogen alpha chain", type: "protein" },
          { id: 4, name: "Guanylin", type: "protein" },
          { id: 5, name: "metoprolol", type: "compound" },
          { id: 6, name: "ketanserin", type: "compound" },
          { id: 7, name: "Protein INSYN2B", type: "protein" },
          { id: 8, name: "phalloidin", type: "compound" },
          { id: 9, name: "Leukosialin", type: "protein" },
          { id: 10, name: "Neogenin", type: "protein" }
        ];

        var edges = [
          { from_node_id: 1, to_node_id: 2 },
          { from_node_id: 1, to_node_id: 7 },
          { from_node_id: 1, to_node_id: 8 },
          { from_node_id: 2, to_node_id: 4 },
          { from_node_id: 2, to_node_id: 1 },
          { from_node_id: 2, to_node_id: 10 },
          { from_node_id: 3, to_node_id: 5 },
          { from_node_id: 3, to_node_id: 6 },
          { from_node_id: 4, to_node_id: 2 },
          { from_node_id: 5, to_node_id: 8 },
          { from_node_id: 5, to_node_id: 3 },
          { from_node_id: 6, to_node_id: 9 },
          { from_node_id: 7, to_node_id: 1 },
          { from_node_id: 7, to_node_id: 4 },
          { from_node_id: 7, to_node_id: 10 },
          { from_node_id: 8, to_node_id: 7 },
          { from_node_id: 9, to_node_id: 5 },
          { from_node_id: 9, to_node_id: 8 },
          { from_node_id: 10, to_node_id: 6 }
        ];

        var data = {
          nodes: nodes,
          edges: edges
        };
        return data;
      }
    );
  }
}
