import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';


//escena
const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load('assets/4.jpg');
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();

let spotLight;
let objects = [];


document.body.onload = () => {
  main();
};

//Dimensionar pantalla
window.onresize = () => {
  scene.background = new THREE.Color('#98FFFD');
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth * 0.8, window.innerHeight, true);
};



function main() {
  // Configurracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  // Controls
  
  const controls = new OrbitControls(camera, renderer.domElement); 
  controls.listenToKeyEvents( window );
  controls.keys = {
    LEFT: 'ArrowLeft', 
    UP: 'ArrowUp', 
    RIGHT: 'ArrowRight', 
    BOTTOM: 'ArrowDown' 
    
  }

  interaction();

  camera.position.z = -2;
  camera.position.y = 2;
  camera.position.x = 0;

  // Lights
  setupLights();
  musicafondo();




//Videos
 let v01 = Video01(0x0000, false);
 v01.position.z = 13;
 v01.position.y = 3;
 v01.position.x = 8;
 scene.add(v01);
 objects.push(v01);

 let v02 = Video02(0x0000, false);
 v02.position.z = -13;
 v02.position.y = 3;
 v02.position.x = 8;
 scene.add(v02);
 objects.push(v02);

 let v03 = Video03(0x0000, false);
 v03.position.z = -13;
 v03.position.y = 3;
 v03.position.x = -8;
 scene.add(v03);
 objects.push(v03);

 
 let v04 = Video04(0x0000, false);
 v04.position.z = 7;
 v04.position.y = 5;
 v04.position.x = -7;
 v04.rotation.y = 5;
 v04.rotation.z = 10;

 scene.add(v04);
 objects.push(v04);

//Cubos x

  let a = drawCubex('F9FEFC', false);
  a.position.z = 15;
  a.position.y = 1;
  a.position.x = 8;
  scene.add(a);
  objects.push(a);

  //camera.lookAt(a.position);

  let b = drawCubex('F9FEFC', false);
  b.position.z = 15;
  b.position.y = 1;
  b.position.x = -7;
  scene.add(b);
  objects.push(b);

  let c = drawCubex('F9FEFC', false);
  c.position.z = -15;
  c.position.y = 1;
  c.position.x = -7;
  scene.add(c);
  objects.push(c);

  let d = drawCubex('F9FEFC', false);
  d.position.z = -15;
  d.position.y = 1;
  d.position.x = 8;
  scene.add(d);
  objects.push(d);

//paredes centro

  let e = drawCubex('F9FEFC', false);
  e.position.z = 0;
  e.position.y = 1;
  e.position.x = -10;
  scene.add(e);
  objects.push(e);

  let f = drawCubex('F9FEFC', false);
  f.position.z = 0;
  f.position.y = 1;
  f.position.x = 10;
  scene.add(f);
  objects.push(f);

  let central3 = drawCubex('F9FEFC', false);
  central3.position.z = -5;
  central3.position.y = 1;
  central3.position.x = -10;
  scene.add(central3);
  objects.push(central3);

  let central4 = drawCubex('F9FEFC', false);
  central4.position.z = -5;
  central4.position.y = 1;
  central4.position.x = 10;
  scene.add(central4);
  objects.push(central4);

  //Cubos y
  //paredes habitaciones pequeñas
  let g = drawCubey('F9FEFC', false);
  g.position.z = 7;
  g.position.y = 1;
  g.position.x = -15;
  scene.add(g);
  objects.push(g);

  let h = drawCubey('F9FEFC', false);
  h.position.z = 8;
  h.position.y = 1;
  h.position.x = 0;
  scene.add(h);
  objects.push(h);

  let i = drawCubey('F9FEFC', false);
  i.position.z = 7;
  i.position.y = 1;
  i.position.x = 15;
  scene.add(i);
  objects.push(i);

  let medio1 = drawCubey('F9FEFC', false);
  medio1.position.z = -12;
  medio1.position.y = 1;
  medio1.position.x = 0;
  scene.add(medio1);
  objects.push(medio1);

  let k = drawCubey('F9FEFC', false);
  k.position.z = -7;
  k.position.y = 1;
  k.position.x = 15;
  scene.add(k);
  objects.push(k);

  let l = drawCubey('F9FEFC', false);
  l.position.z = -7;
  l.position.y = 1;
  l.position.x = -15;
  scene.add(l);
  objects.push(l);
//Columnas
  let columna1 = drawCubeA('F9FEFC', false);
  columna1.position.z = 0;
  columna1.position.y = 4;
  columna1.position.x = 0;
  scene.add(columna1);
  objects.push(columna1);

  let columna2 = drawCubeA('F9FEFC', false);
  columna2.position.z = -5;
  columna2.position.y = 4;
  columna2.position.x = 0;
  scene.add(columna2);
  objects.push(columna2);

  let columna3 = drawCubeB('F9FEFC', false);
  columna3.position.z = -2.5;
  columna3.position.y = 4;
  columna3.position.x = 3;
  scene.add(columna3);
  objects.push(columna3);

  let columna4 = drawCubeB('F9FEFC', false);
  columna4.position.z = -2.5;
  columna4.position.y = 4;
  columna4.position.x = -3;
  scene.add(columna4);
  objects.push(columna4);

  //planos

  let plane = drawPlane(30, 30, 4, 4, '#98FFFD', true);
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);

  let plane2 = drawPlane2(30, 30, 4, 4, '#98FFFD', true);
  plane2.rotation.x = Math.PI / 2;
  scene.add(plane2);
  plane2.position.x = 30;

//Modelos
model();
//Animate
animate();
}

//Modelos3d

function model(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/xayah_league_of_legends_fanart/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(2, 5, 0);
    gltf.scene.receiveShadow = true;
    
  });
}

//controles primera persona

function interaction(){
  window.addEventListener('keydown',(e)=>{
    let key = e.key;
    console.log(e.key)
    switch(key){
      case 's':
        camera.position.z=camera.position.z+0.5;
        break;
      case 'w':
        camera.position.z=camera.position.z-0.5;
        break;
      case 'd':
        camera.position.x=camera.position.x+0.5;
        break;
      case 'a':
        camera.position.x=camera.position.x-0.5;
        break;
      case 'q':
        camera.rotation.y=camera.rotation.y-0.5;
        break;
      case 'e':
        camera.rotation.y=camera.rotation.y+0.5;
        break;
    }
  })
}

//videos
function Video01(color, wireframe = false){
  const geometry = new THREE.BoxGeometry(10,7,1);
  var video = document.querySelector("#video01");
  const texture = new  THREE.VideoTexture(video);
  texture.wrap5 = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.MeshBasicMaterial({map: texture});
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function Video02(color, wireframe = false){
  const geometry = new THREE.BoxGeometry(10,7,1);
  var video = document.querySelector("#video02");
  const texture = new  THREE.VideoTexture(video);
  texture.wrap5 = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.MeshBasicMaterial({map: texture});
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function Video03(color, wireframe = false){
  const geometry = new THREE.BoxGeometry(10,7,1);
  var video = document.querySelector("#video03");
  const texture = new  THREE.VideoTexture(video);
  texture.wrap5 = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.MeshBasicMaterial({map: texture});
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function Video04(color, wireframe = false){
  const geometry = new THREE.BoxGeometry(5,5,5);
  var video = document.querySelector("#video04");
  const texture = new  THREE.VideoTexture(video);
  texture.wrap5 = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.MeshBasicMaterial({map: texture});
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

//Planos

function drawPlane(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const texture = new THREE.TextureLoader().load('assets/3.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  return plane;
}

function drawPlane2(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const texture = new THREE.TextureLoader().load('assets/3.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  return plane;
}

//Cubos

function drawCubex(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(15, 5, 1 );
  const texture = new THREE.TextureLoader().load('assets/1.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCubey(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(1, 5, 15 );
  const texture = new THREE.TextureLoader().load('assets/1.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCubeA(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(5, 1, 1  );
  const texture = new THREE.TextureLoader().load('assets/2.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function drawCubeB(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(1, 1, 5  );
  const texture = new THREE.TextureLoader().load('assets/2.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

//audio
function musicafondo(){
  const listener = new THREE.AudioListener();
  camera.add(listener);
  var sound = new THREE.Audio(listener);
  var AudioLoader = new THREE.AudioLoader();
  AudioLoader.load( 'assets/1.mp3', function(buffer){
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.1);
    sound.play();
  });
}


function setupLights() {
  const ambient = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambient);

  spotLight = new THREE.SpotLight(0xffffff, 1);
  spotLight.position.set(0, 10, 0);
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.5;
  spotLight.decay = 2;
  spotLight.distance = 100;

  spotLight.castShadow = true;
  scene.add(spotLight);

  /* lightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(lightHelper); */
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
}

