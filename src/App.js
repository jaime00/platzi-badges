import React from "react";
import BadgeNew from "./pages/BadgeNew";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Badges from "./pages/Badges";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    {/* Declaramos la ruta de inicio */}
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    {/* Declaramos todas las rutas de la paginas */}
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />

                    {/* Cuando las ruta que coloca el usuario no existe, redirije a home */}
                    <Route component={Home}>
                        <Redirect to="/home" />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
