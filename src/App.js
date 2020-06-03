import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);

  const noHayData = !JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    if (noHayData) {
      setData(JSON.parse(localStorage.getItem("data")));
    } else {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data, noHayData]);

  function handleSubmit(title) {
    if (data.length === 0) {
      setData([
        {
          id: 1,
          title,
        },
      ]);
    } else {
      const newId = data[data.length - 1].id + 1;
      const info = {
        id: newId,
        title,
      };

      setData(data.concat(info));
    }
  }

  function handleComplete(id) {
    const dataIndex = (element) => element.id === id;
    const index = data.findIndex(dataIndex);
    const copyData = data.slice();
    copyData.splice(index, 1);

    setData(copyData);
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} />
      <div className="Main-wrapper">
        {data &&
          data.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              handleComplete={handleComplete}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
