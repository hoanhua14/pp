const NavBar = () => {
    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
                <span></span>
            </label>

            <ul class="menu__box">
                {/* <li><a class="menu__item" href="#">About Me</a></li>
                <li><a class="menu__item" href="#">Projects</a></li>
                <li><a class="menu__item" href="#">Contact</a></li> */}
            </ul>
        </div>
    )
}
export default NavBar;
