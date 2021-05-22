const cp = require('child_process');
require('log-timestamp');

const killProcess = (name) => {
	return new Promise((resolve, reject) => {
		cp.exec('chcp 65001 && taskkill /F /IM  ' + name, (error) => {
			error ? reject(error) : resolve();
		});
	});
};

const respawn = () => {
	const hpoolConsoleCp = cp.spawn('cmd.exe', ['/c', 'hpool-miner-chia-console.exe']);
	hpoolConsoleCp.stderr.on('data', (data) => {
		console.error(`stderr: ${data}`);
	});
	hpoolConsoleCp.stdout.on('data', async (source) => {
		const logText = source.toString();
		if (logText.indexOf('超过最大时间限制') > -1) {
			await killProcess('hpool-miner-chia-console.exe');
			respawn();
		}
		console.log(logText);
	});
};

respawn();
