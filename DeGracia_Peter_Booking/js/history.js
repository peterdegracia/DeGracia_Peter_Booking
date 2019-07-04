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

  var dtime;
  var rtime;
  var ddate;
  var country;
  function function1()
  {
    country = "USA";
    dtime = "4:00 pm";
    rtime = "9:00 pm";
    ddate = "June 7, 2019";
    localStorage.setItem("history1",country);
    localStorage.setItem("history2",dtime);
    localStorage.setItem("history3",rtime);
    localStorage.setItem("history4",ddate);
  }

  function function2()
  {
    country = "Hongkong";
    dtime = "5:00 pm";
    rtime = "10:00 pm";
    ddate = "April 10, 2018";    
    localStorage.setItem("history1",country);
    localStorage.setItem("history2",dtime);
    localStorage.setItem("history3",rtime);
    localStorage.setItem("history4",ddate);
  }

  function function3()
  {
    country = "China";
    dtime = "2:00 pm";
    rtime = "7:00 pm";
    ddate = "Jan. 8, 2017";    
    localStorage.setItem("history1",country);
    localStorage.setItem("history2",dtime);
    localStorage.setItem("history3",rtime);
    localStorage.setItem("history4",ddate);
  }

  function function4()
  {
    country = "Boston";
    dtime = "6:00 am";
    rtime = "11:00 am";
    ddate = "Feb. 8, 2016";    
    localStorage.setItem("history1",country);
    localStorage.setItem("history2",dtime);
    localStorage.setItem("history3",rtime);
    localStorage.setItem("history4",ddate);
  }

  function function5()
  {
    country = "Boston";
    dtime = "12:00 am";
    rtime = "4:00 am";
    ddate = "Dec. 28, 2015";    
    localStorage.setItem("history1",country);
    localStorage.setItem("history2",dtime);
    localStorage.setItem("history3",rtime);
    localStorage.setItem("history4",ddate);
  }