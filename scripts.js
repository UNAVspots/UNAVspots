<script>
    document.getElementById("scrollButton").addEventListener("click", function(event) {
        event.preventDefault(); // prevents page jump
    document.getElementById("mainpage").scrollIntoView({
        behavior: "smooth",
    block: "start"
    });
});
</script>
