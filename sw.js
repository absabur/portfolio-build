if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),r={module:{uri:t},exports:c,require:o};s[t]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/aYOi9fIdklSLy8eqei1oF/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/aYOi9fIdklSLy8eqei1oF/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/231-c307204e683c2b19.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/30a37ab2-5c13035bf2d0eab9.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/370b0802-e8187cc4c4c22153.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/403-0d2ba2e59d8c2065.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/53c13509-0dcced8c0fb5f232.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/5e22fd23-e587696f0c8793da.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/786-168c40b039ef0a70.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/795d4814-23c86abf2d907dbc.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/8e1d74a4-f631263a3672b6de.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/94730671-08c04b2c79c91897.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/9c4e2130-a7612d0e98ab0392.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/app/_not-found/page-46a1037b3bb5f049.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/app/error-223f3fb22b7fcc00.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/app/layout-19e3a8955d43d1cf.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/app/not-found-daa6113fe943000b.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/app/page-76a9c2346c705d49.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/b536a0f1-a40d585c43839e03.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/b563f954-4c47ee4023efcfe5.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/f8025e75-9b818c6815eaae72.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/f97e080b-05df5c6af7e8b02e.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/fd9d1056-eb01b2bb73bb537e.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/main-8530b740b36d6733.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/main-app-5919df3366828f4b.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-25281810f63f04ef.js",revision:"aYOi9fIdklSLy8eqei1oF"},{url:"/_next/static/css/05d9e2dd6e34fe05.css",revision:"05d9e2dd6e34fe05"},{url:"/_next/static/css/ae72114c4acf9605.css",revision:"ae72114c4acf9605"},{url:"/_next/static/css/ae8e6288e82082aa.css",revision:"ae8e6288e82082aa"},{url:"/_next/static/media/cgpa.e50f0605.png",revision:"ea9db7595e2bd90d8068111128615032"},{url:"/me.png",revision:"72ae6ac88c790cab5fb83ed4830f496b"},{url:"/robots.txt",revision:"27600cd23a3c1cae52e94e75cbaf8d58"},{url:"/sitemap-0.xml",revision:"1cde2ff556b69c5a4a074754bdddca5a"},{url:"/sitemap.xml",revision:"73c2d21978141d404ce8a2cd19f1efb4"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));