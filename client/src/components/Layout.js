
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {

    return (<>
            <header>
                <h1><span>W</span>IMS</h1>
                <h4>A Warehouse Management System</h4>
            </header> 
            <nav>
                <ul>
                    <Link to="/login" className='current'>Employee Login</Link>
                    <Link to="/staff" className="current">Staff Directory</Link>
                    <Link to="/order" className="current">Client Orders</Link>
                    <Link to="/inventory" className="current">Inventory</Link>
                </ul>
            </nav>
             
            <Outlet />
            </>)
    
    
    
}
export default Layout
