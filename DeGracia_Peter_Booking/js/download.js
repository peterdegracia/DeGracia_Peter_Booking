
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
      
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById("date").innerHTML = today;

document.getElementById("country2").innerHTML = document.getElementById("country").innerHTML = localStorage.getItem("history1");
document.getElementById("time1").innerHTML = localStorage.getItem("history2");
document.getElementById("time2").innerHTML = localStorage.getItem("history3");
document.getElementById("date2").innerHTML = localStorage.getItem("history4");

html2canvas(document.getElementById('main')).then(function(canvas) {
    var img = canvas.toDataURL('image/png');
    var doc = new jsPDF();
    doc.addImage(img, 'JPEG',20,20);
    doc.save('Booking_information.pdf');
  });
 
