import "./App.module.css";
import Header from "./components/Header/Header";
import Toolbar from "./components/Toolbar/Toolbar";
import Result from "./components/Result/Result";
import Create from "./components/create/Create";

function App() {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
      <Create />
    </>
  );
}

export default App;
