import React from "react";
import { Chart } from "react-google-charts";

const data1 = [
  ["Task", "Hours per Day"],
  ["Эффективность", 2],
  ["Бренд", 2],
  ["Аромат", 2],
  ["Что он делает с волосами", 2],
  ["Состав", 2],
  ["Цвет флакона", 2],
  ["Качество", 2],
  ["Состав", 2],
  ["Дизайн", 2],
  ["Советы подруг", 2],
  ["Отзывы в интернете", 2],
  ["Количество", 2],
  ["Популярность", 2],
];

const options1 = {
  title: "Как женщины выбирают шампунь",
};

const data2 = [
  ["Task", "Hours per Day"],
  ["Вроде написано 'Шампунь'", 100],
];

const options2 = {
  title: "Как мужчины выбирают шампунь",
};

function Chart1() {
  return (
    <Chart
      chartType="PieChart"
      data={data1}
      options={options1}
      width={"100%"}
      height={"400px"}
    />
  );
}

function Chart2() {
  return (
    <Chart
      chartType="PieChart"
      data={data2}
      options={options2}
      width={"100%"}
      height={"400px"}
    />
  );
}

function App() {
  return (
    <div>
      <Chart1 />
      <Chart2 />
    </div>
  );
}

export default App;
