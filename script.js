document.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("image-gallery");
    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");
    const backToTopButton = document.getElementById("back-to-top");

    let currentIndex = 0;
    let autoPlayInterval; // Variable to store the interval ID

    function showImage(index) {
        for (let i = 0; i < imageGallery.children.length; i++) {
            imageGallery.children[i].style.display = "none";
        }
        imageGallery.children[index].style.display = "block";
    }

    backButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + imageGallery.children.length) % imageGallery.children.length;
        showImage(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % imageGallery.children.length;
        showImage(currentIndex);
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(function () {
            nextButton.click(); // Simulate a click on the "next" button
        }, 6000); // Change the interval duration (in milliseconds) as needed
    }

    showImage(currentIndex);

    function showBackToTopButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    backToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    window.addEventListener("scroll", showBackToTopButton);

    // Start auto-play when the page loads
    startAutoPlay();
});
