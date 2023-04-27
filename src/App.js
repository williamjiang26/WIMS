import logo from './logo.svg';
import './App.css';
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
			<li><a href="/">Staff Directory</a></li>
      <li><a href="/staff/add">Add Staff!</a></li>
			<li><a href="/orders">My Orders</a></li>
			<li><a href="/inventory">My Inventory</a></li>
		</ul>
	</nav>
  )
}



function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
    </div>
  );
}

export default App;
