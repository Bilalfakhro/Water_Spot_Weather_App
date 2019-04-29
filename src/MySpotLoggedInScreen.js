import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/MySpotLoggedInScreen_elImage_413050.jpg';
import img_elWind_Surfing512 from './images/MySpotLoggedInScreen_elWind_Surfing512_507898.png';
import img_elSunnyPeriod from './images/MySpotLoggedInScreen_elSunnyPeriod_775404.png';
import img_elWave from './images/MySpotLoggedInScreen_elWave.png';
import Comp3 from './Comp3';
import firebase from 'firebase';
import firestore from 'firebase/firestore';


export default class MySpotLoggedInScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo, main, wind, weather, name

  onClick_elComp3 = (ev) => {
    // 'Sign out (lock gate)' action.
    this.clearSavedLogin();
    this.props.appActions.goToScreen('login');
  
    // Go to screen 'My Spot not logged in'
    this.props.appActions.goToScreen('myspotnotloggedin', { transitionId: 'fadeIn' });
  
  }
  
  
  clearSavedLogin() {
    // Logout
    firebase.auth().signOut();
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elImage = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    let transformPropValue_wind_Surfing512 = (input) => {
      // This function modifies the value for property 'image'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      //return input;
      
      // Alvar Arias version 2
      
      var factor = 2.237;
      
      var k = 1.15;
      
      var deporte = [];
      var url="";
      
      var speed = input;
      
      var vel = parseFloat(speed)*factor;
      
      console.log(vel);
      
      //Kite surfing 
      if (speed >= 10 && speed <= 25){
        deporte.push(" Kite surfing small ");
        url="http://alvararias.se/test/iconos/icons8-kitesurfin….png";
      }
      
      //water swimming 
      if (speed <= 5) {
       deporte.push(" Open water swimming "); 
       url="http://alvararias.se/test/iconos/icons8-diving-50.png"; 
      }  
      
      //Surf	
      if (speed > 5 && speed < 10){
      	deporte.push(" Surf ");
      url="http://alvararias.se/test/iconos/icons8-surf-50.png";  
      }
      
      console.log("al final vel= "+speed);
      console.log("deporte= "+deporte);
      
      return url;
    }
    const style_elWind_Surfing512 = {
        backgroundImage: 'url('+(transformPropValue_wind_Surfing512(this.props.wind ? this.props.wind.speed : '') || img_elWind_Surfing512)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    let transformPropValue_sunnyPeriod = (input) => {
      // This function modifies the value for property 'image'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      //return input;
      
      var url="";
      console.log(input);
      if(input){
      let inputObject = input[0];
      console.log(inputObject);
      if(inputObject){
      var newicon = inputObject.icon;
      url="http://openweathermap.org/img/w/"+newicon+".png";
      }}
      return url;
    }
    const style_elSunnyPeriod = {
        backgroundImage: 'url('+(transformPropValue_sunnyPeriod(this.props.weather) || img_elSunnyPeriod)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    let transformPropValue_windDerection = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      var grados = input;
      var direccion ="";
      
      if ( grados >= 337.5 && grados <= 360)  {
        
        direccion ="N";
      }
      
      
      if ( grados >= 0 && grados < 22.5)  {
        
        direccion ="N";
      }
      
      if ( grados >= 22.5 && grados < 67.5)  {
        
        direccion ="NE";
      }
      
      if ( grados >= 67.5 && grados < 112.5)  {
        
        direccion ="E";
      }
      
      if ( grados >= 112.5 && grados < 157.5)  {
        
        direccion ="SE";
      }
      
      if ( grados >= 157.5 && grados < 202.5)  {
        
        direccion ="S";
      }
      
      if ( grados >= 202.5 && grados < 247.5)  {
        
        direccion ="SW";
      }
      
      if ( grados >= 247.5 && grados < 292.5)  {
        
        direccion ="W";
      }
        
      if ( grados >= 292.5 && grados < 337.5)  {
        
        direccion ="NW";
          
      }
      
      return direccion;
    }
    const style_elWindDerection = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#ff2600',
        textAlign: 'left',
        textShadow: '#00f900 0.0px 0.7px 0.0px',
     };
    const value_windDerection = transformPropValue_windDerection(this.props.wind ? this.props.wind.deg : '');
    
    const style_elWindDerectionText = {
        fontSize: 17.2,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'right',
     };
    let transformPropValue_windSpeed = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      //return parseInt(input);
      
      var msg = input;
      var num = parseFloat(msg);
      var num2 = num.toFixed(1);
      
      return num2;
    }
    const style_elWindSpeed = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#ff2600',
        textAlign: 'left',
     };
    const value_windSpeed = transformPropValue_windSpeed(this.props.wind ? this.props.wind.speed : '');
    
    const style_elWindSpeedText = {
        fontSize: 17.2,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'right',
     };
    const style_elSpotText = {
        fontSize: 30.1,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'center',
     };
    const value_spotText = this.props.name;
    
    const style_elTempraturText = {
        fontSize: 19.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'right',
     };
    let transformPropValue_temprature = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      return parseInt(input);
    }
    const style_elTemprature = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#ff2600',
        textAlign: 'left',
     };
    const value_temprature = transformPropValue_temprature(this.props.main ? this.props.main.temp : '');
    
    const style_elFeelsLikeText = {
        fontSize: 19.4,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(0, 0, 0, 0.8500)',
        textAlign: 'right',
     };
    let transformPropValue_fellsLikeTemp = (input) => {
      // This function modifies the value for property 'text'.
      // There is a variable named 'input' that provides the property value.
      //
      // Handy example code snippets
      //
      // Update current component’s State from 0 to n
      //
      // this.setState({visualStateIndexOverride: 1})
      //
      // Playing with Data slot values
      //
      // Get data slot value
      //
      // var exampleValue="";
      // exampleValue=this.props.appActions.dataSlots['ds_Example'];
      //
      // Update data slot value
      //
      // var exampleValue="foo";
      // this.props.appActions.updateDataSlot('ds_Example', exampleValue);
      
      //return parseInt(input);
      
       
      var myJson={};
      if(typeof(input) !== "object"){
      try { 
      var myJson=JSON.parse(input);
      } catch(error){console.log(error);}
      } else {
        myJson=input;
      }
      var T = myJson.temp;
      
      T = parseFloat(T);
      
      var R = myJson.humidity;
      
      R = parseFloat(R);
      
      var TFeelsLike;
      var c1 = (8.78469475556*-1); 
      var c2 = 1.61139411;
      var c3 = 2.33854883889;
      var c4 = -0.14611605;
      var c5 = -0.012308094;
      var c6 = -0.0164248277778;
      var c7 = 0.002211732;
      var c8 = 0.00072546;
      var c9 = -0.000003582;
      
      TFeelsLike = c1+(c2*T)+(c3*R)+(c4*T*R)+(c5*T*T)+(c6*R*R)+(c7*T*T*R)+(c8*T*R*R)+(c9*T*T*R*R);
      console.log(TFeelsLike);
      
      
      return parseInt(TFeelsLike);
    }
    const style_elFellsLikeTemp = {
        fontSize: 23.7,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: '#ff2600',
        textAlign: 'left',
     };
    const value_fellsLikeTemp = transformPropValue_fellsLikeTemp(this.props.main);
    
    const style_elWave = {
        backgroundImage: 'url('+img_elWave+')',
        backgroundSize: '100% 100%',
     };
    const style_elComp3 = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen MySpotLoggedInScreen" style={baseStyle}>
        <div className="background">
          <div className='elImage' style={style_elImage} />
          <div className='elWind_Surfing512' style={style_elWind_Surfing512} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="flowRow flowRow_MySpotLoggedInScreen_elSunnyPeriod_775404">
          <div className='elSunnyPeriod'>
            <div style={style_elSunnyPeriod} />
          
          </div>
          
          <div className='elWindDerection'>
            <div style={style_elWindDerection}>
              <div>{value_windDerection !== undefined ? value_windDerection : (<span className="propValueMissing">{this.props.locStrings.myspot2_windderection_755898}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elWindDerectionText'>
            <div style={style_elWindDerectionText}>
              <div>{this.props.locStrings.myspot2_windderectiontext_1027464}</div>
            </div>
          
          </div>
          
          <div className='elWindSpeed'>
            <div style={style_elWindSpeed}>
              <div>{value_windSpeed !== undefined ? value_windSpeed : (<span className="propValueMissing">{this.props.locStrings.myspot2_windspeed_274028}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elWindSpeedText'>
            <div style={style_elWindSpeedText}>
              <div>{this.props.locStrings.myspot2_windspeedtext_392080}</div>
            </div>
          
          </div>
          
          <div className='elSpotText'>
            <div style={style_elSpotText}>
              <div>{value_spotText !== undefined ? value_spotText : (<span className="propValueMissing">{this.props.locStrings.myspot2_feelsliketext_413782}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elTempraturText'>
            <div style={style_elTempraturText}>
              <div>{this.props.locStrings.myspot2_tempraturtext_299605}</div>
            </div>
          
          </div>
          
          <div className='elTemprature'>
            <div style={style_elTemprature}>
              <div>{value_temprature !== undefined ? value_temprature : (<span className="propValueMissing">{this.props.locStrings.myspot2_temprature_798725}</span>)}</div>
            </div>
          
          </div>
          
          <div className='elFeelsLikeText'>
            <div style={style_elFeelsLikeText}>
              <div>{this.props.locStrings.myspotloggedin_tempraturtext_115248}</div>
            </div>
          
          </div>
          
          <div className='elFellsLikeTemp'>
            <div style={style_elFellsLikeTemp}>
              <div>{value_fellsLikeTemp !== undefined ? value_fellsLikeTemp : (<span className="propValueMissing">{this.props.locStrings.myspotloggedin_temprature_172980}</span>)}</div>
            </div>
          
          </div>
          
          </div>
        </div>
        <div className="screenFgContainer">
          <div className="foreground">
            <div className='elWave' style={style_elWave} />
            <div className='hasNestedComps elComp3' style={style_elComp3} onClick={this.onClick_elComp3} >
              <Comp3 ref={(el)=> this._elComp3 = el} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

}
