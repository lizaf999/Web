window.addEventListener("DOMContentLoaded", init);

import vertexShader from "./shaders/vertexShader.vert"
import fragmentShader from "./shaders/fragmentShader.frag"
declare var THREE;

function init() {
  const width = 960;
  const height = 540;

  var renderTarget = new THREE.WebGLRenderTarget(width,width,{
    magFilter:THREE.NearestFilter,
    minFilter:THREE.NearestFilter,
    wrapS:THREE.ClampToEdgeWrapping,
    wrapT:THREE.ClampToEdgeWrapping,
    depthBuffer:false,
    stencilBuffer:false
  })

  const mat = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  });

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    10000
  );
  camera.position.set(0, 0, +1000);

  // 箱を作成
  const geometry = new THREE.BoxGeometry(500, 500, 500);
  const material = new THREE.MeshStandardMaterial({
    map:renderTarget.texture
  });
  const box = new THREE.Mesh(geometry, material);
  scene.add(box);

  // 平行光源
  const light = new THREE.DirectionalLight(0xffffff);
  light.intensity = 2; // 光の強さを倍に
  light.position.set(1, 1, 1);
  // シーンに追加
  scene.add(light);

  const scenePre = new THREE.Scene()
  const materialPre = new THREE.MeshStandardMaterial({
    color:0xffff00
  });
  const boxPre = new THREE.Mesh(geometry, mat);
  const lightPre = new THREE.DirectionalLight(0xffffff);
  lightPre.intensity = 2; // 光の強さを倍に
  lightPre.position.set(1, 1, 1);
  scenePre.add(boxPre);
  scenePre.add(lightPre)


  // 初回実行
  tick();

  function tick() {
    requestAnimationFrame(tick);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    boxPre.rotation.x += 0.03;
    boxPre.rotation.y += 0.05;

    // レンダリング
    renderer.setRenderTarget(renderTarget)
    renderer.render(scenePre, camera)
    renderer.setRenderTarget(null)
    renderer.render(scene, camera);
  }
}