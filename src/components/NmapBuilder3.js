import React from 'react';

class NmapBuilder extends React.Component {

    constructor(props){
        super(props);
        this.state = { username: '<IP>'};
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    onCreate = ({target}) => {
        if (this.state.username.includes(target.value)){
            const may = this.state.username.replace(target.value, "");
            console.log(may)
            this.replaceValue(this.state.username, may);
        } else {
            this.setState({ [this.state.username]: this.state.username + " " + target.value });
            this.state.username += " " + target.value;
            console.log(this.state)
        }

    }

    render() {
        return (
                <React.Fragment>
                    <h1>Your Script is: nmap {this.state.username}</h1>

                    <h2>Target Specification</h2>
                    <h3>To start scanning, we need to first specify target</h3>
                    <form>
                        <label htmlFor="username">Scan Aadress: </label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.handleChange}
                        />
                    </form>

                    <button onClick={this.onCreate} value={"-R"}>Scan a single IP</button>
                    <h2>Your nmap need some Scan Techniques, which ones would you like to use?</h2>
                </React.Fragment>
        );
    }

    replaceValue(username, value) {
        this.setState({ [username]: value});
    }
}

export default NmapBuilder;
