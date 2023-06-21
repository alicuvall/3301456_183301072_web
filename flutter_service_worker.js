'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8d4eae686917bab4d9052c57c95c6027",
"assets/assets/images/App/notfound.png": "7a75ee93688def23cd8d7b9e2353bfec",
"assets/assets/images/Yurtdisi/cambridge.jpg": "340a1da144cc9543cedc7e5c149ca776",
"assets/assets/images/Yurtdisi/londra.jpg": "6c4efb9a4a2749db752d5588495bef82",
"assets/assets/images/Yurtdisi/los%2520angeles.jpg": "d21d861df76885da7e768d28c8ac411c",
"assets/assets/images/Yurtdisi/Mekan/Cambridge/corpus%2520clock.jpg": "d45a2b2f57ea31c27bc74d4b7f257555",
"assets/assets/images/Yurtdisi/Mekan/Cambridge/jesus%2520green.jpg": "44fc1b93494ff9e78fb059427f53b2d4",
"assets/assets/images/Yurtdisi/Mekan/Cambridge/matematik%2520koprusu.jpg": "16ab8c9d790d12e4cee628e9728e61dd",
"assets/assets/images/Yurtdisi/Mekan/Londra/london%2520eye.jpg": "eacdfe181de48caa42318f38b4cd5d87",
"assets/assets/images/Yurtdisi/Mekan/Londra/londra%2520kalesi.jpg": "f226eead4f644fa8e0068a91f3ceedd5",
"assets/assets/images/Yurtdisi/Mekan/Londra/tower%2520bridge.jpg": "4f8fae20aa104d6c7c55618435ab2d74",
"assets/assets/images/Yurtdisi/Mekan/Los%2520Angeles/getty%2520center.jpg": "a4f2fc93ddaa23cb2d9163fbe76fb4cd",
"assets/assets/images/Yurtdisi/Mekan/Los%2520Angeles/the%2520broad.jpg": "b197ec8a4944549f5401b8c37f5f36f5",
"assets/assets/images/Yurtdisi/Mekan/Los%2520Angeles/walt%2520disney.jpg": "3deaca53984a57a0e43366d0d2f2fae9",
"assets/assets/images/Yurtdisi/Mekan/Toronto/casa%2520loma.jpg": "6b67bfe86f4186de97e5ca75fa0cc7d3",
"assets/assets/images/Yurtdisi/Mekan/Toronto/high%2520park.jpg": "d5552d409aed68694b61d43501f71c58",
"assets/assets/images/Yurtdisi/Mekan/Toronto/toronto%2520zoo.jpg": "44464677a7d72e0f9d46f02929f72bbc",
"assets/assets/images/Yurtdisi/toronto.jpg": "7e00eec2e32e371120969bb80856a128",
"assets/assets/images/Yurtdisi/Yemek/Cambridge/cremebrulee.jpg": "01dc6cbf59bb8a9897f8342c05df9465",
"assets/assets/images/Yurtdisi/Yemek/Londra/fishandchips.jpg": "5c69573440e67531ccb000f8bcb9d81e",
"assets/assets/images/Yurtdisi/Yemek/Los%2520Angeles/tacos.jpg": "1134b0ec5c4a8721fe694d1d29349bdf",
"assets/assets/images/Yurtdisi/Yemek/Toronto/peameal.jpg": "c111767944181c4095bae074b73136ed",
"assets/assets/images/Yurtici/ankara.jpg": "acda7b8f5eafd9f721c478fc05dca7a2",
"assets/assets/images/Yurtici/antalya.jpg": "5d0862fdf2553c4a00a6cbba038d8cf8",
"assets/assets/images/Yurtici/ayd%25C4%25B1n.jpg": "db7da09557576e17583580f7ca86288c",
"assets/assets/images/Yurtici/bolu.jpg": "676cd4f0bb37100251b87c4c35ac93c8",
"assets/assets/images/Yurtici/eski%25C5%259Fehir.jpg": "80cad6121814eab501290ad4a609456a",
"assets/assets/images/Yurtici/Mekan/Ankara/anitkabir.jpg": "1faf001f9392630ff92c852809e519e4",
"assets/assets/images/Yurtici/Mekan/Ankara/kugulu%2520park.jpg": "78ee1652157a6645925b6dc2ee06fd6e",
"assets/assets/images/Yurtici/Mekan/Ankara/medeniyet%2520muzesi.jpg": "d94055d476e70bb2472659e812b9d999",
"assets/assets/images/Yurtici/Mekan/Antalya/akvaryum.jpg": "8dc4bc285755c0736ab70d20f4d19819",
"assets/assets/images/Yurtici/Mekan/Antalya/d%25C3%25BCden%2520selalesi.jpg": "077e89e58ad057da14e98c9c2a0ef64d",
"assets/assets/images/Yurtici/Mekan/Antalya/hidirlik%2520kulesi.jpg": "519a9ddb4176e2840e39c689ce506e7d",
"assets/assets/images/Yurtici/Mekan/Ayd%25C4%25B1n/altinkum%2520plaji.jpg": "c428de56b766667f28eba322a8a351af",
"assets/assets/images/Yurtici/Mekan/Ayd%25C4%25B1n/apollon%2520tapinagi.jpg": "284d4b8292f1a1795495a1625e8cfa6d",
"assets/assets/images/Yurtici/Mekan/Ayd%25C4%25B1n/arkeoloji%2520muzesi.jpg": "2928fb65b36c01de4e108e92c346d4af",
"assets/assets/images/Yurtici/Mekan/Eski%25C5%259Fehir/kanlikavak%2520parki.jpg": "2910e918885cc8348209ea3edb4fd030",
"assets/assets/images/Yurtici/Mekan/Eski%25C5%259Fehir/kentpark.jpg": "832388cec19f8b11856101c6adb7dc6d",
"assets/assets/images/Yurtici/Mekan/Eski%25C5%259Fehir/sazova%2520parki.jpg": "301a502cd38e35c4744a9d2d18091379",
"assets/assets/images/Yurtici/Mekan/Mu%25C4%259Fla/bodrum%2520antik%2520tiyatrosu.jpg": "afc04023be6092f4864b22387ade92a4",
"assets/assets/images/Yurtici/Mekan/Mu%25C4%259Fla/kisla%2520parki.jpg": "137b598405552bff9b4a19cf09113f99",
"assets/assets/images/Yurtici/Mekan/Mu%25C4%259Fla/tlos%2520antik%2520kenti.jpg": "307a5c779e5ca930b4779517e203327c",
"assets/assets/images/Yurtici/mu%25C4%259Fla.jpg": "88439dbc7a7a0db1d56aa521fabefba3",
"assets/assets/images/Yurtici/Yemek/Ankara/ankaratava.jpg": "d9276c6ed53f92c9ece7c49f2b8b2c30",
"assets/assets/images/Yurtici/Yemek/Ankara/beypazariguveci.jpg": "4550c7d2adea3abfb082fcee0baab846",
"assets/assets/images/Yurtici/Yemek/Ankara/efeleksarmasi.jpg": "771c566771b4274753e28ccfea763f72",
"assets/assets/images/Yurtici/Yemek/Antalya/giritkebabi.jpg": "9ac088e3c4f5adfc3d48710a439e924d",
"assets/assets/images/Yurtici/Yemek/Antalya/huluklucorba.jpg": "eb4a8045f01423a5de2291cb35bdb522",
"assets/assets/images/Yurtici/Yemek/Antalya/labadolmasi.jpg": "6bc4972f2a5211f83010c33b3f9a4b76",
"assets/assets/images/Yurtici/Yemek/Ayd%25C4%25B1n/cinekoftesi.jpg": "9e3001d72d7a59ee8c234d8e7c2b302a",
"assets/assets/images/Yurtici/Yemek/Ayd%25C4%25B1n/keskek.jpg": "e5de8cd4abef271dce662b129b28ba52",
"assets/assets/images/Yurtici/Yemek/Ayd%25C4%25B1n/pasaboregi.jpg": "7ea1c14e00c33450e0bd3e2bfc567d22",
"assets/assets/images/Yurtici/Yemek/Eski%25C5%259Fehir/balabankofte.jpg": "da64dba273ece687c81da39584c85438",
"assets/assets/images/Yurtici/Yemek/Eski%25C5%259Fehir/ciborek.jpg": "014a9f75d8b17cd7bdf8f84446bc0781",
"assets/assets/images/Yurtici/Yemek/Eski%25C5%259Fehir/yufkaliburyan.jpg": "0a1367c159487fb4aadd58651eabf678",
"assets/assets/images/Yurtici/Yemek/Mu%25C4%259Fla/bodrummantisi.jpg": "916f5dd7d9515a807f0dc0fd92501b5f",
"assets/assets/images/Yurtici/Yemek/Mu%25C4%259Fla/sulumuglakebabi.jpg": "f475c488825536728f104ee0472b474e",
"assets/assets/images/Yurtici/Yemek/Mu%25C4%259Fla/sundurme.jpg": "e9dbc8f9a6f1dd23b21017711f57e5c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "11619b3ed078cd758b222390023c04ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21156622d8178b23ce3d32723f2cf3e4",
"/": "21156622d8178b23ce3d32723f2cf3e4",
"main.dart.js": "e37e8411583b804dd8c75746d5d72380",
"manifest.json": "2ed2fcbdf0df5b47c82a66a5d36d9ea3",
"version.json": "fc784168e49bd2071a1914f7a2ecd047"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
