import React, { Component } from "react";
import "./styles/BadgesList.css";

export default class BadgesList extends Component {
    render() {
        //     id: "0",
        //     firstName: "Freda",
        //     lastName: "Grady",
        //     email: "Leann_Berge@gmail.com",
        //     jobTitle: "Legacy Brand Director",
        //     twitter: "FredaGrady22221-7573",
        //     avatarUrl:
        //         "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
        //
        return (
            <>
                {this.props.badges.map(badge => {
                    return (
                        <div key={badge.id} className="Badge__element">
                            <div className="row">
                                <div className="col-12 col-sm-3">
                                    <img
                                        className="iconHero"
                                        src={badge.avatarUrl}
                                        alt={badge.firstName + badge.lastName}
                                    />
                                </div>
                                <div className="end col-12 col-sm-9">
                                    <h6>
                                        {badge.firstName} {badge.lastName}
                                    </h6>

                                    <p>{badge.email}</p>
                                    <p>{badge.jobTitle}</p>
                                    <img
                                        src="https://img.icons8.com/color/2x/twitter.png"
                                        alt="twitter"
                                        className="twitter"
                                        height="30px"
                                    />

                                    <h6 style={{ display: "inline-block" }}>
                                        {badge.twitter}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }
}
