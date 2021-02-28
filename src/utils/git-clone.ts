import * as exec from '@actions/exec';
import { getPath, getRef } from './base';

export const gitClone = async (remote: string) => {
  const ref = getRef();
  const path = getPath();
  const depth = 1; // TODO(sudosubin): Add customizable options

  const options: string[] = [];
  options.push('--single-branch');

  if (ref) {
    options.push('--branch');
    options.push(ref);
  }

  if (depth) {
    options.push('--depth');
    options.push(`${depth}`);
  }

  options.push(remote);
  options.push(path);

  await exec.exec(`git clone`, options);
};
