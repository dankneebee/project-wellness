$(document).ready(() => {
    var socket = io()
  
    var canvas = $("#place")[0]
    var ctx = canvas.getContext("2d")
  
    socket.on("canvas", canvasData => {
      canvasData.forEach((row, rowIndex) => {
        row.forEach((col, colIndex) => {
          ctx.fillStyle = col
          ctx.fillRect(colIndex * 10, rowIndex * 10, 10, 10)
        })
      })
    })
  
    $("#submit").click(() => {
      socket.emit("color", {
        col: parseInt($("#x-coord").val()),
        row: parseInt($("#y-coord").val()),
        color: $("#color").val()
      })
    })
  })