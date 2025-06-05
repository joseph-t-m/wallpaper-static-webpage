function transition() {
    const classes = document.body.classList;
    classes.add("transition");
}

function transitionB() {
    const classes = document.body.classList;
    classes.add("transitionB")
} 

function transition1() {
    const classes = document.body.classList;
    classes.add("transition1")
}

function transitionB1() {
    const classes = document.body.classList;
    classes.add("transitionB1")
} 

function transition2() {
    const classes = document.body.classList;
    classes.add("transition2")
}

function transitionB2() {
    const classes = document.body.classList;
    classes.add("transitionB2")
} 

function transition3() {
    const classes = document.body.classList;
    classes.add("transition3")
}

function transitionB3() {
    const classes = document.body.classList;
    classes.add("transitionB3")
}

function transition4() {
    const classes = document.body.classList;
    classes.add("transition4")
}

function transitionB4() {
    const classes = document.body.classList;
    classes.add("transitionB4")
}

function convert() {
    for1 = document.getElementById("gos").outerText;
    document.getElementById("text1").innerHTML = for1;
}

// // ۱ : دریافت مقادیر div های مختلف
// const inputarea = document.querySelectorAll('.form-item-area');;
// inputarea.forEach(area => {
//         // ۲ : دریافت arrow icon حاضر
//         const nextarrow = area.lastElementChild;
//         nextarrow.addEventListener('click', () => {
//             // ۲-۱ : دریافت مقدار input کنونی
//             const input = area.children[1];
//             // ۲-۲ : دریافت مقدار input بعدی
//             const nextinputarea = area.nextElementSibling;
//             // ۳ : بررسی نوع مقدار input کنونی برای ارسال به توابع دیگر
//             if (input.type === 'text' && usernamevalidate(input.value)) {
//                 switchinput(area, nextinputarea);
//             } else if (input.type === 'password' && passwordvalidate(input.value)) {
//                 switchinput(area, nextinputarea);
//             } else {
//                 // ۳-۱ : تابع برای افکت لرزش input در صورت واردشدن مقادیر اشتباه
//                 area.classList.add('shakeinputeror');
//                 setTimeout(() => {
//                     area.classList.remove('shakeinputeror');
//                 }, 500)
//             }


//         })
//     })
//     // ۴ : توابع خاص برای بررسی مقادیر input ها  و بررسی مقدار وارد شده در username input
// let unvaliecolor = 'red';
// let valiecolor = 'green';

// function usernamevalidate(value) {
//     if (value === '' || value.length < 6) {
//         validateeror(unvaliecolor);
//         return false;
//     } else {
//         validateeror(valiecolor);
//         return true
//     }
// }
// // ۴-۱ : بررسی مقدار وارد شده در password input
// function passwordvalidate(value) {
//     if (value.length < 6 || value.length > 16) {
//         validateeror(unvaliecolor);
//         return false;
//     } else {
//         validateeror(valiecolor);
//         return true
//     }
// }
// // ۵ : تابع برای تغییر رنگ بک گراند برای مقادیر درست و غلط input ها
// function validateeror(color) {
//     const container = document.querySelector('.container');
//     container.style.backgroundImage = "unset";
//     container.style.backgroundColor = color;
// }
// // ۶ : پریدن به input بعدی
// function switchinput(prearea, nextarea) {
//     prearea.classList.remove('showon');
//     prearea.classList.add('showoff');
//     nextarea.classList.add('showon');
//     nextarea.classList.remove('showoff');
// }
// function validateForm() {
//     var un = document.signin.usr.value;
//     var pw = document.signin.pword.value;

//     if ((un == "Joseph") && (pw == "1")) {
//         alert("خوش آمدید به سایت ما!");
//         return true;
//     }
//     else {
//         alert("اطلاعات وارد شده صحیح نیست");
//         return false;
//     }
// }


