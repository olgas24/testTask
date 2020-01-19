import React from "react";
import { ModalConfirm} from "./ModalConfirm";
import {Link} from "react-router-dom";

export class Form extends React.Component {
    state = {
        value: "",
        textAreaValue: "",
        checkBoxes: [
            {   id: 1,
                checked: false,
                name: "Джордж Вашингтон"
            },
            {   id: 2,
                checked: false,
                name: "Барак Обама"
            },
            {   id: 3,
                checked: false,
                name: "Джон Адамс"
            },
            {   id: 4,
                checked: false,
                name: "Авраам Линкольн"
            }
        ],
        selectValue: 0,
        langs: ["Андорра", "Гана", "Мадагаскар", "Ямайка"],
        radioOption: "",
        showModal: false
    };

    handleChangeInput = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleChangeTextArea = (event) => {
        const {value} = event.target;
        this.setState({
            textAreaValue: value
        })
    };

    handleChangeCheckBox = (id) => (event) => {
        this.setState({
            checkBoxes: this.state.checkBoxes.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        checked: !item.checked
                    }
                }
                return item;
            })
        })
    };

    handleChangeSelect = (event) => {
        this.setState({
            selectValue: event.target.value
        })
    };

    handleRadioChange = (event) => {
        this.setState({
            radioOption: event.target.value
        })
    };

    handleClickAnswer = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }))
    };

    handleClickClear = (event) => {
        event.preventDefault();
        this.setState({
            value: "",
            textAreaValue: "",
            selectValue: 0,
            radioOption: "",
            showModal: false,
            checkBoxes: [
                {   id: 1,
                    checked: false,
                    name: "Джордж Вашингтон"
                },
                {   id: 2,
                    checked: false,
                    name: "Барак Обама"
                },
                {   id: 3,
                    checked: false,
                    name: "Джон Адамс"
                },
                {   id: 4,
                    checked: false,
                    name: "Авраам Линкольн"
                }
            ]
        })
    };



    render() {
        const {value, textAreaValue, checkBoxes, selectValue, langs, radioOption, showModal} = this.state;
        return (
            <React.Fragment>
                <div className="header">
                    <h1>Что ты помнишь с уроков географии?</h1>
                    <p>Здравствуйте, потратьте, пожалуйста, несколько минут своего времени на заполнение следующей
                        анкеты.</p>
                </div>
                <div className="question input">
                    <h2>Сколько в Антарктиде постоянных жителей</h2>
                    <input
                        type="text"
                        value={value}
                        placeholder={"Ваш ответ"}
                        onChange={this.handleChangeInput}
                    />
                </div>
                <div className="question">
                    <h2> Перечислите континенты:</h2>
                    <textarea
                        cols="20"
                        rows="7"
                        value={textAreaValue}
                        placeholder={"Ваш ответ"}
                        onChange={this.handleChangeTextArea}
                    />
                </div>
                <div className="question">
                    <h2>Какие президенты США изображены на горе Рашмор?</h2>
                    {
                            checkBoxes.map((item) => (
                                <>
                                    <input type="checkbox" key={item.id} id={item.id} checked={item.checked} onChange={this.handleChangeCheckBox(item.id)}/>
                                        {item.name}<br/>
                                </>
                            ))
                    }
                </div>
                <div className="question">
                    <h2>Столицей какого государства является Антананариву?</h2>
                    <select
                        value={selectValue}
                        onChange={this.handleChangeSelect}
                    >
                        {
                            langs.map((item, i) => {
                                return (
                                    <option key={i} value={i}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="question">
                    <h2>Какая из этих стран НЕ граничит с двумя или больше океанами?</h2>
                    <p><input
                        name="lang"
                        type="radio"
                        value="Великобритания"
                        checked={radioOption === "Великобритания"}
                        onChange={this.handleRadioChange}
                    />Великобритания</p>
                    <p><input
                        name="lang"
                        type="radio"
                        value="Россия"
                        checked={radioOption === "Россия"}
                        onChange={this.handleRadioChange}
                    />Россия</p>
                </div>
                <div className="btn-result">
                    <div className="btn-submit" onClick={this.handleClickAnswer}>Ответить
                    {
                        (value !== "")
                        && (textAreaValue !== "")
                        && (selectValue !==0)
                        && (radioOption !== "")
                        && (checkBoxes.checked !== false)
                            ? <Link to={`answer`} className="btn-submit"/>
                            : showModal && <ModalConfirm handleCloseModal={this.handleClickAnswer}/>
                    }
                            </div>
                <div className="btn-clear" onClick={this.handleClickClear}>Очистить</div>
                </div>
            </React.Fragment>
        )
    }
}