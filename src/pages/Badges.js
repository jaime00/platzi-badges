import React, { Component } from "react";
import "./styles/Badges.css";
import ConfLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import { Link } from "react-router-dom";
import api from '../api'

export default class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: undefined,
            error: null
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            console.log(api.badges.list())
            const data = await api.badges.list()
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    render() {
        const { loading, error, data } = this.state;
        if (loading) return <PageLoading />

        if (error) return <PageError error={error} />
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
                        <Link to="/badges/new" className="btn btn-primary text-white">
                            New Badge
                        </Link>
                    </div>
                </div>
                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList badges={data} />
                    </div>
                </div>
            </>
        );
    }
}
