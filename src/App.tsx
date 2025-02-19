import "./App.module.css";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import { Dream } from "./type/dream";

const dreams: Dream[] = [
  {
    id: "1",
    title: "school",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    data: new Date(2025, 1, 14),
    vibe: "good",
  },
];

function App() {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <div className="result">
          {dreams.map((dream) => (
            <li>{dream.title}</li>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
