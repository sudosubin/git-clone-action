# Clone

![Repository License](https://img.shields.io/github/license/sudosubin-ppas/git-clone-action)
![Repository Release](https://img.shields.io/github/v/release/sudosubin-ppas/git-clone-action)

## Quick Start

```yml
- uses: sudosubin-ppas/git-clone-action@v1
  with:
    repository: '<USER>/<REPO>'
    platform: 'github'
```

## How does it work

This action clones a given git repository.

This project is aiming to replace [`actions/checkout`](https://github.com/actions/checkout) for non-GitHub repositories, while keeping the same `inputs` interface. (GitLab, Bitbucket, or Gitee)

## Usage

```yml
- uses: sudosubin-ppas/git-clone-action@v1
  with:
    # Repository owner and name. Ex: sudosubin-ppas/git-clone-action
    # Default: ${{ github.repository }}
    repository: ''

    # Git host platform. Ex: github, gitlab, bitbucket, gitee, or else (git.suckless.org, ...)
    # Default: 'github'
    platform: ''

    # Git branch, tag, or specific commit SHA to checkout.
    # Default: (auto default branch)
    ref: ''

    # Relative path from current directory, where to clone.
    path: ''

    # Todos below
    # fetch-depth
    # submodules
```

## License

Clone is [MIT Licensed](./LICENSE).
