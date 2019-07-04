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

document.getElementById('number').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});


document.getElementById('number2').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("myModal2");

var modal3 = document.getElementById("myModal3")
var btn3 = document.getElementById("notavailable");
var span3 = document.getElementsByClassName("close3")[0];

btn.onclick = function() 
    {
      if (document.getElementById("name").value == "" || document.getElementById("number").value == "" || document.getElementById("date").value == "" || document.getElementById("number2").value == "")
      {
        alert("Fill out necessary information");
        modal.style.display = "none";
      }
      else
      {
        modal.style.display = "block";
      }
    }

span.onclick = function() 
    {
    modal.style.display = "none";
    modal2.style.display = "block";
    }

window.onclick = function(event) 
    {
        if (event.target == modal)
        {
            modal.style.display = "none";
            modal2.style.display = "block";
        }
        if (event.target == modal3)
        {
            modal3.style.display = "none";
        }
    }
 
btn3.onclick = function() 
    {
        modal3.style.display = "block";
    }
    
span3.onclick = function() 
    {
      modal3.style.display = "none";
    }
