import React, { Component } from "react";
import Navbar from "../components/NavBar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import logo from "../images/badge-header.svg";
import "./styles/BadgeNew.css";

export default class BadgeNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                firstName: "",
                lastName: "",
                email: "",
                jobTitle: "",
                twitter: ""
            }
        };
    }

    handleChange = e => {
        let inputValue = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:
                    inputValue  .charAt(0).toUpperCase() + inputValue .slice(1)
            }
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl="https://avatars2.githubusercontent.com/u/20992836?s=460&v=4"
                            />
                        </div>
                        <div className="col">
                            <BadgeForm
                                onChange={this.handleChange}
                                form={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
