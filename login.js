(function(){
     var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        signInSuccessUrl: 'index.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          
        ]
        };
      

      // Initialize the FirebaseUI Widget using Firebase.
     
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
    
})()