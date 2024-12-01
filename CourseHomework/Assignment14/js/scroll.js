//  button
const backToTopButton = document.getElementById("backToTop");


window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";  
    } else {
        backToTopButton.style.display = "none";  
    }
};

// function
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Smooth scrolling effect
    });
};
