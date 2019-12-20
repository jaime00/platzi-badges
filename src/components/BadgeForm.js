import React, { Component } from "react";

export default class BadgeForm extends Component {
    
    handleSubmit = e => e.preventDefault();

    handleClick = () => console.log("click");

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={this.props.form.firstName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={this.props.form.lastName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="Email"
                            id="email"
                            name="email"
                            value={this.props.form.email}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={this.props.form.jobTitle}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="twitter">Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            id="twitter"
                            name="twitter"
                            value={this.props.form.twitter}
                            required
                        />
                    </div>
                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}
