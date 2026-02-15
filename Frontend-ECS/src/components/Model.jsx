import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useMemo } from "react"
import * as THREE from "three"

export default function Model({
  modelPath,
  isDragging,
  rotationVelocity,
}) {
  const { scene } = useGLTF(modelPath)

  // clone scene once per modelPath
  const clonedScene = useMemo(() => scene.clone(true), [scene])

  const modelRef = useRef(null)
  const lastInteractionTime = useRef(null)

  const defaultRotation = 0
  const returnDelay = 500

  // --- Initial scale + center ---
  useEffect(() => {
    if (!modelRef.current) return

    // reset transforms
    modelRef.current.scale.set(1, 1, 1)
    modelRef.current.position.set(0, 0, 0)
    modelRef.current.rotation.y = defaultRotation

    // fit model into view
    const box = new THREE.Box3().setFromObject(modelRef.current)
    const size = box.getSize(new THREE.Vector3())
    const maxDimension = Math.max(size.x, size.y, size.z)

    const scale = (2 / maxDimension) * 1.5
    modelRef.current.scale.setScalar(scale)

    box.setFromObject(modelRef.current)
    const center = box.getCenter(new THREE.Vector3())
    modelRef.current.position.sub(center)
  }, [clonedScene, defaultRotation])

  // --- Animation loop ---
  useFrame(() => {
    if (!modelRef.current) return

    if (isDragging.current) {
      modelRef.current.rotation.y += rotationVelocity.current
      rotationVelocity.current *= 0.6
      lastInteractionTime.current = Date.now()
    } else if (lastInteractionTime.current) {
      const now = Date.now()
      if (now - lastInteractionTime.current > returnDelay) {
        const diff = defaultRotation - modelRef.current.rotation.y
        rotationVelocity.current += diff * 0.02
        rotationVelocity.current *= 0.85
        modelRef.current.rotation.y += rotationVelocity.current
      }
    }
  })

  return <primitive ref={modelRef} object={clonedScene} />
}
