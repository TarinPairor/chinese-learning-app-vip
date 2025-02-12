import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
// import { ElevenLabsClient } from "elevenlabs";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);
  // const client = new ElevenLabsClient({ apiKey: "YOUR_API_KEY" });

  // const res = async () =>
  //   client.textToSpeech.convert(import.meta.env.VITE_SOME_KEY, {
  //     output_format: "mp3_44100_128",
  //     text: "The first move is what sets everything in motion.",
  //     model_id: "eleven_multilingual_v2",
  //   });
  // console.log(res);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  );
}

export default App;
