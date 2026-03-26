// Patch case-sensitive paths in @babylonjs/react-native CMakeLists.txt
// The published package uses lowercase include/source but actual dirs are Include/Source
const fs = require('fs');
const path = require('path');

const cmakePath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@babylonjs',
  'react-native',
  'shared',
  'BabylonNative',
  'deps',
  'jsruntimehost-src',
  'Core',
  'Node-API-JSI',
  'CMakeLists.txt'
);

if (fs.existsSync(cmakePath)) {
  let content = fs.readFileSync(cmakePath, 'utf8');
  const original = content;
  content = content.replace(/"include\//g, '"Include/');
  content = content.replace(/"source\//g, '"Source/');
  // Also fix target_include_directories PUBLIC "include" -> "Include"
  content = content.replace(/PUBLIC "include"\)/g, 'PUBLIC "Include")');
  if (content !== original) {
    fs.writeFileSync(cmakePath, content);
    console.log('Patched Node-API-JSI CMakeLists.txt case-sensitive paths');
  }
}
