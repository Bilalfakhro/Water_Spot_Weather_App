import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class FirebaseLogin extends Component {

  constructor(props) {
    super(props);
    
    this.autosignInEnabled = true;
    
    this.firebaseUIConfig = {
      signInFlow: 'popup',
      signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          //var credential = authResult.credential;
          //var isNewUser = authResult.additionalUserInfo.isNewUser;
          //var providerId = authResult.additionalUserInfo.providerId;
          //var operationType = authResult.operationType;
          this.saveCurrentUserDataInApp();
          this.loginSuccess();
          return false;
        },
        signInFailure: (error) => {
          console.error("** Firebase sign-in failed: ", error);
          this.loginFailed(error);
          return false;
        },
      }
    };
  }
  
  saveCurrentUserDataInApp() {
    var user = firebase.auth().currentUser;
    var userName = user.displayName;
    var email = user.email;
    var userPhotoUrl = user.photoURL;
    var userId = user.uid;          
    console.log("got user: %s, %s, uid %s", userName, email, userId);
    
    ((v) => { this.props.appActions.updateDataSlot("ds_userName", v) })(userName);
    ((v) => { this.props.appActions.updateDataSlot("ds_email", v) })(email || '');
    ((v) => { this.props.appActions.updateDataSlot("ds_userPhoto", v) })(userPhotoUrl);
    ((v) => { this.props.appActions.updateDataSlot("ds_userUID", v) })(userId);
  }

  loginSuccess() {
    this.props.appActions.goToScreen('myspotloggedin');
    

  }
  
  loginFailed(err) {
    // This is typically never called by Firebase UI because the sign-in flow is handled as a popup.
    // We're including this code from React Studio as documentation for other plugins.
    this.props.appActions.goToScreen('login', { errorText: ''+err });
    

  }
  
  render() {
    return (
      <StyledFirebaseAuth uiCallback={ui => {if (!this.autosignInEnabled) ui.disableAutoSignIn();}} uiConfig={this.firebaseUIConfig} firebaseAuth={firebase.auth()}/>
    )
  }
}
