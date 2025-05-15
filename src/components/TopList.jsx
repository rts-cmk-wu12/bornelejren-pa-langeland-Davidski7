import { NavLink } from "react-router"


function TopList() {





    return (
        <div className="top_item">
            <div className="red_top">
                <img src="/toplogo.gif" alt="" />
            </div>
            <div className="kid_foto">
                <img src="/Fotos/topkids.jpg" alt="" />
            </div>


            <input type="checkbox" id="burger-toggle" />
            <label htmlFor="burger-toggle" className="burger-icon" aria-label="Menu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="close">&#10005;</span> {/* ✖️ */}
            </label>
            <nav className="navbar">

                <ul className="nav-links">


                    <li><NavLink to={`/`}>Forside</NavLink></li>
                    <li><NavLink to={`/omos/`}>Om Os</NavLink></li>
                    <li><NavLink to={`/sponsor/`}>Tilmelding Som Sponsor</NavLink></li>
                    <li><NavLink to={`/takker/`}>Børnelejren takker</NavLink></li>

                </ul>

            </nav>


        </div>
    )

}





export default TopList;
