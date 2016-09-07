#Node Apple Script

>Node Apple Script is what it says it is, nothing less. It lets you execute Apple commands, using Javascript functions. 

#Installation

`npm install --save node-apple-script`

#Usage

| Option | Description |
| ------ | ----------- |
| lightsUp   | Increment Brightness |
| lightsDown | Decrement Brightness |
| highlightPrevious    | Equivalent to ⌘ + arrow up  |
| densityDown    | Decrement Screen Density |
| densityUp    | Increment Screen Density  |
| launchPad    | Redirects you to launchPad |
| splitScreen    | Shows active sessions |
| spreadScreen    | Spreads active sessions |
| closeWindow    | Closes the current window |
| closeEverything    | Close the current program |
| newTab    | Creates a new tab in terminal |
| newWindow    | Creates a new window in terminal |
| splitTabs    | Splits terminal window into smaller ones |
| search    | Search for something in the terminal |
| clear    | clear current terminal text |
| paste    | Paste current text into terminal |
| hide    | Hides terminal session |
| zoom    | Makes terminal window bigger |
| config    | Displays the current settings |
| minimize    | Makes terminal window smaller |
| shutDown    | Shuts down the computer |
| screenshot    | Takes a screenshot |
| mute    | Mutes volume |
| volumeUp    | Sets the volume up |

#Example

```js
const lightsUp = require('node-apple-script').lightsUp

lightsUp()

```
#License

The MIT License (MIT)
Copyright (c) 2016 Even Stensberg @ev1stensberg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
