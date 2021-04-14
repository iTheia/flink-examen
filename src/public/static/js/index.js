const socket = io();
const ctx = document.getElementById("myChart").getContext("2d");

var chart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: "test",
        data: [0],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  },
});

socket.on("pushdata", (point) => {
  if (chart.data.datasets[0].data.length < 100) {
    chart.data.labels.push("");
    chart.data.datasets[0].data.push(point);
    chart.update();
  }
});
