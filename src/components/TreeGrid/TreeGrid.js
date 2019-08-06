import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import './TreeGrid.css';

import exampletree from '../../exampleTree.js'

export class TreeGrid extends Component {
    
    render() {
        const svgCircle = {
            "shape": "circle",
            "shapeProps": {
                "r": 10
            }
        }
        const position = {x: 230, y: 400}
        return (
            <div class="treeGrid">
                <div id="treeWrapper" class="treeBox">
                    <Tree 
                        data={exampletree}
                        nodeSvgShape={svgCircle}
                        translate={position}
                        allowForeignObjects
                        nodeLabelComponent={{
                            render: <NodeLabel className='myLabelComponentInSvg' />,
                            foreignObjectWrapper: {
                            x: 17,
                            y: -25
                            }
                        }}
                    />
                </div>
            </div>
        );
    }
}

class NodeLabel extends React.PureComponent {
    render() {
      const {className, nodeData} = this.props
      return (
        <div className={className}>
          <span style={{fontSize: '10px', fontFamily: 'Noto Sans KR'}}>{nodeData.name}</span>
        </div>
      )
    }
  }