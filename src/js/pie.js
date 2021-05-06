window.onload = function() {
   CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"                
                ]);
var options = {colorSet: "greenShades",
	data: [{
			type: "pie",
			startAngle: 45,
			indexLabel: "{label} ({y})",
			yValueFormatString:"#,##0.#"%"",
			dataPoints: [
				{ label: "cebula", y: 36 },
				{ label: "cukinia", y: 31 },
				{ label: "brokuł", y: 7 },
				{ label: "burak", y: 7 },
				{ label: "ziemniak", y: 6 },
				{ label: "koperek", y: 10 },
				{ label: "inne", y: 3 }
			]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}