
import {NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='center navbar'>
            <div>SHH</div>
            <NavLink
                className='navbartext'
                to='/aboutme'
            >
                About Me
            </NavLink>
            <NavLink
                className='navbartext'
                to='/projects'
            >
                Projects
            </NavLink>
            <NavLink
                className='navbartext'
                to='/techstacks'
            >
                Tech stacks
            </NavLink>
        </div>
    )
}
export default NavBar;
