const header=document.getElementById("header");

document.addEventListener('scroll',function() {
    let scrollPos= window.pageYOffset;

    if (scrollPos>=500){
        header.style.background='rgba(40, 58, 90, 0.9)';

    }else{
        header.style.background='transparent';
    }
});
