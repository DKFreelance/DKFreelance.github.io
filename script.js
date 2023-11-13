document.addEventListener("DOMContentLoaded", function () {
    const imageGallery = document.getElementById("image-gallery");
    const backButton = document.getElementById("back-button");
    const nextButton = document.getElementById("next-button");
    const backToTopButton = document.getElementById("back-to-top");
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    let currentIndex = 0;
    let autoSlideInterval;

    // Function to show image at a specific index
    function showImage(index) {
        for (let i = 0; i < imageGallery.children.length; i++) {
            imageGallery.children[i].style.display = "none";
        }
        imageGallery.children[index].style.display = "block";
    }

    // Event listener for "Back" button
    backButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + imageGallery.children.length) % imageGallery.children.length;
        showImage(currentIndex);
        resetAutoSlideInterval();
    });

    // Event listener for "Next" button
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % imageGallery.children.length;
        showImage(currentIndex);
        resetAutoSlideInterval();
    });

    // Show the first image on page load
    showImage(currentIndex);

    // Function to start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % imageGallery.children.length;
            showImage(currentIndex);
        }, 5000); // Change the interval as needed (e.g., 5000 milliseconds or 5 seconds)
    }

    // Function to reset auto slide interval
    function resetAutoSlideInterval() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Call startAutoSlide to begin automatic sliding
    startAutoSlide();

    // Function to show/hide "Back to Top" button based on scroll position
    function showBackToTopButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    // Event listener for "Back to Top" button click
    backToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Event listener for scrolling to show/hide "Back to Top" button
    window.addEventListener("scroll", showBackToTopButton);

    // Event listener for menu toggle button
    menuToggle.addEventListener('click', function () {
        // Toggle the visibility of the menuList
        menuList.classList.toggle('visible');
    });

    // Random Quote Generator
    const quoteElement = document.querySelector('.quote-of-the-day');
    const quotes = ["Quote 1", "Quote 2", "Quote 3"];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function updateQuote() {
        quoteElement.textContent = getRandomQuote();
    }

    // Update the quote periodically
    setInterval(updateQuote, 5000); // Change the interval as needed

    // Type Quote Animation
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
