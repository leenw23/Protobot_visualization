import React, { Component } from 'react';
import './RightSideBar.css';

export class RightSideBar extends Component {
    render() {
        return (
            <div class="rightSideGrid">
                <div class="protobotLogo">Protobot</div>
                <div class="rightInsBox">
                    <div class="textCenter">
                        Instruction
                    </div>
                </div>
                <div class="rightInfoBox">
                    <div class="textCenter">
                        Button
                    </div>
                </div>
            </div>
        );
    }
}