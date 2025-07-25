import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from 'three'

// 模型缓存
const modelCache = new Map()

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options
  
  // 检查缓存
  if (modelCache.has(glbPath)) {
    const cachedModel = modelCache.get(glbPath).clone()
    scene.add(cachedModel)
    return Promise.resolve(cachedModel)
  }
  
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    
    // 添加DRACO压缩支持以减小文件大小
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/')
    loader.setDRACOLoader(dracoLoader)

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'dog'
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        
        // 优化材质和几何体
        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
            
            // 优化材质
            if (child.material) {
              child.material.needsUpdate = false
              // 禁用不必要的材质特性以提升性能
              if (child.material.map) {
                child.material.map.generateMipmaps = false
                child.material.map.minFilter = THREE.LinearFilter
              }
            }
            
            // 优化几何体
            if (child.geometry) {
              child.geometry.computeBoundingSphere()
              child.geometry.computeBoundingBox()
            }
          }
        })
        
        // 缓存模型
        modelCache.set(glbPath, obj.clone())
        
        scene.add(obj)
        resolve(obj)
      },
      // 进度回调
      (_progress) => {
        // 可以在这里添加加载进度显示
      },
      function (error) {
        reject(error)
      }
    )
  })
}
