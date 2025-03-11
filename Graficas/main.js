document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("realTimeChart").getContext("2d");

    let dataValues = Array(5).fill(0).map(() => Math.random() * 100);
    let labels = ["Alcohol", "Burritos", "Comida", "Dias", "Elixir de la vida"];

    const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: labels,
            datasets: [{
                label: "Distribución de Datos",
                backgroundColor: ["red", "blue", "green", "yellow", "purple"],
                data: dataValues,
            }]
        },
        options: {
            animation: false,
            responsive: true,
        }
        
    });

    
    function updateChart() {
        dataValues = dataValues.map(() => Math.random() * 100);
        chart.data.datasets[0].data = dataValues;
        chart.update();
    }

    setInterval(updateChart, 2000);
});