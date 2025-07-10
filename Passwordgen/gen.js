// function generatepassword(length,lowercase,uppercase,spchar,num){
//     const lc="abcdefghijklmnopqrstuvwxyz";
//     const uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const sp="!@#$%^&*_"
//     const n="123456789";
//     let allowedchars="";
//     let password="";
// for(let i=0;i<length;i++){
//     const randomi=Math.floor(Math.random()*allowedchars.length);
//     password+=allowedchars[randomi];
//    }
//    return password;
// }
// const slider=document.getElementById("slider");
// const le=document.getElementById("le");
// le.textcontent=slider.value;
// slider.addEventListener("input",function(){
//     le.textContent=slider.value;
// });
// document.querySelector(".btn").addEventListener("click",function(){
//     const length=parseInt(slider.value);
//     const lowercase=document.getElementById("lowercase").checked;
//     const uppercase=document.getElementById("uppercase").checked;
//     const num=document.getElementById("num").checked;
//     const spchar=document.getElementById("spchar").checked;
//     const password=generatepassword(length,lowercase,uppercase,spchar,num);
//     document.getElementById("pbox").value=password;
//     allowedchars+=lowercase?lc:"";
//     allowedchars+=uppercase?uc:"";
//     allowedchars+=num?n:"";
//     allowedchars+=spchar?sp:"";
//     if (allowedchars.length === 0) {
//         alert("Please select at least one character type!");
//         return "";
//     }
//      const passstr=document.getElementById("passstr");
//    if(password.length<7||allowedchars<2){
//         passstr.style.backgroundColor="red";
//         str.textContent="Weak";
//         str.style.color="red";
//     }
//     else if(password.length<10  || allowedchars<3){
//         passstr.style.backgroundColor="orange";
//         str.textContent="Medium";
//         str.style.color="orange";
//     }
//     else{
//         passstr.style.backgroundColor="green";
//         str.textContent="Strong";
//         str.style.color="green";
//     }
// });
// // const length=12;
// // const lowercase=true;
// // const uppercase=true;
// // const num=true;
// // const spchar=true;
// // let password=generatepassword(length,lowercase,uppercase,spchar,num);
// // document.getElementById("pbox").value=password;
// console.log(`Generated password:${password}`);
function generatepassword(length, lowercase, uppercase, spchar, num) {
    const lc = "abcdefghijklmnopqrstuvwxyz";
    const uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sp = "!@#$%^&*_";
    const n = "123456789";
    let allowedchars = "";

    if (lowercase) allowedchars += lc;
    if (uppercase) allowedchars += uc;
    if (num) allowedchars += n;
    if (spchar) allowedchars += sp;

    if (allowedchars.length === 0) {
        alert("Please select at least one character type!");
        return "";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomi = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomi];
    }
    return password;
}

// UI logic
const slider = document.getElementById("slider");
const le = document.getElementById("le");
le.textContent = slider.value;

slider.addEventListener("input", function () {
    le.textContent = slider.value;
});

document.querySelector(".btn").addEventListener("click", function () {
    const length = parseInt(slider.value);
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const num = document.getElementById("num").checked;
    const spchar = document.getElementById("spchar").checked;

    // Count how many types selected (for strength)
    let typesCount = 0;
    if (lowercase) typesCount++;
    if (uppercase) typesCount++;
    if (num) typesCount++;
    if (spchar) typesCount++;

    const password = generatepassword(length, lowercase, uppercase, spchar, num);
    document.getElementById("pbox").value = password;

    const passstr = document.getElementById("passstr");
    const str = document.getElementById("str"); // define this in HTML

    // Strength logic
    if (password.length < 7 || typesCount <= 2) {
        passstr.style.backgroundColor = "red";
        str.textContent = "Weak";
        str.style.color = "red";
    } else if (password.length < 10 || typesCount <=3) {
        passstr.style.backgroundColor = "orange";
        str.textContent = "Medium";
        str.style.color = "orange";
    } else {
        passstr.style.backgroundColor = "green";
        str.textContent = "Strong";
        str.style.color = "green";
    }
});
document.querySelector(".fa-copy").addEventListener("click", function () {
    const pbox = document.getElementById("pbox");
    pbox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});
