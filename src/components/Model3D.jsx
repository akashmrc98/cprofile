/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model3D() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/robot-transformed.glb");
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
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Object_4" userData={{ name: "Object_4" }}>
          <group
            name="Osnova_CTRL"
            position={[-0.001, -1.218, -0.002]}
            userData={{ name: "Osnova_CTRL" }}
          >
            <group
              name="Top_CTRL"
              position={[0, 2.437, 0.002]}
              userData={{ name: "Top_CTRL" }}
            >
              <group
                name="Objective_Vnesh_CTRL"
                position={[0, 2.599, 7.942]}
                userData={{ name: "Objective_Vnesh_CTRL" }}
              />
              <group
                name="Objective_Vnutr_CTRL"
                position={[0, 2.599, 9.49]}
                userData={{ name: "Objective_Vnutr_CTRL" }}
              />
            </group>
          </group>
          <group
            name="L_Foot_CTRL"
            position={[0, 0, -3.695]}
            userData={{ name: "L_Foot_CTRL" }}
          />
          <group
            name="R_Foot_CTRL"
            position={[0, 0.008, -0.016]}
            userData={{ name: "R_Foot_CTRL" }}
          />
          <group
            name="IK_Stopa_L"
            position={[2.969, -7.777, -3.596]}
            userData={{ name: "IK_Stopa_L" }}
          />
          <group
            name="IK_Stopa_R"
            position={[-2.969, -7.769, 0.083]}
            userData={{ name: "IK_Stopa_R" }}
          />
        </group>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_7.skeleton}
          userData={{ name: "Object_7" }}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_9.skeleton}
          userData={{ name: "Object_9" }}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_11.skeleton}
          userData={{ name: "Object_11" }}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_13.skeleton}
          userData={{ name: "Object_13" }}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_15.skeleton}
          userData={{ name: "Object_15" }}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_17.skeleton}
          userData={{ name: "Object_17" }}
        />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_19.skeleton}
          userData={{ name: "Object_19" }}
        />
        <skinnedMesh
          name="Object_21"
          geometry={nodes.Object_21.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_21.skeleton}
          userData={{ name: "Object_21" }}
        />
        <skinnedMesh
          name="Object_23"
          geometry={nodes.Object_23.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_23.skeleton}
          userData={{ name: "Object_23" }}
        />
        <skinnedMesh
          name="Object_25"
          geometry={nodes.Object_25.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_25.skeleton}
          userData={{ name: "Object_25" }}
        />
        <skinnedMesh
          name="Object_27"
          geometry={nodes.Object_27.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_27.skeleton}
          userData={{ name: "Object_27" }}
        />
        <skinnedMesh
          name="Object_29"
          geometry={nodes.Object_29.geometry}
          material={materials.lambert6}
          skeleton={nodes.Object_29.skeleton}
          userData={{ name: "Object_29" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/robot-transformed.glb");
