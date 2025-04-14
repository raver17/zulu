// Set up scene using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas'), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add light to the scene
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Create a 3D box (could be replaced with a model later)
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xdddddd });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Create the animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the box on each frame
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.005;

  renderer.render(scene, camera);
}

animate();

// GSAP animations for text fade-in effects
gsap.to(".title", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 0.5
});

gsap.to(".subtitle", {
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power3.out",
  delay: 1
});

// Handle window resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}); 
