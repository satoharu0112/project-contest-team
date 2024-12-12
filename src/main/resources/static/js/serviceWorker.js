// キャッシュファイル指定
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = ["https://github.com/satoharu0112/project-contest-team.git"];

//
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        return response ? response : fetch(event.request);
      })
  );
});
