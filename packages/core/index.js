#!/usr/bin/env node

// argv: [node path,joybox-scripts path, build]
const command = process.argv[2];
const options = process.argv.slice(3);

function runScripts(command, options) {
    // TODO
}

switch (command) {
    case 'build':
        runScript(command, options);
        break;

    default:
        console.log(`Command ${command} not found`);
        break;
}