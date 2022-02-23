import styled from "styled-components";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: "#3773f5",
      borderColor: "#3773f5",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#3773f5",
      pointBackgroundColor: "#3773f5",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#3773f5",
      pointHoveBorderColor: "#3773f5",
      pointHOverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [69, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={200} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default BalanceChart;
