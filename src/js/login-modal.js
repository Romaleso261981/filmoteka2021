
import firebaseConfig from "./login-firebaseConfig";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp(firebaseConfig);

window.onload = function() {
  addLoginToHeader();
};

function addLoginToHeader() {
  const markup = `
    <li>
      <a href="./" class="button-login" data-action="button-login">
        <span class="button-login-label text-menu">LOGIN</span>
      </a>
    </li>
  `;
  document
    .querySelector('ul.nav-list')
    .insertAdjacentHTML('afterbegin', markup);

  document
    .querySelector('a.button-login')
    .addEventListener('click', openModalLogin);
}

function openModalLogin(event) {
  event.preventDefault();

  createModalLogin('Registration &amp; Authentication', getModalLogin());

  document
    .querySelector('.modal-login-button-close')
    .addEventListener('click', closeModalLogin, { once: true });
  document
    .querySelector('.modal-login-backdrop')
    .addEventListener('click', closeModalLoginOnBackdropClick);
  document.body.classList.add('no-scroll');
  window.addEventListener('keydown', closeModalLoginOnEscKeyPress);
  
  initLoginApp();
}

function closeModalLogin() {
  document.querySelector('.modal-login-backdrop').remove();
  document.body.classList.remove('no-scroll');
  window.removeEventListener('keydown', closeModalLoginOnEscKeyPress);
}

function closeModalLoginOnEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModalLogin();
  }
}

function closeModalLoginOnBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModalLogin();
  }
}
    
function createModalLogin(tittle, content) {
  const markup = `
  <div class="modal-login-backdrop">
    <div class="modal-login">
      <button class="modal-login-button-close" type="button">
        <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8L22 22" stroke-width="2"/>
          <path d="M8 22L22 8" stroke-width="2"/>
        </svg>
      </button>
      <h2>${tittle}</h2>
      <div class="modal-login-content">
        ${content}
      </div>
    </div>
  </div>
  `
  document.body.insertAdjacentHTML("beforeend", markup);
}

//<label for="email">Email:</label>
//<label for="password">Password:</label>
function getModalLogin() {
  return `
    
    <input class="login-input" type="email" id="email" name="email" placeholder="Email" />
    
    <input class="login-input" type="password" id="password" name="password" placeholder="Password" />
    <button class="login-button" id="login-sign-in" name="signin" type="button" disabled>
        Sign In
    </button>
    <button class="login-button" id="login-sign-up" name="signup" type="button">
        Registration
    </button>
    <p class="login-user-details">
        <span id="login-sign-in-status">Signed out</span>
    </p>
  `
}


/**
 * Handles the sign in button press.
 */
function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      // document.getElementById('login-sign-in-alert').textContent = 'Please enter an email address.';
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      // document.getElementById('login-sign-in-alert').textContent = 'Please enter a password.';
      return;
    }
    // Sign in with email and pass.
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
        // document.getElementById('login-sign-in-alert').textContent = 'Wrong password.';
      } else {
        alert(errorMessage);
        // document.getElementById('login-sign-in-alert').textContent = errorMessage;
      }
      console.log(error);
      document.getElementById('login-sign-in').disabled = false;
    });
  }
  document.getElementById('login-sign-in').disabled = true;
}

/**
 * Handles the sign up button press.
 */
function handleSignUp() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  if (email.length < 4) {
    alert('Please enter an email address.');
    // document.getElementById('login-sign-in-alert').textContent = 'Please enter an email address.';
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    // document.getElementById('login-sign-in-alert').textContent = 'Please enter a password.';
    return;
  }
  // Create user with email and pass.
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
      // document.getElementById('login-sign-in-alert').textContent = 'The password is too weak.';
    } else {
      alert(errorMessage);
      // document.getElementById('login-sign-in-alert').textContent = errorMessage;
    }
    console.log(error);
  });
}

/**
 * Sends an email verification to the user.
 */
function sendEmailVerification() {
  firebase.auth().currentUser.sendEmailVerification().then(function () {
    // console.log("firebase.auth().currentUser");
    // console.log(firebase.auth().currentUser);
    // Email Verification sent!
    alert('Email Verification Sent!');
    // document.getElementById('login-sign-in-alert').textContent = 'Email Verification Sent!';
  });
}

function sendPasswordReset() {
  var email = document.getElementById('email').value;
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Password Reset Email Sent!
    alert('Password Reset Email Sent!');
    // document.getElementById('login-sign-in-alert').textContent = 'Password Reset Email Sent!';
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
      // document.getElementById('login-sign-in-alert').textContent = errorMessage;
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
      // document.getElementById('login-sign-in-alert').textContent = errorMessage;
    }
    //console.log(error);
  });
}

/**
 * initApp handles setting up UI event listeners and registering Firebase auth listeners:
 *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
 *    out, and that is where we update the UI.
 */
function initLoginApp() {
  // Listening for auth state changes.
  firebase.auth().onAuthStateChanged(function(user) {
    // document.getElementById('login-verify-email').disabled = true;
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      document.getElementById('login-sign-in-status').textContent = 'Signed in';
      document.getElementById('login-sign-in').textContent = 'Sign out';
      // document.getElementById('login-account-details').textContent = JSON.stringify(user, null, '  ');
      // if (!emailVerified) {
      //   document.getElementById('login-verify-email').disabled = false;
      // }
    } else {
      // User is signed out.
      document.getElementById('login-sign-in-status').textContent = 'Signed out';
      document.getElementById('login-sign-in').textContent = 'Sign in';
      // document.getElementById('login-account-details').textContent = 'null';
    }
    document.getElementById('login-sign-in').disabled = false;
  });

  document.getElementById('login-sign-in').addEventListener('click', toggleSignIn, false);
  document.getElementById('login-sign-up').addEventListener('click', handleSignUp, false);
  // document.getElementById('login-verify-email').addEventListener('click', sendEmailVerification, false);
  // document.getElementById('login-password-reset').addEventListener('click', sendPasswordReset, false);
}
