import { useState } from 'react';
export function Queue() {
    const [queue, setQueue] = useState([]);
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const enqueue = () => {
        setQueue([...queue, input]);
        setInput('');
    }

    const dequeue = () => {
        if (queue.length > 0) {
            setOutput(queue[0]);
            setQueue(queue.slice(1));
        }

    }




    return (
  
      

  
  <div className="container text-center bg-grey border-colorat" style={{paddingBottom:" 4rem"}}>
    <h2>Queue</h2>
    <h4>Create de noi:</h4>
    <div className="row text-center">

        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Enqueue</h5>
                    <p className="card-text">Adauga un element in coada</p>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button className="btn btn-primary" onClick={enqueue}>Enqueue</button>
                    </div> </div> </div>
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Dequeue</h5>
                    <p className="card-text">Elimina un element din coada</p>
                    <button className="btn btn-primary" onClick={dequeue}>Dequeue</button>
                    <p className="card-text">{output}</p>
                    </div> </div> </div>
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Queue</h5>
                    <p className="card-text">{queue.map((item, index) => <p key={index}>{item}</p>)}</p>
                    </div> </div> </div>



                    






     
  </div>
  </div>
  
  
  )
  }