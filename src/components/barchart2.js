import React, { useState } from "react";

import StackedBarChart from "../StackedBarChart";

const allKeys = ["P1", "P2", "P3", "P4", "P5", "P6" ];

const colors = {
  "P1": "green",
  "P2": "orange",
  "P3": "purple",
  "P4": "red",
  "P5": "blue",
  "P6": "grey",
};

function App2() {
  const [keys, setKeys] = useState(allKeys);
  const [data, setData] = useState([
    {
      year: "S1",
      "P1": 10,
      "P2": 20,
      "P3": 30,
      "P4": 40,
      "P5": 10,
      "P6": 20,

    },
    {
      year: "S2",
      "P1": 20,
      "P2": 40,
      "P3": 60,
      "P4": 40,
      "P5": 10,
      "P6": 20,
    },
    {
      year: "S3",
      "P1": 30,
      "P2": 45,
      "P3": 80,
      "P4": 40,
      "P5": 10,
      "P6": 20,
    },
    {
      year: "S4",
      "P1": 40,
      "P2": 60,
      "P3": 100,
      "P4": 40,
      "P5": 10,
      "P6": 20,
    },
    {
      year: "S5",
      "P1": 50,
      "P2": 80,
      "P3": 120,
      "P4": 40,
      "P5": 10,
      "P6": 20,
    }
  ]);

  return (
    <React.Fragment>
    <h4 style = {{color:"white"}}>Product Deliver in Eact Store</h4>
      <StackedBarChart data={data} keys={keys} colors={colors} />

      <div className="fields">
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App2;
