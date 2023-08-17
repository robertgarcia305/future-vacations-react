import React from "react";

import world from "./img/world.png";

const Header = () => {
    return (
        <div className="header-wrap">
            <div className="img-wrap">
                <img src={world}></img>
            </div>
            <div className="header-wrap">
                <h3>Future Vacation Plans</h3>
            </div>
        </div>
    );
}

export default Header;