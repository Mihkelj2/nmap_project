import React from 'react';
import './NameForm.css';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.PostData = props.PostData;
        /* Siin on valued */
        this._state = {value: ''};
        this._question = {value: 'REPLACE'};
        this._example = {value: 'REPLACE'};
        this._answer = {value: 'REPLACE'};
        /* Siit saab suvalise kusimuse */
        this.getRandomQuestion()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    get question() {
        return this._question;
    }

    set question(value) {
        this._question = value;
    }

    get answer() {
        return this._answer;
    }

    set answer(value) {
        this._answer = value;
    }

    getRandomQuestion(event) {
        let lastQuestion = this._question.value;
        const keys = Object.keys(this.props.PostData)
        let i = keys.length - 1
        const j = Math.floor(Math.random() * i)
        this._question.value = this.props.PostData[j]["Description"]
        this._answer.value = this.props.PostData[j]["Switch"]
        this._example.value = this.props.PostData[j]["Example"]

        if (this._example.value.includes(this._answer.value)) {
            this._example.value = this._example.value.replace(this._answer.value, "...")
        }

        if (lastQuestion === this._question.value) {
            this.getRandomQuestion()
        }
        {console.log(this._question.value, this._answer.value, this._example.value)}
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this._state.value === this._answer.value) {
            alert("Correct Answer");
        } else {
            alert("Wrong Answer. Correct Answer is: " + this._answer.value);
        }
        this.getRandomQuestion(this)
        this.setState({value: ""});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={"TrainerBox"}>
                <div className={"FullBox"}>
                    <div className={"questionDiv"}>
                        {this._question.value}
                    </div>
                    <div className={"exampleDiv"}>
                        For Example: {this._example.value}
                    </div>
                    <label className={"AnswerDiv"}>
                        Answer: <input type="text" value={this._state.value} onChange={this.handleChange}/>
                        <input type="submit" value="Submit"/>
                    </label>

                </div>

            </form>
        );
    }
}

export default NameForm