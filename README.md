# electron-cpp

A simple app that demonstrates the use of Electron as Front-End and C ++ DLLs as Back-End.

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## Requirements
- [Node.js](https://nodejs.org/en/download/) (>= 10.x)
- [CMake](https://cmake.org/download/) (>= 3.15)

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository (and its submodules)
git clone --recursive https://github.com/akab/electron-cpp.git
# Go into the repository
cd electron-cpp
# Go into submodule
cd Nodejs-Napi-Addon-Using-Cmake
# Install submodule dependencies
npm install
# Move to root
cd ..
# Install dependencies
npm install
# Run the app
npm start
```
## To deploy the application
```bash
# Go into the repository
cd electron-cpp
# Run Make
npm run make
```
This will produce `electron-cpp.exe` in `.\out\electron-cpp-win32-x64`

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Based on
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [Electron App with C++ backend as Native Addon (Napi)](https://gauriatiq.medium.com/c-native-addon-independent-of-node-js-version-using-napi-node-addon-api-and-cmake-53315582cbd1) - Electron app + Node API example 
- https://www.electronforge.io/ - how to deploy the application

## Resources for Learning Electron

- [C++ addons](https://nodejs.org/api/addons.html)
- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
