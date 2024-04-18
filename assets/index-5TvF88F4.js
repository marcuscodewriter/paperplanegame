var t=Object.defineProperty,e=(e,s,o)=>(((e,s,o)=>{s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o})(e,"symbol"!=typeof s?s+"":s,o),o);import{p as s}from"./phaser-cxBNu8M8.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();class o extends s.Scene{constructor(){super("Boot")}preload(){this.load.spritesheet("loadingSpritesheet","assets/loadingSpritesheet.png",{frameWidth:296,frameHeight:154}),window.document.getElementById("loading").style.display="block"}create(){this.scene.start("Preloader")}}const n="EQAX9J60va-0wIDMdqGLRMf7imJvG0Ytyi3Yxnq9y-nbNCq2";class i extends s.Scene{constructor(){super("MainMenu"),e(this,"background"),e(this,"profileButton"),e(this,"soundButton"),e(this,"telegramButton"),e(this,"titleImage"),e(this,"player"),e(this,"playButton"),e(this,"leaderboardButton"),e(this,"planeButton"),e(this,"planeButtonText"),e(this,"tonButton"),e(this,"tonButtonText")}preload(){}create(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.setupBackground(t,e),this.setupHeader(t,e),this.setupPlayer(t,e),this.setupFooter(t,e),this.retrievePrices(),this.setupMusic(),this.setupLeadboard()}setupMusic(){this.sound.add("bgMusic",{loop:!0}).play(),"false"===(localStorage.getItem("music")??"true")?this.sound.mute=!0:this.sound.mute=!1}setupBackground(t,e){this.background=this.add.image(t/2,e/2,"background").setOrigin(.5,.5);const s=t/this.background.width,o=e/this.background.height,n=Math.max(s,o);this.background.setScale(n),this.tweens.add({targets:this.background,scale:1.05*n,duration:3e3,yoyo:!0,ease:"Sine.easeInOut",repeat:-1})}setupHeader(t,e){this.profileButton=this.add.image(t/3,100,"profileButton").setScale(1.2).setInteractive().on("pointerup",(()=>{alert(localStorage.getItem("username")??"Guest")}));const s="false"===localStorage.getItem("music");this.soundButton=this.add.image(t/2,100,s?"soundOff":"soundOn").setScale(1.2).setInteractive().on("pointerup",(()=>{"false"===localStorage.getItem("music")?(this.sound.mute=!1,localStorage.setItem("music","true"),this.soundButton.setTexture("soundOn")):(this.sound.mute=!0,localStorage.setItem("music","false"),this.soundButton.setTexture("soundOff"))})),this.telegramButton=this.add.image(2*t/3,100,"telegramButton").setScale(1.2).setInteractive().on("pointerup",(()=>{window.open("https://t.me/paperplane_ton","_blank")})),this.titleImage=this.add.image(t/2,-30,"titleImage").setOrigin(.5,0).setScale(.8),this.tweens.add({targets:this.titleImage,ease:"Sine.easeInOut",duration:2e3,repeat:-1,yoyo:!0,props:{scale:{value:"0.87",ease:"Sine.easeInOut"}}}),this.tweens.chain({targets:this.titleImage,loop:-1,tweens:[{angle:-2,duration:1e3,offset:0,ease:"Sine.easeOut"},{angle:2,duration:2e3,offset:1e3,ease:"Sine.easeInOut"},{angle:0,duration:1e3,ease:"Sine.easeIn"}]})}setupPlayer(t,e){this.player=this.add.image(t/2,.58*e,"plane");const s=t/this.player.width,o=e/this.player.height,n=Math.min(s,o);this.player.setScale(.93-n),this.tweens.add({targets:this.player,loop:-1,yoyo:!0,ease:"Sine.easeInOut",duration:1500,props:{y:"-=175"}})}setupFooter(t,e){const s=.73*e,o=.835*e,n=.94*e;this.playButton=this.add.image(t/2+60,s,"playButton").setScale(1.9,1.9).setOrigin(0,.5).setInteractive().on("pointerup",(()=>{console.log("Stage selection")})),this.leaderboardButton=this.add.image(t/2+65,s,"leaderboardButton").setScale(1.9,2.5).setOrigin(1,.5).setInteractive().on("pointerup",(()=>{console.log("Leaderboard button clicked")})),this.planeButton=this.add.image(t/2,o,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerup",(()=>{window.open("https://www.geckoterminal.com/ton/pools/EQC1u0sVIjCIS4ldxfOC86nQlBkOeEO7mw4VcLGxYH_ZYgXh/","_blank")})),this.planeButtonText=this.add.text(this.planeButton.x,this.planeButton.y,localStorage.getItem("planePrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5),this.tonButton=this.add.image(t/2,n,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerup",(()=>{window.open("https://coinmarketcap.com/currencies/toncoin/","_blank")})),this.tonButtonText=this.add.text(this.tonButton.x,this.tonButton.y,localStorage.getItem("tonPrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5)}async retrievePrices(){const t="https://tonapi.io/v2/rates?tokens=ton,"+n+"&currencies=usd",e=await fetch(t),s=(await e.json()).rates,o=s[n],i=o.diff_24h.USD,a=o.prices.USD,r=s.TON,l=r.diff_24h.USD,d=r.prices.USD,c="$PLANE\n$"+a.toFixed(3)+"  "+i,u="$TON\n$"+d.toFixed(2)+"  "+l,g={x:this.planeButton.x,y:this.planeButton.y},h={x:this.tonButton.x,y:this.tonButton.y};void 0===localStorage.getItem("planePrice")?this.planeButtonText=this.add.text(g.x,g.y,c,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.planeButtonText.setText(c),void 0===localStorage.getItem("tonPrice")?this.tonButtonText=this.add.text(h.x,h.y,u,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.tonButtonText.setText(u),console.log("Plane price: "+c,localStorage.getItem("planePrice")),console.log("TON price: "+u,localStorage.getItem("tonPrice")),localStorage.setItem("planePrice",c),localStorage.setItem("tonPrice",u)}setupLeadboard(){}}class a extends s.Scene{constructor(){super("Preloader")}init(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.add.text(t/2,.15*e,"Paper $PLANE Game",{align:"center",fontFamily:"Arial",fontStyle:"bold",fontSize:80,color:"#fff"}).setOrigin(.5);const s=this.add.rectangle(0,.6*e,0,28,16777215),o=this.add.text(512,.63*e+64,"Starting Jets . . . 0%",{fontFamily:"Arial",fontStyle:"bold",fontSize:64,color:"#fff"}).setOrigin(.5).setX(t/2);this.load.on("progress",(e=>{s.width=t*e,o.setText("Starting Jets . . . "+Math.floor(100*e)+"%"),o.setX(t/2)}))}preload(){this.load.audio("bgMusic",["sounds/music.mp3","sounds/music.ogg"]);const t=Math.floor(7*Math.random())+1;this.load.image("background","assets/bg_"+t+".png"),this.load.image("plane","assets/player_0.png"),this.load.image("profileButton","assets/profileButton.png"),this.load.image("soundOn","assets/soundOn.png"),this.load.image("soundOff","assets/soundOff.png"),this.load.image("telegramButton","assets/telegramButton.png"),this.load.image("titleImage","assets/titleImage.png"),this.load.image("playButton","assets/playButton.png"),this.load.image("leaderboardButton","assets/leaderboardButton.png"),this.load.image("buttonBG","assets/buttonBG.png")}create(){window.document.getElementById("loading").style.display="none",this.scene.start("MainMenu")}}const r={type:Phaser.AUTO,width:1200,height:1600,parent:"game-container",backgroundColor:"#111",scale:{mode:Phaser.Scale.HEIGHT_CONTROLS_WIDTH,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[o,a,i]};new s.Game(r);
