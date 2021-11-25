import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';
 import { FontLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/FontLoader.js';
 import { TextGeometry } from 'https://cdn.skypack.dev/three/examples/jsm/geometries/TextGeometry.js';
 import { PointerLockControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/PointerLockControls.js';
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
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 2.3;
renderer.shadowMap.enabled = true;

const loader = new FontLoader();

let spotLight;
let spotLight2;
let spotLight3;
let objects = [];
let controls;

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
  
  //const controls = new OrbitControls(camera, renderer.domElement); 
  interaction();

  camera.position.z = -13;
  camera.position.y = 4;
  camera.position.x = 0;


  // Lights
  setupLights();
  musicafondo();

//Texto
Texto();


  //paredes habitaciones central


  let paredsala1 = drawCubey('F9FEFC', false);
  paredsala1.position.z = 10;
  paredsala1.position.y = 3.5;
  paredsala1.position.x = 15;
  scene.add(paredsala1);
  objects.push(paredsala1);

  let paredsala2 = drawCubey('F9FEFC', false);
  paredsala2.position.z = -10;
  paredsala2.position.y = 3.5;
  paredsala2.position.x = 15;
  scene.add(paredsala2);
  objects.push(paredsala2);
  
  let paredsala3 = drawCubex('F9FEFC', false);
  paredsala3.position.z = -15;
  paredsala3.position.y = 3.5;
  paredsala3.position.x = -8;
  scene.add(paredsala3);
  objects.push(paredsala3);



  let paredsala4 = drawCubex('F9FEFC', false);
  paredsala4.position.z = -15;
  paredsala4.position.y = 3.5;
  paredsala4.position.x = 8;
  scene.add(paredsala4);
  objects.push(paredsala4);


  let paredsala5 = drawCubex('F9FEFC', false);
  paredsala5.position.z = -16;
  paredsala5.position.y = 3.5;
  paredsala5.position.x = 0;
  scene.add(paredsala5);
  objects.push(paredsala5);

  //Videos
 let v01 = Video01(0x0000, false);
 v01.position.z = 0;
 v01.position.y = 3;
 v01.position.x = 0;
 scene.add(v01);
 objects.push(v01);


//Columnas


  let columna3 = drawCubeB('F9FEFC', false);
  columna3.position.z = 0;
  columna3.position.y = 7;
  columna3.position.x = 15;
  scene.add(columna3);
  objects.push(columna3);

  let techo1 = Techo('F9FEFC', false);
  techo1.position.z = 0;
  techo1.position.y = 8;
  techo1.position.x = 0;
  scene.add(techo1);
  objects.push(techo1);

//--------Sala lol---------
  let Paredlol1 = drawCubelol('F9FEFC', false);
  Paredlol1.position.z = 18;
  Paredlol1.position.y = 4;
  Paredlol1.position.x = 28;
  scene.add(Paredlol1);
  objects.push(Paredlol1);

  let Paredlol2 = drawCubelol('F9FEFC', false);
  Paredlol2.position.z = -18;
  Paredlol2.position.y = 4;
  Paredlol2.position.x = 28;
  scene.add(Paredlol2);
  objects.push(Paredlol2);

  //Videos

  let VideoLol = Video02(0x0000, false);
  VideoLol.position.z = -13;
  VideoLol.position.y = 3;
  VideoLol.position.x = 21;
  VideoLol.rotation.y = -3;
  scene.add(VideoLol);
  objects.push(VideoLol);

  //Modelos
 
  model();
  Torre();
  Morde();
  Ashe();
  Rock();
  Fondolol();

//------Sala Concierto----------

  let escenario = Escenario('F9FEFC', false);
  escenario.position.z = 0;
  escenario.position.y = 1;
  escenario.position.x = -40;
  scene.add(escenario);
  objects.push(escenario);

  let techo = TechoConcierto('F9FEFC', false);
  techo.position.z = 0;
  techo.position.y = 18;
  techo.position.x = -30;
  scene.add(techo);
  objects.push(techo);

  let ParedX1 = ParedesConciertoX('F9FEFC', false);
  ParedX1.position.z = -20;
  ParedX1.position.y = 8;
  ParedX1.position.x = -34;
  scene.add(ParedX1);
  objects.push(ParedX1);

  let ParedX2 = ParedesConciertoX('F9FEFC', false);
  ParedX2.position.z = 20;
  ParedX2.position.y = 8;
  ParedX2.position.x = -34;
  scene.add(ParedX2);
  objects.push(ParedX2);

  let ParedY1 = ParedesConciertoY('F9FEFC', false);
  ParedY1.position.z = 12;
  ParedY1.position.y = 8;
  ParedY1.position.x = -15;
  scene.add(ParedY1);
  objects.push(ParedY1);

  let ParedY2 = ParedesConciertoY('F9FEFC', false);
  ParedY2.position.z = -12;
  ParedY2.position.y = 8;
  ParedY2.position.x = -15;
  scene.add(ParedY2);
  objects.push(ParedY2);

  let ParedY3 = ParedesConciertoY2('F9FEFC', false);
  ParedY3.position.z = 0;
  ParedY3.position.y = 18;
  ParedY3.position.x = -15;
  scene.add(ParedY3);
  objects.push(ParedY3);3
  
  //Video
  let ConciertoPantalla = Video03(0x0000, false);
  ConciertoPantalla.position.z = 0;
  ConciertoPantalla.position.y = 10;
  ConciertoPantalla.position.x = -44;
  scene.add(ConciertoPantalla);
  objects.push(ConciertoPantalla);

  let v04 = Video04(0x0000, false);
  v04.position.z = 0;
  v04.position.y = 15;
  v04.position.x = -40;
  v04.rotation.y = 5;
  v04.rotation.z = 10;
  scene.add(v04);

  let Col1 = ColumnasLaterales(0x0000, false);
  Col1.position.z = -15;
  Col1.position.y = 10;
  Col1.position.x = -44;
  scene.add(Col1);

  let Col2 = ColumnasLaterales(0x0000, false);
  Col2.position.z = 15;
  Col2.position.y = 10;
  Col2.position.x = -44;
  scene.add(Col2);

  let Col3 = ColumnasHorizontales(0x0000, false);
  Col3.position.z = 0;
  Col3.position.y = 1;
  Col3.position.x = -34;
  scene.add(Col3);

    //modelos
    Dj();
    Djspeak();

//------Sala Space----------
  let VideoSpace = Video05(0x0000, false);
  VideoSpace.position.z = 34;
  VideoSpace.position.y = 3;
  VideoSpace.position.x = 0;
  scene.add(VideoSpace);
  objects.push(VideoSpace);

  //Paredes

  let paredspace1 = drawCubeSpace('F9FEFC', false);
  paredspace1.position.z = 15;
  paredspace1.position.y = 3.5;
  paredspace1.position.x = 10;
  scene.add(paredspace1);
  objects.push(paredspace1);

  let paredspace2 = drawCubeSpace('F9FEFC', false);
  paredspace2.position.z = 15;
  paredspace2.position.y = 3.5;
  paredspace2.position.x = -10;
  scene.add(paredspace2);
  objects.push(paredspace2);

  let paredspace3 = drawCubeSpacePiso('F9FEFC', false);
  paredspace3.position.z = 20;
  paredspace3.position.y = -0.5;
  paredspace3.position.x = 0;
  scene.add(paredspace3);
  objects.push(paredspace3);

  let paredspace4 = drawCubeSpacePiso('F9FEFC', false);
  paredspace4.position.z = 20;
  paredspace4.position.y = 7;
  paredspace4.position.x = 0;
  scene.add(paredspace4);
  objects.push(paredspace4);

  let paredspace5 = drawCubeSpaceY('F9FEFC', false);
  paredspace5.position.z = 20;
  paredspace5.position.y = 4;
  paredspace5.position.x = 5;
  scene.add(paredspace5);
  objects.push(paredspace5);

  let paredspace6 = drawCubeSpaceY('F9FEFC', false);
  paredspace6.position.z = 20;
  paredspace6.position.y = 4;
  paredspace6.position.x = -5;
  scene.add(paredspace6);
  objects.push(paredspace6);

  //Modelos
  Saturn();

  //planos

  let plane = drawPlane(30, 30, 4, 4, '#98FFFD', true);
  plane.rotation.x = Math.PI / 2;
  scene.add(plane);

  let plane2 = drawPlane2(30, 40, 4, 4, '#98FFFD', true);
  plane2.rotation.x = Math.PI / 2;
  scene.add(plane2);
  plane2.position.x = 30;

  let plane3 = drawPlane3(30, 40, 4, 4, '#98FFFD', true);
  plane3.rotation.x = Math.PI / 2;
  scene.add(plane3);
  plane3.position.x = -30;


 //Animate
 animate();
}


//controles primera persona

function interaction(){
  controls = new PointerLockControls( camera, document.body );

  const blocker = document.getElementById( 'blocker' );
  const instructions = document.getElementById( 'instructions' );

  instructions.addEventListener( 'click', function () {

    controls.lock();
  } );

  controls.addEventListener( 'lock', function () {

    instructions.style.display = 'none';
    blocker.style.display = 'none';

  } );

  controls.addEventListener( 'unlock', function () {

    blocker.style.display = 'block';
    instructions.style.display = '';

  } );

  scene.add( controls.getObject() );

  const onKeyDown = function ( event ) {

    switch ( event.code ) {

      case 'ArrowUp':
      case 'KeyW':
        controls.moveForward (0.4);
        break;

      case 'ArrowLeft':
      case 'KeyA':
        controls.moveRight (-0.4);
        break;

      case 'ArrowDown':
      case 'KeyS':
        controls.moveForward (-0.4);
        break;

      case 'ArrowRight':
      case 'KeyD':
        controls.moveRight (0.4);
        break;

    }

  };

  const onKeyUp = function ( event ) {

    switch ( event.code ) {

      case 'ArrowUp':
      case 'KeyW':
        controls.moveForward (0);
        break;

      case 'ArrowLeft':
      case 'KeyA':
        controls.moveRight (0);
        break;

      case 'ArrowDown':
      case 'KeyS':
        controls.moveForward (0);
        break;

      case 'ArrowRight':
      case 'KeyD':
        controls.moveRight (0);
        break;

    }

  };

  document.addEventListener( 'keydown', onKeyDown );
  document.addEventListener( 'keyup', onKeyUp );  
}

//Texto
function Texto(){
  loader.load( 'https://cdn.skypack.dev/three/examples/fonts/gentilis_bold.typeface.json', function ( font ) {
    const geometrytext = new TextGeometry( 'League Of Legends', {
      font: font,
      size: 0.5,
      height: 0.1,
      curveSegments: 1,
      bevelThickness: 0.5,
      bevelSize: 0.1,
      bevelEnabled: false
    } );

    var textMaterial = new THREE.MeshPhongMaterial({ color: '#F7DC6F', specular: 0xffffff });

    var texto1 = new THREE.Mesh( geometrytext, textMaterial );
    texto1.position.y=6;
    texto1.position.x=14;
    texto1.position.z=-6;
    texto1.scale.set(2,2,2);
    texto1.rotation.y =Math.PI+Math.PI/2 ;
    texto1.receiveShadow = true;

    scene.add(texto1);

    //Texto 2
    const geometrytext2 = new TextGeometry( 'Concierto', {
      font: font,
      size: 0.5,
      height: 0.1,
      curveSegments: 1,
      bevelThickness: 0.5,
      bevelSize: 0.1,
      bevelEnabled: false
    } );

    var textMaterial2 = new THREE.MeshPhongMaterial({ color: '#F7DC6F', specular: 0xffffff });

    var texto2 = new THREE.Mesh( geometrytext2, textMaterial2 );
    texto2.position.y=6;
    texto2.position.x=-14;
    texto2.position.z=-5;
    texto2.scale.set(2,2,2);
    texto2.rotation.y =Math.PI+Math.PI/-2 ;
    texto2.receiveShadow = true;
    scene.add(texto2);

    //Texto 3
    const geometrytext3 = new TextGeometry( 'Saturno', {
      font: font,
      size: 0.5,
      height: 0.1,
      curveSegments: 1,
      bevelThickness: 0.5,
      bevelSize: 0.1,
      bevelEnabled: false
    } );

    var textMaterial3 = new THREE.MeshPhongMaterial({ color: '#F7DC6F', specular: 0xffffff });

  var texto3 = new THREE.Mesh( geometrytext3, textMaterial3 );
    texto3.position.y=6;
    texto3.position.x=3;
    texto3.position.z=12;
    texto3.scale.set(2,2,2);
    texto3.rotation.y =Math.PI+Math.PI/12;
    texto3.receiveShadow = true;
    scene.add(texto3);
} );
}
//videos
function Video01(color, wireframe = false){
  const geometry = new THREE.BoxGeometry(7,7,7);
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
  const geometry = new THREE.BoxGeometry(0.2,15,20);
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

function ColumnasLaterales(color, wireframe = false){
  const geometry = new THREE.BoxGeometry(1,15,10);
  var video = document.querySelector("#video04");
  const texture = new  THREE.VideoTexture(video);
  texture.wrap5 = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.MeshBasicMaterial({map: texture});
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}
function ColumnasHorizontales(color, wireframe = false){
  const geometry = new THREE.BoxGeometry(1,5,50);
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
//Lobby
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

//Lol
function drawPlane2(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const texture = new THREE.TextureLoader().load('assets/5.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  return plane;
}
//concierto
function drawPlane3(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const texture = new THREE.TextureLoader().load('assets/8.jpg');
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  return plane;
}

//Paredes

function drawCubex(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(15, 8, 1 );
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

function Techo(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(30, 1, 30 );
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
  const geometry = new THREE.BoxGeometry(1, 8, 15 );
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

//sala lol

function drawCubelol(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(25, 8, 1);
  const texture = new THREE.TextureLoader().load('assets/6.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

//sala Concierto

function Escenario(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(12, 4, 40);
  const texture = new THREE.TextureLoader().load('assets/7.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function ParedesConciertoX(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(40, 20, 1);
  const texture = new THREE.TextureLoader().load('assets/7.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function ParedesConciertoY(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(1, 20, 15);
  const texture = new THREE.TextureLoader().load('assets/7.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function ParedesConciertoY2(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(1, 20, 9);
  const texture = new THREE.TextureLoader().load('assets/7.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

function TechoConcierto(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(30, 1, 40);
  const texture = new THREE.TextureLoader().load('assets/7.jpg');
  const material = new THREE.MeshPhongMaterial({
    color: color,
    map: texture,
    wireframe: wireframe,
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.castShadow = true;
  return cube;
}

//Sala Space

//Video
function Video05(color, wireframe = false){
  const geometry = new THREE.SphereGeometry(10,23,20);
  var video = document.querySelector("#video05");
  const texture = new  THREE.VideoTexture(video);
  texture.wrap5 = texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.LinearFilter;
  const material = new THREE.MeshBasicMaterial({map: texture});
  const sphere = new THREE.Mesh( geometry, material );
  sphere.traverse( function( node ) {
    if( node.material ) {
        node.material.side = THREE.DoubleSide;
    }
  });
  sphere.castShadow = true;
  return sphere;
}

//paredes
function drawCubeSpace(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(10, 8, 1 );
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

function drawCubeSpaceY(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(1, 8, 10 );
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

function drawCubeSpacePiso(color, wireframe = false) {
  const geometry = new THREE.BoxGeometry(10, 1, 10 );
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


//Columnas
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

//Modelos3d

//Lol
function model(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/xayah_league_of_legends_fanart/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(38, 10.5, 7);
    gltf.scene.rotateY(3);
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}

function Torre(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/torre/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(28, 0, -12);
    gltf.scene.rotateY(-2);
    gltf.scene.scale.set(0.07,0.07,0.07)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}

function Morde(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/morde/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(38, 0, -10);
    gltf.scene.rotateY(0);
    gltf.scene.scale.set(0.15,0.15,0.15)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}

function Ashe(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/ashe/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(22, 0, 10);
    gltf.scene.rotateY(3);
    gltf.scene.scale.set(0.04,0.04,0.04)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}

function Rock(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/rock/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(35, 2.5, 10);
    gltf.scene.rotateY(0);
    gltf.scene.scale.set(5,5,5)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}

function Fondolol(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/fondolol/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(59, 9, 0);
    gltf.scene.rotateY(-15);
    gltf.scene.scale.set(3,3,3)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}

//Concierto

function Dj(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/dj/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(-22, 0, 9);
    gltf.scene.rotateY(-1.5);
    gltf.scene.scale.set(3,3,3)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}

function Djspeak(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/dj_speakers/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(-32, 0, 9);
    gltf.scene.rotateY(-1.5);
    gltf.scene.scale.set(2.6,2.6,2.6)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
}


//Space
function Saturn(){
  const loader = new GLTFLoader();
  loader.load( 'assets/Modelos/saturn_planet/scene.gltf', function ( gltf ) {
    scene.add( gltf.scene );
    gltf.scene.position.set(0, 2, 32);
    gltf.scene.scale.set(0.005,0.005,0.005)
    gltf.scene.traverse(n =>{
     if(n.isMesh){
       n.castShadow = true;
       n.receiveShadow = true;
       if(n.material.map) n.material.map.anisotropy = 16;
     }
    });
    
    gltf.scene.receiveShadow = true;
    gltf.scene.castShadow = true;
    animate();
  });
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


//Luces

function setupLights() {
  const hemiLight= new THREE.HemisphereLight(0xffeeb1, 0x08020, 1);
  scene.add(hemiLight);

//Spotlight lobby

  spotLight = new THREE.SpotLight(0xffffff, 4);
  spotLight.position.set(0, 10, 0);
  spotLight.angle = Math.PI / 4;
  spotLight.penumbra = 0.5;
  spotLight.decay = 2;
  spotLight.distance = 100;
  spotLight.castShadow = true;
  spotLight.shadow.bias = -0.0001;
  spotLight.shadow.mapSize.width = 1024*4;
  spotLight.shadow.mapSize.Height = 1024*4;
  scene.add(spotLight);

  //Spotlight lol
  spotLight2 = new THREE.SpotLight(0xffffff, 8);
  spotLight2.position.set(50, 15, 0);
  spotLight2.angle = Math.PI / 4;
  spotLight2.penumbra = 0.5;
  spotLight2.decay = 2;
  spotLight2.distance = 100;
  spotLight2.castShadow = true;
  spotLight2.shadow.bias = -0.0001;
  spotLight2.shadow.mapSize.width = 1024*4;
  spotLight2.shadow.mapSize.Height = 1024*4;
  scene.add(spotLight2);

  //Spotlight Concierto

  spotLight3 = new THREE.SpotLight('#C539E7', 18);
  spotLight3.position.set(-65, 5, 0);
  spotLight3.angle = Math.PI / 4;
  spotLight3.penumbra = 0.5;
  spotLight3.decay = 2;
  spotLight3.distance = 100;
  spotLight3.castShadow = true;
  spotLight3.shadow.bias = -0.0001;
  spotLight3.shadow.mapSize.width = 1024*4;
  spotLight3.shadow.mapSize.Height = 1024*4;
  scene.add(spotLight3);
  
  /* lightHelper = new THREE.SpotLightHelper(spotLight);
  scene.add(lightHelper); */
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
}

