'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ab6f139c54663ea94b73af558f382559",
"index.html": "d3f12f24205993a7f900cf1262a94b1b",
"/": "d3f12f24205993a7f900cf1262a94b1b",
"main.dart.js": "fb299302b97a78dde9165c9368b8f3d7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "91936923b2843f5108dc2d4a4776777b",
".git/config": "531ad6253a0ac58c95ea1f7390f591b7",
".git/objects/0d/b1d5bdceb42d93622557f9713c1a2c720cbf93": "13f39c4e8a8e773216923ff2543c2a54",
".git/objects/68/323103809f1e87bfbac619111f7f477dbb2e40": "68430368d49b5a830e37b9014dd3f83d",
".git/objects/57/3dcd2578ca77113af58e638bd9d1d943cd97d8": "031e9c128a32dc46f81ad268d78d7b62",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/6a/f18c7296421558e91c85bdd7e51fa28315afa4": "7730494cc055514e269a4d57a18ac109",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/69/54d53e3db6bb14c2b30d71ccd87fca64991734": "8f142f7d01515be7a457e4845f907818",
".git/objects/3c/9565f6110349d5c369420ee267706fd903fc74": "d3e69cbb06ee93179b4cda0cc48ce777",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/24050b4fe50d3a0f2bc919cec70e24cf72b0f8": "90f53d86e7ad0107d765bdf4f242f4aa",
".git/objects/58/9fd798b0d0e4ab3548b44f5322ba3286a550cc": "6c0b7922f6eb6d0ae0ec7bac34d0e2a7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/4f6397eae8e341341ebf1e7939171217d068e6": "9e4469cb962fc9f45a9086cb3840d18e",
".git/objects/0e/774ff0b5d4489f1b6ed8e97228f52b61a329bd": "268f26396525d27e27311af2c5bbb13d",
".git/objects/5a/59e672be238e99c98bf51d9bbd0cdc261793ce": "ad2344dfd47d2d68c79d46a2be65f5be",
".git/objects/9d/01230ccb86a7d35e4f275d3da662071c6966f0": "77cde1ff4603de25b506626abd24e3da",
".git/objects/9c/e1d944c9eba08890a1bb47516a8935b1044f9c": "458498479ccc4126e646dec45e2e1d2b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/ccca655d1babcf316784f39d84c30038618065": "e5966c21bd2549306459659fbb3273bb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fc287be217d8ebb0a40f67bb010fc700c6269b": "50f0ddf1b415b9afdaff0c533b07046e",
".git/objects/fc/d41545f06fc7a40d82ef766e5c0ed7c49f4903": "3da770ba7a68251fa96baf85213577cd",
".git/objects/c6/7c8840a58006f816909e201b27b91b809e5941": "8360f61591dc6a001afb12e975d50e04",
".git/objects/27/57ccfc92b37592618b7570be6fe0c53672bcbb": "232ae313921706f5aff9c5edd51853fc",
".git/objects/73/e82ce0c17a010ab08bfb45bc69af508c9fa188": "8227704276f20bd2ee9b220d6bfa0cbb",
".git/objects/8f/d6e5022b8561529f1eed62cba3a11b1cbe8d50": "9e52111992fdce9643db523e239c3c72",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/21/7195755eabbfd7ea8249338c67089bee5f0bb3": "00c3c8aacd0bd1124a6fd7bf12fd050d",
".git/objects/21/320a5294d0aba4fc7bef528b4a3a98e02014fd": "f19b689cc8624bb38987f7cb1946c9a6",
".git/objects/4d/09a9db6805f1e3f11c1bd609116ac0f74d38e2": "abf9124974668c252a06d21ed906ef4e",
".git/objects/2f/1f45ad4e52e8fb2c954ed1e55d342e1dd02c9c": "cfedf77c647a3f6b4b03c63e18fa7956",
".git/objects/43/b5170c918b1ec1f39ce1b65a4b9c8b8b172802": "4f334be2d2cd845f5e44e3c82cdfb8ef",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/8e480a04d3cea152b6e09720406494e2c2960a": "88bd89a3d62a913074da60a3947a50d9",
".git/objects/6e/59ee363298c533ba99830f6a09e5a6ace7cebb": "323eda5339e7a5ed76d828d017aa95a4",
".git/objects/36/a492e8b4acb077b3f5b158dcf311b98e9120ff": "95d7513a8d83819487a962c266c770aa",
".git/objects/5d/ed46635103e124d319a77a8c4953e17a86545d": "fd73c10e5be9d4c165d96dc880aa35d1",
".git/objects/91/3be5c2cb44f5b9cade70e1c0f4bf4f49556c7e": "00e605373c4367ffe58ce20fca427349",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6d/22380da3250a87fc0a39aafeb7dcd8fab315ac": "88a03286c602622c5a2bee8553a5ad78",
".git/objects/01/8662a61596add341f0af971f5da597e49b9e39": "949b73cabb0d0a28601258e1fcc8d2e9",
".git/objects/39/57d92d1e9f97310bbaa195e5afdf9f33aa62dd": "469b665627f5cb6f55121de978c0fb21",
".git/objects/39/585787a9fa1bf3cf7d19528f8a39dcc85df16e": "80f0d33d01653bfeeaf9335399b7e0ca",
".git/objects/52/6a176a2835d25f476ceeb8f47c870dd41384b9": "f9509b396a5d30827420367ed15b8793",
".git/objects/90/646b278d60dddb495ae92482487578a3b15613": "f9fe680aada512ef9cbe735425cbf941",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/af81348d8f6d1f09d8227b52161febe4211903": "bbc754e968817b64c6f5e2ef9552dc08",
".git/objects/a0/fc64a044bc1ade7eb4dffe8b91027975c58f32": "7b1900468fa9c92444f7024d06d3235f",
".git/objects/a9/e0b4748d63cf58689ee35b450423d486ed02b5": "afb87242f7f48d4747d0c583f444f280",
".git/objects/aa/7407e9d6a5e59af6499a83fd49e372192a4ea8": "4a436d543117b18c6855004fdfe9fae2",
".git/objects/af/8f59dcd1db000e03d96c106d1d8883e990b0b2": "ae69eecbb0f40d4e0d110337fbe45abd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fa/2e3a3c06571b2c2357e14629b9295e8a85fb0d": "90998c208f4947f2b34310a9dc4a5543",
".git/objects/f6/53d0c0db2e1ee936aaf6736841383e5561a35f": "cf153a9e70ff6b4ce64500d12ef7e41e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/05089f68bf123e8faac2ec089fed8915006a5b": "2f49852ccd4248d23e25da2ccfc6d16f",
".git/objects/2c/19deeb988703b29e2dc231ec0b07348b5db45d": "ebc9686281e0fa1f5dd7572a73873233",
".git/objects/79/371e8a0e9fa7f3c25e5d9146cb7db9499be0e1": "649893fc6dbb5c6014deb1e2a3abd3d3",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/85/3ca57c50221548c6dd955529160b06fe92c6f5": "f3a5ab557c262817809e595a149a26f5",
".git/objects/71/21edff1986971f7de4e3c5013329280d80fb2f": "d33bd150d05cd174aa17b569a75b1d1a",
".git/objects/49/b60530c6e6ba8cb86afad7622681fa921b35c2": "87e8696f1e7af8680d315e09141ed49f",
".git/objects/2e/18e87a94dea15c95ae6b4f98781c219a343cdf": "5375380261d34e9a2f04684764aa368e",
".git/objects/47/77bd7f21fa9017fdb4ce7ff0990e12cc985f00": "4e4b05a0ba95a5e3bc9095433077f075",
".git/objects/14/68202a6475bfbd086c8b702c10d2b0c475b37d": "126b5a74f6450904bda679bce2100aca",
".git/objects/25/c1f189208cb1ececcc62f82172c3a2a7fe7646": "6ae523144ea0bb1c2588edf4856f0975",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "88fa8846b741e2376d39baea25caa62f",
".git/logs/refs/heads/master": "88fa8846b741e2376d39baea25caa62f",
".git/logs/refs/remotes/origin/HEAD": "254a036d59019e048d843767cbfe3649",
".git/logs/refs/remotes/origin/master": "ee29ac308edd154168c8c8cfec341242",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "0a4caa28dce5b079c3156c3dea9e87a8",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2a1d9e98e00d146dd0aef0cba275c483",
".git/index": "34907c302e574973e3f13fbe80d40646",
".git/COMMIT_EDITMSG": "887a22fed07eb5a1e8dd99685e75ceac",
".git/FETCH_HEAD": "119056fa0e649ba2d803340109c38bfa",
"assets/AssetManifest.json": "644b25e211da05e8a24d8742f40a74c1",
"assets/NOTICES": "50ad552480b648d99295e8aeb7fdac27",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "7c8409401bcca3b375ec3df819b0ca46",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1802a4de281d7d2af9405c94164f9ee9",
"assets/fonts/MaterialIcons-Regular.otf": "9f8084dd4ff3c168c36f76fcb38cec40",
"assets/assets/card_logos/discover.png": "24be971cf074218180225e1a75849476",
"assets/assets/card_logos/visa.png": "db4e0fb3e39a3263b941198a0b62b7c3",
"assets/assets/card_logos/amex.png": "118767e61b3cde52a3ea59c337eaf869",
"assets/assets/card_logos/mastercard.png": "ae2ef4f70fc7554135cb3302f2bc8431",
"assets/assets/desktop.png": "f2c87363d3b1ccfe111b1315b429110c",
"assets/assets/astranaut.png": "e1b5a2749d7957ad256948fdb921a7ab",
"assets/assets/logo.png": "e0c890880aafd11161ac879fabd1d87d",
"assets/assets/dribble.png": "37daf912f3c8e8d72a09197934898bbe",
"assets/assets/mobile.png": "423845b756afdb5e535460964e93cdd1",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
