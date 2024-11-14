/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: kevin (ケビン) (https://sketchfab.com/sohyalebret)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/porsche-mission-e-0265b34846cc4380bfb6f5d73203f063
Title: Porsche Mission E
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function TestGLTF(props) {
  const { nodes, materials } = useGLTF('FeaturedCars/test/scene.gltf')
  const wheelRef = useRef();
  useFrame(() => {
    wheelRef.current.rotation.x += 0.1;
  })
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={11.334}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -0.001, 5.581]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.geo_dashboard_a_Dashboard_A_0.geometry} material={materials.Dashboard_A} position={[3.65, 1.615, 1.004]} />
            <mesh geometry={nodes.geo_dashboard_b_Dashboard_b_0.geometry} material={materials.Dashboard_b} position={[3.654, 1.606, 1.005]} />
          </group>
          <mesh geometry={nodes.geo_greenhouse_fix_mirror_Roof_Interior_0.geometry} material={materials.Roof_Interior} position={[1.416, 0.329, -4.845]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORLWQ_part_002_PORLQW_0.geometry} material={materials.PORLQW} position={[-8.862, -0.993, 9.141]} rotation={[3.05, -0.346, -1.602]} />
          <mesh geometry={nodes.geo_PORLWQ_part_0021_PORLQW_0.geometry} material={materials.PORLQW} position={[8.789, -0.993, 9.141]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_PORPHB_0.geometry} material={materials.PORPHB} position={[8.149, 1.298, -13.61]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_mirrored_PORPHB_0.geometry} material={materials.PORPHB} position={[-8.149, 1.298, -13.61]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_carbonparts_a_Carbonparts_A_0.geometry} material={materials.Carbonparts_A} position={[0, -7.365, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_carbonparts_a_mirrored_Carbonparts_A_0.geometry} material={materials.Carbonparts_A} position={[-4.555, -4.126, -0.127]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORLWQ_Body_PORLQW_0.geometry} material={materials.PORLQW} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_rear_ribs_PORPHB_0.geometry} material={materials.PORPHB} position={[-0.293, -0.321, -0.258]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_inside_PORGLS_0.geometry} material={materials.PORGLS} position={[0, 2.796, -3.716]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_blackholes_Material_#37_0'].geometry} material={materials.Material_37} position={[0, -2.108, 1.088]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_carbonparts_b_part_001_Carbonparts_B_0.geometry} material={materials.Carbonparts_B} position={[0, -2.476, 9.439]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_charging_Charging_0.geometry} material={materials.Charging} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_gaps_Material_#37_0'].geometry} material={materials.Material_37} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_ghost_wheelhouse_Ghostcar_0.geometry} material={materials.Ghostcar} position={[0.006, -2.633, -0.507]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_headlight_glow_Glow_Front_0.geometry} material={materials.Glow_Front} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_POREMC_POREMC_0.geometry} material={materials.POREMC} position={[0, -0.184, -0.075]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORGLR_part_001_Material_#37_0'].geometry} material={materials.Material_37} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORGLR_part_002_Material_#37_0'].geometry} material={materials.Material_37} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORGLS_part_001_PORGLS_0.geometry} material={materials.PORGLS} position={[0, 2.781, -3.741]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORGRD_PORGRD_0.geometry} material={materials.PORGRD} position={[0, -0.193, -0.08]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORLWQ5_PORLQW_0.geometry} material={materials.PORLQW} position={[0, 1.762, -21.732]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORLWQ_part_001_PORLQW_0.geometry} material={materials.PORLQW} position={[0.012, -7.353, -0.074]} rotation={[-3.109, 0.224, 1.253]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.geo_PORLWQ_part_0011_PORLQW_0.geometry} material={materials.PORLQW} position={[0, -7.365, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORMRD_PORMRD_0.geometry} material={materials.PORMRD} position={[0, -3.266, -23.881]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB4_PORPHB_0.geometry} material={materials.PORPHB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB5_PORPHB_0.geometry} material={materials.PORPHB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB6_PORPHB_0.geometry} material={materials.PORPHB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_mirrored1_PORPHB_0.geometry} material={materials.PORPHB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_001_PORPHB_0.geometry} material={materials.PORPHB} position={[-0.293, -0.321, -0.258]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_002_PORPHB_0.geometry} material={materials.PORPHB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_002_mirrored_PORPHB_0.geometry} material={materials.PORPHB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORRMB_mirrored_Material_#37_0'].geometry} material={materials.Material_37} position={[-6.531, -0.238, -1.234]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORRMB_Material_#37_0'].geometry} material={materials.Material_37} position={[6.531, -0.238, -1.234]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_003_PORPHB_0.geometry} material={materials.PORPHB} position={[7.411, -0.794, 18.813]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_mat_lamp_Material_#37_0'].geometry} material={materials.Material_37} position={[7.388, -0.983, 19.473]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORMRD_part_002_PORMRD_0.geometry} material={materials.PORMRD} position={[7.421, -0.828, 19.251]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORGLS_part_002_PORGLS_0.geometry} material={materials.PORGLS} position={[7.492, -0.842, 18.858]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_004_PORPHB_0.geometry} material={materials.PORPHB} position={[7.497, -0.784, 18.705]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORGLS_part_002_mirrored_PORGLS_0.geometry} material={materials.PORGLS} position={[-7.492, -0.841, 18.858]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORMRD_part_002_mirrored_PORMRD_0.geometry} material={materials.PORMRD} position={[-7.421, -0.827, 19.251]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_003_mirrored_PORPHB_0.geometry} material={materials.PORPHB} position={[-7.411, -0.794, 18.813]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_004_mirrored_PORPHB_0.geometry} material={materials.PORPHB} position={[-7.497, -0.784, 18.705]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_mat_lamp_mirrored_Material_#37_0'].geometry} material={materials.Material_37} position={[-7.388, -0.983, 19.473]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORLQW_Material_#55_0'].geometry} material={materials.Material_55} position={[9.448, -3.81, 13.982]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORLQW1_Material_#55_0'].geometry} material={materials.Material_55} position={[-9.448, -3.81, 13.982]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORLQW2_Material_#55_0'].geometry} material={materials.Material_55} position={[9.459, -3.696, -14.817]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes['geo_PORLQW3_Material_#55_0'].geometry} material={materials.Material_55} position={[-9.459, -3.696, -14.817]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh  geometry={nodes.geo_tire2_Tires_0.geometry} material={materials.Tires} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_tire_Tires_0.geometry} material={materials.Tires} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_rim_tileable3_Ghostrim_0.geometry} material={materials.Ghostrim} position={[-9.493, -3.696, -14.817]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_rim_tileable2_Ghostrim_0.geometry} material={materials.Ghostrim} position={[9.493, -3.696, -14.817]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_rim_tileable1_Ghostrim_0.geometry} material={materials.Ghostrim} position={[-9.458, -3.857, 14.134]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_rim_tileable_Ghostrim_0.geometry} material={materials.Ghostrim} position={[9.458, -3.857, 14.134]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_rear3_Brakes_Rear_0.geometry} material={materials.Brakes_Rear} position={[7.972, -4.219, -13.239]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_rear2_Brakes_Rear_0.geometry} material={materials.Brakes_Rear} position={[-8.447, -3.696, -14.817]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_rear1_Brakes_Rear_0.geometry} material={materials.Brakes_Rear} position={[-7.972, -4.219, -13.239]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_rear_Brakes_Rear_0.geometry} material={materials.Brakes_Rear} position={[8.447, -3.696, -14.817]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_front3_Brakes_Front_0.geometry} material={materials.Brakes_Front} position={[-0.21, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_front2_Brakes_Front_0.geometry} material={materials.Brakes_Front} position={[-8.621, -3.784, 14.133]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_front1_Brakes_Front_0.geometry} material={materials.Brakes_Front} position={[0.12, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_brakes_front_Brakes_Front_0.geometry} material={materials.Brakes_Front} position={[8.621, -3.784, 14.133]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_tire003_Tires_0.geometry} material={materials.Tires} position={[0, -7.365, -0.079]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.geo_tire004_Tires_0.geometry} material={materials.Tires} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.geo_doors2_Door_Interior_0.geometry} material={materials.Door_Interior} position={[6.814, -0.63, -6.714]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_doors3_Door_Interior_0.geometry} material={materials.Door_Interior} position={[-6.814, -0.63, -6.714]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_doors1_Door_Interior_0.geometry} material={materials.Door_Interior} position={[-6.958, -1.063, 2.348]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_doors_Door_Interior_0.geometry} material={materials.Door_Interior} position={[6.958, -1.063, 2.348]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_inside_P1_PORGLS_0.geometry} material={materials.PORGLS} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_outside_PORGLS_PORGLS_0.geometry} material={materials.PORGLS} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_outside_1_PORGLS_0.geometry} material={materials.PORGLS} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_outside_2_PORGLS_0.geometry} material={materials.PORGLS} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_outside_3_PORGLS_0.geometry} material={materials.PORGLS} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_inside_PORGLS_PORGLS_0.geometry} material={materials.PORGLS} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_inside_P3_PORGLS_0.geometry} material={materials.PORGLS} position={[-6.852, 3.168, -7.78]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_window_inside_P2_PORGLS_0.geometry} material={materials.PORGLS} position={[6.852, 3.168, -7.78]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORLWQ1_PORLQW_0.geometry} material={materials.PORLQW} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORLWQ2_PORLQW_0.geometry} material={materials.PORLQW} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.geo_PORLWQ3_PORLQW_0.geometry} material={materials.PORLQW} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORLWQ4_PORLQW_0.geometry} material={materials.PORLQW} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={[-1, 1, 1]} />
          <mesh geometry={nodes.geo_PORMRD1_PORMRD_0.geometry} material={materials.PORMRD} position={[8.838, -5.528, -6.633]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORMRD2_PORMRD_0.geometry} material={materials.PORMRD} position={[-8.838, -5.528, -6.633]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORRBB1_PORRBB_0.geometry} material={materials.PORRBB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORRBB2_PORRBB_0.geometry} material={materials.PORRBB} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_carbonparts_b3_Carbonparts_B_0.geometry} material={materials.Carbonparts_B} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_carbonparts_b2_Carbonparts_B_0.geometry} material={materials.Carbonparts_B} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_carbonparts_b1_Carbonparts_B_0.geometry} material={materials.Carbonparts_B} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_carbonparts_b_Carbonparts_B_0.geometry} material={materials.Carbonparts_B} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORALU_PORALU_0.geometry} material={materials.PORALU} position={[8.825, -1.985, 2.327]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORALU1_PORALU_0.geometry} material={materials.PORALU} position={[-8.825, -1.985, 2.327]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORALU2_PORALU_0.geometry} material={materials.PORALU} position={[8.015, 0.95, -8.851]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORALU3_PORALU_0.geometry} material={materials.PORALU} position={[-8.027, 0.95, -8.851]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB1_PORPHB_0.geometry} material={materials.PORPHB} position={[8.441, 0.887, 1.779]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB2_PORPHB_0.geometry} material={materials.PORPHB} position={[-8.441, 0.887, 1.779]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB3_PORPHB_0.geometry} material={materials.PORPHB} position={[-7.942, 1.368, -7.706]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPHB_part_01_PORPHB_0.geometry} material={materials.PORPHB} position={[7.942, 1.368, -7.706]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORRBB_PORRBB_0.geometry} material={materials.PORRBB} position={[0, -7.365, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORRBB3_PORRBB_0.geometry} material={materials.PORRBB} position={[6.968, 3.203, -7.545]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORRBB4_PORRBB_0.geometry} material={materials.PORRBB} position={[-6.968, 3.203, -7.545]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORRBB_mirrored_PORRBB_0.geometry} material={materials.PORRBB} position={[0, -7.365, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPMB_PORPMB_0.geometry} material={materials.PORPMB} position={[8.246, -0.803, 18.896]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORPMB_mirrored_PORPMB_0.geometry} material={materials.PORPMB} position={[-8.246, -0.803, 18.896]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_geo_PORMBB1_PORMBB_0.geometry} material={materials.PORMBB} position={[8.82, -2.065, 2.106]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_geo_PORMBB_PORMBB_0.geometry} material={materials.PORMBB} position={[8.46, -2.065, 7.725]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORMBB_PORMBB_0.geometry} material={materials.PORMBB} position={[8.032, 0.946, -8.822]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_PORMBB1_PORMBB_0.geometry} material={materials.PORMBB} position={[-8.032, 0.946, -8.822]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_geo_PORMBB_mirrored_PORMBB_0.geometry} material={materials.PORMBB} position={[-8.46, -2.065, 7.725]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_geo_PORMBB2_PORMBB_0.geometry} material={materials.PORMBB} position={[-8.82, -2.065, 2.106]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_bluehighlight_part_002_BlueHighLight_0.geometry} material={materials.BlueHighLight} position={[0, -0.124, -17.024]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_bluehighlight_p2_BlueHighLight_0.geometry} material={materials.BlueHighLight} position={[0, -0.124, -17.024]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_ground_logos_Doorsill_0.geometry} material={materials.Doorsill} position={[0, -4.73, 0.251]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_ground_hooks_Floor_Interior_0.geometry} material={materials.Floor_Interior} position={[0, -4.088, -4.227]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_ground_Floor_Interior_0.geometry} material={materials.Floor_Interior} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_seats_Seat_Interior_0.geometry} material={materials.Seat_Interior} position={[0, -0.273, -4.608]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_seats_logo_rr_Seat_Logo_Interior_0.geometry} material={materials.Seat_Logo_Interior} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_seats_logo_rl_Seat_Logo_Interior_0.geometry} material={materials.Seat_Logo_Interior} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_seats_logo_fr_Seat_Logo_Interior_0.geometry} material={materials.Seat_Logo_Interior} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_seats_logo_fl_Seat_Logo_Interior_0.geometry} material={materials.Seat_Logo_Interior} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_ground_mirrored_Floor_Interior_0.geometry} material={materials.Floor_Interior} position={[0, -7.366, -0.079]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_greenhouse_Roof_Interior_0.geometry} material={materials.Roof_Interior} position={[1.417, 0.368, -4.704]} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.geo_greenhouse_mirrored_Roof_Interior_0.geometry} material={materials.Roof_Interior} position={[0, 0.368, -4.576]} rotation={[-Math.PI / 2, 0, 0]} scale={[-1, 1, 1]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')