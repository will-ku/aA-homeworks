document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = 500;
  canvasEl.height = 300;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "red";
  ctx.fill();

ctx.fillStyle = '#ccddff';
ctx.transform(0.5, 0.5, 1.5, -0.5, 30, 10)
ctx.beginPath();
ctx.moveTo(50,60);
ctx.lineTo(200,50);
ctx.lineTo(150,80);
ctx.closePath();
ctx.fill();
ctx.strokeStyle = 'rgb(0,128,0)';
ctx.lineWidth = 5;
ctx.stroke();

    var grad = ctx.createLinearGradient(0,0,200,0);
    grad.addColorStop(0, "white");
    grad.addColorStop(0.5, "red");
    grad.addColorStop(1, "black");
    
    ctx.fillStyle = grad;
    ctx.fillRect(100,100,400,200);

const c = canvasEl.getContext("2d");
c.transform(1, 0.5, 1, -0.5, 30, 10)
c.fillStyle = 'red';
c.beginPath();
c.moveTo(10,30);
c.bezierCurveTo(50,90,159,-30,200,30);
c.lineTo(200,90);
c.lineTo(10,90);
c.closePath();
c.fill();
c.lineWidth = 4;
c.strokeStyle = 'black';
c.stroke();    
});