import React from 'react';
import './NmapHelper.css';
import TargetSpecification from './Techniques/TargetSpecification'
import ScanTechniques from './Techniques/ScanTechniques'
import HostDiscovery from './Techniques/HostDiscovery'
import PortSpecification from './Techniques/PortSpecification'
import ServiceandVersionDetection from './Techniques/ServiceandVersionDetection'
import OSDetection from './Techniques/OSDetection'
import TimingandPerformance from './Techniques/TimingandPerformance'
import AdvancedTimingandPerformance from './Techniques/AdvancedTimingandPerformance'
import NSEScripts from './Techniques/NSEScripts'
import FirewallIDSEvasionandSpoofing from './Techniques/FirewallIDSEvasionandSpoofing'
import Output from './Techniques/Output'
import MiscellaneousOptions from './Techniques/MiscellaneousOptions'


function NmapHelper() {
    return (
        <div className={"container"}>
            <TargetSpecification/>
            <ScanTechniques/>
            <HostDiscovery/>
            <PortSpecification/>
            <ServiceandVersionDetection/>
            <OSDetection/>
            <TimingandPerformance/>
            <AdvancedTimingandPerformance/>
            <NSEScripts/>
            <FirewallIDSEvasionandSpoofing/>
            <Output/>
            <MiscellaneousOptions/>
        </div>
    )
}

export default NmapHelper