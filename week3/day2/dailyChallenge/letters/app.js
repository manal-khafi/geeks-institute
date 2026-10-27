const input = document.getElementById("letterInput");
input.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});