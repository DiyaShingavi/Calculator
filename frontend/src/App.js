import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = async () => {
    const res =await axios.post('http://localhost:5000/calculate', {
      num1, num2, operator
    });
    setResult(res.data.result);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>🧮 C++ Powered Calculator</h2>
      <div className="form-group">
        <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="First number" className="form-control m-2" />
        <select value={operator} onChange={e => setOperator(e.target.value)} className="form-control m-2">
          <option>+</option><option>-</option><option>*</option><option>/</option>
        </select>
        <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Second number" className="form-control m-2" />
        <button onClick={calculate} className="btn btn-primary m-2">Calculate</button>
      </div>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default App;
