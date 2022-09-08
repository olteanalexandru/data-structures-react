import { useState } from 'react';

export function Graph() {
    //Directed Graph function with ADJACENCY matrix and bfs and dfs
   //add comments that expliain what the code does


   // creates a node with a value and an array of edges

    const createNode = (data) => {
        return {
            data,
            edges: []
        }
    }
    // creates a graph with a node and an array of nodes
    const createGraph = (data) => {
        const node = createNode(data);
        return {
            nodes: [node],
            edges: []
        }
    }
    // adds a node to the graph with a value and an array of edges 
    const addNode = (graph, data) => {
        const node = createNode(data);
        graph.nodes.push(node);
        return graph;
    }
    // adds an edge to the graph 
    const addEdge = (graph, node1, node2) => {

        const edge = [node1, node2];
        graph.edges.push(edge);
        return graph;
    }
    // searches the graph for a node 
    const findNode = (graph, data) => {
        return graph.nodes.find(node => node.data === data);
    }
    // searches the graph for an edge
    const findEdge = (graph, node1, node2) => {
        return graph.edges.find(edge => edge.includes(node1) && edge.includes(node2));
    }
    // removes a node from the graph by removing all edges that contain the node and removing the node from the graph
    const removeNode = (graph, data) => {
        const node = findNode(graph, data);
            // remove all edges that include the node
            graph.edges = graph.edges.filter(edge => !edge.includes(node));
            // remove the node

        graph.nodes = graph.nodes.filter(node => node.data !== data);


        return graph;

    }
    // removes an edge from the graph
    const removeEdge = (graph, node1, node2) => {
        const edge = findEdge(graph, node1, node2);
        graph.edges = graph.edges.filter(edge => edge !== edge);
        return graph;
    }
    const [graph, setGraph] = useState(createGraph(1));
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [node1, setNode1] = useState('');
    const [node2, setNode2] = useState('');
    const [edgeOutput, setEdgeOutput] = useState('');
    const [removeNodeInput, setRemoveNodeInput] = useState('');
    const [removeEdgeNode1, setRemoveEdgeNode1] = useState('');
    const [removeEdgeNode2, setRemoveEdgeNode2] = useState('');
    // Graph insertion 
    const insertGraph = () => {
        setGraph(addNode(graph, input));
        setInput('');
    }
    // Graph search 
    const searchGraph = () => {
        setOutput(findNode(graph, input));
        setInput('');
    }
    // Graph edge insertion 
    const insertEdge = () => {
        setGraph(addEdge(graph, node1, node2));
        setNode1('');
        setNode2('');
    }
    // Graph edge search
    const searchEdge = () => {
        setEdgeOutput(findEdge(graph, node1, node2));
        setNode1('');
        setNode2('');
    }
    // Graph node removal
    const removeNodeGraph = () => {
        setGraph(removeNode(graph, removeNodeInput));
        setRemoveNodeInput('');
    }
    // Graph edge removal
    const removeEdgeGraph = () => {
        setGraph(removeEdge(graph, removeEdgeNode1, removeEdgeNode2));
        setRemoveEdgeNode1('');
        setRemoveEdgeNode2('');
    }
    // Graph breath first search steps are: 
    // 1. Create a queue (this can be an array) and a variable to store the values of nodes visited
    // 2. Place the root node in the queue
    // 3. Loop as long as there is anything in the queue
    // 4. Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
    // 5. If there is a left property on the node dequeued - add it to the queue
    // 6. If there is a right property on the node dequeued - add it to the queue
    // 7. Return the variable that stores the values

    const bfs = (graph, startNode) => {
        const visited = [];
        const queue = [startNode];
        while (queue.length) {
            const currentNode = queue.shift();
            visited.push(currentNode);
            const neighbors = graph.edges.filter(edge => edge.includes(currentNode));
            for (let neighbor of neighbors) {
                const nextNode = neighbor.find(node => node !== currentNode);
                if (!visited.includes(nextNode)) {
                    queue.push(nextNode);
                }
            }
        }
        return visited;
    }
      // Graph depth first search steps are: 
    // 1. The function should accept a starting node
    // 2. Create a list to store the end result, to be returned at the very end
    // 3. Create an object to store visited vertices
    // 4. Create a helper function which accepts a vertex
    // 5. The helper function should return early if the vertex is empty
    // 6. The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    // 7. Loop over all of the values in the adjacencyList for that vertex
    // 8. If any of those values have not been visited, recursively invoke the helper function with that vertex
    // 9. Invoke the helper function with the starting vertex
    // 10. Return the result array

        const dfs = (graph, startNode) => {
        const visited = [];
        const stack = [startNode];
        while (stack.length) {
            const currentNode = stack.pop();
            visited.push(currentNode);
            const neighbors = graph.edges.filter(edge => edge.includes(currentNode));
            for (let neighbor of neighbors) {
                const nextNode = neighbor.find(node => node !== currentNode);
                if (!visited.includes(nextNode)) {
                    stack.push(nextNode);
                }
            }
        }
        return visited;
    }


    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Graph</h1>
                    <div className="row">
                        <div className="col-12">
                            <h2>Insert Node</h2>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button onClick={insertGraph}>Insert</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>Search Node</h2>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button onClick={searchGraph}>Search</button>
                            <p>{output ? output.data : ''}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>Insert Edge</h2>
                            <input type="text" value={node1} onChange={(e) => setNode1(e.target.value)} />
                            <input type="text" value={node2} onChange={(e) => setNode2(e.target.value)} />
                            <button onClick={insertEdge}>Insert</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>Search Edge</h2>
                            <input type="text" value={node1} onChange={(e) => setNode1(e.target.value)} />
                            <input type="text" value={node2} onChange={(e) => setNode2(e.target.value)} />
                            <button onClick={searchEdge}>Search</button>
                            <p>{edgeOutput ? edgeOutput : ''}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>Remove Node</h2>
                            <input type="text" value={removeNodeInput} onChange={(e) => setRemoveNodeInput(e.target.value)} />
                            <button onClick={removeNodeGraph}>Remove</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>Remove Edge</h2>
                            <input type="text" value={removeEdgeNode1} onChange={(e) => setRemoveEdgeNode1(e.target.value)} />
                            <input type="text" value={removeEdgeNode2} onChange={(e) => setRemoveEdgeNode2(e.target.value)} />
                            <button onClick={removeEdgeGraph}>Remove</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>BFS</h2>
                            <button onClick={() => setOutput(bfs(graph, graph.nodes[0].data))}>BFS</button>
                            <p>{output ? output : ''}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>DFS</h2>
                            <button onClick={() => setOutput(dfs(graph, graph.nodes[0].data))}>DFS</button>
                            <p>{output ? output : ''}</p>
                        </div>
                    </div>


<div>
                        <h2>ADJACENCY MATRIX</h2>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Node</th>
                                    {graph.nodes.map((node, index) => (
                                        <th scope="col" key={index}>{node.data}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {graph.nodes.map((node, index) => (
                                    <tr key={index}>
                                        <th scope="row">{node.data}</th>
                                        {graph.nodes.map((node2, index2) => (
                                            <td key={index2}>{graph.edges.find(edge => edge.includes(node.data) && edge.includes(node2.data)) ? 1 : 0}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                   

</div>




                </div>
            </div>
        
        </div>
    )
    
}