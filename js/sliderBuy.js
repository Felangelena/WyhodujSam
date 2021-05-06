$(document).ready(function () {
    document.getElementById("numFamily").defaultValue = document.getElementById("rangeFamily").value;
    document.getElementById("rangeFamily").oninput = function() {
        document.getElementById("numFamily").defaultValue = this.value;
    }
    document.getElementById("numFamily").onchange = function() {
        document.getElementById("rangeFamily").value = this.value;
    }

    document.getElementById("rangeArea").oninput = function() {
        document.getElementById("areaNum").innerHTML = this.value;
        document.getElementById("finalArea").innerHTML = this.value;
    }
});

