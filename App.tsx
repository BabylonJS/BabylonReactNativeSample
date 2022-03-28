/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, FunctionComponent, useEffect } from "react";
import { SafeAreaView, StatusBar, View, ViewProps } from "react-native";
import { EngineView, useEngine } from "@babylonjs/react-native";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { Camera } from "@babylonjs/core/Cameras/camera";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import "@babylonjs/loaders/glTF";

const EngineScreen: FunctionComponent<ViewProps> = (props: ViewProps) => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();

  useEffect(() => {
    if (engine) {
      const url = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF/BoxAnimated.gltf";
      SceneLoader.LoadAsync(url, undefined, engine).then((scene) => {
        scene.createDefaultCameraOrLight(true, undefined, true);
        (scene.activeCamera as ArcRotateCamera).alpha += Math.PI;
        (scene.activeCamera as ArcRotateCamera).radius = 10;
        setCamera(scene.activeCamera!);
      });
    }
  }, [engine]);

  return (
    <>
      <View style={props.style}>
        <View style={{ flex: 1 }}>
          <EngineView camera={camera} displayFrameRate={true} />
        </View>
      </View>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <EngineScreen style={{ flex: 1 }} />
      </SafeAreaView>
    </>
  );
};

export default App;
