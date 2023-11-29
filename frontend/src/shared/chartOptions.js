export const commonOptions = {
  maintainAspectRatio: true,
  interaction: {
    intersect: false,
  },
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        padding: 12,
        minRotation: 0,
      },
    },
  },
};
