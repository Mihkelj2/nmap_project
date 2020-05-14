import React from 'react';
import './NmapBuilder2.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class NmapBuilder extends React.Component {
    state = {
        userIp: "(Insert IP)",
        TargetScan: "",
        ScanTechniques: "",
        PortSpecification: "",
        PortScanUserInput: "",
        TimingAndPerformance: "",
        Output: "",
        OutputUserInput: ""
    }

    handleChange = ({target}) => {
        let updatedString;
        updatedString = target.value === "" ? "(Insert Ip)" : target.value;
        this.setState({
            userIp: updatedString
        })
    }

    upDateIpSpec = ({target}) => {
        this.setState({
            PortScanUserInput: target.value,
        })
    }
    upDateOutSpec = ({target}) => {
        this.setState({
            OutputUserInput: target.value,
        })
    }

    AddTargetScan = ({target}) => {
        let updatedString;
        if (this.state.TargetScan.includes(target.value)){
            updatedString = ""
        } else {
            updatedString = target.value
        }
        this.setState({
            TargetScan: updatedString
        })
    }

    AddScanTechniques = ({target}) => {
        let updatedString = this.state.ScanTechniques
        if (this.state.ScanTechniques.includes(target.value)){
            updatedString = updatedString.replace(target.value, "")
        } else {
            updatedString = updatedString + " " + target.value
        }
        this.setState({
            ScanTechniques: updatedString
        })
    }

    AddPortSpecification = ({target}) => {
        let updatedString = this.state.PortSpecification
        if (this.state.PortScanUserInput === "" && target.id === "1"){
            alert("Port must be entered")
        } else {
            if (updatedString.includes(target.value + " " + this.state.PortScanUserInput)){
                updatedString = ""
            } else {
                if (target.id === "1"){
                    updatedString = target.value + " " + this.state.PortScanUserInput
                } else {
                    updatedString = target.value
                }
            }
            this.setState({
                PortSpecification: updatedString
            })
        }
    }


    addToTimingAndPerformance = ({target}) => {
        let updatedString = this.state.TimingAndPerformance
        if (updatedString.includes(target.value) && target.id === "1") {
            updatedString = updatedString.replace(target.value + " " + this.state.OutputUserInput, "")
        } else if (updatedString.includes(target.value) && target.id === "0") {
            updatedString = updatedString.replace(target.value, "")
        } else {
            updatedString = target.value
        }
        this.setState({
            TimingAndPerformance: updatedString
        })
    }

    AddOutput = ({target}) => {
        let updatedString = this.state.Output
        if (this.state.OutputUserInput === "" && target.id === "1"){
            alert("File Name must be entered")
        } else {
            if (updatedString.includes(target.value) && target.id === "1"){
                updatedString = updatedString.replace(target.value + " " + this.state.OutputUserInput, "")
            } else if (updatedString.includes(target.value) && target.id === "0"){
                updatedString = updatedString.replace(target.value, "")
            } else {
                if (target.id === "1"){
                    updatedString = target.value + " " + this.state.OutputUserInput
                } else if (target.id === "0"){
                    updatedString = updatedString + " " + target.value
                }
            }
        }

        this.setState({
            Output: updatedString
        })
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <h1 className={"Script"} id={"script"}>nmap {this.state.TargetScan} {this.state.userIp} {this.state.ScanTechniques} {this.state.PortSpecification} {this.state.TimingAndPerformance} {this.state.Output}</h1>
                    <CopyToClipboard text={"nmap" +
                    this.state.TargetScan + " " +
                    this.state.userIp +
                    this.state.ScanTechniques + " " +
                    this.state.PortSpecification + " " +
                    this.state.TimingAndPerformance + " " +
                    this.state.Output}
                                     onCopy={() => alert("The Code Has Been Copied")}>

                        <button className={"CenterMe"}>Copy Code</button>
                    </CopyToClipboard>
                </div>

                <div className={"row"}>

                    <div className={"column"}>
                        <h2>1. Target Specification</h2>
                        <form>
                            <label>Scan Aadress: </label>
                            <input type="text" onChange={this.handleChange}/>
                        </form>
                        <button onClick={this.AddTargetScan} value={"-iL"} className={"coolBeans"}>Scan targets from a file</button>
                    </div>
                    <div className={"column"} style={{gridColumn: "1/3"}}>
                        <h2>2. Scan Techniques</h2>
                        <button onClick={this.AddScanTechniques} value={"-sS"} className={"coolBeans"}>TCP SYN port scan (Default)</button>
                        <button onClick={this.AddScanTechniques} value={"-sT"} className={"coolBeans"}>TCP connect port scan (Default without root privilege)</button>
                        <button onClick={this.AddScanTechniques} value={"-sU"} className={"coolBeans"}>UDP port scan</button>
                        <button onClick={this.AddScanTechniques} value={"-sA"} className={"coolBeans"}>TCP ACK port scan</button>
                        <button onClick={this.AddScanTechniques} value={"-sW"} className={"coolBeans"}>TCP Window port scan</button>
                        <button onClick={this.AddScanTechniques} value={"-sM"} className={"coolBeans"}>TCP Maimon port scan</button>
                        <button onClick={this.AddScanTechniques} value={"-sC"} className={"coolBeans"}>Scan with default NSE scripts. Considered useful for discovery and safe</button>
                    </div>
                    <div className={"column"}>
                        <h2>3. Port Specification</h2>
                        <form>
                            <label>Port: </label><input type="text" name="IpSpec" onChange={this.upDateIpSpec} />
                        </form>
                        <button onClick={this.AddPortSpecification} value={"-p"} className={"coolBeans"} id={1}>Port scan for port x</button>
                        <button onClick={this.AddPortSpecification} value={"-p"} className={"coolBeans"} id={1}>Port range</button>
                        <button onClick={this.AddPortSpecification} value={"-p"} className={"coolBeans"} id={1}>Port scan multiple TCP and UDP ports</button>
                        <button onClick={this.AddPortSpecification} value={"-p-"} className={"coolBeans"} id={0}>Port scan all ports</button>
                        <button onClick={this.AddPortSpecification} value={"-p"} className={"coolBeans"} id={1}>Port scan from service name ex. http,https</button>
                        <button onClick={this.AddPortSpecification} value={"-F"} className={"coolBeans"} id={0}>Fast port scan (100 ports)</button>
                        <button onClick={this.AddPortSpecification} value={"--top-ports"} className={"coolBeans"} id={1}>Port scan the top x ports</button>
                    </div>
                    <div className={"column"}>
                        <h2>4. Timing and Performance</h2>
                        <button onClick={this.addToTimingAndPerformance} value={"-T0"} className={"coolBeans"}>Paranoid (0) Intrusion Detection System evasion</button>
                        <button onClick={this.addToTimingAndPerformance} value={"-T1"} className={"coolBeans"}>Sneaky (1) Intrusion Detection System evasion</button>
                        <button onClick={this.addToTimingAndPerformance} value={"-T2"} className={"coolBeans"}>Polite (2) slows down the scan to use less bandwidth and use less target machine resources</button>
                        <button onClick={this.addToTimingAndPerformance} value={"-T3"} className={"coolBeans"}>Normal (3) which is default speed</button>
                        <button onClick={this.addToTimingAndPerformance} value={"-T4"} className={"coolBeans"}>Aggressive (4) speeds scans; assumes you are on a reasonably fast and reliable network</button>
                        <button onClick={this.addToTimingAndPerformance} value={"-T5"} className={"coolBeans"}> Insane (5) speeds scan; assumes you are on an extraordinarily fast network</button>
                    </div>
                    <div className={"column"}>
                        <h2>4. Output</h2>
                        <form>
                            <label htmlFor="username">File Name: </label>
                            <input type="text" name="OutSpec" onChange={this.upDateOutSpec}/>
                        </form>
                        <button onClick={this.AddOutput} value={"-oN"} className={"coolBeans"} id={1}>Normal output to the file normal.file</button>
                        <button onClick={this.AddOutput} value={"-oX"} className={"coolBeans"} id={1}>XML output to the file xml.file</button>
                        <button onClick={this.AddOutput} value={"-oG"} className={"coolBeans"} id={1}>Grepable output to the file grep.file</button>
                        <button onClick={this.AddOutput} value={"-oA"} className={"coolBeans"} id={1}>Output in the three major formats at once</button>
                        <button onClick={this.AddOutput} value={"--open"} className={"coolBeans"} id={0}>Only show open (or possibly open) ports</button>
                        <button onClick={this.AddOutput} value={"-v"} className={"coolBeans"} id={0}>Increase the verbosity level (use -vv or more for greater effect)</button>
                        <button onClick={this.AddOutput} value={"--append-output"} className={"coolBeans"} id={0}>Append a scan to a previous scan file</button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default NmapBuilder;
