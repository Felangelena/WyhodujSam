$(document).ready(function () {
    document.getElementById("numCrops").defaultValue = document.getElementById("rangeCrops").value;

    document.getElementById("rangeCrops").oninput = function() {
        document.getElementById("numCrops").defaultValue = this.value;
        document.getElementById("area").innerHTML = this.value;
    }

    document.getElementById("numCrops").onchange = function() {
        document.getElementById("rangeCrops").value = this.value;
        document.getElementById("area").innerHTML = this.value;
    }
});
