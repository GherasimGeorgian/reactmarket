import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
function Header() {

    const [{basket}] = useStateValue();


    console.log(basket);
    return <nav className="header">
        {/* logo on the left -> img */}
        <Link to="/">
            <img className="header_logo"
                src="https://cdn.winsightmedia.com/platform/files/public/2020-08/background/800x1000/sprouts-logo_1598024112.png?KNbgIkye87QnZeux2Fr5JejAVOM3f_hc"
                alt="" />
        </Link>
        {/* Search box */}
        <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon" />
        </div>
        {/* 3 links */}
        <div className="header_nav">
            {/* 1st link  */}
            <Link to="/login" className="header_link">
                <div className="header_option">
                    <span className="header_optionLine1">Hello Geo</span>
                    <span className="header_optionLine2"> Sign In</span>
                </div>
            </Link>
            {/* 2st link  */}
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLine1">Returns</span>
                    <span className="header_optionLine2">& Orders</span>
                </div>
            </Link>
            {/* 3st link  */}
            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header_optionLine1">Your</span>
                    <span className="header_optionLine2">Prime</span>
                </div>
            </Link>

            {/* 3st link  */}
            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                   {/* Shopping basket icon */}
                   <ShoppingBasketIcon/>
                   {/* Number of items in the basket */}
                   <span className="header_optionLine2 header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
        {/* Basket icon with number */}
    </nav>
}

export default Header
