import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
function Header(){
  return <header>
  <h1><span>W</span>IMS</h1>
  <h4>A Warehouse Management System</h4>
</header>
}
import Navbar from './components/navbar';
function App() {
  return (
    <Router>
      <Header/>
      <Navbar />
      <Route path ="/staff/add" component={AddStaff} />
      <Route path ="/orders" component={Orders}/>
      <Route path ="/inventory" component={Inventory}/>
    </Router>
  );
}
//hi
export default App;
