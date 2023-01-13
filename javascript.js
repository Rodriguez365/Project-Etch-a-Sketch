const container = document.getElementById("grids")

let new_color = "";
const blue = document.getElementById("blue");
blue.addEventListener("click", () => {
    new_color = "blue";

})
const red = document.getElementById("red");
red.addEventListener("click", () => {
    new_color = "red";

})

function clear_grid() {
    container.innerHTML = ""
    update_grid();

}

const range = document.getElementById("range_value");
range.addEventListener("mousemove", update_grid());

function change() {
    const choice = "blue,green,yellow,brown,red,orange,grey".split(",");
    return choice[Math.floor(Math.random() * choice.length)];

}
const rainbow = document.getElementById("rainbow");
rainbow.addEventListener("click", () => {
    new_color = "rainbow";

})

function change_background() {
    rainbow.style.backgroundColor = change();

}


function update_grid() {
    range_value = document.querySelector("input").value;
    let range_text = document.getElementById("range_text");
    range_text.textContent = range_value + "x" + range_value;

    container.style.gridTemplateColumns = `repeat(${range_value},1fr)`
    container.style.gridTemplateRows = `repeat(${range_value}, 1fr)`

    for (let i = 0; i < range_value * range_value; i++) {
        const grid1 = document.createElement("div");
        grid1.classList.add("grid_class")
        grid1.addEventListener("click", function(e) {
            if (new_color == "rainbow") {
                e.target.style.backgroundColor = change();
            } else {
                e.target.style.backgroundColor = new_color;
            }
        });
        container.appendChild(grid1)

    }
}
window.onload = () => {
    update_grid();
}