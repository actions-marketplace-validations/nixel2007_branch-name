const core = require('@actions/core');

async function run() {
  try {
    core.exportVariable('BRANCH_NAME', process.env.GITHUB_REF.replace("refs/heads/", ""));
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
