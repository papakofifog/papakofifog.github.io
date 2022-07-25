window.onload= function (){

      const header=document.getElementById("header");

    document.addEventListener('scroll',function() {
        let scrollPos= window.pageYOffset;

        if (scrollPos>=500){
            header.style.background='rgba(40, 58, 90, 0.9)';

        }else{
            header.style.background='transparent';
        }
    });






    const nav_bar=document.getElementById("nav-button");

    nav_bar.addEventListener("click", function() {
      if(document.getElementById('nav-container').style.display=="none"){
        document.getElementById('nav-container').style.display="block"
        document.getElementById('nav-icon').src="./assets/svg%20icons/cancel-svgrepo-com.svg";
      }
      else{
          document.getElementById('nav-container').style.display="none" ;
          document.getElementById('nav-icon').src="assets/svg icons/bars-svgrepo-com.svg";
        }
    });


    var acc = document.getElementsByClassName("spec_day");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        //console.log(panel);
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
          
        }
      });
    }

    //set and event listener that listens to a click event on either of the navigations that menu container stops displaying.
    const links_container= document.getElementsByClassName('navigation');

    for (let i=0; i<links_container.length; i++){
      links_container[i].addEventListener("click", function(){
        document.getElementById('nav-container').style.display="none" ;
        document.getElementById('nav-icon').src="./assets/svg icons/bars-svgrepo-com.svg";
      })
    }






}





