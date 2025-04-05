
document.addEventListener("DOMContentLoaded", function() {

    var options = {

        strings: [

            "Passionate Programmer",

            "Full Stack Developer",

            "IT Researcher",

            "Tech Enthusiastic",

            "Problem Solver",
            
            "Self Taught Programmer"

        ],

        typeSpeed: 80, // Speed in milliseconds

        backSpeed: 50, // Speed of backspacing

        backDelay: 2000, // Delay before starting to backspace

        startDelay: 100, // Delay before starting the typing

        loop: true, // Loop the typing effect

        showCursor: true // Show blinking cursor

    };


    var typed = new Typed("#typed-output", options);

});






// let myRoles = ["Passionate Self Taught Programmer", "IT Researcher", "Problem Solver", "Tech Enthusiastic", "IT Graduate"];

// function printStringByLetter() {

// for(let i = 0; i < myRoles.length; i++){

//     let index = 0;

//     printRoles = ()=>{
//         if(index < i.length){
//             document.getElementById("role").innerText += i[index];
//             index++;

//         }

//     }
//     setTimeout(printRoles, 50);
// }

// }


//////////////////////////////////////////////////////////////////


// function typeCharacter() {

//     if (index < myRoles.length) {

// document.getElementById("role").innerHTML += myRoles.charAt(index);

// index++;

// // Call typeCharacter again after a delay

// setTimeout(typeCharacter, 100); // Adjust the delay time here (in milliseconds)

// }

// }


// Start typing

// typeCharacter();

// }
