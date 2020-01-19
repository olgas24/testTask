import React from "react";
import {Link} from "react-router-dom";

export class ModalContent extends React.Component {
    render() {
        const {handleCloseModal} = this.props;
        return (
            <div className="modal-window">
                <div className="modal-content">
                    <h3>Каждый не отвеченный ответ считается неправильным, Вы уверены что хотите продолжить?</h3>
                    <div className="modal-answer">
                        <Link to={`answer`} className="btn-close">Да</Link>
                        <span className="btn-notClose" onClick={!handleCloseModal}>Нет</span>
                    </div>
                </div>
            </div>
        )
    }
}