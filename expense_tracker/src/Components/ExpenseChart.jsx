import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({ data }) {
  const grouped = data.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(grouped),
    datasets: [
      {
        data: Object.values(grouped),
        backgroundColor: ["#60a5fa", "#f87171", "#4ade80", "#facc15", "#a78bfa", "#fb923c"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
}
