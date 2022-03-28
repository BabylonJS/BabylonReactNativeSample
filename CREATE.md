# Creating a new project

This session describes the steps users can take to manually setup this project from scratch. Assuming you already have your environment properly configured for react native development. ([See React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup))

## Configure Babylon React Native

The following steps will configure your project to use Babylon React Native.

Setup a new react native project (babylon react native currently only supports react version 0.64 and 0.65).

```
react-native init YOUR_PROJECT_NAME --version 0.64
cd YOUR_PROJECT_NAME
```

Install babylon and babylon react native packages:

```
npm i @babylonjs/react-native@0.64.0-alpha.48 @babylonjs/core@5.0.0-rc.1
```

(Optional) If your application will load 3D files (such as glb), you will also need to install @babylonjs/loaders with the version matching @babylonjs/core:

```
npm i @babylonjs/loaders@5.0.0-rc.1
```

## Cocoapods configuration (iOS Only) 

When building for iOS it will also be required to retrieve the pods for the project. Enter the iOS project folder and retrieve pods.

By default, react native will create a Podfile targeting iOS 10.0 or 11.0, this need to be changed in order for it to work with Babylon react native.

Open the file at ios/Podfile and replace the line:

```
platform :ios, '10.0'
```

with:

```
platform :ios, '12.0'
```

After that, reinstall pods (in case they were already installed using the old version) by running:

```
cd ios
pod deintegrate
pod update
cd ..
```

## Additional Cocoapods configurations (M1 Mac only)

Some additional steps are required if the project is configured on a M1 Mac to run on the iOS Simulator, we must manually exclude arm64 platform to avoid issues with the generated binaries.  

In your ios/Podfile replace:

```
post_install do |installer|
    react_native_post_install(installer)
  end
```

with:

```
post_install do |installer|
    react_native_post_install(installer)
    installer.pods_project.build_configurations.each do |config|
      config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
    end
  end
```

Open the generated .xcodeproj in XCode and manually exclude arm64 for simulator architecture.

Do ```pod update``` and continue following the instructions for iOS.

## Configure Typescript

Since we are using --version when initializing the react native project we are not able to simultaneously specify a --template argument, otherwise the --version argument will be ignored. This will require that typescript support to be configured manually.

Add TypeScript and the types for React Native and Jest to your project.

```
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

Add a TypeScript config file. Create a tsconfig.json in the root of your project:

```
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

Create a jest.config.js file to configure Jest to use TypeScript

```
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

Rename your App.js to App.tsx (ATENTION: You should leave the ./index.js entrypoint file as it is otherwise you may run into an issue when it comes to bundling a production build.)

Replace the content of App.tsx by the content in this repo's App.tsx

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


