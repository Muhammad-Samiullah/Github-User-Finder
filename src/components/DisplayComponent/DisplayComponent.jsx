import { useEffect } from "react";
import React from 'react';
import { useState } from "react";
import "./DisplayComponent.css";

function DisplayComponent(props) {
    const [userdata, setuserdata] = useState({
        name: "",
        bio: "",
        location: "",
        picture: "",
        followers: "",
        following: "",
        repositories: "",
        profileUrl: "",
    });
    useEffect(() => {
        fetch(`https://api.github.com/users/${props.userName}`)
            // fetch()
            .then(results => results.json())
            .then((data) => {
                setuserdata(
                    {
                        name: data.name,
                        picture: data.avatar_url,
                        followers: data.followers,
                        following: data.following,
                        repositories: data.public_repos,
                        profileUrl: data.html_url,
                        location: data.location,
                        bio: data.bio,
                    }
                );
            });
    }, [props.userName]);

    return (
        <>
            <div className="main_div">
                <div className="picture_div d-flex justify-content-center flex-wrap">
                    <img src={userdata.picture} />
                </div>
                <div className="name_div d-flex flex-column justify-content-center">
                    <h3 id="name">{userdata.name}</h3>
                    <h3 id="bio">{userdata.bio}</h3>
                </div>
                <div className="data-div d-flex flex-wrap justify-content-center">
                    <div className="data_element d-flex justify-content-center flex-wrap">
                        <h6 className="bio_heading">
                            Followers:
                        </h6>
                        <h6>
                            {userdata.followers}
                        </h6>
                    </div>
                    <div className="data_element d-flex justify-content-center flex-wrap">
                        <h6 className="bio_heading">
                            Following:
                        </h6>
                        <h6>
                            {userdata.following}
                        </h6>
                    </div>
                    <div className="data_element d-flex justify-content-center flex-wrap">
                        <h6 className="bio_heading">
                            Repositories:
                        </h6>
                        <h6>
                            {userdata.repositories}
                        </h6>
                    </div>
                    <div className="data_element d-flex justify-content-center flex-wrap">
                        <h6 className="bio_heading">
                            Location:
                        </h6>
                        <h6>
                            {userdata.location}
                        </h6>
                    </div>
                    <div className="data_element d-flex justify-content-center flex-wrap">
                        <h6 className="bio_heading">
                            Github Profile URL :
                        </h6>
                        <h6>
                            <a href={userdata.profileUrl} target="_blank">
                                {userdata.profileUrl}</a>
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DisplayComponent
