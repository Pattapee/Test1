import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const delay = 3000;
  const [count, setCount] = useState([]);
  const [str, setStr] = useState("");
  const timeout = useRef(null);
  const count_length = useRef(null);

  function set_remove_timeout() {
    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      if (count_length.current === 0) return;
      count_length.current = count_length.current - 1;
      setCount(([first, ...others]) => [...others]);
      set_remove_timeout();
    }, delay);
  }

  function add() {
    setCount([...count, str]);
    set_remove_timeout();
  }

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  const handleChange = e => {
    setStr(e.target.value);
  };

  return (
    <div className="App">
      <label>Number: </label>
      <input type="text" name="number" id="number" onChange={handleChange} />
      <button onClick={add}>Add</button>
      {count.map((prop, i) => <p key={i}>{[prop]}</p>)}
    </div>
  );
}
