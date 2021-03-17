#!/usr/bin/env node

const command = process.argv[2];
const options = process.argv.slice(3);

function runScript() {
  const commandFileName = command;
  const result = require(`./scripts/${commandFileName}`)(
    env,
    presetApi,
    restOptions
  );
}

runScript();
