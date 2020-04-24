import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data !== null) {
      localStorage.setItem("data", JSON.stringify(data));
    } else if (
      data === null &&
      localStorage.getItem("data") !== "null" &&
      localStorage.getItem("data") !== "[]"
    ) {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, [data]);

  function handleSubmit(title) {
    if (!data) {
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
