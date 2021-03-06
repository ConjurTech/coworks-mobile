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

### Websites
- [React-Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html#content)
- [React Parts](https://react.parts/native)
- [Curated RN components](https://github.com/jondot/awesome-react-native)


To debug android app    
`react-native run-android`

To start development server    
`react-native start`    
`adb reverse tcp:8081 tcp:8081`

Find PID running on port 8081 + kill    
`lsof -i tcp:8081`    
`kill -9 [PID]`

Run android log    
`adb logcat *:S ReactNative:V ReactNativeJS:V`

Get local IP    
`ifconfig | grep inet`
