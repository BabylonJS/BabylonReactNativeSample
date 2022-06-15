# Getting Started with Babylon React Native

This sample repo is intended to help users get started using Babylon React Native to create React Native applications using Babylon.js.

## Required Tools
- [node.js](https://nodejs.org/)
- Android
    - [Android Studio](https://developer.android.com/studio/)
- iOS
    - [Xcode](https://developer.apple.com/xcode/resources/)
    - [cocoapods](https://cocoapods.org/)

## 1. Setup React Native Development Environment

Follow the instructions on [React Native's documentation for setting up your development environment](https://reactnative.dev/docs/environment-setup/). Be sure to select "React Native CLI quickstart" instead of "Expo CLI quickstart" since we currently do not support the usage of Expo. 

## 2. Clone the Repo 

```
git clone https://github.com/BabylonJS/BabylonReactNativeSample.git
```

## 3. Project Setup

From the repo root folder, restore the npm packages by running:

```
cd BabylonReactNativeSample
npm install
```

### iOS Only 

When building for iOS, it will also be required to install the pods for the project. Go to the iOS project folder and run `pod install`.

```
cd ios
pod install
cd ..
```

### Android Emulator Only

In order to use Babylon React Native with the Android Emulator, the emulator must be configured with GLES3. Follow these [instructions](docs/ANDROID_EMULATOR.md).

## 4. Try It Out

From your repo root folder, run:

```
npm run ios
```
or
```
chmod 755 android/gradlew
npm run android
```

If you want to run the application using physical devices, please follow the [React Native Run on Device](https://reactnative.dev/docs/running-on-device) documentation.

## 5. Add Your Code

Once the project is running, open `App.tsx` using your favorite code editor (we recommend using [vscode](https://code.visualstudio.com/)). Under `EngineScreen.useEffect`, you can setup your Babylon scene the same way you do when using the [Babylon.js Playground](https://www.babylonjs-playground.com/).

## More Information

[How to create this project from scratch](CREATE.md)

## Additional Documentation

[Babylon React Native](https://github.com/BabylonJS/BabylonReactNative)
