import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
function Header(){
  return <header>
  <h1><span>W</span>IMS</h1>
  <h4>A Warehouse Management System</h4>
</header>
}
function NavBar(){
  return (
    <nav>
		<ul>
      <button><a href="/">Staff Directory</a></button>
      <button><a href="/staff/add">Add Staff!</a></button>
      <button><a href="/orders">My Orders</a></button>
      <button><a href="/inventory">My Inventory</a></button>
		</ul>
	</nav>
  )
}
function App() {
  return (
    <Router>
      <Header/>
      <NavBar/>
      <Route path ="/staff/add" component={AddStaff} />
      <Route path ="/orders" component={Orders}/>
      <Route path ="/inventory" component={Inventory}/>
    </Router>
  );
}

export default App;
