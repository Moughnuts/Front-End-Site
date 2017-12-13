document.getElementById('open').addEventListener('click', openNav);

function openNav() {
    document.getElementById("mobile").style.width = "100%";
}

document.getElementById('close').addEventListener('click', closeNav);

function closeNav() {
    document.getElementById("mobile").style.width = "0%";
}
