import React, { Component } from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import logo from "../images/platziconf-logo.svg";
import PageLoading from "../components/PageLoading";

import "./styles/BadgeNew.css";

import api from '../api'

export default class BadgeNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: null,
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
                ...this.state.form, [e.target.name]: inputValue
            }
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null })
        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error })
        }
    }
    render() {
        const { firstName, lastName, twitter, jobTitle, email } = this.state.form;

        if (this.state.loading) return <PageLoading />

        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero__image  img-fluid" src={logo} alt="" />
                </div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12 col-sm-6  mt-3">
                            <Badge
                                firstName={firstName || 'FIRST_NAME'}
                                lastName={lastName || 'LAST_NAME'}
                                twitter={twitter || 'TWITTER'}
                                jobTitle={jobTitle || 'JOB_TITLE'}
                                email={email || 'EMAIL'}
                            />
                        </div>
                        <div className="col-12 col-sm-6  mt-3">
                            <BadgeForm
                                error={this.state.error}
                                onChange={this.handleChange}
                                form={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
