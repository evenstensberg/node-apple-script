exports.lightsUp = function(){
  const spawn = require('child_process').spawn;
  const ls = spawn('osascript', ['-e', 'tell application "System Events" to key code 113']);
}

exports.lightsDown = function() {
  const spawn_2 = require('child_process').spawn;
  const ls = spawn_2('osascript', ['-e', 'tell application "System Events" to key code 107']);
}
exports.highlightPrevious = function() {
  const spawn_3 = require('child_process').spawn;
  const ls = spawn_3('osascript', ['-e', 'tell application "System Events" to key code 126 using command down']);
}
exports.densityDown = function() {
  const spawn_4 = require('child_process').spawn;
  const ls = spawn_4('osascript', ['-e', 'tell application "System Events" to key code 96']);
}
exports.densityUp = function() {
  const spawn_5 = require('child_process').spawn;
  const ls = spawn_5('osascript', ['-e', 'tell application "System Events" to key code 97']);

}
exports.launchPad = function() {
  const spawn_6 = require('child_process').spawn;
  const ls = spawn_6('osascript', ['-e', 'tell application "System Events" to key code 131']);
}

exports.splitScreen = function() {
  const spawn_7 = require('child_process').spawn;
  const ls = spawn_7('osascript', ['-e', 'tell application "System Events" to key code 160']);
}
exports.spreadScreen = function() {
  const spawn_8 = require('child_process').spawn;
  const ls = spawn_8('osascript', ['-e', 'tell application "System Events" to key code 103']);
}
exports.closeWindow = function() {
  const spawn_9 = require('child_process').spawn;
  const ls = spawn_9('osascript', ['-e', 'tell application "System Events" to key code 13 using command down']);
}
exports.closeEverything = function() {
  const spawn_10 = require('child_process').spawn;
  const ls = spawn_10('osascript', ['-e', 'tell application "System Events" to key code 12 using command down']);
}
exports.newTab = function() {
  const spawn_10 = require('child_process').spawn;
  const ls = spawn_10('osascript', ['-e', 'tell application "System Events" to key code 17 using command down']);
}
exports.newWindow = function() {
  const spawn_11 = require('child_process').spawn;
  const ls = spawn_11('osascript', ['-e', 'tell application "System Events" to key code 45 using command down']);
}
exports.splitTabs = function() {
  const spawn_12 = require('child_process').spawn;
  const ls = spawn_12('osascript', ['-e', 'tell application "System Events" to key code 2 using command down']);
}
exports.search = function() {
  const spawn_12 = require('child_process').spawn;
  const ls = spawn_12('osascript', ['-e', 'tell application "System Events" to key code 3 using command down']);
}
exports.clear = function() {
  const spawn_13 = require('child_process').spawn;
  const ls = spawn_13('osascript', ['-e', 'tell application "System Events" to key code 40 using command down']);
}
exports.paste = function() {
  const spawn_14 = require('child_process').spawn;
  const ls = spawn_14('osascript', ['-e', 'tell application "System Events" to key code 9 using command down']);
}
exports.hide = function() {
  const spawn_15 = require('child_process').spawn;
  const ls = spawn_15('osascript', ['-e', 'tell application "System Events" to key code 46 using command down']);
}
exports.zoom = function() {
  const spawn_16 = require('child_process').spawn;
  const ls = spawn_16('osascript', ['-e', 'tell application "System Events" to key code 27 using command down']);
}
exports.config = function() {
  const spawn_17 = require('child_process').spawn;
  const ls = spawn_17('osascript', ['-e', 'tell application "System Events" to key code 43 using command down']);
}
exports.minimize = function() {
  const spawn_18 = require('child_process').spawn;
  const ls = spawn_18('osascript', ['-e', 'tell application "System Events" to key code 29 using command down']);
}
exports.shutDown = function() {
  const spawn_19 = require('child_process').spawn;
  const ls = spawn_19('osascript', ['-e', 'tell application "System Events" to key code 12 using {command down, shift down}']);
}
exports.screenshot = function() {
  const spawn_20 = require('child_process').spawn;
  const ls = spawn_20('osascript', ['-e', 'tell application "System Events" to key code 20 using {command down, shift down}']);
}
exports.mute = function() {
  const spawn_21 = require('child_process').spawn;
  const ls = spawn_21('osascript', ['-e', 'set volume 0']);
}
exports.volumeUp = function() {
  const spawn_22 = require('child_process').spawn;
  const ls = spawn_22('osascript', ['-e', 'set volume output volume (output volume of (get volume settings) + 1) --100%']);
}
