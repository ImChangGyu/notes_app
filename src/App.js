import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Createpage, Notepage } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Notepage} />
            <Route path="/create" component={Createpage} />
        </BrowserRouter>
    );
}

export default App;
