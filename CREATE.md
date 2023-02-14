# Creating a new project

This session describes the steps users can take to manually setup this project from scratch. Assuming you already have your environment properly configured for react native development. ([See React Native CLI Quickstart](https://reactnative.dev/docs/environment-setup))

## Configure Babylon React Native

The following steps will configure your project to use Babylon React Native.

Setup a new react native project:

```
react-native init YOUR_PROJECT_NAME --version 0.69
cd YOUR_PROJECT_NAME
```

Install babylon and babylon react native packages:

```
npm i @babylonjs/react-native @babylonjs/react-native-iosandroid-0-69 @babylonjs/core @babylonjs/loaders
```


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


