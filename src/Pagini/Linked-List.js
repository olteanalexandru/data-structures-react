import { useState } from 'react';

export function LinkedList() {

    // UNILATERAL LINKED LIST METHODS
    // size: Return the number of node(s).
    // head: Return the element of the head.
    // add: Add another node in the tail.
    // remove: Remove a certain node.
    // indexOf: Return the index of a node.
    // elementAt: Return the node of an index.
    // addAt: Insert a node at a specific index.
    // removeAt: Delete a node at a specific index.

    const [linkedlist, setLinkedList] = useState([]);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [index, setIndex] = useState('');
    const [indexInput, setIndexInput] = useState('');
    const [indexOutput, setIndexOutput] = useState('');

    const add = () => {
        setLinkedList([...linkedlist, input]);
        setInput('');
    }

    const remove = () => {
        if (linkedlist.length > 0) {
            setOutput(linkedlist[linkedlist.length - 1]);
            setLinkedList(linkedlist.slice(0, linkedlist.length - 1));
        }
    }

    const indexOf = () => {
        setIndex(linkedlist.indexOf(input));
        setInput('');
    }

    const elementAt = () => {
        setIndexOutput(linkedlist[index]);
        setIndex('');
    }

    const addAt = () => {
        linkedlist.splice(index, 0, indexInput);
        setLinkedList(linkedlist);
        setIndexInput('');
        setIndex('');
    }

    const removeAt = () => {
        setIndexOutput(linkedlist[index]);
        linkedlist.splice(index, 1);
        setLinkedList(linkedlist);
        setIndex('');
    }


    return (
  
      
        <div className="container text-center bg-grey border-colorat" style={{paddingBottom:" 4rem"}}>
            <h2>Linked List</h2>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add</h5>
                            <p className="card-text">Adauga un element in lista</p>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button className="btn btn-primary" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Remove</h5>
                            <p className="card-text">Elimina un element din lista</p>
                            <button className="btn btn-primary" onClick={remove}>Remove</button>
                            <p>{output}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Index Of</h5>
                            <p className="card-text">Returneaza indexul unui element</p>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button className="btn btn-primary" onClick={indexOf}>Index Of</button>
                            <p>{index}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Element At</h5>
                            <p className="card-text">Returneaza elementul de la un index</p>
                            <input type="text" value={index} onChange={(e) => setIndex(e.target.value)} />
                            <button className="btn btn-primary" onClick={elementAt}>Element At</button>
                            <p>{indexOutput}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Add At</h5>
                            <p className="card-text">Adauga un element la un index</p>
                            <input type="text" value={index} onChange={(e) => setIndex(e.target.value)} />
                            <input type="text" value={indexInput} onChange={(e) => setIndexInput(e.target.value)} />
                            <button className="btn btn-primary" onClick={addAt}>Add At</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Remove At</h5>
                            <p className="card-text">Elimina un element de la un index</p>
                            <input type="text" value={index} onChange={(e) => setIndex(e.target.value)} />
                            <button className="btn btn-primary" onClick={removeAt}>Remove At</button>
                            <p>{indexOutput}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Linked List</h5>
                            <p className="card-text">Lista ta</p>
                            <p>{linkedlist}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


  
  
  )
  }