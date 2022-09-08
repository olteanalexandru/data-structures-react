import { useState } from 'react';

export function Tree() {

//Binary search Tree Function
const insert = (node, newNode) => {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            insert(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            insert(node.right, newNode);
        }
    }
}
const createNode = (data) => {
    return {
        data,
        left: null,
        right: null
    }
}
const createTree = (root, data) => {
    const node = createNode(data);
    if (root === null) {
        root = node;
    } else {
        insert(root, node);
    }
    return root;
}
const [root, setRoot] = useState(null);
const [input, setInput] = useState('');
const [output, setOutput] = useState('');
const [indexInput, setIndexInput] = useState('');
const [indexOutput, setIndexOutput] = useState('');
const [index, setIndex] = useState('');
const [startNode, setStartNode] = useState('');
const [bfsOutput, setBfsOutput] = useState('');
const [dfsOutput, setDfsOutput] = useState('');
// Tree insertion
const insertTree = () => {
    setRoot(createTree(root, input));
    setInput('');
} 
// Tree search
const searchTree = () => {
    let currentNode = root;
    while (currentNode !== null) {
        if (currentNode.data === input) {
            setOutput('Found');
            setInput('');
            return;
        } else if (currentNode.data > input) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
    setOutput('Not found');
    setInput('');
}
// Tree index search  
const searchIndex = () => {
    let currentNode = root;
    while (currentNode !== null) {
        if (currentNode.data === indexInput) {
            setIndexOutput('Found');
            setIndexInput('');
            return;
        } else if (currentNode.data > indexInput) {
            currentNode = currentNode.left;
        } else {
            currentNode = currentNode.right;
        }
    }
    setIndexOutput('Not found');
    setIndexInput('');
} 
// Tree BFS
const bfs = () => {
    let queue = [];
    let visited = [];
    let currentNode = root;
    queue.push(currentNode);
    while (queue.length > 0) {
        currentNode = queue.shift();
        visited.push(currentNode.data);
        if (currentNode.left !== null) {
            queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
            queue.push(currentNode.right);
        }
    }
    setBfsOutput(visited);
}
// Tree DFS
const dfs = () => {
    let stack = [];
    let visited = [];
    let currentNode = root;
    stack.push(currentNode);
    while (stack.length > 0) {
        currentNode = stack.pop();
        visited.push(currentNode.data);
        if (currentNode.right !== null) {
            stack.push(currentNode.right);
        }
        if (currentNode.left !== null) {
            stack.push(currentNode.left);
        }
    }
    setDfsOutput(visited);
}
// Tree index
const indexTree = () => {
    let currentNode = root;
    let index = 0;
    while (currentNode !== null) {
        if (currentNode.data === indexInput) {
            setIndex(index);
            setIndexInput('');
            return;
        } else if (currentNode.data > indexInput) {
            currentNode = currentNode.left;
            index = index * 2 + 1;
        } else {
            currentNode = currentNode.right;
            index = index * 2 + 2;
        }
    }
    setIndexOutput('Not found');
    setIndexInput('');
}
// Tree start node
const startNodeTree = () => {
    let currentNode = root;
    let startNode = 0;
    while (currentNode !== null) {
        if (currentNode.data === startNode) {
            setStartNode(startNode);
            return;
        } else if (currentNode.data > startNode) {
            currentNode = currentNode.left;
            startNode = startNode * 2 + 1;
        } else {
            currentNode = currentNode.right;
            startNode = startNode * 2 + 2;
        }
    }
    setStartNode(startNode);
}










    return (
  
        <div className="App">
            <h1>Binary Search Tree</h1>
            <div className="input">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={insertTree}>Insert</button>
                <button onClick={searchTree}>Search</button>
                <button onClick={searchIndex}>Search Index</button>
                <button onClick={indexTree}>Index</button>
                <button onClick={startNodeTree}>Start Node</button>
                <button onClick={bfs}>BFS</button>
                <button onClick={dfs}>DFS</button>
            </div>
            <div className="output">

                <div className="output1">
                    <h3>Output</h3>
                    <p>{output}</p>
                </div>
                <div className="output2">
                    <h3>Index Output</h3>
                    <p>{indexOutput}</p>
                </div>
                <div className="output3">
                    <h3>Index</h3>
                    <p>{index}</p>
                </div>
                <div className="output4">
                    <h3>Start Node</h3>
                    <p>{startNode}</p>
                </div>
                <div className="output5">
                    <h3>BFS</h3>
                    <p>{bfsOutput}</p>
                </div>
                <div className="output6">
                    <h3>DFS</h3>
                    <p>{dfsOutput}</p>
                </div>

            </div>



        </div>
        
    );
  }

  
