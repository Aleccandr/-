let modal = document.getElementById('Mymodal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img");
let captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// Второе модальное окно
let modal1 = document.getElementById('Mymodal1');
// Get the image and insert it inside the modal - use its "alt" text as a caption
let img1 = document.getElementById('myImg1');
let modalImg1 = document.getElementById("img1");
let captionText1 = document.getElementById("caption1");
img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = this.src;
    captionText1.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
let span1 = document.getElementsByClassName("close1")[0];
// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
// третье модальное окно
let modal2 = document.getElementById('Mymodal2');
// Get the image and insert it inside the modal - use its "alt" text as a caption
let img2 = document.getElementById('myImg2');
let modalImg2 = document.getElementById("img2");
let captionText2 = document.getElementById("caption2");
img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
};
// Get the <span> element that closes the modal
let span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}