console.log("hello");

const clickme = document.getElementById("clickme");

clickme.addEventListener("click", () => {
    clickme.classList.add("pink");
});

