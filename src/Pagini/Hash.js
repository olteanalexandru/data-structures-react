import { useState } from 'react';

export function Hash() {
    const [hash, setHash] = useState([]);
    const [input, setInput] = useState('');
    const [key, setKey] = useState('');
    const [output, setOutput] = useState('');
    const [outputKeys, setOutputKeys] = useState('');
    const [outputValues, setOutputValues] = useState('');
    const [outputEntries, setOutputEntries] = useState('');



    const add = () => {
        setHash({ ...hash, [key]: input });
        setInput('');
        setKey('');
    }

    const get = () => {
        if (hash[key] !== undefined) {
            setOutput(hash[key]);
        }
    }

    const keys = () => {
        setOutputKeys(Object.keys(hash));
    }

    const values = () => {
        setOutputValues(Object.values(hash));

    }

    const entries = () => {
        setOutputEntries(Object.entries(hash));
    }

    const del = () => {
        if (hash[key] !== undefined) {
            delete hash[key];
            setHash(hash);
        }
    }

    return (
        <><div className="container text-center bg-grey border-colorat" style={{ paddingBottom: " 4rem" }}>
            <h2>Hash</h2>
            <h4>Create de noi:</h4>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="input">Input</label>
                        <input type="text" className="form-control" id="input" value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="key">Key</label>
                        <input type="text" className="form-control" id="key" value={key} onChange={(e) => setKey(e.target.value)} />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="add">Add</label>
                        <button type="button" className="btn btn-primary" id="add" onClick={add}>Add</button>
                    </div>
                </div>
            </div>
            <h4>Get:</h4>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="key">Key</label>
                        <input type="text" className="form-control" id="key" value={key} onChange={(e) => setKey(e.target.value)} />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="get">Get</label>
                        <button type="button" className="btn btn-primary" id="get" onClick={get}>Get</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="output">Output</label>
                        <input type="text" className="form-control" id="output" value={output} />
                    </div>
                </div>
            </div>
            <h4>Keys:</h4>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="keys">Keys</label>
                        <button type="button" className="btn btn-primary" id="keys" onClick={keys}>Keys</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="outputKeys">Output</label>
                        <input type="text" className="form-control" id="outputKeys" value={outputKeys} />
                    </div>
                </div>
            </div>
            <h4>Values:</h4>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="values">Values</label>
                        <button type="button" className="btn btn-primary" id="values" onClick={values}>Values</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="outputValues">Output</label>
                        <input type="text" className="form-control" id="outputValues" value={outputValues} />
                    </div>
                </div>
            </div>
            <h4>Entries:</h4>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="entries">Entries</label>
                        <button type="button" className="btn btn-primary" id="entries" onClick={entries}>Entries</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="outputEntries">Output</label>
                        <input type="text" className="form-control" id="outputEntries" value={outputEntries} />
                    </div>
                </div>
            </div>
            <h4>Delete:</h4>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="key">Key</label>
                        <input type="text" className="form-control" id="key" value={key} onChange={(e) => setKey(e.target.value)} />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <label htmlFor="delete">Delete</label>
                        <button type="button" className="btn btn-primary" id="delete" onClick={del}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}