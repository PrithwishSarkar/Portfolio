var typed = new Typed('#element', {
    strings: [`Hello there! I am <span class="name">Prithwish</span>.\nI am a passionate\nWeb Developer!`],
    typeSpeed: 50,
});

let menu = document.getElementById("sidemenu");
function openmenu() {
    menu.style.right = "0";
}
function closemenu() {
    menu.style.right = "-180px";
}

let tilename = document.getElementsByClassName("tile");
let tilecontent = document.getElementsByClassName("tile-content");

function showtile(name) {
    for (i of tilename) {
        i.classList.remove("default-tile");
    }
    for (i of tilecontent) {
        i.classList.remove("active-tile");
    }
    event.currentTarget.classList.add("default-tile");
    document.getElementById(name).classList.add("active-tile");
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbz8D9Ql7d8FpXm_FUxvZDF1EQabnX_91WneXx8fmwA74Ue9kRtpe_O53XODiqi42F7L2g/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Your response has been submitted successfully!");
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})