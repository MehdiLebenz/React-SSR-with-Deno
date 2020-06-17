import { React } from "./utils.ts";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      div: any;
      h1: any;
      p: any;
      img: any;
    }
  }
}

const App = () => {
  const [count, setCount] = (React as any).useState(0);

  return (
    <div >
      <h1>Welcome ! 1 + 1 = ?  </h1>
      <button onClick={() => setCount(count + 1)}>Click here to add 1 🦕</button>
      <button onClick={() => setCount(count - 1)}>Click here to delete 1 🦕</button>
      <p>You clicked on  🦕 {count} times</p>
      <img src="https://i.pinimg.com/originals/f8/36/1a/f8361a6a70c3a30855c68dd47a05e135.jpg" alt="alternatetext"/>
    </div>
  );
};

export default App;