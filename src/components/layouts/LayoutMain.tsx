import { Outlet } from 'react-router-dom';
import { NavBar } from '../ui/Navbar/NavBar';

export const LayoutMain = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}
