# Requirements
- Go through [RN's getting started](https://facebook.github.io/react-native/docs/getting-started.html#content) before anything else.
- OSX
- [Android Environment](https://facebook.github.io/react-native/docs/android-setup.html#content)
- [Homebrew](http://brew.sh/) is the recommended way to install Watchman and Flow.
- Node v5.1.
- Use [nvm](https://github.com/creationix/nvm#installation).
- If you are using Node 5.0 or newer, we recommend installing npm 2, which is much faster than npm 3. After installing Node, run `npm install -g npm@2`.
- `brew install watchman`. We recommend installing [watchman](https://facebook.github.io/watchman/docs/install.html), otherwise you might hit a node file watching bug.
- `brew install flow`, if you want to use [flow](http://flowtype.org/).
- `npm install -g react-native-cli`
- `npm react-native-cli -v`: > v2.14.13


We recommend periodically running `brew update && brew upgrade` to keep your programs up-to-date.

# Building for the first time

You are assumed to have worked on [React-Native](https://facebook.github.io/react-native/docs/getting-started.html#content) before.

1. `npm install`
2. `react-native android` (do not overwrite anything!)
3. Overwrite .gitignore? do not overwrite
4. Overwrite index.android.js? do not overwrite
5. `react-native run-android` (connect your device before running this)

## Some Help

### Getting started Websites
- [React-Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html#content)
- [Immutable.js](http://facebook.github.io/immutable-js/docs/#/)
- [Redux](http://redux.js.org/)

### Components to steal
- [React Parts](https://react.parts/native)
- [Curated RN components](https://github.com/jondot/awesome-react-native)

### Example Apps using Redux
- [noder-react-native](https://github.com/soliury/noder-react-native)


To start development server:
`react-native start`              # starts the node server
`adb reverse tcp:8081 tcp:8081`   # bind the node port to the android device
`react-native run-android`        # install the app and run it

If the port binding step does not work, kill existing processes first:
`lsof -i tcp:8081`
`kill -9 [PID]`

To run application again a local backend server (e.g. on port 3000):
`adb reverse tcp:3000 tcp:3000`
Make sure the server is bound to listen to all IPs, e.g:
`rails s -b 0.0.0.0`

To see console logs:
`adb logcat *:S ReactNative:V ReactNativeJS:V`
