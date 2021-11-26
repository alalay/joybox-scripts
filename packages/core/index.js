#!/usr/bin/env node

const { getEnv } = require('./utils/env');

// argv: [node path,joybox-scripts path, build]
const command = process.argv[2];
const options = process.argv.slice(3);

function runScript(command, options) {
    const env = getEnv(options);
    const result = require(`./scripts/${command}`)(env);
    process.exit(result.status);
}

switch (command) {
    case 'build':
        runScript(command, options);
        break;

    default:
        console.log(`Command ${command} not found`);
        break;
}