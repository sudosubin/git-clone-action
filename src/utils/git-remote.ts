import * as core from '@actions/core';
import { GitPlatform } from '../types';

const getRemoteRepo = () => {
  return core.getInput('repository');
};

const getRemoteHost = () => {
  const platform = core.getInput('platform');

  switch (platform) {
    case GitPlatform.Github:
      return 'github.com';
    case GitPlatform.Gitlab:
      return 'gitlab.com';
    case GitPlatform.Bitbucket:
      return 'bitbucket.org';
    case GitPlatform.Gitee:
      return 'gitee.com';
    default:
      return platform;
  }
};

export const getRemoteUrl = () => {
  const repo = getRemoteRepo();
  const host = getRemoteHost();
  const connection = 'https'; // TODO(sudosubin): or 'ssh'

  if (connection === 'https') {
    return `https://${host}/${repo}.git`;
  }

  if (connection === 'ssh') {
    return `git@${host}:${repo}.git`;
  }

  throw new Error(`Unknown git connection type: ${connection}`);
};
