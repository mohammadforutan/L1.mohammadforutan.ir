
import './App.css'
import Header from "./components/Header/Header";

function App() {


  return (
    <>
      <Header/>
        <main>
            <div className="toolbar">
                <input type="text"/>
                <select name="" id="">
                    <option value="all">All</option>
                    <option value="good">Good</option>
                    <option value="bad">Bad</option>
                </select>
                <ul className="result">
                    <li>NOTE #1</li>
                    <li>NOTE #2</li>
                    <li>NOTE #3</li>
                </ul>
            </div>
        </main>
    </>
  )
}

export default App
