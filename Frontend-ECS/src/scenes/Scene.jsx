import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Model from "../components/Model"
import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"

function CameraSetup() {
  const { camera } = useThree()

  useEffect(() => {
    camera.layers.enable(0)
    camera.layers.enable(1)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return null
}

export default function Scene({ modelPath, bgColor = "#008822" }) {
  // Canvas-level drag state (works for mouse + touch)
  const isDragging = useRef(false)
  const lastX = useRef(0)
  const rotationVelocity = useRef(0)

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        borderRadius: "24px",
      }}

      // ✅ DRAG ANYWHERE ON CANVAS
      onPointerDown={(e) => {
        isDragging.current = true
        lastX.current = e.clientX
      }}
      onPointerMove={(e) => {
        if (!isDragging.current) return
        const delta = e.clientX - lastX.current
        lastX.current = e.clientX
        rotationVelocity.current = delta * 0.01
      }}
      onPointerUp={() => {
        isDragging.current = false
      }}
      onPointerLeave={() => {
        isDragging.current = false
      }}
    >
      {/* Background */}
      <color attach="background" args={[bgColor]} />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[5, 3, 3]}
        intensity={4}
        color="#ffffff"
        castShadow
      />
      <directionalLight
        position={[7, 5, 5]}
        intensity={2.5}
        color="#ffffff"
      />

      {/* Shadow catcher */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.2, 0]}
        receiveShadow
      >
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      {/* Camera */}
      <CameraSetup />

      {/* Model */}
      <Model
        modelPath={modelPath}
        isDragging={isDragging}
        rotationVelocity={rotationVelocity}
      />

      {/* Controls disabled (we handle rotation manually) */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  )
}
