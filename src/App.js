/*
 @ Date : 2012-12-20
 @ Descript
 - Page Route Setup

*/
import { BrowserRouter, Route } from "react-router-dom"
import {BoardCreate, BoardList} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={BoardList}/>
        <Route exact path="/add" component={BoardCreate}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
