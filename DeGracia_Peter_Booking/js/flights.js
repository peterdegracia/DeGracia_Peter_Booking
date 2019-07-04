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

document.getElementById("magic").innerHTML = localStorage.getItem("storage");
document.getElementById("magic2").innerHTML = localStorage.getItem("storage");

document.getElementById("dept2").innerHTML = document.getElementById("dept").innerHTML = localStorage.getItem("storage2");
document.getElementById("return2").innerHTML = document.getElementById("return").innerHTML = localStorage.getItem("storage3");
document.getElementById("seats2").innerHTML = document.getElementById("seats").innerHTML = localStorage.getItem("storage4");
document.getElementById("cabin2").innerHTML = document.getElementById("cabin").innerHTML = localStorage.getItem("storage5");
document.getElementById("trip2").innerHTML = document.getElementById("trip").innerHTML = localStorage.getItem("storage6");


function function1()
  {
   var time1 = document.getElementById("time1").value; 
   localStorage.setItem("time1",time1);
   var time2 = document.getElementById("time2").value;
   localStorage.setItem("time2",time2);
  }
function function2()
  {
   var time1 = document.getElementById("time3").value; 
    localStorage.setItem("time1",time1);
   var time2 = document.getElementById("time4").value;
    localStorage.setItem("time2",time2) ;
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
    