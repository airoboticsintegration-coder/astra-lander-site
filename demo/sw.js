const CACHE='astra-lander-demo-v3';
const ASSETS=['./','./index.html','./styles.css?v=45','./app.js?v=45','./manifest.webmanifest?v=45','./icons/icon.svg','./assets/homing-missile-reward.svg','./assets/reward-05.svg','./assets/reward-10.svg','./assets/reward-15.svg','./assets/reward-20.svg','./assets/reward-25.svg','./assets/reward-30.svg','./assets/reward-35.svg','./assets/reward-40.svg','./assets/reward-45.svg','./assets/reward-50.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
