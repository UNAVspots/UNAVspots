{/* <script>
    document.getElementById("scrollButton").addEventListener("click", function(event) {
        event.preventDefault(); // prevents page jump
    document.getElementById("mainpage").scrollIntoView({
        behavior: "smooth",
    block: "start"
    });

    const box = document.querySelector('.box');

    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });

</script> */}

<script>
    // Scroll button
    document.getElementById("scrollButton").addEventListener("click", function(event) {
        event.preventDefault(); // prevents page jump
    document.getElementById("mainpage").scrollIntoView({
        behavior: "smooth",
    block: "start"
        });
    });

    // Box click grow/shrink
    const box = document.querySelector('.box');

    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
</script>
