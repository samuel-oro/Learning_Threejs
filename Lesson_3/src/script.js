import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()
scene.add(group)

//Cubes

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0XFF0000 })
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0X00ff00 })
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
group.add(cube1, cube2, cube3)

cube1.position.x = -2
cube2.position.x = 0
cube3.position.x = 2

group.add(cube1, cube2, cube3)

//Axes helper

const axeshelper = new THREE.AxesHelper()
scene.add(axeshelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 2   
camera.position.y = 4
camera.position.z = 3
camera.lookAt(group.position)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// gsap animation

/*gsap.to(cube1.position, {duration: 1, delay: 1, x: 2 })
gsap.to(cube1.position, {duration: 1, delay: 1, x: 0 })
*/

//Animation
const clock  = new THREE.Clock()

const tick  = () =>
{
    const elapsedTime = clock.getElapsedTime()

    cube1.rotation.y = elapsedTime;
    cube2.rotation.x = elapsedTime;
    cube3.rotation.z = elapsedTime;

    renderer.render(scene, camera)
    requestAnimationFrame(tick)
}
tick()