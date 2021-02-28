import * as core from '@actions/core';

export const getRef = () => {
  return core.getInput('ref');
};

export const getPath = () => {
  const path = core.getInput('path');
  return `./${path}`;
};
