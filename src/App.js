import React, { useEffect, useState } from "react"
import { List } from "react-virtualized"
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

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>hello from me</div>
      <h2>{time.toISOString()}</h2>
      <List
        width={600}
        height={600}
        rowHeight={60}
        rowCount={data.length}
        rowRenderer={
          ({ key, index, style }) => {
            return <p key={key} style={style}>the index from the data is {index}</p>
          }
        }
      />


    </div>
  );
}

export default App;
