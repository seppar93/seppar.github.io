import "./style.css";

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
// const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true})
// ^^ no light source

// material with light 
const material = new THREE.MeshStandardMaterial({color: 0xFF6347})

// lighting 
const pointLight = new THREE.PointLight(0xffffff)
// hexadecimal literal
pointLight.position.set(40,40,40)
scene.add(pointLight);

// ambient light
const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

// light Halper
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);

scene.add(lightHelper,gridHelper);


// 3. Mesh geometry + material
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

// controls 

const controls = new OrbitControls(camera, renderer.domElement);



function animate () {
  // telling the browesr to perform an animation
  // game loop
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torus.rotation.z += 0.01;

  controls.update()

  renderer.render(scene, camera);
}
animate();