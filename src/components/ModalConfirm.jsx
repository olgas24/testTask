import React from "react";
import ReactDom from "react-dom";
import {ModalContent} from "./ModalContent";

export class ModalConfirm extends React.Component{
    root = document.createElement("div");
    body = document.querySelector("body");

    componentDidMount() {
        this.body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render() {
        const {handleCloseModal} = this.props;
        return ReactDom.createPortal(<ModalContent handleCloseModal={handleCloseModal}/>, this.root)
    }
}