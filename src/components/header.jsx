import troll from '../assets/troll.png';

function Header () {
    return(
        <header className="header">
            <div className="headerSectionOne">
                <img className="headerImg" src={troll} alt="" />
                <h1 className="headerTitle">Meme Generator</h1>
            </div>

            <div className="headerSectionTwo">
                <p className="headerText">React Course - Project 3</p>
            </div>

        </header>
    )
}

export default Header; 