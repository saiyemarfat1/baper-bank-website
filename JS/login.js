document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address inside the email input filed
    // always remember to use. value to get text from an input field
 const emailField = document.getElementById('user-email');
 const email = emailField.value;
 
// step 3: get passowrd
// 3.a: set id on the html element
// 3.b: get the element
// 3.c: get the value from the element
const passowrdField= document.getElementById('user-password');
const passowrd = passowrdField.value;
console.log(email, passowrd);

// DANGER: DO NOT VERIFY email passowrd on the client site
// step 4: verify email and password
if(email === 'baperid@gmail.com'&& passowrd === 'secret'){
    windows.location.href = 'bank.html'
}else{
    console.log('Invalid-user')
}

})