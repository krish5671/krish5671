// const passwordBox = document.getElementById("password");
// const lenght = 8;

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "!@#$%^&*()_+-}{[]/?~";


// const allCh = upperCase + lowerCase + number + symbol ; 


// function creatPassword(){
//     let password = "";

//     password += upperCase[Math.floor(Math.random()*upperCase.length)];
//     password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
//     password += number[Math.floor(Math.random()*number.length)];
//     password += symbol[Math.floor(Math.random()*symbol.length)];
   

//     while (lenght > password.length){
//         password += allCh[Math.floor(Math.random()*allCh.length)];
//     }

//     passwordBox.value = password ;
// }