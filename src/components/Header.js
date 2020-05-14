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
                {/* Location of the logo */}
                <a href="https://github.com/0x0n0x" className={"cta"}>
                    <span>0x0n0x Github v1.2</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"/>
                        <polyline points="8 1 12 5 8 9"/>
                    </svg>
                </a>
                {/* Right place in the header */}
                <div className={"header-right"}>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/Trainer"}>Trainer</Link>
                    <Link to={"/AllCommands"}>Commands</Link>
                </div>
            </div>

            <Route exact path="/" component={Home}/>
            <Route exact path="/Trainer" component={Trainer}/>
            <Route exact path="/AllCommands" component={AllCommands}/>
            <Route exact path="/AboutNmap" component={yes}/>
        </Router>
    )
}

const Home = () => (
    <div>
        <NmapBuilder/>
    </div>
);
const yes = () => (
    <div>
        <AboutNmapz />
    </div>
);




const Trainer = () => (
    <Router>
        <div>
            <div className={"scrollmenu"}>
                <Link to={"/AdvancedTimingandPerformance"} className={"GameLink"}>Advanced Timing and Performance</Link>
                <Link to={"/FirewallIDSEvasionandSpoofing"} className={"GameLink"}>Firewall ID'S Evasion and Spoofing</Link>
                <Link to={"/HostDiscovery"} className={"GameLink"}>Host Discovery</Link>
                <Link to={"/MiscellaneousOptions"} className={"GameLink"}>Miscellaneous Options</Link>
                <Link to={"/NSEScripts"} className={"GameLink"}>NSE Scripts</Link>
                <Link to={"/OSDetection"} className={"GameLink"}>OS Detection</Link>
            </div>
            <div className={"scrollmenu"}>
                <Link to={"/Output"} className={"GameLink"}>Output</Link>
                <Link to={"/PortSpecification"} className={"GameLink"}>Port Specification</Link>
                <Link to={"/ScanTechniques"} className={"GameLink"}>Scan Techniques</Link>
                <Link to={"/ServiceandVersionDetection"} className={"GameLink"}>Service and Version Detection</Link>
                <Link to={"/TargetSpecification"} className={"GameLink"}>Target Specification</Link>
                <Link to={"/TimingandPerformance"} className={"GameLink"}>Timing and Performance</Link>
                <Link to={"/UsefulNSEScripts"} className={"GameLink"}>Useful NSES cripts</Link>
            </div>
        </div>
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
    </Router>
);

const AllCommands = () => (
    <div>
        <NmapHelper/>
    </div>
);

const AdvancedTimingandPerformance = () => (
    <div className={"FullBox"}>
        <NameForm PostData={DATA1}/>
    </div>
);

const FirewallIDSEvasionandSpoofing = () => (
    <div>
        <NameForm PostData={DATA2}/>
    </div>
);
const HostDiscovery = () => (
    <div>
        <NameForm PostData={DATA3}/>
    </div>
);
const MiscellaneousOptions = () => (
    <div>
        <NameForm PostData={DATA4}/>
    </div>
);
const NSEScripts = () => (
    <div>
        <NameForm PostData={DATA5}/>
    </div>
);
const OSDetection = () => (
    <div>
        <NameForm PostData={DATA6}/>
    </div>
);
const Output = () => (
    <div>
        <NameForm PostData={DATA7}/>
    </div>
);
const PortSpecification = () => (
    <div>
        <NameForm PostData={DATA8}/>
    </div>
);
const ScanTechniques = () => (
    <div>
        <NameForm PostData={DATA9}/>
    </div>
);
const ServiceandVersionDetection = () => (
    <div>
        <NameForm PostData={DATA10}/>
    </div>
);
const TargetSpecification = () => (
    <div>
        <NameForm PostData={DATA11}/>
    </div>
);
const TimingandPerformance = () => (
    <div>
        <NameForm PostData={DATA12}/>
    </div>
);
const UsefulNSEScripts = () => (
    <div>
        <NameForm PostData={DATA13}/>
    </div>
);


export default Header;