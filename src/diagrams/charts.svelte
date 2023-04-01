<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';

    let Line = Chart.Line;
    let Bar = Chart.Bar;
    let Doughnut = Chart.Doughnut;

  
    let chartType = 'line';
    let data = [1, 2, 3, 4, 5];
    let labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];
  
    function createChart() {
      const chartContainer = document.getElementById('chart-container');
      const chartData = {
        labels,
        datasets: [
          {
            label: 'Data',
            data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      };
  
      let chart;
  
      if (chartType === 'line') {
        chart = new Line(chartContainer, {
          data: chartData,
          options: {
            responsive: true,
          },
        });
      } else if (chartType === 'bar') {
        chart = new Bar(chartContainer, {
          data: chartData,
          options: {
            responsive: true,
          },
        });
      } else if (chartType === 'doughnut') {
        chart = new Doughnut(chartContainer, {
          data: chartData,
          options: {
            responsive: true,
          },
        });
      }
  
      return chart;
    }
  
    let chart = null;
  
    onMount(() => {
      chart = createChart();
    });
  
    function handleChange(event) {
      chart.destroy();
      chartType = event.target.value;
      chart = createChart();
    }
  </script>
  
  <main>
    <select on:change={handleChange}>
      <option value="line">Line</option>
      <option value="bar">Bar</option>
      <option value="doughnut">Doughnut</option>
    </select>
    <div id="chart-container"></div>
  </main>
  