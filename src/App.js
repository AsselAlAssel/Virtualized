import React, { useEffect, useState } from "react"
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(new Date);

  useEffect(() => {
    setData([...Array(100).keys()]);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date);
    }, 1000)
  }, []);

  return (
    <div>
      <div>hello from me</div>
      <h2>{time.toISOString()}</h2>
      {
        data.map((ele, index) => {
          return <p key={index}>{ele}</p>
        })
      }
    </div>
  );
}

export default App;
