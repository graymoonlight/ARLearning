import React, { useState, useEffect, useRef } from 'react';
import { GLView } from 'expo-gl';
import { Camera } from 'expo-camera';
import { View, StyleSheet, Button } from 'react-native';
import { Renderer } from 'expo-three';
import * as THREE from 'three';

const ARScene = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [cubeAdded, setCubeAdded] = useState(false);
  const scene = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const addCube = () => {
    if (cameraRef && scene.current && !cubeAdded) { // Добавлено условие проверки scene.current
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(0, 0, -5); // Устанавливаем позицию куба
      scene.current.add(cube);
      setCubeAdded(true);
    }
  };

  const onContextCreate = async ({ gl, width, height }) => {
    if (!hasPermission) {
      console.warn('Camera permission not granted');
      return;
    }
  
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
  
    // Загрузка модели и других ресурсов
    await loadModel();
  
    const animate = () => {
      requestAnimationFrame(animate);
  
      if (cameraRef && modelLoaded) {
        const camera = cameraRef.getCamera();
        camera.updateMatrixWorld(true);
        renderer.render(scene.current, camera);
      }
    };
  
    animate();
  };

  return (
    <View style={{ flex: 1 }}>
      {hasPermission && (
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={(ref) => setCameraRef(ref)}
        />
      )}
      <GLView style={StyleSheet.absoluteFill} onContextCreate={onContextCreate} />
      <View style={styles.buttonContainer}>
        <Button title="Add Cube" onPress={addCube} disabled={!hasPermission || cubeAdded} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default ARScene;
