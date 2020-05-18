var logged = {};

(function(){
    var firebase = firebase_app;
    firebase.auth().onAuthStateChanged(function(user){
        if(user){
           document.getElementById("name").innerHTML = "Logout " + user.displayName;
        }else{
            window.location = "login.html";
        }
    });
    
    function logOut(){
        firebase.auth().signOut();
    }
    function onLoaded(){
        
    }
    
    logged.logOut = logOut;
    logged.onLoaded = onLoaded;
})()