// Menu
var btn = document.getElementById("button_menu");

btn.addEventListener('click', function() {
    if (this.classList.contains("active")) {
        this.classList.remove("active")
        this.classList.add('not-active')

    } 
    else {
        this.classList.add("active")
        this.classList.remove('not-active')
    }
});

//Burger
const enable = (e) => {
    document.getElementById('button_menu').classList.toggle("open");
    document.getElementById("portable_menu").classList.toggle("portable_menu-open");
};

// jsDark mode
document.getElementById('input').addEventListener('change', () => {
    if (document.body.className.indexOf('dark') === -1) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
})

// add circle
document.body.addEventListener('click', (e) => {
    const element = document.createElement('span');
    element.className = 'circle';
    element.style.left = (e.clientX - 10) + "px";
    element.style.top = (e.clientY - 10) + "px";
    document.body.append(element)
    setTimeout(() => {
        element.remove()
    }, 800)
});

//Refresh
function Refresh(){
location.replace("../html/Joseph_Star_Website.html");
}