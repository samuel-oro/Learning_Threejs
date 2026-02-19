import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 */
const ambientlight = new THREE.AmbientLight('blue', 0.5)
scene.add(ambientlight)
gui.addColor(ambientlight, 'color').name('Ambient Color')

const spotLight = new THREE.SpotLight(0x78ff00, 0.5, 6, Math.PI * 0.1,0.25, 1)
spotLight.position.set(0, 2, 2)
gui.add(spotLight, 'intensity').min(0).max(5).step(0.001).name('Spot Intensity')
gui.addColor(spotLight, 'color').name('Spot Color')
scene.add(spotLight)
scene.add(spotLight.target)

spotLight.castShadow = true
spotLight.shadow.mapSize.set(1024, 1024)
spotLight.shadow.camera.near = 0.5
spotLight.shadow.camera.far = 10
spotLight.shadow.bias = -0.0005
spotLight.shadow.normalBias = 0.02
spotLight.shadow.radius = 4

const directionalLight = new THREE.DirectionalLight('red', 2)
directionalLight.position.set(1, 1, 0)
gui.add(directionalLight, 'intensity').min(0).max(5).step(0.001).name('Direct Intensity')
gui.addColor(directionalLight, 'color').name('Direct Color')
scene.add(directionalLight)

directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024) 
directionalLight.shadow.camera.near = 0.5
directionalLight.shadow.camera.far = 10
directionalLight.shadow.camera.left = -2
directionalLight.shadow.camera.right = 2
directionalLight.shadow.camera.top = 2
directionalLight.shadow.camera.bottom = -2
directionalLight.shadow.bias = -0.0005
directionalLight.shadow.normalBias = 0.02
directionalLight.shadow.radius = 4


/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)
sphere.castShadow = true
sphere.position.x = - 1.5

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.75, 0.75),
    material
)
cube.castShadow = true

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 32, 64),
    material
)
torus.castShadow = true
torus.position.x = 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.receiveShadow = true
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(sphere, cube, torus, plane)

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
renderer.outputColorSpace = THREE.SRGBColorSpace

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
