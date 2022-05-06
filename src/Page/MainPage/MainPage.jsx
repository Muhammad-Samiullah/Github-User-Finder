import React, { useState } from 'react'
import "./Mainpage.css";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import DisplayComponent from "../../components/DisplayComponent/DisplayComponent";


function MainPage() {

    const [userName, setUsername] = useState("");
    // console.log(userName);

    return (
        <>
            <div className='header'>
                <h1>Welcome to Github User Finder</h1>
                <h3>Checkout the data of someone's github  profile by just entering the username!</h3>
            </div>
            <div className="search_div">
                <SearchComponent setUsername={setUsername} />
            </div>
            <div className='display_div'>
                <DisplayComponent userName={userName} />
            </div>
        </>
    )
}

export default MainPage
