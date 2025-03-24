const email = document.getElementById( "emailField" );
const form = document.getElementById( "form" );
const submitBtn = document.getElementById( "submitBtn" );
const dismissBtn = document.getElementById( "dismissBtn" );
const errorMsg = document.getElementById( "errorMsg" );
const formSection = document.getElementById( "formSection" );
const successSection = document.getElementById( "successSection" );
const confirmationEmail = document.getElementById( "confirmationEmail" );

function validateEmail(e) {
    e.preventDefault();
    
    if (!email.checkValidity()) {
        email.classList.add( "error" );
        errorMsg.removeAttribute( "hidden" );
        return false;
    } else {
        email.classList.remove( "error" );
        errorMsg.setAttribute( "hidden", "" ); 
        formSection.style.display = "none";
        confirmationEmail.innerHTML = email.value;
        successSection.style.display = "flex";
        return true;
    }
}

function emailClickListener(e) {
    email.classList.remove( "error" );
    submitBtn.classList.remove( "active" );
    errorMsg.setAttribute( "hidden", "" );
}

function emailKeyupListener(e) {
    if( e.key != "Enter" ){
        email.classList.remove( "error" );
        submitBtn.classList.remove( "active" );
        errorMsg.setAttribute( "hidden", "" );
    }
}

function submitBtnKeyupListener(e) {
    if( e.key == "Enter" ){
        submitBtn.dispatchEvent( new Event("mousedown") );
    }
}

submitBtn.addEventListener( "mousedown", function(e){
    this.classList.add( "active" );
});

submitBtn.addEventListener( "mouseup", function(e){
    this.classList.remove( "active" );
});

dismissBtn.addEventListener( "mousedown", function(e){
    this.classList.add( "active" );
});

dismissBtn.addEventListener( "mouseup", function(e){
    this.classList.remove( "active" );
});

form.addEventListener( "submit", validateEmail );
email.addEventListener( "click", emailClickListener );
email.addEventListener( "keyup", emailKeyupListener );
submitBtn.addEventListener( "keyup", submitBtnKeyupListener );
dismissBtn.addEventListener( "click", function(e){ location.reload(); });