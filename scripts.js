<script>
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

</script>

