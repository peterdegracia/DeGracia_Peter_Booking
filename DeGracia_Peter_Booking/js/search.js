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
   //country
    document.getElementById("val").value = localStorage.getItem("storage");

  //departure=date
    document.getElementById("val2").value = localStorage.getItem("storage2");
    
  //return-date
    document.getElementById("val3").value = localStorage.getItem("storage3");

  //passengers
    document.getElementById("val5").value = localStorage.getItem("storage4");

  //cabin
    document.getElementById("val6").value = localStorage.getItem("storage5");  

  //get-Radio-value
    var myParam = location.search.split('trip=')[1]
    var res = myParam.replace("+", " ");
    localStorage.setItem("storage6",res);

  setTimeout(function(){ window.location.href = "flights.html"; }, 3000);

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
  