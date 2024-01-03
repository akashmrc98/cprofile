/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model3D() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../assets/.glb/drone-transformed.glb"
  );
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (group.current) {
      actions[names[0]].reset().fadeIn(0.5).play();
      return () => {
        actions[names[0]].fadeOut(0.5);
      };
    }
  }, [actions, names]);

  return (
    <group scale={2.3} ref={group}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.Material_73}
          skeleton={nodes.Object_7.skeleton}
          scale={0.003}
          userData={{ name: "Object_7" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../assets/.glb/drone-transformed.glb");
