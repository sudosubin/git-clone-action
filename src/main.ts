import * as core from '@actions/core';

export const run = async () => {
  try {
    console.log('main.ts');
  } catch (error) {
    core.setFailed(`Action failed for uncaught error: ${error}`);
  }
};

run();
