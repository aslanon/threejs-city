!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}({3:function(e,n,t){"use strict";var r,o,i,a=new THREE.Scene,d=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,.1,12e3);d.position.z=-5e3,d.position.y=2*window.innerWidth,d.position.x=-window.innerWidth/2;var l=new THREE.WebGLRenderer;l.setSize(window.innerWidth,window.innerHeight),l.autoClear=!1,document.body.appendChild(l.domElement);var u=new THREE.OrbitControls(d,l.domElement);u.enableDamping=!0,u.dampingFactor=.25,u.enableZoom=!0;var s=new THREE.DirectionalLight(new THREE.Color("hsl(30, 100%, 75%)"),1);s.position.set(-5e3,5e3,0);var c=new THREE.DirectionalLight(new THREE.Color("hsl(240, 100%, 75%)"),.75);c.position.set(2500,0,-2500);var E=new THREE.DirectionalLight(16777215,1);E.position.set(0,-500,0).normalize(),a.add(s),a.add(c),a.add(E);var p=new THREE.LoadingManager;p.onLoad=function(){w()},new THREE.TextureLoader(p).load("/statics/space-background.jpg",function(e){(r=new THREE.Mesh(new THREE.PlaneGeometry(2,2,0),new THREE.MeshBasicMaterial({map:e}))).material.depthTest=!1,r.material.depthWrite=!1,o=new THREE.Scene,i=new THREE.Camera,o.add(i),o.add(r)});var f=new THREE.MTLLoader;f.setTexturePath("/js/"),f.setPath("/js/"),f.load("starter1.mtl",function(e){e.preload();var n=new THREE.OBJLoader;n.setMaterials(e),n.setPath("/js/"),n.load("starter1.obj",function(e){a.add(e),e.position.y-=60})});var w=function e(){requestAnimationFrame(e),u.update(),l.clear(),l.render(o,i),l.render(a,d)}}});
//# sourceMappingURL=animation.js.map