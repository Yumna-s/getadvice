import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdice}>get advice </button>
      <message count={count} />
    </div>
  );
}
function message(props) {
  return (
    <p>
      you have read <strong>{props.count} </strong>piece of advice
    </p>
  );
}
