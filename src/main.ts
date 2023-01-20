import "./style.css";

import * as THREE from "three";

// 1. Scene => container holding objects
const scene = new THREE.Scene();
// 2. Camera => looking inside of Scene (eyeballs)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//                                        ^^ field of viw,  ^^^aspect ration, view frustum
// 3. Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30);
// render == draw
renderer.render(scene, camera)

// creating object
// 1. Geometry the {x,y,z} points that make up a shape
const geometry = new THREE.TorusGeometry(10,3,16,100)

// 2. Material the wrapping paper for an object
const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})
// ^^ no light source

// 3. Mesh geometry + material
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

// 
function animate () {
  // telling the browesr to perform an animation
  // game loop
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  renderer.render(scene, camera);
}
animate();