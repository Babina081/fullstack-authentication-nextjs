"use client";
import React, { useEffect, useRef } from "react";
import Chart, { ChartOptions } from "chart.js/auto"; // Import Chart and ChartOptions from chart.js/auto

const Charts: React.FC = () => {
  const chartRef = useRef<Chart | null>(null); // useRef with Chart type or null

  useEffect(() => {
    const canvas = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement | null; // Type assertion to HTMLCanvasElement or null
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Initialize new chart instance
    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Tokyo", "Mumbai", "Mexico City", "Shanghai"],
        datasets: [
          {
            data: [500, 50, 2424, 14040],
            borderColor: ["#2196f3", "#f44336", "#3f51b5", "#009688"],
            backgroundColor: [
              "#2196f38c",
              "#f443368c",
              "#3f51b570",
              "#00968896",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      } as ChartOptions, // Cast options to ChartOptions to satisfy TypeScript
    });

    // Cleanup function to destroy chart instance on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return <canvas id="myChart"></canvas>;
};

export default Charts;
