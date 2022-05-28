import logo from '../reactLogo.png';

function Navbar(){
    return (
        <nav className="navbar">
            <img className='element image' src={logo}></img>
            <h2 className='element'>ReactInfo</h2>
            <h3 className='element'>React Course - Project 1</h3>
        </nav>
    );
}
export default Navbar;