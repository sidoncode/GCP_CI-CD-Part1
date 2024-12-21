document.getElementById('timeButton').addEventListener('click', function() {
    const currentTime = new Date();
    document.getElementById('currentTime').innerText = `The current local time is: ${currentTime.toLocaleTimeString()}`;
});
