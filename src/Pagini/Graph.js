import { useState } from 'react';
//BFS graph function
const bfs = (graph, startNode) => {
    let visited = [];
    let queue = [startNode];
    while (queue.length > 0) {
        let currentNode = queue.shift();
        if (!visited.includes(currentNode)) {
            visited.push(currentNode);
            queue = queue.concat(graph[currentNode]);
        }
    }
    return visited;
};
//DFS graph function
const dfs = (graph, startNode) => {
    let visited = [];
    let stack = [startNode];
    while (stack.length > 0) {
        let currentNode = stack.pop();
        if (!visited.includes(currentNode)) {
            visited.push(currentNode);
            stack = stack.concat(graph[currentNode]);
        }
    }
    return visited;
};
export function Graph() {
    const [graph, setGraph] = useState({});
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [indexInput, setIndexInput] = useState('');
    const [indexOutput, setIndexOutput] = useState('');
    const [index, setIndex] = useState('');
    const [startNode, setStartNode] = useState('');
    const [bfsOutput, setBfsOutput] = useState('');
    const [dfsOutput, setDfsOutput] = useState('');
    // Graph insertion
    const insert = () => {
        if (graph[index] === undefined) {
            graph[index] = [input];
            setGraph(graph);
            setInput('');
            setIndex('');
        } else {
            graph[index].push(input);
            setGraph(graph);
            setInput('');
            setIndex('');
        }
    };
    // Graph search

    const search = () => {
        if (graph[index] === undefined) {
            setOutput('Not found');
            setIndex('');
        } else {
            if (graph[index].includes(input)) {
                setOutput('Found');
                setInput('');
                setIndex('');
            } else {

                setOutput('Not found');
                setInput('');
                setIndex('');
            }
        }
    };
    // Graph index search
    const searchIndex = () => {
        if (graph[indexInput] === undefined) {
            setIndexOutput('Not found');
            setIndexInput('');
        } else {
            setIndexOutput('Found');
            setIndexInput('');
        }
    };
    // Graph BFS
    const bfsGraph = () => {
        setBfsOutput(bfs(graph, startNode));
        setStartNode('');
    };
    // Graph DFS
    const dfsGraph = () => {
        setDfsOutput(dfs(graph, startNode));
        setStartNode('');
    };


//add paragraphs
    return (
  
      
        <div className="App">
            <h1>Graph</h1>
            <div className="input">
          
        
            <label>Insert node: </label>
        
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />  
               
                <label>Insert index: </label>
         
                <input
                    type="text"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                />
                <br></br>
                <button onClick={insert}>Insert</button>
                <button onClick={search}>Search</button>
                <button onClick={searchIndex}>Search index</button>

                <label>Insert index: </label>
                <input
                    type="text"
                    value={indexInput}
                    onChange={(e) => setIndexInput(e.target.value)}
                />
           <label>
            Insert Start Node
            </label>
                <input
                    type="text"
                    value={startNode}
                    onChange={(e) => setStartNode(e.target.value)}
                />
                <button onClick={bfsGraph}>BFS</button>
                <button onClick={dfsGraph}>DFS</button>
            </div>
            <div className="output">
                <p>{output}</p>
                <p>{indexOutput}</p>
                <p>{bfsOutput}</p>
                <p>{dfsOutput}</p>
            </div>
        </div>
    );
}

  