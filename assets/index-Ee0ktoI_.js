var t=Object.defineProperty,e=(e,o,n)=>(((e,o,n)=>{o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n})(e,"symbol"!=typeof o?o+"":o,n),n);import{p as o,g as n}from"./phaser-lWPI-X05.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const o of t)if("childList"===o.type)for(const t of o.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();class s extends o.Scene{constructor(){super("Boot")}preload(){this.load.spritesheet("loadingSpritesheet","assets/loadingSpritesheet.png",{frameWidth:296,frameHeight:154}),window.document.getElementById("loading").style.display="block"}create(){this.scene.start("Preloader")}}const i="EQAX9J60va-0wIDMdqGLRMf7imJvG0Ytyi3Yxnq9y-nbNCq2";class a extends o.Scene{constructor(){super("MainMenu"),e(this,"music"),e(this,"background"),e(this,"profileButton"),e(this,"soundButton"),e(this,"telegramButton"),e(this,"titleImage"),e(this,"player"),e(this,"playButton"),e(this,"leaderboardButton"),e(this,"planeButton"),e(this,"planeButtonText"),e(this,"tonButton"),e(this,"tonButtonText")}preload(){}create(){localStorage.getItem("username");const t=this.sys.game.config.width,e=this.sys.game.config.height;this.setupBackground(t,e),this.setupHeader(t,e),this.setupPlayer(t,e),this.setupFooter(t,e),this.retrievePrices()}startMusic(){this.music=this.sound.add("music",{loop:!0}),"false"===localStorage.getItem("music")?this.sound.mute=!0:this.sound.mute=!1,this.music.play({loop:!0})}setupBackground(t,e){this.background=this.add.image(t/2,e/2,"background").setOrigin(.5,.5);const o=t/this.background.width,n=e/this.background.height,s=Math.max(o,n);this.background.setScale(s),this.tweens.add({targets:this.background,scale:1.05*s,duration:3e3,yoyo:!0,ease:"Sine.easeInOut",repeat:-1})}setupHeader(t,e){this.profileButton=this.add.image(t/3,100,"profileButton").setScale(1.2).setInteractive().on("pointerdown",(()=>{console.log("Profile button clicked")}));const o="false"===localStorage.getItem("music");this.soundButton=this.add.image(t/2,100,o?"soundOff":"soundOn").setScale(1.2).setInteractive().on("pointerdown",(()=>{"false"===localStorage.getItem("music")?(this.sound.mute=!1,localStorage.setItem("music","true"),this.soundButton.setTexture("soundOn")):(this.sound.mute=!0,localStorage.setItem("music","false"),this.soundButton.setTexture("soundOff"))})),this.telegramButton=this.add.image(2*t/3,100,"telegramButton").setScale(1.2).setInteractive().on("pointerdown",(()=>{window.open("https://t.me/paperplane_ton","_blank")})),this.titleImage=this.add.image(t/2,-30,"titleImage").setOrigin(.5,0).setScale(.8),this.tweens.add({targets:this.titleImage,ease:"Sine.easeInOut",duration:2e3,repeat:-1,yoyo:!0,props:{scale:{value:"0.87",ease:"Sine.easeInOut"}}}),this.tweens.chain({targets:this.titleImage,loop:-1,tweens:[{angle:-2,duration:1e3,offset:0,ease:"Sine.easeOut"},{angle:2,duration:2e3,offset:1e3,ease:"Sine.easeInOut"},{angle:0,duration:1e3,ease:"Sine.easeIn"}]})}setupPlayer(t,e){this.player=this.add.image(t/2,.58*e,"plane");const o=t/this.player.width,n=e/this.player.height,s=Math.min(o,n);this.player.setScale(.93-s),this.tweens.add({targets:this.player,loop:-1,yoyo:!0,ease:"Sine.easeInOut",duration:1500,props:{y:"-=175"}})}setupFooter(t,e){const o=.73*e,n=.835*e,s=.94*e;this.playButton=this.add.image(t/2+60,o,"playButton").setScale(1.9,1.9).setOrigin(0,.5).setInteractive().on("pointerdown",(()=>{console.log("Stage selection")})),this.leaderboardButton=this.add.image(t/2+65,o,"leaderboardButton").setScale(1.9,2.5).setOrigin(1,.5).setInteractive().on("pointerdown",(()=>{console.log("Leaderboard button clicked")})),this.planeButton=this.add.image(t/2,n,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerdown",(()=>{window.open("https://www.geckoterminal.com/ton/pools/EQC1u0sVIjCIS4ldxfOC86nQlBkOeEO7mw4VcLGxYH_ZYgXh/","_blank")})),this.planeButtonText=this.add.text(this.planeButton.x,this.planeButton.y,localStorage.getItem("planePrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5),this.tonButton=this.add.image(t/2,s,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerdown",(()=>{window.open("https://coinmarketcap.com/currencies/toncoin/","_blank")})),this.tonButtonText=this.add.text(this.tonButton.x,this.tonButton.y,localStorage.getItem("tonPrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5)}async retrievePrices(){const t="https://tonapi.io/v2/rates?tokens=ton,"+i+"&currencies=usd",e=await fetch(t),o=(await e.json()).rates,n=o[i],s=n.diff_24h.USD,a=n.prices.USD,r=o.TON,l=r.diff_24h.USD,d=r.prices.USD,c="$PLANE\n$"+a.toFixed(3)+"  "+s,u="$TON\n$"+d.toFixed(2)+"  "+l,g={x:this.planeButton.x,y:this.planeButton.y},h={x:this.tonButton.x,y:this.tonButton.y};void 0===localStorage.getItem("planePrice")?this.planeButtonText=this.add.text(g.x,g.y,c,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.planeButtonText.setText(c),void 0===localStorage.getItem("tonPrice")?this.tonButtonText=this.add.text(h.x,h.y,u,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.tonButtonText.setText(u),console.log("Plane price: "+c,localStorage.getItem("planePrice")),console.log("TON price: "+u,localStorage.getItem("tonPrice")),localStorage.setItem("planePrice",c),localStorage.setItem("tonPrice",u)}}const r=n(Object.freeze(Object.defineProperty({__proto__:null,default:{}},Symbol.toStringTag,{value:"Module"})));!function(t){var e=r,o=r;t.sdk_version="2.151.240401",t.buildIdentifier="adobuild_nodesdk_115",t.settings={productionUrl:".playfabapi.com",verticalName:null,titleId:null,globalErrorHandler:null,developerSecretKey:null,port:443};var n=t._internalSettings={entityToken:null,sessionTicket:null,requestGetParams:{sdk:"JavaScriptSDK-2.151.240401"}};t.GetServerUrl=function(){var e=t.settings.productionUrl;return"http"!==e.substring(0,4)?t.settings.verticalName?"https://"+t.settings.verticalName+e:"https://"+t.settings.titleId+e:e},t.MakeRequest=function(s,i,a,r,l){null==i&&(i={});var d=Buffer.from(JSON.stringify(i),"utf8"),c=[s],u=n.requestGetParams;if(null!=u){var g=!0;for(var h in u)g?(c.push("?"),g=!1):c.push("&"),c.push(h),c.push("="),c.push(u[h])}var p=c.join(""),m=e.parse(p);if("https:"!==m.protocol)throw new Error("Unsupported protocol: "+m.protocol);m.method="POST",m.port=m.port||t.settings.port,m.headers={"Content-Type":"application/json","Content-Length":d.length,"X-PlayFabSDK":"NodeSDK-"+t.sdk_version+"-"+t.api_version},a&&(m.headers[a]=r);var f=o.request(m,(function(t){var e="";t.setEncoding("utf8"),t.on("data",(function(t){e+=t})),t.on("end",(function(){if(null!=l){var t=null;try{t=JSON.parse(e)}catch(o){t={code:503,status:"Service Unavailable",error:"Connection error",errorCode:2,errorMessage:e}}t.hasOwnProperty("error")||!t.hasOwnProperty("data")?l(t,null):l(null,t)}}))}));f.on("error",(function(t){null!=l&&l({code:503,status:"Service Unavailable",error:"Connection error",errorCode:2,errorMessage:t.message},null)})),f.write(d),f.end()}}({});class l extends o.Scene{constructor(){super("Preloader")}init(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.add.text(t/2,.15*e,"Paper $PLANE Game",{align:"center",fontFamily:"Arial",fontStyle:"bold",fontSize:80,color:"#fff"}).setOrigin(.5);const o=this.add.rectangle(0,.6*e,0,28,16777215),n=this.add.text(512,.63*e+64,"Starting Jets . . . 0%",{fontFamily:"Arial",fontStyle:"bold",fontSize:64,color:"#fff"}).setOrigin(.5).setX(t/2);this.load.on("progress",(e=>{o.width=t*e,n.setText("Starting Jets . . . "+Math.floor(100*e)+"%"),n.setX(t/2)}))}preload(){this.load.audio("music","sounds/music.ogg");const t=Math.floor(7*Math.random())+1;this.load.image("background","assets/bg_"+t+".png"),this.load.image("plane","assets/player_0.png"),this.load.image("profileButton","assets/profileButton.png"),this.load.image("soundOn","assets/soundOn.png"),this.load.image("soundOff","assets/soundOff.png"),this.load.image("telegramButton","assets/telegramButton.png"),this.load.image("titleImage","assets/titleImage.png"),this.load.image("playButton","assets/playButton.png"),this.load.image("leaderboardButton","assets/leaderboardButton.png"),this.load.image("buttonBG","assets/buttonBG.png")}create(){window.document.getElementById("loading").style.display="none",this.scene.start("MainMenu")}}const d={type:Phaser.AUTO,width:1200,height:1600,parent:"game-container",backgroundColor:"#111",scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[s,l,a]};new o.Game(d);
