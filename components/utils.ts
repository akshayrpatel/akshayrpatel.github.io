// This variable should be kept blank is repository is <username>.github.io
const GITHUB_REPO_NAME = '';

// This function is only used to prefix asset paths with repository name
const getPrefix = (env: string | undefined) => {
  return env === undefined || env === 'development' ? '' : GITHUB_REPO_NAME;
};

export { getPrefix };
