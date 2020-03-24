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
    "url": "assets/css/0.styles.bf686d9e.css",
    "revision": "e61547f238d2617f769384effa195531"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a8ce4280.js",
    "revision": "a583dde2f2c33b69482c51e0ab27b701"
  },
  {
    "url": "assets/js/11.64d13578.js",
    "revision": "0bc0649975d57e40619a27abe4fb8044"
  },
  {
    "url": "assets/js/12.3bf3b95d.js",
    "revision": "b593708f174c902485e8a5b8895bc148"
  },
  {
    "url": "assets/js/13.d4b352ae.js",
    "revision": "ba38c6dd8682d64d3bf2856753fd2757"
  },
  {
    "url": "assets/js/14.ee6f24f1.js",
    "revision": "975cb3787a571a7c3b3afed20dd3a3bd"
  },
  {
    "url": "assets/js/15.287bc112.js",
    "revision": "2e009a0d8c96ec32988d0ac410af2d24"
  },
  {
    "url": "assets/js/16.600f7e83.js",
    "revision": "89ab5265a5e446972f000a7f6bc2f415"
  },
  {
    "url": "assets/js/17.1f33c9ad.js",
    "revision": "7f39d163016e00f75eb02b4caabedde9"
  },
  {
    "url": "assets/js/18.5103f93f.js",
    "revision": "a8bfd6c41fb239d7317e614af0fcaf36"
  },
  {
    "url": "assets/js/2.87270e65.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/3.f9f44839.js",
    "revision": "b4a2dd5ee008fd9ef0c9261cea06c73a"
  },
  {
    "url": "assets/js/4.326d35e8.js",
    "revision": "cd79d2067b3dbcf3ecabc34d2b243d91"
  },
  {
    "url": "assets/js/5.5a688d0c.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.f10ceb6f.js",
    "revision": "2b0180504c044f2b2ba6cee20e3ef44f"
  },
  {
    "url": "assets/js/7.ad2d785b.js",
    "revision": "daccce7f6840e5d5cfbd27ac5d9b5567"
  },
  {
    "url": "assets/js/8.e61a35e4.js",
    "revision": "34289b2af2ebb8babc2d1610e904008f"
  },
  {
    "url": "assets/js/9.026f77ea.js",
    "revision": "dc75c276d2ab064a188109e26ce2be13"
  },
  {
    "url": "assets/js/app.1fd05be1.js",
    "revision": "2b9c45368592441b07f9470c8b1236ad"
  },
  {
    "url": "en/guide/index.html",
    "revision": "1d712391aa1022b2becf67dce4ec46ce"
  },
  {
    "url": "en/index.html",
    "revision": "4d1d78737be8705471371c3a12313574"
  },
  {
    "url": "guide/about.html",
    "revision": "36c4db33519ef117d734bf8b762870e8"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "f9be48d7c943f9564fb93d4d01d65ba4"
  },
  {
    "url": "guide/config.html",
    "revision": "97c072ee6e12a4334bc262261b8065ff"
  },
  {
    "url": "guide/faq.html",
    "revision": "cc154b489c2c89c2288bd9cb6c117265"
  },
  {
    "url": "guide/index.html",
    "revision": "c1a5a97ff60a0628f1bfc082e1e4da95"
  },
  {
    "url": "guide/page.html",
    "revision": "fc8d560948317032719c36809dc2281d"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "dc9feaf4ba4d6457d3c4690625a92423"
  },
  {
    "url": "guide/Todo.html",
    "revision": "b8eb62ba6cd4ebf8f6914a69ce18bdb7"
  },
  {
    "url": "index.html",
    "revision": "d943534988b5a048ccae90e523d7ba5f"
  },
  {
    "url": "logo.gif",
    "revision": "a15b28b70e73f11115a7d195eba8b3b9"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
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
