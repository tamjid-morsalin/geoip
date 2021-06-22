'use strict';

(async () => {
    const { spawn } = require('child_process');
    const script = 'cd node_modules/geoip-lite && npm run-script updatedb license_key='+ process.env.MAX_MIND_LICENSE_KEY;
    const cron = require('node-cron');

    cron.schedule('0 4 * * *', function() {
        spawn(script, {
            stdio: 'inherit',
            shell: true
        });
    });
})()