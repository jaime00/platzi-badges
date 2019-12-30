import React, { Component } from "react";
import "./styles/Badges.css";
import ConfLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";

export default class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.data = [
            {
                id: "0",
                firstName: "Freda",
                lastName: "Grady",
                email: "Leann_Berge@gmail.com",
                jobTitle: "Legacy Brand Director",
                twitter: "FredaGrady22221-7573",
                avatarUrl:
                    "https://cdn.iconscout.com/icon/free/png-256/groot-1502862-1273077.png"
            },
            {
                id: "1",
                firstName: "Major",
                lastName: "Rodriguez",
                email: "Ilene66@hotmail.com",
                jobTitle: "Human Research Architect",
                twitter: "MajorRodriguez61545",
                avatarUrl:
                    "https://cdn.iconscout.com/icon/free/png-256/thor-avengers-1502879-1273094.png"
            },
            {
                id: "2",
                firstName: "Daphney",
                lastName: "Torphy",
                email: "Ron61@hotmail.com",
                jobTitle: "National Markets Officer",
                twitter: "DaphneyTorphy96105",
                avatarUrl:
                    "https://cdn.iconscout.com/icon/free/png-256/spiderman-1502925-1273046.png"
            },
            {
                id: "3",
                firstName: "Jaime",
                lastName: "Torres",
                email: "jtorres@hotmail.com",
                jobTitle: "Web Developer",
                twitter: "iamjaim3",
                avatarUrl:
                    "https://cdn.iconscout.com/icon/free/png-256/gotham-girl-1502913-1273128.png    "
            }
        ];
        console.log("1. constructor()");
    }
    componentDidMount() {
        console.log("3. componentDidMount()");
        setTimeout(() => {
            this.setState({ data: this.data });
        }, 3000);
    }
    render() {
        console.log("2. render()");
        return (
            <>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo"
                                src={ConfLogo}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={this.state.data} />
                    </div>
                </div>
            </>
        );
    }
}
