import React, { useEffect, useState } from "react"
import { List, AutoSizer } from "react-virtualized"
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(new Date);

  useEffect(() => {
    setData([...Array(1000).keys()]);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date);
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h2>{time.toISOString()}</h2>
      <AutoSizer>
        {({ height,width}) => (
          <List
            width={height}
            height={width}
            rowHeight={60}
            rowCount={data.length}
            rowRenderer={
              ({ key, index, style }) => {
                return <p key={key} style={style}>the index from the data is {index}</p>
              }
            }
          />
        )}


      </AutoSizer>
    </div>
  );
}

export default App;
