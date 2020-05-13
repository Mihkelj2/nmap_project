import React from 'react';
import '../HelperItem.css';
import PostData from './FirewallIDSEvasionandSpoofing.json'

function FirewallIDSEvasionandSpoofing() {
    return (
        <div className={"divRight"}>
            <h1>Firewall / IDS Evasion and Spoofing</h1>
            <table>
                <tr>
                    <th>Switch</th>
                    <th>Example</th>
                    <th>Description</th>
                </tr>
                {PostData.map((postDetail, index) => {
                    return <tr>
                        <td>{postDetail.Switch}</td>
                        <td>{postDetail.Example}</td>
                        <td>{postDetail.Description}</td>
                    </tr>
                })}
            </table>
        </div>
    )
}

export default FirewallIDSEvasionandSpoofing;