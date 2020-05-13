import React from 'react';
import './NmapBuilder.css';
import ScanTechniques from "./ScanTechniques";
import HostDiscovery from "./HostDiscovery";
import TargetSpecification from "./TargetSpecification";
import OSDetection from "./OSDetection"
import TimingandPerformance from "./TimingandPerformance"
import Output from "./Output"



function NmapBuilder() {
    const StringBuilder = <div>
        <h1>Script:<h1 id={"Nscript"}></h1></h1>
    </div>;

    return (
        <div>
            {StringBuilder}
            <TargetSpecification />
            <ScanTechniques />
            <HostDiscovery />
            <OSDetection />
            <TimingandPerformance />
            <Output />
        </div>
    )
}

export default NmapBuilder;