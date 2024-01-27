function togglemenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icons");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changebg()
{

    if(document.body.style.backgroundColor == "black")
    {
        document.body.style.backgroundColor = "rgb(117, 116, 116)";
        document.body.style.color = "black";
        
    }
    else
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";

    }
}