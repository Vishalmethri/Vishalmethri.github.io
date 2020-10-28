function signup()  {
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    var confirmpassword = document.getElementById("confirm_password_input").value;
    if(password == confirmpassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
            window.location.href = "pricing.html";
        }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
    } else {
    alert(errorMessage);
    }
    console.log(error);
    // [END_EXCLUDE]
    });
    }
    else {
        alert("Password Doesn't Match.");
    }
}
// End Sign UP





// Sign IN Function
function signin(){
    var email = document.getElementById("email_input").value;
    var password = document.getElementById("password_input").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        window.location.href = "afterLogin.html";
    }).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// [START_EXCLUDE]
if (errorCode === 'auth/wrong-password') {
alert('Wrong password.');
} else {
alert(errorMessage);
}
console.log(error);
//document.getElementById('signIn').disabled = false;
// [END_EXCLUDE]
});
}
// End Sign IN






// Sign IN with Google
function signInWithGoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        window.location.href = "afterlogin.html";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(error);
        // The email of the user's account used.
        var email = error.email;
        alert(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert(credential);
      });
}
// End Sign in with Google


// Sign in with Facebook
function signInWithFacebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        window.location.href = "afterlogin.html";
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        alert(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        alert(credential);
        // ...
      });
}



//End Sign in with Favebook








// Sign Out
function signout() {
    firebase.auth().signOut()
    .then(() => {
      sessionStorage.setItem("email", null);
      sessionStorage.setItem("displayName", null);
      sessionStorage.setItem("user", null);
      window.location.href = "index.html";
    }).catch(function(error) {
        // An error happened.
      });
      // window.location.href = "index.html";
}
//ENd SIgn OUt


// Password Reset Start
function passwordReset(){
    var email = document.getElementById("email_input").value;
    var auth = firebase.auth();
    var emailAddress = "user@example.com";

    auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    window.location.href = "login.html";
    }).catch(function(error) {
    // An error happened.
    var errorMessage = error.message;
    alert(errorMessage);
    });
}


function changeDisplayName(){
    var name = document.getElementById("name_input").value;
    var user = firebase.auth().currentUser;
    if (name != ""){
    user.updateProfile({displayName: name})
  .then(function() {
  // Update successful.
  sessionStorage.setItem("displayName",name);
  window.location.href = "afterLogin.html";
}).catch(function(error) {
  // An error happened.
});
}
  else{
    alert("Enter the display name");
  }
}



// Password Reset End


// On Auth State CHange
firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser) {
    console.log(firebaseUser);
    sessionStorage.setItem("email", firebaseUser.email);
    sessionStorage.setItem("displayName", firebaseUser.displayName);
    sessionStorage.setItem("user", firebaseUser);
    //window.location.replace("afterlogin.html");
    //document.getElementById("signIn").style.display = "none";
    //document.getElementById("signUp").style.display = "none";
    //document.getElementById("signOut").style.display = "block";
    //window.location.href = "googleLogin.html";
    //document.getElementById("displayEmail").innerHTML = firebaseUser.email;
}
else {
    console.log("Not Logged IN");
    sessionStorage.setItem("user", null);
    //document.getElementById("signIn").style.display = "block";
    //document.getElementById("signUp").style.display = "block";
    //document.getElementById("signOut").style.display = "none";
}
});


