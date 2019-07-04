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

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
    
today = mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerHTML = today;
  
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

document.getElementById("passenger").innerHTML = localStorage.getItem("storage4");
document.getElementById("country").innerHTML = localStorage.getItem("storage");
document.getElementById("country2").innerHTML = localStorage.getItem("storage");
document.getElementById("cabin").innerHTML = localStorage.getItem("storage5");
document.getElementById("date2").innerHTML = localStorage.getItem("storage2");
document.getElementById("time1").innerHTML = localStorage.getItem("time1");
document.getElementById("time2").innerHTML = localStorage.getItem("time2");

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
  
