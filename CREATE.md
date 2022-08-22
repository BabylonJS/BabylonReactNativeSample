# Creating a new project

This session describes the steps users can take to manually setup this project from scratch. Assuming you already have your environment properly configured for react native development. ([See React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup))

## Configure Babylon React Native

The following steps will configure your project to use Babylon React Native.

Setup a new react native project:

```
react-native init YOUR_PROJECT_NAME --template react-native-template-typescript
cd YOUR_PROJECT_NAME
```

Install babylon and babylon react native packages:

```
npm i @babylonjs/react-native @babylonjs/react-native-iosandroid-0-69 @babylonjs/core
```

(Optional) If your application will load 3D files (such as glb), you will also need to install @babylonjs/loaders with the version matching @babylonjs/core:

```
npm i @babylonjs/loaders
```

## Run your project

Once everything is setup you can just run your application as a standard react native application.

For android project:
```
npm run android
```

For IOS project:
```
npm run ios
```


