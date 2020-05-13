import React from 'react';
import './NmapBuilder2.css';

class NmapBuilder extends React.Component {
    state = {
        myString: "",
        ipSpec: "",
        OutSpec: ""
    }

    handleChange = ({target}) => {
        this.setState({
            myString: target.value
        })
    }

    onItemAdd = ({target}) => {
        let indexValue;
        /* Checks if Target is given */
        if (this.state.myString.includes(target.value)) {
            indexValue = this.state.myString.replace(target.value, "")
        } else {
            indexValue = this.state.myString + " " + target.value
        }

        this.setState({
            myString: indexValue
        })
    }

    onItemAddAndValue = ({target}) => {
        let indexValue;
        let fullValue = target.value + " " + this.state.ipSpec
        if (this.state.myString.includes(fullValue)) {
            indexValue = this.state.myString.replace(fullValue, "")
        } else {
            indexValue = this.state.myString + " " + fullValue
        }

        this.setState({
            myString: indexValue
        })
    }
    onItemAddOutPut = ({target}) => {
        let indexValue;
        let fullValue = target.value + " " + this.state.OutSpec
        if (this.state.myString.includes(fullValue)) {
            indexValue = this.state.myString.replace(fullValue, "")
        } else {
            indexValue = this.state.myString + " " + fullValue
        }

        this.setState({
            myString: indexValue
        })
    }

    onItemAddBeginning = ({target}) => {
        let indexValue;
        if (this.state.myString.includes(target.value)) {
            indexValue = this.state.myString.replace(target.value, "")
        } else {
            indexValue = target.value + " " + this.state.myString
        }

        this.setState({
            myString: indexValue
        })
    }

    upDateIpSpec = ({target}) => {
        this.setState({
            ipSpec: target.value
        })
    }

    upDateOutSpec = ({target}) => {
        this.setState({
            OutSpec: target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className={"MainHeader"}>Your Script is: <h2 className={"Script"}>nmap {this.state.myString}</h2></h1>
                <div className={"row"}>
                    <div className={"column"}>
                        <h2>1. Target Specification</h2>
                        <form>
                            <label htmlFor="username">Scan Aadress: </label>
                            <input
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                            />
                        </form>
                        <button onClick={this.onItemAdd} value={""} className={"button"}>Scan a single IP</button>
                        <button onClick={this.onItemAddBeginning} value={"-iL"} className={"button"}>Scan targets from a file</button>
                    </div>
                    <div className={"column"}>
                        <h2>2. Scan Techniques</h2>
                        <button onClick={this.onItemAdd} value={"-sS"} className={"button"}>TCP SYN port scan (Default)</button>
                        <button onClick={this.onItemAdd} value={"-sT"} className={"button"}>TCP connect port scan (Default without root
                            privilege)
                        </button>
                        <button onClick={this.onItemAdd} value={"-sU"} className={"button"}>UDP port scan</button>
                        <button onClick={this.onItemAdd} value={"-sA"} className={"button"}>TCP ACK port scan</button>
                        <button onClick={this.onItemAdd} value={"-sW"} className={"button"}>TCP Window port scan</button>
                        <button onClick={this.onItemAdd} value={"-sM"} className={"button"}>TCP Maimon port scan</button>
                        <button onClick={this.onItemAdd} value={"-sC"} className={"button"}>Scan with default NSE scripts. Considered useful
                            for
                            discovery and safe
                        </button>
                    </div>
                    <div className={"column"}>
                        <h2>3. Port Specification</h2>
                        <form>
                            <label htmlFor="username">Spec: </label>
                            <input
                                type="text"
                                name="IpSpec"
                                onChange={this.upDateIpSpec}
                            />
                        </form>
                        <button onClick={this.onItemAdd} value={"-p"} className={"button"}>Port scan for port x</button>
                        <button onClick={this.onItemAddAndValue} value={"-p"} className={"button"}>Port range</button>
                        <button onClick={this.onItemAddAndValue} value={"-p"} className={"button"}>Port scan multiple TCP and UDP ports
                        </button>
                        <button onClick={this.onItemAdd} value={"-p-"} className={"button"}>Port scan all ports</button>
                        <button onClick={this.onItemAddAndValue} value={"-p"} className={"button"}>Port scan from service name ex. http,https
                        </button>
                        <button onClick={this.onItemAdd} value={"-F"} className={"button"}>Fast port scan (100 ports)</button>
                        <button onClick={this.onItemAddAndValue} value={"--top-ports"} className={"button"}>Port scan the top x ports
                        </button>
                    </div>
                    <div className={"column"}>
                        <h2>4. Timing and Performance</h2>
                        <button onClick={this.onItemAdd} value={"-T0"} className={"button"}>Paranoid (0) Intrusion Detection System evasion
                        </button>
                        <button onClick={this.onItemAdd} value={"-T1"} className={"button"}>Sneaky (1) Intrusion Detection System evasion
                        </button>
                        <button onClick={this.onItemAdd} value={"-T2"} className={"button"}>Polite (2) slows down the scan to use less
                            bandwidth and
                            use less target machine resources
                        </button>
                        <button onClick={this.onItemAdd} value={"-T3"} className={"button"}>Normal (3) which is default speed</button>
                        <button onClick={this.onItemAdd} value={"-T4"} className={"button"}>Aggressive (4) speeds scans; assumes you are on a
                            reasonably fast and reliable network
                        </button>
                        <button onClick={this.onItemAdd} value={"-T5"} className={"button"}> Insane (5) speeds scan; assumes you are on an
                            extraordinarily fast network
                        </button>
                    </div>
                    <div className={"column"}>
                        <h2>4. Output</h2>
                        <form>
                            <label htmlFor="username">File Name: </label>
                            <input
                                type="text"
                                name="OutSpec"
                                onChange={this.upDateOutSpec}
                            />
                        </form>
                        <button onClick={this.onItemAddOutPut} value={"-oN"} className={"button"}>Normal output to the file normal.file
                        </button>
                        <button onClick={this.onItemAddOutPut} value={"-oX"} className={"button"}>XML output to the file xml.file</button>
                        <button onClick={this.onItemAddOutPut} value={"-oG"} className={"button"}>Grepable output to the file grep.file
                        </button>
                        <button onClick={this.onItemAdd} value={"--open"} className={"button"}>Only show open (or possibly open) ports
                        </button>
                        <button onClick={this.onItemAdd} value={"-v"} className={"button"}>Increase the verbosity level (use -vv or more for
                            greater effect)
                        </button>
                        <button onClick={this.onItemAdd} value={"--append-output"} className={"button"}>Append a scan to a previous scan
                            file
                        </button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default NmapBuilder;
