import React, { Component } from "react";
import "./styles/BadgesList.css";
import { Link } from 'react-router-dom'
import Gravatar from "./Gravatar";
export default class BadgesList extends Component {
    render() {
        if (this.props.badges.length === 0) return <div className="text-center m-5">
            <h3>Not badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
                Create new badge
            </Link>
        </div>

        return (
            <>
                {this.props.badges.map(badge => {
                    return (
                        <div key={badge.id} className="Badge__element">
                            <div className="row">
                                <div className="col-12 col-sm-3">
                                    <Gravatar email={badge.email}/>
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
