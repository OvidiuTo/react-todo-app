import './App.css';
import Home from './components/Home';
import Review from './components/Review';
import {Route} from "react-router-dom"
import NavBar from './NavBar'
import TodoApp from './components/TodoApp'
 

function App() {

  return (
    <div  className="buttons">

    <NavBar/>
    <Route exact path ="/" component={Home} />
    <Route exact path ="/review" component={Review} />
    <Route exact path ="/todo-list" component={TodoApp}/>  
    </div>
  );
}

export default App;
