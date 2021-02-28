import * as exec from '@actions/exec';
import { getPath, getRef } from './base';

export const gitClone = async (remote: string) => {
  const ref = getRef();
  const path = getPath();
  const depth = 1; // TODO(sudosubin): Add customizable options

  const command = `git clone \
    --single-branch \
    ${ref ? `--branch ${ref}` : ``} \
    ${depth ? `--depth ${depth}` : ``} \
    ${remote} ${path}
  `;

  await exec.exec(command);
};
