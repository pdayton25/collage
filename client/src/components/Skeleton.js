import React from "react";
import './Skeleton.css';

const Skeleton = (numNfts) => {
    const mapNftCount = () => {
        for(let i = 0; i < numNfts; i++) {
            return (
                <div className="skele-card">
                    <div className="skele-name animate"></div>
                    <div className="skele-button animate"></div>
                </div>
            )
        }
    }
    return (
        <>
            {mapNftCount()}
            <div className="skele-card">
                <div className="skele-content-wrapper">
                    <div className="skele-name animate"></div>
                    <div className="skele-button animate"></div>
                </div>
                <div className="skele-swipe animate-swipe"></div>
            </div>
            <div className="skele-card">
                <div className="skele-content-wrapper">
                    <div className="skele-name animate"></div>
                    <div className="skele-button animate"></div>
                </div>
                <div className="skele-swipe animate-swipe"></div>
            </div>
            <div className="skele-card">
                <div className="skele-content-wrapper">
                    <div className="skele-name animate"></div>
                    <div className="skele-button animate"></div>
                </div>
                <div className="skele-swipe animate-swipe"></div>
            </div>
            <div className="skele-card">
                <div className="skele-content-wrapper">
                    <div className="skele-name animate"></div>
                    <div className="skele-button animate"></div>
                </div>
                <div className="skele-swipe animate-swipe"></div>
            </div>
        </>
    );
}

export default Skeleton;