import { useState } from 'react';

export function  Stack() {
    const [stack, setStack] = useState([]);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const push = () => {
        setStack([...stack, input]);
        setInput('');
    }

    const pop = () => {
        if (stack.length > 0) {
            setOutput(stack[stack.length - 1]);
            setStack(stack.slice(0, stack.length - 1));
        }

    }

    return (
        <div className="container text-center bg-grey border-colorat" style={{paddingBottom:" 4rem"}}>
            <h2>Stack</h2>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Push</h5>
                            <p className="card-text">Adauga un element in stiva</p>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                            <button className="btn btn-primary" onClick={push}>Push</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Pop</h5>
                            <p className="card-text">Elimina un element din stiva</p>
                            <button className="btn btn-primary" onClick={pop}>Pop</button>
                            <p className="card-text">{output}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Stack</h5>

                            <p className="card-text">{stack.map((item, index) => <p key={index}>{item}</p>)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )   
}




