#!/usr/bin/env node
const { execSync } = require('child_process')

// TODO: 引数チェックいれて
const subDomain = process.argv[2] || "xxxxxxxx"
const port = process.argv[3] || 3000

console.log(`https://${subDomain}.serveo.net/`)

while (true) {
	try {
		// TODO: サブドメイン埋まってたときの
		execSync(`ssh -o ServerAliveInterval=60 -R ${subDomain}:80:localhost:${port} serveo.net`)
	} catch {}
}
