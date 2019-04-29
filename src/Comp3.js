import React, { Component } from 'react';
import './App.css';
import img_state0_elUserHeartFull from './images/Comp3_state0_elUserHeartFull.png';
import img_state1_elUser from './images/Comp3_state1_elUser.png';


export default class Comp3 extends Component {

  // Properties used by this component:
  // visualStateIndex

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state0_elUserHeartFull = {
        backgroundImage: 'url('+img_state0_elUserHeartFull+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Comp3" style={baseStyle}>
        <div className="foreground">
          <div className='state0_elUserHeartFull' style={style_state0_elUserHeartFull} />
        </div>
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_state1_elUser = {
        backgroundImage: 'url('+img_state1_elUser+')',
        backgroundSize: '100% 100%',
     };
    
    return (
      <div className="Comp3" style={baseStyle}>
        <div className="foreground">
          <div className='state1_elUser' style={style_state1_elUser} />
        </div>
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
