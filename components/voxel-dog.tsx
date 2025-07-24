import React, { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSkeleton, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [isInView, setIsInView] = useState<boolean>(false)
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null)
  const refCamera = useRef<THREE.OrthographicCamera | null>(null)
  const urlDogGLB = `${process.env.NODE_ENV === 'production' ? 'https://tonymumu.vercel.app/' : ''}/dog.glb`

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    if (refContainer.current) {
      observer.observe(refContainer.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
      
      // Update camera scaling on resize
       const { current: camera } = refCamera
       if (camera) {
         const isMobile = scW < 768
         const isTablet = scW >= 768 && scW < 1024
         const aspectRatio = scW / scH
         
         const baseSize = Math.min(scW, scH)
         let scale
         
         if (isMobile) {
           scale = baseSize * 0.006 + 3.2
         } else if (isTablet) {
           scale = baseSize * 0.005 + 3.8
         } else {
           scale = baseSize * 0.004 + 4.2
         }
         
         scale = Math.max(3.0, Math.min(scale, 8.0))
         
         const scaleX = scale * Math.min(1, aspectRatio)
         const scaleY = scale * Math.min(1, 1 / aspectRatio)
         
         camera.left = -scaleX
         camera.right = scaleX
         camera.top = scaleY
         camera.bottom = -scaleY
         camera.updateProjectionMatrix()
       }
    }
  }, [])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (!container || !isInView) {
      return
    }
    
    const scW = container.clientWidth
    const scH = container.clientHeight

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(scW, scH)
    renderer.outputEncoding = THREE.sRGBEncoding
    container.appendChild(renderer.domElement)
    refRenderer.current = renderer
    const scene = new THREE.Scene()

    const target = new THREE.Vector3(-0.5, 1.2, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )

    // Improved responsive scaling with aspect ratio consideration
    const isMobile = scW < 768
    const isTablet = scW >= 768 && scW < 1024
    const aspectRatio = scW / scH
    
    // Base scale calculation that considers both dimensions
    const baseSize = Math.min(scW, scH)
    let scale
    
    if (isMobile) {
      scale = baseSize * 0.006 + 3.2
    } else if (isTablet) {
      scale = baseSize * 0.005 + 3.8
    } else {
      scale = baseSize * 0.004 + 4.2
    }
    
    // Clamp scale to prevent extreme stretching
    scale = Math.max(3.0, Math.min(scale, 8.0))
    
    // Adjust for aspect ratio to prevent stretching
    const scaleX = scale * Math.min(1, aspectRatio)
    const scaleY = scale * Math.min(1, 1 / aspectRatio)
    
    const camera = new THREE.OrthographicCamera(
      -scaleX,
      scaleX,
      scaleY,
      -scaleY,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)
    refCamera.current = camera

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
    scene.add(ambientLight)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true
    controls.target = target

    console.log('Attempting to load model from:', urlDogGLB)
    
    loadGLTFModel(scene, urlDogGLB, {
      receiveShadow: false,
      castShadow: false
    }).then(() => {
      console.log('Model loaded successfully')
      animate()
      setLoading(false)
    }).catch((error) => {
      console.error('Error loading model:', error)
      setLoading(false)
    })

    let req: number | null = null
    let frame = 0
    const animate = () => {
      req = requestAnimationFrame(animate)

      frame = frame <= 100 ? frame + 1 : frame

      if (frame <= 100) {
        const p = initialCameraPosition
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

        camera.position.y = 10
        camera.position.x =
          p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
        camera.position.z =
          p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    return () => {
      if (req !== null) {
        cancelAnimationFrame(req)
      }
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [isInView])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>
      {loading && isInView && <DogSkeleton />}
    </DogContainer>
  )
}

export default VoxelDog
