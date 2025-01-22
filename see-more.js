function toggleContent(id) {
    var content = document.getElementById(id);
    var button = document.getElementById("btn" + id.charAt(0).toUpperCase() + id.slice(1));

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "접기 " + id.charAt(0).toUpperCase() + id.slice(1);
    } else {
        content.style.display = "none";
        button.textContent = "더보기 " + id.charAt(0).toUpperCase() + id.slice(1);
    }
}