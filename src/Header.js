import React from "react";

import world from "./img/world.png";

const Header = () => {
    <div className="header-wrap">
        <div className="img-wrap">
            <img src={world}></img>
        </div>
        <div className="header-wrap">
            <h3>Some Text Here</h3>
        </div>
    </div>
}

export default Header;