if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),o={module:{uri:c},exports:t,require:r};a[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192x192.png",revision:"bd63ff86fef8c9c5a3c3ad3bc5a380d1"},{url:"/512x512.png",revision:"5bd4adcf7ce5822c29559ee70f74c055"},{url:"/_next/static/TO0lHGKB4ACfI8o-vmbSQ/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/TO0lHGKB4ACfI8o-vmbSQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/231-c307204e683c2b19.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/30a37ab2-5c13035bf2d0eab9.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/370b0802-e8187cc4c4c22153.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/403-5bc4abad1e12b132.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/482-ea90247133f891fa.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/53c13509-09ba10b7bc448a69.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/5e22fd23-e587696f0c8793da.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/795d4814-2bd735e8c2cc8d21.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/8e1d74a4-e4e2d349d9815fad.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/9c4e2130-a7612d0e98ab0392.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/app/_not-found/page-46a1037b3bb5f049.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/app/error-9ac1bc780e9a64af.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/app/layout-1b3657ef31774aa3.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/app/not-found-b20acb7760b32a25.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/app/page-cdaf2fae081ad940.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/b536a0f1-a40d585c43839e03.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/b563f954-4c47ee4023efcfe5.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/f8025e75-9b818c6815eaae72.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/f97e080b-05df5c6af7e8b02e.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/fd9d1056-eb01b2bb73bb537e.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/main-1539a97bb4e62390.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/main-app-14ffeac95ed59170.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-cc207ca602ae14db.js",revision:"TO0lHGKB4ACfI8o-vmbSQ"},{url:"/_next/static/css/7a6a89f583446886.css",revision:"7a6a89f583446886"},{url:"/_next/static/css/a2a54114e21ed74e.css",revision:"a2a54114e21ed74e"},{url:"/_next/static/css/ae8e6288e82082aa.css",revision:"ae8e6288e82082aa"},{url:"/_next/static/media/blog.ec186b60.png",revision:"134b2d1dcaa06850fcd42163bc854f83"},{url:"/_next/static/media/calculator.aeaaa530.png",revision:"79527a6354158c066ac8a03e8344369c"},{url:"/_next/static/media/cart.11286427.png",revision:"768f86e6f34a8d86e24f309aa64f293c"},{url:"/_next/static/media/cgpa.ba9f684e.png",revision:"3cf9a5dc9fd6b0012bc54fa20d9e3d1c"},{url:"/_next/static/media/ecommerce.f9afaa15.png",revision:"57cdfe8619e4833ed79dce81c6f38e8c"},{url:"/_next/static/media/event.dd419f36.png",revision:"4e0f59b4b0db9938079ef6c3eea2c851"},{url:"/_next/static/media/gallery.debdc3cf.png",revision:"59affdc9bbe1a19ec3333397ab107fd7"},{url:"/_next/static/media/gpt.5566b258.png",revision:"4e4116faa7829a94ed84c05f4c814cb5"},{url:"/_next/static/media/hotel.cde573af.png",revision:"10e2c347463c63eace9ecd080763deaf"},{url:"/_next/static/media/number.fd93be00.png",revision:"be6d0e5828fb43fb1bbdf60e1215a61e"},{url:"/_next/static/media/portfolio.f421b8c6.png",revision:"db53c108bed886b9c10568832f6826c0"},{url:"/_next/static/media/quiz.4b71d268.png",revision:"daa80c1af79d363d6faded93f8e87b7b"},{url:"/_next/static/media/restront.8a2a093b.png",revision:"d52dfd89fc365ea7ed812d889e383e9d"},{url:"/_next/static/media/routine.5e310b9f.png",revision:"4c81a1ed931cd338943bdaf8f97634a8"},{url:"/_next/static/media/rps.42fdc5fc.png",revision:"d21318eef8a25689ce3ebb5d5ac17181"},{url:"/_next/static/media/rugby.8770bf03.png",revision:"543bacc5cd6dbe9dca0d67842f87232c"},{url:"/_next/static/media/security.57890236.png",revision:"844d53a59bc816c1f2433ab53154f9eb"},{url:"/_next/static/media/stopwatch.1c6a38b3.png",revision:"e4c4a95106a4d3544e5a355586e636f7"},{url:"/_next/static/media/streaming.14a21986.png",revision:"89f54f4369a3868e8c7e18c413585b11"},{url:"/_next/static/media/todo.c129f1b5.png",revision:"be77e5a22b0a4ca10dab2475de1ea9aa"},{url:"/_next/static/media/validation.36dfb72d.png",revision:"4f6d5765c2498b69c9b8d3bfb07bbcc9"},{url:"/_next/static/media/veg.cba92b52.png",revision:"e216abebbd9324e59c38da56bb22e22c"},{url:"/me.png",revision:"082f32799aef393af529b79529d6dcf7"},{url:"/qrcode_absabur.pro.png",revision:"26129f7694acd7769c1624ea1d387e94"},{url:"/robots.txt",revision:"20153ead4f7bdad50d16f586ec9fd4fa"},{url:"/sitemap-absabur-0.xml",revision:"752fc3f3502cd8ea19724d5e06547e1c"},{url:"/sitemap-absabur.xml",revision:"97b60de56030ddea625cc4c4c3299fb8"},{url:"/ss1.png",revision:"894cf7ea53c69e66d599d5d05bda10e6"},{url:"/ss2.png",revision:"6be473336b8c791514efb566bdeee882"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
