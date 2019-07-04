function formatAMPM(date) 
  {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
  }

document.getElementById("time").innerHTML=formatAMPM(new Date)
document.getElementById('main').addEventListener('click', closeNav);

function openNav() 
  {
    document.getElementById("mySidenav").style.width = "230px";
  }

function closeNav() 
  {
    document.getElementById("mySidenav").style.width = "0";
  }

function myfunction()
  {
    //country
    var input = document.getElementById("country").value;
    localStorage.setItem("storage",input);
    
    //departure-date
    var input2 = document.getElementById("departure").value;
    localStorage.setItem("storage2",input2);

    //return-date
    var input3 = document.getElementById("return").value;
    localStorage.setItem("storage3",input3)

    //no.-passengers
    var input4 = document.getElementById("passengers").value;
    localStorage.setItem("storage4",input4);

    //cabin
    var input5 = document.getElementById("cabin").value;
    localStorage.setItem("storage5",input5);
  }

var slideIndex = 0;
showSlides();

function showSlides() 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) 
      {
          slides[i].style.display = "none";  
      }
    slideIndex++;

    if (slideIndex > slides.length) 
      {
        slideIndex = 1;
      }  

    for (i = 0; i < dots.length; i++) 
      {
          dots[i].className = dots[i].className.replace(" active", "");
      }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); 
  }

var modal = document.getElementById("myModal");
var btn = document.getElementById("notavailable");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() 
    {
        modal.style.display = "block";
    }

span.onclick = function() 
    {
    modal.style.display = "none";
    }

window.onclick = function(event) 
    {
        if (event.target == modal)
        {
            modal.style.display = "none";
        }
    }
