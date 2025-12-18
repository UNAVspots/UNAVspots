
document.getElementById("scrollButton").addEventListener("click", function (event) {
    event.preventDefault(); // prevents page jump
    document.getElementById("mainpage").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    const box = document.querySelector('.box');

    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });


    // Smooth scroll for "comienza ahora"
    document.getElementById("scrollButton").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("mainpage").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // Toggle zoom on the map box
    const box = document.querySelector('.box');
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });





