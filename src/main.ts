import * as core from '@actions/core';
import { gitClone } from './utils/git-clone';
import { getRemoteUrl } from './utils/git-remote';

export const run = async () => {
  try {
    core.info('Build remore url');
    const remote = getRemoteUrl();
    core.info(`- git remote url: ${remote}`);

    core.info(`Cloning repository`);
    await gitClone(remote);
  } catch (error) {
    core.setFailed(`Action failed for uncaught error: ${error}`);
  }
};

run();
