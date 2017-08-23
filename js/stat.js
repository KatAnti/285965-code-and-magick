'use strict';

var findMaxTime = function (times) {
  var max = -Infinity;
  for(var i = 0; i < times.length; i++) {
    var time = times[i];
      if (time > max) {
        max = time;
      }
  };
  return max;
};

var drawBars = function (params, times, names, i, ctx) {
  ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(2, 14, 134, '+Math.random()+')';
  ctx.fillRect(params.initialX + params.indent * i, params.initialY + params.histogramHeight - params.barHeight, params.barWidth, params.barHeight);
};

var drawText = function (params, times, names, i, ctx) {
  ctx.fillStyle = 'black';
  ctx.fillText(names[i], params.initialX + params.indent * i, params.initialY + params.histogramHeight + 20);
  ctx.fillText(times[i].toFixed(0), params.initialX + params.indent * i, params.initialY + params.histogramHeight - params.barHeight - 10);
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 220, 60);

  var max = findMaxTime(times);
  var params = {
    histogramHeight: 150,
    barWidth: 40,
    indent: 90,
    initialX: 150,
    initialY: 100,
  };
  var step = params.histogramHeight / (max - 0);

  for (var i = 0; i < times.length; i++) {
    params.barHeight = times[i] * step;
    drawBars(params, times, names, i, ctx);
    drawText(params, times, names, i, ctx);
  }
}