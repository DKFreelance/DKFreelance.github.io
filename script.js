document.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("image-gallery");
    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");
    const backToTopButton = document.getElementById("back-to-top");
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    let currentIndex = 0;

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

    menuToggle.addEventListener('click', function () {
        // Toggle the visibility of the menuList
        menuList.classList.toggle('visible');
    });

    const quoteElement = document.querySelector('.quote-of-the-day');
    const quoteText = `"Design is thinking, made visual" - Saul Bass`;

    function typeQuote() {
        let charIndex = 0;
        const typingInterval = 40; // Adjust typing speed (milliseconds)

        function typeCharacter() {
            if (charIndex < quoteText.length) {
                quoteElement.textContent += quoteText.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, typingInterval);
            }
        }

        typeCharacter();
    }

    // Start the typing animation when the page loads
    typeQuote();
});
