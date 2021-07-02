var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function copy() {
  var name, bank, acc, tel, feedback, reg, mutate, choose;
  name = document.getElementById("name").value;
  bank = document.getElementById("bank").value;
  acc = document.getElementById("acc").value;
  tel = document.getElementById("tel").value;
  choose = document.getElementById("choose").value;
  feedback = document.getElementById("feedback");
  document.getElementById("reg").style.display = "none";
  feedback.style.display = "inline-block";
  feedback.innerHTML = "*Welcome to PARADISE ONLINE*" + "\nFull Name : " + name + "\nBank Name : " + bank + "\nBank Number : " + acc + "\nRecommend Number : " + tel + "\nGame : " + choose;
  document.getElementById("mutate").innerHTML = "Send to Our CUSTOMER SERVICE";
  document.querySelector("#clipboard").style.visibility = "visible";
}

function clipboard() {
  feedback.select();
  feedback.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied");
}

document.getElementById("btn").addEventListener('click', copy);
document.getElementById("clipboard").addEventListener('click', clipboard);
console.log("Create by : F\'kn")
