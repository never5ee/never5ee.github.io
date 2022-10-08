'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "23d5f659a8e597f13b0f32e550dad3be",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Century_Gothic.ttf": "cfce6abbbff0099b15691345d8b94dcc",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/gothicb.ttf": "ae704b1128b630b4b838a9c85a53e653",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/images/app_launcher_icon.jpg": "fdb63a20af44f1cd9e3ef31707486c76",
"assets/assets/images/art.svg": "110f2b38a8e816179a3d4516e8a52fb7",
"assets/assets/images/Art_Background_(1).png": "f3ca76f6deae83c6f7689cfd3a3ddf87",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Frame_5_(6).svg": "202f77604dbcffbaa9c3a4d273078340",
"assets/assets/images/Group_1.svg": "83aedb34423243f9619b2fc537ebfad7",
"assets/assets/images/Group_1_(5).svg": "6ac75dddff1c668810f510c11d3aac48",
"assets/assets/images/Group_2_(1).svg": "a382783bf340213b763bee3e3a1b9f29",
"assets/assets/images/Group_4.svg": "008e6b6fcf29249b5c704d70e7d99046",
"assets/assets/images/ic(1).svg": "7d44941ef3aebea7c7f2c87922ed6039",
"assets/assets/images/ic-1.svg": "0fbb03841471c708d2ea51c02e3b5338",
"assets/assets/images/ic-2(1).svg": "695c0b569532cf05b9ec72c3c80f8c6c",
"assets/assets/images/ic-2.svg": "1fafc7a238cc4c109fe095f9abb4dff3",
"assets/assets/images/ic-3(1).svg": "c4ee214a477c01b63fbec61ecdce56b6",
"assets/assets/images/ic-3.svg": "c7218a3bec9b2e9e14fbb57d5bdb45a7",
"assets/assets/images/ic-4.svg": "6cf81a86b306ebda9fd327a10300c247",
"assets/assets/images/ic-5(1).svg": "d1e2f21b61f29050e1c2e25d6414d1ce",
"assets/assets/images/ic-5.svg": "f508e48ae4062b618768c24225275221",
"assets/assets/images/ic.svg": "95aa0c4bd15f5d0900720f0d86cff37e",
"assets/assets/images/ic_(1).svg": "292cdf86d8b094a5716521dab0e29fbc",
"assets/assets/images/ic_(4).svg": "006e41de50fa3ca2f14611c04895ca6b",
"assets/assets/images/ic_(5).svg": "64e3b636121cb8eaecd20bf8048fbc15",
"assets/assets/images/ic_booked_service.svg": "44d896016d8d07184de4e21366d802c5",
"assets/assets/images/ic_email.svg": "3bb957d724ab6891456edff182ad0166",
"assets/assets/images/ic_notification_(1).svg": "5bf2992ecc9e1ec676bbfcb78c9802cc",
"assets/assets/images/ic_pin_map.svg": "9c2e8a98907e99c79b95ef91fa3d2122",
"assets/assets/images/ic_quote.svg": "085331a772ccc51423bd0f1a9e401044",
"assets/assets/images/ic_search_normal.svg": "eeff84bcb4e9a25a7543817852492bf8",
"assets/assets/images/ic_telephone_number.svg": "b678deb834d63a254d72b57e6200b2b0",
"assets/assets/images/ic_time.svg": "958370c52c46860efe116026d1e9b6dd",
"assets/assets/images/img.png": "f442667e2c6db3ffda038ff34856a90d",
"assets/assets/images/img_cash.svg": "5667df28255d674387c9924f9ce95e61",
"assets/assets/images/img_notification.svg": "4bd8b98f7fc68fec52d399545be77949",
"assets/assets/images/img_success.svg": "2400c30a2f0d04a28e757fd6da7a6c3f",
"assets/assets/images/img_welcome.svg": "72f1684124cced63333480f41e8ddee8",
"assets/assets/images/photo_2022-04-28_14-48-56.jpg": "583a0f50bebcfb2852a96733f4e3071b",
"assets/assets/images/photo_2022-04-28_14-48-57.jpg": "3173417bd023aef3e7aab2af686648d9",
"assets/assets/images/Service_Description.svg": "4aa2a412296fd9ffed7ebec6b99ec470",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "815d0903cb11250859963d67730b69bf",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b0ca85eae1e1dc22d47cb92bdbc73a5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/shaders/ink_sparkle.frag": "822cb2da4a82939bde9a7314af550fcf",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d7ae568a6ebfd6ea37e7ce6ac86d6dc7",
"/": "d7ae568a6ebfd6ea37e7ce6ac86d6dc7",
"main.dart.js": "6257b5cdbc76559e41bf7a22880e6ec0",
"manifest.json": "b3253e0c6586e2782d52247757f6f867",
"version.json": "7bf03c182ec7dae657d3172bbfe16a8b"
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
