import "./App.module.css";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";

function App() {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
    </>
  );
}

export default App;
