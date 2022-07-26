const Main = () => {
    const main = (
        <div className="mainContainer">
           <h1>Fun facts about React</h1>
           <ul className="unorderedLi">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
           </ul>
        </div>
    )
    return(
        <>
            {main}
        </>
    )
}

export default Main;