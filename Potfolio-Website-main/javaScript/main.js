const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen)
    {
        menuBtn.classList.add('open');
        document.getElementById("myNav").style.height = "100%";
        menuOpen = true;
        
    }else
    {
        menuBtn.classList.remove('open');
        document.getElementById("myNav").style.height = "0%";
        menuOpen = false;
    }
});

function closenavbar(){
    menuBtn.classList.remove('open');
    document.getElementById("myNav").style.height = "0%";
}