// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

d3.csv('./train.csv', function (error, data) {
  if (error) {
    console.log('Error al leer el fichero titanic.csv');
  } else {
    //Incorporación de gráficos
    // .....
  }
});

//Gráfico de columnas. Mi 1º gráfico
var visualization = d3plus
  .viz()
  .container('#viz1')
  .data([
    { year: 1991, name: 'alpha', value: 15 },
    { year: 1992, name: 'alpha', value: 20 },
  ])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();

d3.json(
  'https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json',
  function (data) {
    var visualization = d3plus
      .viz()
      .container('#viz2')
      .data(data)
      .type('bar')
      .id('name')
      .x('year')
      .y('value')
      .axes({ ticks: 'false' })
      .draw();
  }
);

var visualization = d3plus
  .viz()
  .container('#viz3')
  .data([
    { year: 1991, name: 'alpha', value: 15 },
    { year: 1991, name: 'beta', value: 10 },
    { year: 1991, name: 'gamma', value: 5 },
    { year: 1991, name: 'delta', value: 50 },
    { year: 1992, name: 'alpha', value: 20 },
    { year: 1992, name: 'beta', value: 10 },
    { year: 1992, name: 'gamma', value: 10 },
    { year: 1992, name: 'delta', value: 43 },
    { year: 1993, name: 'alpha', value: 30 },
    { year: 1993, name: 'beta', value: 40 },
    { year: 1993, name: 'gamma', value: 20 },
    { year: 1993, name: 'delta', value: 17 },
    { year: 1994, name: 'alpha', value: 60 },
    { year: 1994, name: 'beta', value: 60 },
    { year: 1994, name: 'gamma', value: 25 },
    { year: 1994, name: 'delta', value: 32 },
  ])
  .type('box')
  .id('name')
  .x('year')
  .y('value')
  .axes({ ticks: 'false' })
  .draw();

// var visualization = d3plus
//   .viz()
//   .container('#viz')
//   .data(sample_data)
//   .type('tree_map')
//   .id('name')
//   .size('cost')
//   .color({
//     value: 'cost per response',
//     domain: [0.86, 21.6],
//     range: ['green', 'yellow', 'red'],
//     heatmap: ['green', 'yellow', 'red'],
//   })
//   .draw();
