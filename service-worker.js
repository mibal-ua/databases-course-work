/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "307ae5203c045430b1409a8bdcb99109"
  },
  {
    "url": "assets/css/0.styles.5d106de5.css",
    "revision": "fa542f7002fdc91216056776501b2673"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b5a9bcc7.js",
    "revision": "13edcf65a1c9c67c56f10cec4a2987f2"
  },
  {
    "url": "assets/js/10.701f03d6.js",
    "revision": "92687e39175eb7cc8a333b6449cb1308"
  },
  {
    "url": "assets/js/13.4c7b6331.js",
    "revision": "80718472b39d53e64814033d82f324ee"
  },
  {
    "url": "assets/js/14.1731793c.js",
    "revision": "9cdc3a31f1691a79b77b6596b65dbb48"
  },
  {
    "url": "assets/js/15.f8cd53f1.js",
    "revision": "07905ae198e67d2697a20976a6f86b5e"
  },
  {
    "url": "assets/js/16.bff68917.js",
    "revision": "a556a68ae8665fadb13cb0f9c84f284d"
  },
  {
    "url": "assets/js/17.f81982c0.js",
    "revision": "cbcd696c06d13e715c223e51df28d7eb"
  },
  {
    "url": "assets/js/18.ef099a4c.js",
    "revision": "b813d926d51cd4f8bbc07d32c7fc3141"
  },
  {
    "url": "assets/js/19.0378ab10.js",
    "revision": "88844cce19afa5f15ac346bc2f86d915"
  },
  {
    "url": "assets/js/2.fc1d75bb.js",
    "revision": "4c1e51a26d9b493ca11f0e5bada9f8f3"
  },
  {
    "url": "assets/js/20.dd4e8ad4.js",
    "revision": "5a2c5c79b93c635c9608c1724de56c9c"
  },
  {
    "url": "assets/js/21.a41d7780.js",
    "revision": "b7f8488255f222126a831a11499d89d9"
  },
  {
    "url": "assets/js/22.841917c8.js",
    "revision": "da5fe0268b661f4683582aedd1f0510b"
  },
  {
    "url": "assets/js/23.6083a03f.js",
    "revision": "c8b9035d1704caf9ee9eedf4de18b4f0"
  },
  {
    "url": "assets/js/24.07d4b5d7.js",
    "revision": "8570eecbcaec6122cb70654bf28c28c1"
  },
  {
    "url": "assets/js/25.c423568b.js",
    "revision": "b3617beb0ff89520c33a820b7ece5028"
  },
  {
    "url": "assets/js/26.19cebb29.js",
    "revision": "c4c6ba52f018f9222724d458288dc4d9"
  },
  {
    "url": "assets/js/27.06010e04.js",
    "revision": "c8346b58880c7d62110e692cc7a758e5"
  },
  {
    "url": "assets/js/28.6ac01112.js",
    "revision": "2e69073b7b283058c52b40830e55170a"
  },
  {
    "url": "assets/js/29.2985bc12.js",
    "revision": "0e5d1bbf5129ae0294adedac5c066a4c"
  },
  {
    "url": "assets/js/3.a6941880.js",
    "revision": "ded6c95e8978755b825001caad06b5fb"
  },
  {
    "url": "assets/js/30.5aa840ef.js",
    "revision": "76646c9805826d72c402ae817ad5e28c"
  },
  {
    "url": "assets/js/31.5b36cf3b.js",
    "revision": "7f91cc5466186d70780f6a15870f4891"
  },
  {
    "url": "assets/js/32.bcd3109f.js",
    "revision": "ee546f7c6e2abd64ee76b65497687eaf"
  },
  {
    "url": "assets/js/33.9affc4f3.js",
    "revision": "63d00b5fa9e3708db4842c4932d306ba"
  },
  {
    "url": "assets/js/34.2971b952.js",
    "revision": "ed469a14671e5baf89889489d153e7dd"
  },
  {
    "url": "assets/js/35.ea477d2a.js",
    "revision": "8354276454cd3aabb24528eb56c3ee7b"
  },
  {
    "url": "assets/js/36.877e62f5.js",
    "revision": "a0132da418b578f5ac8f5b940f153251"
  },
  {
    "url": "assets/js/37.cc9d6d1f.js",
    "revision": "69f265dfc5f231bacbae4f8042fc7d77"
  },
  {
    "url": "assets/js/38.9c86338c.js",
    "revision": "70258b513fbaf69276a69039f6c43768"
  },
  {
    "url": "assets/js/39.865d08ba.js",
    "revision": "9dda36137562823ee8073ce95e83c626"
  },
  {
    "url": "assets/js/4.ce6b8d27.js",
    "revision": "7d16984cce82368b8b8680b0b061d2fe"
  },
  {
    "url": "assets/js/41.3c945ce0.js",
    "revision": "46a8c1ddd88e9ac3f2ec3650a436e980"
  },
  {
    "url": "assets/js/5.12d48f2b.js",
    "revision": "b0d195403064e1113310aebf30cf5418"
  },
  {
    "url": "assets/js/6.f8900e54.js",
    "revision": "32564813eaea3794e5fe8fa5128b8e90"
  },
  {
    "url": "assets/js/7.3e747276.js",
    "revision": "d8cadb7c9530f87ac449f5a8b5b8358b"
  },
  {
    "url": "assets/js/8.2789e722.js",
    "revision": "444fa43f6f10306d283009d1071c2317"
  },
  {
    "url": "assets/js/9.e0990b8e.js",
    "revision": "ec6fe21264ec63acb3c228ba97bac6e6"
  },
  {
    "url": "assets/js/app.7a803d01.js",
    "revision": "a3d896850eb14415c3c6371917297659"
  },
  {
    "url": "assets/js/vendors~docsearch.63e89fdd.js",
    "revision": "1118b440ae2ff88cf23d53afcb924553"
  },
  {
    "url": "conclusion/index.html",
    "revision": "af46a9b31a01bc5db9f06e6f22c3a232"
  },
  {
    "url": "design/index.html",
    "revision": "23e8721ae4a33efd4303c4f02d043390"
  },
  {
    "url": "index.html",
    "revision": "28179fc432a528371a045026dab0d31c"
  },
  {
    "url": "intro/index.html",
    "revision": "1d7f6f65fc6e953e7faf5667807209ea"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "35dbafb7f9171a7e7e0cf35525f88807"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "744e7ce4ab6b2f5b2c417cd4d548a124"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "310893d6813768d23993d8ecb2f7a76f"
  },
  {
    "url": "software/index.html",
    "revision": "0fd808e7f94ed3420bdb7d50f6b8b762"
  },
  {
    "url": "test/index.html",
    "revision": "d59806b5678ef7104775fa40fe7daa4e"
  },
  {
    "url": "use cases/index.html",
    "revision": "20dee767945c7135a10ffea9c5de6f54"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
