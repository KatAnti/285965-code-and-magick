'use strict';

window.renderStatistics = function(ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 220, 60);

  var max = -1;
  for(var i = 0; i < times.length; i++) {
    var time = times[i];
      if(time > max){
        max = time;
      }
  };

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40;
  var indent = 90;
  var initialX = 150;
  var initialY = 100;

  for(var i = 0; i < times.length; i++) {
    var barHeight = times[i] * step;
    if(names[i] === 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else{
      ctx.fillStyle = 'rgba(2, 14, 134, '+Math.random()+')';
    }
    ctx.fillRect(initialX + indent * i, initialY + histogramHeight - barHeight, barWidth, barHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent * i, initialY + histogramHeight + 20);
    ctx.fillText(times[i].toFixed(0), initialX + indent * i, initialY + histogramHeight - barHeight - 10);
  };
}