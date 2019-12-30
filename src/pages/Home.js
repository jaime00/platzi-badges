import React from "react";
import ConfLogo from "../images/platziconf-logo.svg";
import Astro from "../images/astronauts.svg";
import { Link } from "react-router-dom";
import Background from "../images/stars.svg";

export default function Home() {
    return (
        <div
            className="PageNotFound text-center text-white"
            style={{
                width: "100%",
                display: "flex",
                background: `url(${Background}), #1B1B25 repeat`,
                alignItems: "center",
                minHeight: "500px"
            }}
        >
            {/* background: url('../../images/stars.svg'), #1B1B25; */}
            <div className="container p-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                        <img
                            className="PageNotFound__icon img-fluid"
                            src={ConfLogo}
                            alt="Page Not Found"
                            title="ERROR 404"
                            height="170px"
                        />
                        <h1 className="mt-5">
                            PRINT YOUR BADGES
                        </h1>
                        <p>The easiest way to manage your conference    </p>
                        <Link to="/badges/new" className="btn btn-primary mt-4">
                            New Badge
                        </Link>
                    </div>
                    <div className="float-right col-12 col-sm-12 col-md-6">
                        <img
                            src={Astro}
                            alt=""
                            style={{ height: "25rem" }}
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
