const packageJson = require('./package.json')

let versions = {
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron,
  appInfo: `${packageJson.name}@${packageJson.version}`
}

function showVersion(item) {
  document.getElementById(item).innerHTML = versions[item]
}

Object.keys(versions).forEach(showVersion)
