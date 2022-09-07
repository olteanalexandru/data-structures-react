import { useState } from 'react';

export function PQueue() {
    const [pqueue, setPQueue] = useState([]);
    const [input, setInput] = useState('');
    const [priority, setPriority] = useState('');
    const [output, setOutput] = useState('');

    const enqueue = () => {
        setPQueue([...pqueue, { input, priority }]);
        setInput('');
        setPriority('');
    }   

    const dequeue = () => {
        if (pqueue.length > 0) {
            let max = pqueue[0].priority;
            let index = 0;
            for (let i = 0; i < pqueue.length; i++) {
                if (pqueue[i].priority > max) {
                    max = pqueue[i].priority;
                    index = i;
                }
            }
            setOutput(pqueue[index].input);
            pqueue.splice(index, 1);
            setPQueue(pqueue);
        }
    }








    return (
  
      
  
  <div className="container text-center bg-grey border-colorat" style={{paddingBottom:" 4rem"}}>
    <h2>Priority Queue</h2>
    <h4>Create de noi:</h4>
    <div className="row text-center">
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Enqueue</h5>
                    <p className="card-text">Adauga un element in coada</p>
                    
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <p>Priority</p>
                    <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />
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
                    <p className="card-text">{pqueue.map((item, index) => <p key={index}>{item.input} - {item.priority}</p>)}</p>
                    </div> </div> </div>

     
  </div>
  </div>
  
  
  )
  }