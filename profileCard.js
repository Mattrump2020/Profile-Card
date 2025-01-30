
function updateTime () {
    document.getElementById('utcTime').textContent = new Date().toUTCString();
}
updateTime()
setInterval(updateTime, 1000); 