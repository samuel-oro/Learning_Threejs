import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x222222)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshPhysicalMaterial({
    color: 0xbfe9ff,
    metalness: 0,
    roughness: 0.05,
    transparent: true,
    opacity: 0.35,
    transmission: 1,
    thickness: 0.6,
    ior: 1.45,
    clearcoat: 1,
    clearcoatRoughness: 0.05
})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const ringMaterial = new THREE.MeshStandardMaterial({
    color: 0xff8844,
    emissive: 0x552200,
    metalness: 0.2,
    roughness: 0.35
})
const ringGeometry = new THREE.TorusGeometry(0.22, 0.035, 24, 96)
const ringX = new THREE.Mesh(ringGeometry, ringMaterial)
const ringY = new THREE.Mesh(ringGeometry, ringMaterial)
const ringZ = new THREE.Mesh(ringGeometry, ringMaterial)
ringX.rotation.y = Math.PI / 2
ringY.rotation.x = Math.PI / 2

const ringGroup = new THREE.Group()
ringGroup.add(ringX, ringY, ringZ)
scene.add(ringGroup)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2)
directionalLight.position.set(2, 2, 3)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    cube.rotation.y = elapsedTime * 0.5
    cube.rotation.x = elapsedTime * 0.2
    ringGroup.rotation.y = -elapsedTime * 0.9
    ringGroup.rotation.x = elapsedTime * 0.4

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
