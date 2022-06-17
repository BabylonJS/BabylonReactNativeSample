/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useState, FunctionComponent, useEffect, useCallback } from "react";
 import { Button, SafeAreaView, StatusBar, View, ViewProps } from "react-native";
 import { EngineView, useEngine } from "@babylonjs/react-native";
 import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
 import { Camera } from "@babylonjs/core/Cameras/camera";
 import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
 import "@babylonjs/loaders/glTF";
import { Scene } from "@babylonjs/core/scene";
import { WebXRFeatureName, WebXRSessionManager, WebXRTrackingState, WebXRImageTracking } from "@babylonjs/core/XR";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Color3 } from "@babylonjs/core/Maths";

const EngineScreen: FunctionComponent<ViewProps> = (props: ViewProps) => {
  const engine = useEngine();
  const [camera, setCamera] = useState<Camera>();
  const [xrSession, setXrSession] = useState<WebXRSessionManager>();
  const [trackingState, setTrackingState] = useState<WebXRTrackingState>();
  const [scene, setScene] = useState<Scene>();

  const onToggleXr = useCallback(() => {
    (async () => {
      if (xrSession) {
        await xrSession.exitXRAsync();
      } else {
        if (scene !== undefined) {
          const xr = await scene.createDefaultXRExperienceAsync({
            disableDefaultUI: true,
            disableTeleportation: true,
          });
          const session = await xr.baseExperience.enterXRAsync(
            'immersive-ar',
            'unbounded',
            xr.renderTarget,
          );
          setXrSession(session);
          session.onXRSessionEnded.add(() => {
            setXrSession(undefined);
            setTrackingState(undefined);
          });

          setTrackingState(xr.baseExperience.camera.trackingState);
          xr.baseExperience.camera.onTrackingStateChanged.add(
            newTrackingState => {
              setTrackingState(newTrackingState);
            },
          );
        }
      }
    })();
  }, [scene, xrSession]);

  useEffect(() => {
    if (engine) {
      const url =
        'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF/BoxAnimated.gltf';
      SceneLoader.LoadAsync(url, undefined, engine).then(scene => {
        setScene(scene);
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
        <Button
          title={xrSession ? 'Stop XR' : 'Start XR'}
          onPress={onToggleXr}
        />
        <View style={{flex: 1}}>
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
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <EngineScreen style={{flex: 1}} />
      </SafeAreaView>
    </>
  );
};

export default App;
