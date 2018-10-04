var os = require('os');

function getOStime() {
	var uptime = os.uptime();

	var hour = (uptime / 3600).toFixed(0);
	var min = ((uptime - (hour * 3600)) / 60).toFixed(0);
	var sec = (uptime - (hour * 3600) - (min * 60));
	if (sec < 0) {
		sec = '0';
	}

	console.log('Uptime: ~', hour, 'godz.',min, 'min.', sec, 'sec');
}

exports.print = getOStime;