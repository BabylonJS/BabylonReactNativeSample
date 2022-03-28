/**
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useState, FunctionComponent, useEffect, useCallback } from 'react';
 import { SafeAreaView, StatusBar, Button, View, Text, ViewProps, Image } from 'react-native';
 
 import { EngineView, useEngine, EngineViewCallbacks } from '@babylonjs/react-native';
 import { Scene, Vector3, ArcRotateCamera, Camera, WebXRSessionManager, SceneLoader, TransformNode, DeviceSourceManager, DeviceType, PointerInput, WebXRTrackingState, IMouseEvent } from '@babylonjs/core';
 import '@babylonjs/loaders';
 
 //Create a FunctionComponent to display our scene.
 const EngineScreen: FunctionComponent<ViewProps> = (props: ViewProps) => 
 {
 
   const engine = useEngine();
   const [camera, setCamera] = useState<Camera>();
   const [rootNode, setRootNode] = useState<TransformNode>();
   const [scene, setScene] = useState<Scene>();
   const [engineViewCallbacks, setEngineViewCallbacks] = useState<EngineViewCallbacks>();
 
   //On usdEffect create the babylonjs scene (similar to CreateScene function on https://www.babylonjs-playground.com/)
   useEffect(() => 
   {
     if (engine) 
     {
       //Add your scene setup here:
       const scene = new Scene(engine);
       setScene(scene);
       scene.createDefaultCamera(true);
       (scene.activeCamera as ArcRotateCamera).beta -= Math.PI / 8;
       setCamera(scene.activeCamera!);
       scene.createDefaultLight(true);
       const rootNode = new TransformNode('Root Container', scene);
       setRootNode(rootNode);
 
       const deviceSourceManager = new DeviceSourceManager(engine);
 
       const handlePointerInput = (event: IMouseEvent) => 
       {
         if (event.inputIndex === PointerInput.Move && event.movementX) 
         {
           rootNode.rotate(Vector3.Down(), event.movementX * 0.005);
         };
       };
 
       deviceSourceManager.onDeviceConnectedObservable.add(device => 
       {
         if (device.deviceType === DeviceType.Touch) 
         {
           const touch = deviceSourceManager.getDeviceSource(device.deviceType, device.deviceSlot)!;
           touch.onInputChangedObservable.add(touchEvent => 
           {
             handlePointerInput(touchEvent as IMouseEvent);
           });
         } else if (device.deviceType === DeviceType.Mouse) {
           const mouse = deviceSourceManager.getDeviceSource(device.deviceType, device.deviceSlot)!;
           mouse.onInputChangedObservable.add(mouseEvent => {
             if (mouse.getInput(PointerInput.LeftClick)) 
             {
               handlePointerInput(mouseEvent as IMouseEvent)
             }
           });
         }
       });
 
       const transformContainer = new TransformNode('Transform Container', scene);
       transformContainer.parent = rootNode;
       transformContainer.scaling.scaleInPlace(0.2);
       transformContainer.position.y -= .2;
 
       scene.beforeRender = function () {
         transformContainer.rotate(Vector3.Up(), 0.005 * scene.getAnimationRatio());
       };
 
       SceneLoader.ImportMeshAsync('', 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoxAnimated/glTF-Binary/BoxAnimated.glb').then(result => {
         const mesh = result.meshes[0];
         mesh.parent = transformContainer;
       });
     }
   }, [engine]);
 
 
   const onInitialized = useCallback(async (engineViewCallbacks: EngineViewCallbacks) => 
   {
     setEngineViewCallbacks(engineViewCallbacks);
   }, [engine]);
 
 
   //Return an EngineView that will render the content of the provided camera.
   return (
     <>
       <View style={props.style}>
           <View style={{ flex: 1 }}>
             <EngineView camera={camera} onInitialized={onInitialized} displayFrameRate={true} />
           </View>
       </View>
     </>
   );
 };
 
 const App = () => {
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
           <EngineScreen style={{ flex: 1 }} />
       </SafeAreaView>
     </>
   );
 };
 
 export default App;