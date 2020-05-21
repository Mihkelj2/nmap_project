import React from 'react';
import './Header.css';
import './NameForm.css';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import NmapBuilder from "./NmapBuilder";
import NmapHelper from "./NmapHelper";
import AboutNmapz from "./AboutNmapz";
import NameForm from "./NameForm";
import DATA1 from './Techniques/AdvancedTimingandPerformance.json'
import DATA2 from './Techniques/FirewallIDSEvasionandSpoofing.json'
import DATA3 from './Techniques/HostDiscovery.json'
import DATA4 from './Techniques/MiscellaneousOptions.json'
import DATA5 from './Techniques/NSEScripts.json'
import DATA6 from './Techniques/OSDetection.json'
import DATA7 from './Techniques/Output.json'
import DATA8 from './Techniques/PortSpecification.json'
import DATA9 from './Techniques/ScanTechniques.json'
import DATA10 from './Techniques/ServiceandVersionDetection.json'
import DATA11 from './Techniques/TargetSpecification.json'
import DATA12 from './Techniques/TimingandPerformance.json'
import DATA13 from './Techniques/UsefulNSEScripts.json'


function Header() {
    return (
        <Router>
            <div className={"header"}>
                <a href="https://github.com/0x0n0x" className={"cta"}>
                    <span>0x0n0x Github v1.4</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"/>
                        <polyline points="8 1 12 5 8 9"/>
                    </svg>
                </a>
                <div className={"header-right"}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Trainer"}>Trainer</Link>
                    <Link to={"/AllCommands"}>Commands</Link>
                </div>
            </div>

            <Route exact path="/" component={Home}/>
            <Route exact path="/Trainer" component={Trainer}/>
            <Route exact path="/AllCommands" component={AllCommands}/>
        </Router>
    )
}

const Home = () => (
    <div>
        <NmapBuilder/>
    </div>
);

const Trainer = () => (
    <Router>
        <div className={"TrainerPanel"}>
            <div className={"trainerBox"}>
                <Route exact path="/AdvancedTimingandPerformance" component={AdvancedTimingandPerformance}/>
                <Route exact path="/FirewallIDSEvasionandSpoofing" component={FirewallIDSEvasionandSpoofing}/>
                <Route exact path="/HostDiscovery" component={HostDiscovery}/>
                <Route exact path="/MiscellaneousOptions" component={MiscellaneousOptions}/>
                <Route exact path="/NSEScripts" component={NSEScripts}/>
                <Route exact path="/OSDetection" component={OSDetection}/>
                <Route exact path="/Output" component={Output}/>
                <Route exact path="/PortSpecification" component={PortSpecification}/>
                <Route exact path="/ScanTechniques" component={ScanTechniques}/>
                <Route exact path="/ServiceandVersionDetection" component={ServiceandVersionDetection}/>
                <Route exact path="/TargetSpecification" component={TargetSpecification}/>
                <Route exact path="/TimingandPerformance" component={TimingandPerformance}/>
                <Route exact path="/UsefulNSEScripts" component={UsefulNSEScripts}/>
            </div>


            <div className={"sidenav"}>
                <Link to={"/AdvancedTimingandPerformance"} className={"GameLink"}>Advanced Timing and Performance</Link>
                <Link to={"/FirewallIDSEvasionandSpoofing"} className={"GameLink"}>Firewall ID'S Evasion and
                    Spoofing</Link>
                <Link to={"/HostDiscovery"} className={"GameLink"}>Host Discovery</Link>
                <Link to={"/MiscellaneousOptions"} className={"GameLink"}>Miscellaneous Options</Link>
                <Link to={"/NSEScripts"} className={"GameLink"}>NSE Scripts</Link>
                <Link to={"/OSDetection"} className={"GameLink"}>OS Detection</Link>

                <Link to={"/Output"} className={"GameLink"}>Output</Link>
                <Link to={"/PortSpecification"} className={"GameLink"}>Port Specification</Link>
                <Link to={"/ScanTechniques"} className={"GameLink"}>Scan Techniques</Link>
                <Link to={"/ServiceandVersionDetection"} className={"GameLink"}>Service and Version Detection</Link>
                <Link to={"/TargetSpecification"} className={"GameLink"}>Target Specification</Link>
                <Link to={"/TimingandPerformance"} className={"GameLink"}>Timing and Performance</Link>
                <Link to={"/UsefulNSEScripts"} className={"GameLink"}>Useful NSES cripts</Link>
            </div>
        </div>


    </Router>
);

const AllCommands = () => (
    <div>
        <NmapHelper/>
    </div>
);

const AdvancedTimingandPerformance = () => (
    <NameForm PostData={DATA1}/>
);

const FirewallIDSEvasionandSpoofing = () => (
    <NameForm PostData={DATA2}/>
);
const HostDiscovery = () => (
    <NameForm PostData={DATA3}/>
);
const MiscellaneousOptions = () => (
    <NameForm PostData={DATA4}/>
);
const NSEScripts = () => (
    <NameForm PostData={DATA5}/>
);
const OSDetection = () => (
    <NameForm PostData={DATA6}/>
);
const Output = () => (
    <NameForm PostData={DATA7}/>
);
const PortSpecification = () => (
    <NameForm PostData={DATA8}/>
);
const ScanTechniques = () => (
    <NameForm PostData={DATA9}/>
);
const ServiceandVersionDetection = () => (
    <NameForm PostData={DATA10}/>
);
const TargetSpecification = () => (
    <NameForm PostData={DATA11}/>
);
const TimingandPerformance = () => (
    <NameForm PostData={DATA12}/>
);
const UsefulNSEScripts = () => (
    <NameForm PostData={DATA13}/>
);


export default Header;