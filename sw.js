if(!self.define){let e,a={};const i=(i,o)=>(i=new URL(i+".js",o).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let d={};const s=e=>i(e,n),f={module:{uri:n},exports:d,require:s};a[n]=Promise.all(o.map((e=>f[e]||s(e)))).then((e=>(r(...e),d)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.0c9ed74c.js",revision:null},{url:"assets/index.2d3dbd3e.css",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"b29f188c69a72094397e53306c14bfe9"},{url:"windows11/SmallTile.scale-100.png",revision:"d00b74e1098b28ed43d8851c06c64ba7"},{url:"windows11/SmallTile.scale-125.png",revision:"254a47085e5b9830ccf3e5268417ab85"},{url:"windows11/SmallTile.scale-150.png",revision:"7d0cc2089d48aa914856cb5308e9b6aa"},{url:"windows11/SmallTile.scale-200.png",revision:"cf462f27144fe97c9ad1671de912c1a2"},{url:"windows11/SmallTile.scale-400.png",revision:"0a4eebab1ad9b59915936607568c4510"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"cfa0064a451c8b8b16b3bed5255b96df"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"3729e38c490db8268222e36019884c4e"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"fa84f72529c24751f1a541deeb569baf"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"d611043d6142a10cb7c8f1d0377f9435"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"59f211f8c79ed600c620916ae78e0d85"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"873aafadf3b39b5dab36661fc85fb6a7"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"652b7630c5f3187a8a27f08c26e0f73b"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"d7b592587fa88f961b760d3bb64a523c"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"73a594b6b73465aee7d068ab74be52e5"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"6a0f2f29c72051fe5504fc416ed3af31"},{url:"windows11/LargeTile.scale-100.png",revision:"2a660cd77367ce19683569606e19c458"},{url:"windows11/LargeTile.scale-125.png",revision:"f3e3bea4e1138a461b09637843c247a3"},{url:"windows11/LargeTile.scale-150.png",revision:"793b106e8c33beb7e7bd1d3a6d2ff8e7"},{url:"windows11/LargeTile.scale-200.png",revision:"fb71e9e5fad8449cb0c8bda8cdc628dc"},{url:"windows11/LargeTile.scale-400.png",revision:"d486bef62adeb1e0b7ae1af413d60120"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"9f25f6a60502b663662ebf57bbfc9f29"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"936dd5a2b545b9ffd9928b265565a80d"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"6e67b3426927f43e473d82931230eee0"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"65309e604a517dd2207967b8fadd6924"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"566440459be48bfad712bdec18bc3b82"},{url:"windows11/StoreLogo.scale-100.png",revision:"b3ee195435b88952c1fa1295693d4bf7"},{url:"windows11/StoreLogo.scale-125.png",revision:"d0206ac33ed9860911401e4df7548631"},{url:"windows11/StoreLogo.scale-150.png",revision:"7db65f2a9f73aa9fbe8bd57135d891d7"},{url:"windows11/StoreLogo.scale-200.png",revision:"bfb35100dd583939fbdd4286de0aef03"},{url:"windows11/StoreLogo.scale-400.png",revision:"a9cf199b524e3b2125097cfa6c4316fd"},{url:"windows11/SplashScreen.scale-100.png",revision:"73a594b6b73465aee7d068ab74be52e5"},{url:"windows11/SplashScreen.scale-125.png",revision:"458661a56f6cc9f99c803e623e806bec"},{url:"windows11/SplashScreen.scale-150.png",revision:"f3ca26d10ffbb0eafae9a9201a30e637"},{url:"windows11/SplashScreen.scale-200.png",revision:"6a0f2f29c72051fe5504fc416ed3af31"},{url:"windows11/SplashScreen.scale-400.png",revision:"e02b3a7a2aa929900f2f364556e21e13"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"497544ca901f6228788231fabf55d6ea"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"3ad9746bf741c0d552a05b4b3568a56a"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"edf75beba46de2d41bec3fec281f72d1"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"9836da7643da7aea375e60a999680e13"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"e09c57b1f90f7c55aa2e1d2b28f6db01"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"6f9564b73c5468fd1da613119d458e0f"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"e0fdae8d869209fa5cdca28ee1701afc"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"9f25f6a60502b663662ebf57bbfc9f29"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"5f0db6c0e2af75bd4f092f53b0714e08"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"0453bc9e9d9ec827e6ca78b0c783ee65"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"af0ca09540baa12db5568548ac58bfa8"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"1e47855e60a95d221e7d80cdc8e76a35"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"5f8e0ab1061109e3aad781565b6985cc"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"644ad6cddd682aa5db80ef7143f3bc9f"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"06ee8ebc811b2ee38093f5f0163ef8e5"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"497544ca901f6228788231fabf55d6ea"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"3ad9746bf741c0d552a05b4b3568a56a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"edf75beba46de2d41bec3fec281f72d1"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"9836da7643da7aea375e60a999680e13"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"e09c57b1f90f7c55aa2e1d2b28f6db01"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"6f9564b73c5468fd1da613119d458e0f"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"e0fdae8d869209fa5cdca28ee1701afc"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"9f25f6a60502b663662ebf57bbfc9f29"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"5f0db6c0e2af75bd4f092f53b0714e08"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"0453bc9e9d9ec827e6ca78b0c783ee65"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"af0ca09540baa12db5568548ac58bfa8"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"1e47855e60a95d221e7d80cdc8e76a35"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"5f8e0ab1061109e3aad781565b6985cc"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"644ad6cddd682aa5db80ef7143f3bc9f"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"06ee8ebc811b2ee38093f5f0163ef8e5"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"497544ca901f6228788231fabf55d6ea"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"3ad9746bf741c0d552a05b4b3568a56a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"edf75beba46de2d41bec3fec281f72d1"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"9836da7643da7aea375e60a999680e13"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"e09c57b1f90f7c55aa2e1d2b28f6db01"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"6f9564b73c5468fd1da613119d458e0f"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"e0fdae8d869209fa5cdca28ee1701afc"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"9f25f6a60502b663662ebf57bbfc9f29"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"5f0db6c0e2af75bd4f092f53b0714e08"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"0453bc9e9d9ec827e6ca78b0c783ee65"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"af0ca09540baa12db5568548ac58bfa8"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"1e47855e60a95d221e7d80cdc8e76a35"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"5f8e0ab1061109e3aad781565b6985cc"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"644ad6cddd682aa5db80ef7143f3bc9f"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"06ee8ebc811b2ee38093f5f0163ef8e5"},{url:"android/android-launchericon-512-512.png",revision:"36b44c53013aa2c439039ac5baead78c"},{url:"android/android-launchericon-192-192.png",revision:"880c860748ede32a4698becb07578d52"},{url:"android/android-launchericon-144-144.png",revision:"e2518a0fd6c534cf488f322dd0c14d2b"},{url:"android/android-launchericon-96-96.png",revision:"ef2aa55a6c4bc44ddceee62dacb15d59"},{url:"android/android-launchericon-72-72.png",revision:"69eb51befbb5639617e1e3174f59d82f"},{url:"android/android-launchericon-48-48.png",revision:"83cf48d18fa98af6e463df3c8b6d1a27"},{url:"ios/16.png",revision:"497544ca901f6228788231fabf55d6ea"},{url:"ios/20.png",revision:"dda87c0689a5d6dc0728d7acd0bd9fb9"},{url:"ios/29.png",revision:"1722673b4c2a6cd15759cbe0c1831b52"},{url:"ios/32.png",revision:"c803ab1d94057de471096740f5113154"},{url:"ios/40.png",revision:"2b27b73bb6a6760a590ceb8900870f4b"},{url:"ios/50.png",revision:"b3ee195435b88952c1fa1295693d4bf7"},{url:"ios/57.png",revision:"1152c3fb11c7e0234053639baff3d43b"},{url:"ios/58.png",revision:"7b741794bc8bf662732ee49376b292f5"},{url:"ios/60.png",revision:"3a2a1bf7aee04ab573001bb671e68b55"},{url:"ios/64.png",revision:"ea34f9a6d4c9dd9d060f50fb463305f7"},{url:"ios/72.png",revision:"69eb51befbb5639617e1e3174f59d82f"},{url:"ios/76.png",revision:"fe339bc39b9d06093e92c735523f89c4"},{url:"ios/80.png",revision:"8b6fc34781af11358083e2748e8ae017"},{url:"ios/87.png",revision:"df61888c678c9808690423a38e950127"},{url:"ios/100.png",revision:"bfb35100dd583939fbdd4286de0aef03"},{url:"ios/114.png",revision:"5b0a4727ca2fc58681eda3b4750d6d93"},{url:"ios/120.png",revision:"93b05f8aed66690f7caa4a187450d6f4"},{url:"ios/128.png",revision:"72985c2aff4c671b4a63362381964fac"},{url:"ios/144.png",revision:"e2518a0fd6c534cf488f322dd0c14d2b"},{url:"ios/152.png",revision:"b9f83e9891fa8f21a4636901cbd5f4b9"},{url:"ios/167.png",revision:"fd11c029f472fb284b0788c51002a033"},{url:"ios/180.png",revision:"e5e66b01ef4eff6aa537cc4cce94c687"},{url:"ios/192.png",revision:"880c860748ede32a4698becb07578d52"},{url:"ios/256.png",revision:"01e74d0df446f35468eddcce691cb612"},{url:"ios/512.png",revision:"36b44c53013aa2c439039ac5baead78c"},{url:"ios/1024.png",revision:"dd53ec78364bce77cfac835f3f0b7c30"},{url:"manifest.webmanifest",revision:"04f17c6086d291a6f86102f2eb2e2f09"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
