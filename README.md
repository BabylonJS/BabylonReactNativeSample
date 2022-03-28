# Babylon React Native - Getting started with this project

This sample repo is intended to help users getting started using Babylon React Native to create cross-platform applications using BabylonJS. This project can be cloned and used as a starting point or the steps at the end can be used in order to configure a project from scratch. 

- **Required Tools:**
    - [node.js](https://nodejs.org/en/)
    - Android
      - [Android Studio](https://developer.android.com/studio)
    - iOS
      - [Xcode](https://developer.apple.com/xcode/resources/)
      - [cocoapods](https://cocoapods.org/)


## 1. Download 

You can download source code archives from [GitHub](https://github.com/SergioRZMasson/BabylonReactNative-GetStarted) or use ```git``` to clone the repository.

```
> git clone https://github.com/SergioRZMasson/BabylonReactNative-ReactNative0.65-Bugbash.git
Cloning into 'BabylonReactNative-ReactNative0.65-Bugbash'...
```

## 2. Project setup

From your projects folder restore the npm packages by running:

```
cd BabylonReactNative-ReactNative0.65-Bugbash
npm install
```

(iOS Only) 

When building for iOS it will also be required to retrieve the pods for the project. Enter the iOS project folder and retreive pods.

```
cd ios
pod update
cd ..
```

(Android Emulator Only)

In order to use Babylon React Native with the Android Emulator it is required that the amulator is configure with GLES3, use the following [instructions on how to set it up properly](docs/ANDROID_EMULATOR.md).



## 3. Try it out

From your projects folder you can now run the following commands to launch your project:

```
npm run ios
npm run android
```

If you want to run the application using your own devices please follow the [React Native Run on Device](https://reactnative.dev/docs/running-on-device) documentation.


## 4. Add you code

Once the project is running, you should be able to open App.tsx using your favorite code editor (we recommend using [vscode](https://code.visualstudio.com/)). Under ```EngineScreen.useEffect``` you are able to setup you Babylon scene the same way you do when using the [BabylonJS Playground](https://www.babylonjs-playground.com/)

## More information

[How to create this project from scratch](CREATE.md)

Additional Documentation
------------------------

* [Babylon React Native](https://github.com/BabylonJS/BabylonReactNative)
