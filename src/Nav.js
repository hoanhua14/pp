
import {NavLink} from 'react-router-dom';
const NavBar = () => {
    return (
        <div className='center'>
            <NavLink
                to='/aboutme'
            >
                About Me
            </NavLink>
            <NavLink
                to='/projects'
            >
                Projects
            </NavLink>
            <NavLink
                to='/techstacks'
            >
                Tech stacks
            </NavLink>
        </div>
    )
}
export default NavBar;
