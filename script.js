const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function initializeGit(directory, remoteUrl) {
  try {
    // Ensure the directory exists
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }

    // Change to the specified directory
    process.chdir(directory);

    // Check if the directory is already a Git repository
    if (!fs.existsSync(path.join(directory, '.git'))) {
      // Initialize Git repository
      execSync('git init');

      // Add a remote origin
      execSync(`git remote add origin ${remoteUrl}`);

      console.log(`Git initialized in '${directory}' with remote origin set to '${remoteUrl}'.`);
    } else {
      console.error(`Directory '${directory}' is already a Git repository.`);
    }
  } catch (error) {
    console.error('Error initializing Git repository:', error.message);
  }
}

function commitAndPush(directory, commitMessage) {
    try {
      // Change to the specified directory
      process.chdir(directory);
  
      // Add all files and create a commit
      execSync('git add .');
      execSync(`git commit -m "${commitMessage}"`);
  
      // Push to the remote origin
      execSync('git push origin master');
  
      console.log(`Committed and pushed to the remote origin in '${directory}'.`);
    } catch (error) {
      console.error('Error committing and pushing:', error.message);
    }
  }

// Example usage
const remoteOriginUrl = 'https://github.com/gabrieldocs/code-town-xiii.git'; // Replace with your repository URL
const directoryToInitialize = 'C:/Users/lucgb/Developer/tempest/code-town-xiii'; // Replace with the desired local path

initializeGit(directoryToInitialize, remoteOriginUrl);
commitAndPush(directoryToInitialize, "Initial commit " + new Date().toLocaleDateString());
