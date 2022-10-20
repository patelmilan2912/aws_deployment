import React, { useEffect } from 'react';
// import menuLinksData from '../components/data/menu_links.json';
import { useState } from 'react';

const Header = () => {
    const [menuLinksData, setMenuLinksData] = useState([]);

    const loadMenuLinksData = async() => {
    
        const resp = await fetch('https://0skulwjdzf.execute-api.us-east-1.amazonaws.com/Production/MenuItems')
        let jsonData = await resp.json();
        console.log(jsonData);
        setMenuLinksData(jsonData);
    }

    useEffect(() => {
        //Load the menu from API


    loadMenuLinksData();

    }, []);
    return (
        <header id="intro">
            <article className="fullheight">
                <div className="hgroup">
                    <h1>Landon Hotel</h1>
                    <h2>West London</h2>
                    <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
                </div>
            </article>

            <nav id="nav">
                <div className="navbar">
                    <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                    <ul>
                        {
                            menuLinksData.map((link) =>
                                <li ><a href={(link.href.S)}><span>{(link.text.S)}</span></a></li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );

}

export default Header;