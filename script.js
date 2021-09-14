const menuItem = document.querySelectorAll(".menu_item");

menuItem.forEach(i => {
    i.addEventListener("mouseover", (e) => {
        e.preventDefault();
        console.log(i);

        // i.style.backgroundColor = "blue";
    });
});