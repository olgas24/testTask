import React from "react";
import {Route} from "react-router-dom";
import {Answer} from "../components/Answer";
import {Form} from "../components/Form"

export const Main = () => {
    return (
        <div>
            <Route path="/" exact component={Form}/>
            <Route path="/answer" component={Answer}/>
        </div>
    );
};