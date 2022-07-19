const header=document.getElementById("header");

document.addEventListener('scroll',function() {
    let scrollPos= window.pageYOffset;

    if (scrollPos>=500){
        header.style.background='rgba(40, 58, 90, 0.9)';

    }else{
        header.style.background='transparent';
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


var Lead_section=document.getElementsByClassName("dept");
var j;
//Department Profiles
const pastor_section=document.getElementById("pastors");
const deacon_section= document.getElementById("deacons");
const mens_dept_section= document.getElementById("mens-dept");
const wmen_dept_section= document.getElementById("wmen-dept");
const youth_dept_section= document.getElementById("y-dept");
const teen_dept_section= document.getElementById("t-dept");
const children_dept_section= document.getElementById("c-dept");

// Leadership Variables
const pastors= "p-lead";
const deacons= "d-lead";
console.log(pastors);
// code to display a particular grid when needed
for(j=0; j< Lead_section.length; j++){
  Lead_section[j].addEventListener("click", function(){
    this.classList.toggle("selected");
    if (this.getAttribute("id")==pastors){
        return isShowing(pastor_section);
        
    }
    if (this.getAttribute("id")==deacons){
      return isShowing(deacon_section);
      
  }
  });
}







function isShowing(selected_id){
  if (selected_id.style.display=="block"){
    selected_id.style.display=="none";
    console.log("fail");
  }else{
    Lead_section.style.display="none";
    selected_id.style.display=="block";
    console.log("succes");
  }
}