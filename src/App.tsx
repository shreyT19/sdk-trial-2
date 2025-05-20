import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button, Input } from "zens_trial_ui";

function App() {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="flex flex-col gap-2">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Button variant="destructive" size="lg">
          Danger Button
        </Button>
        <Button variant="secondary" size="lg">
          Secondary Button
        </Button>
        <Button variant="outline" size="lg">
          Outline Button
        </Button>
        <Button variant="ghost" size="lg">
          Ghost Button
        </Button>
        <Button variant="link" size="lg">
          Danger Button
        </Button>

        <Input
          placeholder="Enter your name"
          value="Hello"
          onChange={() => {}}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
