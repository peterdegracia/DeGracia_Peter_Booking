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

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() 
    {
    modal.style.display = "block";
    }

btn1.onclick = function() 
    {
    modal.style.display = "block";
    }

btn2.onclick = function() 
    {
    modal.style.display = "block";
    }

btn3.onclick = function() 
    {
    modal.style.display = "block";
    }

span.onclick = function() 
    {
    modal.style.display = "none";
    window.location = "index.html";
    }

window.onclick = function(event) 
    {
        if (event.target == modal)
        {
            modal.style.display = "none";
            window.location = "index.html";
        }
    }
