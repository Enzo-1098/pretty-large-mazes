let win = $(window)
let ctx = $("#gameCanvas")[0].getContext("2d")

function updateCanvas() {
    $("#gameCanvas")[0].width = win.width()
    $("#gameCanvas")[0].height = win.height()
    ctx.strokeStyle = "#ffffff"
    ctx.strokeRect(145, 70, 10, 10)
}

window.onload = updateCanvas
win.resize(updateCanvas)