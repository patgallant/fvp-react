import "./Banner.css";

import React, { Component } from "react";

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div className="fvp-app-banner">
                    FVP (Final Version <i>Perfected</i>)  
                </div>
                <div className="fvp-app-subbanner">
                    Based on the { " " }
                    <a 
                        href="http://markforster.squarespace.com/blog/2015/5/21/the-final-version-perfected-fvp.html" 
                        target="_blank" 
                        rel="noopener noreferrer">Final Version Perfected</a> productivity system developed by Mark Forster
                </div>
            </div>
        );
    }
}
