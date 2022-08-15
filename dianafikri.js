var slideIndex = 1
            showSlide(slideIndex);

            function nextslide(n){
                showSlide(slideIndex += n);
            }

            function dotslide(n){
                showSlide(slideIndex = n);
            }
            function showSlide(n){
                var i;
                var slides = document.getElementsByClassName("imgslide");
                var dot = document.getElementsByClassName("dot");

                if (n > slides.length){
                    slideIndex = 1
                }
                if (n < 1){
                    slideIndex = slides.length;
                }
                for (i = 0; i < slides.length; i++){
                    slides[i].style.display = "none";
                }
                for (i = 0; i < slides.length; i++){
                    dot[i].className = dot[i].className.replace("active", "");
                }
                slides[slideIndex - 1].style.display = "block";
            }


const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

faqHeaders.forEach((header, i) => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("active");

    const open = header.querySelector(".open");
    const close = header.querySelector(".close");

    if (header.nextElementSibling.classList.contains("active")) {
      open.classList.remove("active");
      close.classList.add("active");
    } else {
      open.classList.add("active");
      close.classList.remove("active");
    }
  });
});
