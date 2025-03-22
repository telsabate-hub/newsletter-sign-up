const email = document.getElementById( "emailField" );
const form = document.getElementById( "form" );
const submitBtn = document.getElementById( "submitBtn" );
const errorMsg = document.getElementById( "errorMsg" );

submitBtn.addEventListener( "mousedown", function(e){
    this.classList.add( "active" );
});

submitBtn.addEventListener( "mouseup", function(e){
    this.classList.remove( "active" );
});

function validateEmail(e) {
    e.preventDefault();

    if (!email.checkValidity()) {
        email.classList.add( "error" );
        errorMsg.removeAttribute( "hidden" );
        return false;
    } else {
        email.classList.remove( "error" );
        errorMsg.setAttribute( "hidden", "" );
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

form.addEventListener( "submit", validateEmail );
email.addEventListener( "click", emailClickListener );
email.addEventListener( "keyup", emailKeyupListener );
submitBtn.addEventListener( "keyup", submitBtnKeyupListener );