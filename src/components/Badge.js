import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

export default class Badge extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div className="Badge__section-name">
                    <img
                        className="Badge__avatar"
                        src={this.props.avatarUrl}
                        alt=""
                    />
                    <h1>
                        {this.props.firstName}
                        <br />
                        {this.props.lastName}
                    </h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <p>@{this.props.twitter}</p>
                </div>
                <div className="Badge__footer">#PlatziConf</div>
            </div>
        );
    }
}
