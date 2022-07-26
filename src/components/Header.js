import logo from '../img/logo.svg';

const Header = () =>{
    const header = (
        <div className="container">
            <img className="logo" src={logo} alt="logo"/>
            <h3 className="logoName">ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </div>
    )
    return(
        <>
            {header}
        </>
    )
}

export default Header;