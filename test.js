const register_form = document.getElementById("reg_form");
if(register_form) register_form.addEventListener("submit", UserObject);

function UserObject(e){
    e.preventDefault();
    let firstname = ((document.getElementById("first_name")||{}).value)||"";
    let lastname = ((document.getElementById("last_name")||{}).value)||"";
    let email_id = ((document.getElementById("email_id")||{}).value)||"";
    let password = ((document.getElementById("password")||{}).value)||"";
    let note = ((document.getElementById("Note")||{}).value)||"";
    const newUser = new User(firstname,lastname,email_id,password,note);
    console.log(newUser); 
    console.log(`email_id = ${email_id}`) 
    console.log(`note = ${note}`) 
}


function User(firstname,lastname,email_id,password,note){
    this.firstname = firstname;
    this.lastname = lastname; //document.getElementById("lastname").value;
    this.email_id = email_id; //document.getElementById("username").value;
    this.password = password; //document.getElementById("password").value;
    this.note = note;
}

User.prototype.getFirstName = function(){
    return this.firstname;
}

User.prototype.getLastName = function(){
    return this.lastname;
}

User.prototype.getemail_id = function(){
    return this.email_id;
}

User.prototype.getpassword = function(){
   return this.password;
}

User.prototype.getnote = function(){
    return this.note;
}


User.prototype.setFirstName = function(firstname){
    this.firstname = firstname;
}

User.prototype.setLastName = function(lastname){
    this.lastname = lastname;
}

User.prototype.setemail_id = function(email_id){
    this.email_id = email_id;
}

User.prototype.setpassword = function(password){
   this.password = password;
}

User.prototype.setnote = function(note){
    this.note = note;
}