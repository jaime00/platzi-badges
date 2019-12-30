import React from "react";

import NavBar from "../components/NavBar";

export default function Layout(props) {
    // const children = props.children;
    return (
        <div>
            <NavBar />
            {props.children}
        </div>
    );
}
