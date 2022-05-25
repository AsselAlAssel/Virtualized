import React, { useEffect, useState, useRef } from "react"
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized"
import { faker } from '@faker-js/faker';

import './App.css';

const App = () => {
  const cache = useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 40
    })
  )
  const [persons, setPersons] = useState([]);
  const [time, setTime] = useState(new Date);

  useEffect(() => {
    setPersons([...Array(1000).keys()].map((element) => {
      return {
        id: element,
        name: faker.name.firstName() + " " + faker.name.lastName(),
        animal: faker.animal.bird(),
        bio: faker.lorem.lines(Math.random() * 100)

      }
    }));
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date);
    }, 1000)

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width:"100%",height:"100vh"}}>
      <h2>{time.toISOString()}</h2>
      <AutoSizer>
        {({ width,height }) => (
          <List
            width={height}
            height={width}
            rowHeight={cache.current.rowHeight}
            deferredMeasurementCache={cache.current}
            rowCount={persons.length}
            rowRenderer={
              ({ key, index, style, parent }) => {
                const person = persons[index];

                return (
                  <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
                    <div style={style} >


                      <p >the name is {person.name}</p>
                      <p>{person.bio}</p>
                    </div>
                  </CellMeasurer>
                )
              }
            }
          />
        )}


      </AutoSizer>
    </div>
  );
}

export default App;
