const scene = spaceDocument.scene as BABYLON.Scene;

const sevenLogoUrl = 'https://ooo.0x0.ooo/2023/11/16/OeYt3F.jpg';
const plane = BABYLON.MeshBuilder.CreatePlane('plane', {
  width: 1200,
  height: 540,
  sideOrientation: BABYLON.Mesh.DOUBLESIDE,
  frontUVs: new BABYLON.Vector4(1, 1, 0, 0),
  backUVs: new BABYLON.Vector4(1, 1, 0, 0),
}, scene);
plane.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
plane.position.z = -200;
plane.position.y = 500;

const mat = new BABYLON.StandardMaterial('', scene);
mat.diffuseTexture = new BABYLON.Texture(sevenLogoUrl, scene);
plane.material = mat;

const gui = spatialDocument.getSpatialObjectById('gui').shadowRoot;
const elements = gui.querySelectorAll('.button') as unknown;

const button = elements[0] as HTMLButtonElement;

button.addEventListener('mouseenter', () => {
  button.style.backgroundColor = 'green';
});
button.addEventListener('mouseleave', () => {
  button.style.backgroundColor = 'white';
});
button.addEventListener('mousedown', () => {
  button.style.backgroundColor = 'red';
});
button.addEventListener('mouseup', () => {
  button.style.backgroundColor = 'white';
});

spatialDocument.watchInputEvent();
