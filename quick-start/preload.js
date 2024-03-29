// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.textContent = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }

  const { name, version } = appInfo()
  replaceText('appInfo', `${name}@${version}`)
})

function appInfo() {
  const packageInfo = require('./package.json')
  return { name: packageInfo.name, version: packageInfo.version }
}
