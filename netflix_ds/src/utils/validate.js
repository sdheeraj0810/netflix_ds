export const validateData=(email,password)=>{
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid=regexEmail.test(email);
    const isPasswordValid=password.length>6;
    if(!isEmailValid) return "Email is not valid.";
    if(!isPasswordValid) return "Password minimum length not met.";
    return "";

}