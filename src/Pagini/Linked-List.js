import { useState } from 'react';

export function LinkedList() {

    //Linked List Function
    const createNode = (value) => {
        return {
            value,
            next: null
        }
    }
    const createList = (value) => {
        const node = createNode(value);
        return {
            head: node,
            tail: node,
            length: 1
        }
    }
    const insertList = (list, value) => {
        const node = createNode(value);
        list.tail.next = node;
        list.tail = node;
        list.length++;
        return list;
    }
    const searchList = (list, value) => {
        let currentNode = list.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    const deleteList = (list, value) => {
        if (list.head.value === value) {
            list.head = list.head.next;
            list.length--;
            return list;
        }
        let currentNode = list.head;
        while (currentNode.next !== null) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next;
                list.length--;
                return list;
            }
            currentNode = currentNode.next;
        }
        return list;
    }
    const [list, setList] = useState(null);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [indexInput, setIndexInput] = useState('');
    const [indexOutput, setIndexOutput] = useState('');
    const [index, setIndex] = useState('');
    const [startNode, setStartNode] = useState('');
    const [showLinkedList, setshowLinkedList] = useState('');
    // Linked List insertion
    const insertLinkedList = () => {
        if (list === null) {
            setList(createList(input));
        } else {
            setList(insertList(list, input));
        }
        setInput('');
    }
    // Linked List search
    const searchLinkedList = () => {
        if (list === null) {
            setOutput('List is empty');
            setInput('');
            return;
        }
        if (searchList(list, input)) {
            setOutput('Found');
        } else {
            setOutput('Not Found');
        }
        setInput('');
    }
    // Linked List delete
    const deleteLinkedList = () => {
        if (list === null) {
            setOutput('List is empty');
            setInput('');
            return;
        }
        if (searchList(list, input)) {
            setList(deleteList(list, input));
            setOutput('Deleted');
        } else {
            setOutput('Not Found');
        }
        setInput('');
    }
    // Linked List index
    const indexLinkedList = () => {
        if (list === null) {
            setIndexOutput('List is empty');
            setIndexInput('');
            return;
        }
        let currentNode = list.head;
        let i = 0;
        while (currentNode !== null) {
            if (currentNode.value === indexInput) {
                setIndexOutput(i);
                setIndexInput('');
                return;
            }
            currentNode = currentNode.next;
            i++;
        }
        setIndexOutput('Not Found');
        setIndexInput('');
    }
    // Linked List start node
    const startNodeLinkedList = () => {
        if (list === null) {
            setStartNode('List is empty');
            return;
        }
        setStartNode(list.head.value);
    }
    // Linked List BFS
    const showTheLinkedList = () => {
        if (list === null) {

            setshowLinkedList('List is empty');
            return;
        }
        let currentNode = list.head;
        let output = '';
        while (currentNode !== null) {
            output += currentNode.value + ' ';
            currentNode = currentNode.next;
        }
        setshowLinkedList(output);
    }
    //keep same style format
    return (
        <div className="container text-center bg-grey border-colorat" style={{ paddingBottom: " 4rem" }}>
            <h1>Linked List</h1>
            <div className="row">
                <div className="col-sm-6">

                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Enter value" value={input} onChange={(e) => setInput(e.target.value)} />
                        </div>

                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={insertLinkedList}>Insert</button>

                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6">


                            <input type="text" className="form-control" placeholder="Enter value" value={input} onChange={(e) => setInput(e.target.value)} />
                        </div>

                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={searchLinkedList}>Search</button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Enter value" value={input} onChange={(e) => setInput(e.target.value)} />
                        </div>

                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={deleteLinkedList}>Delete</button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Enter value" value={indexInput} onChange={(e) => setIndexInput(e.target.value)} />

                        </div>

                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={indexLinkedList}>Index</button>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={startNodeLinkedList}>Start Node</button>

                        </div>

                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Start Node" value={startNode} onChange={(e) => setStartNode(e.target.value)} />
                        </div>
                    </div>

                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-primary" onClick={showTheLinkedList}>Show Linked List</button>

                        </div>

                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Linked List" value={showLinkedList} onChange={(e) => setshowLinkedList(e.target.value)} />
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Enter value" value={input} onChange={(e) => setInput(e.target.value)} />
                        </div>

                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Output" value={output} onChange={(e) => setOutput(e.target.value)} />
                        </div>
                    </div>
                    <br />
                    <div className="row">

                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Enter value" value={indexInput} onChange={(e) => setIndexInput(e.target.value)} />
                        </div>

                        <div className="col-sm-6">

                            <input type="text" className="form-control" placeholder="Output" value={indexOutput} onChange={(e) => setIndexOutput(e.target.value)} />
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

       