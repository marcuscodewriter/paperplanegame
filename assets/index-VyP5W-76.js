var t=Object.defineProperty,e=(e,o,a)=>(((e,o,a)=>{o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a})(e,"symbol"!=typeof o?o+"":o,a),a);import{p as o}from"./phaser-cxBNu8M8.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const o of t)if("childList"===o.type)for(const t of o.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}(),window.Telegram.WebApp.ready();var a=window.Telegram.WebApp.initDataUnsafe.user,i="Guest";a&&(a.username&&a.username.length>0?i=a.username:a.first_name&&a.first_name.length>0&&(i=a.first_name)),window.Telegram.WebApp.MainButton.setText("Join Paper $PLANE"),window.Telegram.WebApp.MainButton.onClick((function(){window.Telegram.WebApp.openTelegramLink("https://t.me/paperplane_ton")})),window.Telegram.WebApp.MainButton.enable(),window.Telegram.WebApp.MainButton.show(),PlayFab.settings.titleId="F6BAC",PlayFab.settings.developerSecretKey={VITE_TITLE_ID:"F6BAC",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_DEVELOPER_SECRET_KEY,"Guest"!==i&&window.localStorage.setItem("username",i);var s={TitleId:PlayFab.settings.titleId,CustomId:i,CreateAccount:!0};PlayFabClientSDK.LoginWithCustomID(s,(function(t,e){null!==t?window.localStorage.setItem("sessionData",JSON.stringify(t.data)):null!==e&&console.error(PlayFab.GenerateErrorReport(e))}));class n extends o.Scene{constructor(){super("Boot")}preload(){this.load.spritesheet("loadingSpritesheet","assets/loadingSpritesheet.png",{frameWidth:296,frameHeight:154}),window.document.getElementById("loading").style.display="block"}create(){this.scene.start("Preloader")}}const r="EQAX9J60va-0wIDMdqGLRMf7imJvG0Ytyi3Yxnq9y-nbNCq2";class l extends o.Scene{constructor(){super("MainMenu"),e(this,"background"),e(this,"profileButton"),e(this,"soundButton"),e(this,"telegramButton"),e(this,"titleImage"),e(this,"player"),e(this,"playButton"),e(this,"leaderboardButton"),e(this,"planeButton"),e(this,"planeButtonText"),e(this,"tonButton"),e(this,"tonButtonText"),e(this,"highscores"),e(this,"leaderboard")}preload(){this.load.scenePlugin({key:"rexuiplugin",url:"https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",sceneKey:"rexUI"}),this.load.bitmapFont("gothic","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.png","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.xml")}create(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.setupBackground(t,e),this.setupHeader(t,e),this.setupPlayer(t,e),this.setupFooter(t,e),this.retrievePrices(),this.setupMusic(),this.setupHighscores()}setupMusic(){this.sound.add("bgMusic",{loop:!0}).play(),"false"===(localStorage.getItem("music")??"true")?this.sound.mute=!0:this.sound.mute=!1}setupBackground(t,e){this.background=this.add.image(t/2,e/2,"background").setOrigin(.5,.5);const o=t/this.background.width,a=e/this.background.height,i=Math.max(o,a);this.background.setScale(i),this.tweens.add({targets:this.background,scale:1.05*i,duration:3e3,yoyo:!0,ease:"Sine.easeInOut",repeat:-1})}setupHeader(t,e){this.profileButton=this.add.image(t/3,100,"profileButton").setScale(1.2).setInteractive().on("pointerup",(()=>{this.showHighscores(t,e)}));const o="false"===localStorage.getItem("music");this.soundButton=this.add.image(t/2,100,o?"soundOff":"soundOn").setScale(1.2).setInteractive().on("pointerup",(()=>{"false"===localStorage.getItem("music")?(this.sound.mute=!1,localStorage.setItem("music","true"),this.soundButton.setTexture("soundOn")):(this.sound.mute=!0,localStorage.setItem("music","false"),this.soundButton.setTexture("soundOff"))})),this.telegramButton=this.add.image(2*t/3,100,"telegramButton").setScale(1.2).setInteractive().on("pointerup",(()=>{window.open("https://t.me/paperplane_ton","_blank")})),this.titleImage=this.add.image(t/2,-30,"titleImage").setOrigin(.5,0).setScale(.8),this.tweens.chain({targets:this.titleImage,loop:-1,tweens:[{scale:.87,duration:2e3,ease:"Sine.easeInOut"},{scale:.8,duration:2e3,ease:"Sine.easeInOut"}]}),this.tweens.chain({targets:this.titleImage,loop:-1,tweens:[{angle:-2,duration:1e3,ease:"Sine.easeOut"},{angle:2,duration:2e3,ease:"Sine.easeInOut"},{angle:0,duration:1e3,ease:"Sine.easeIn"}]})}setupPlayer(t,e){this.player=this.add.image(t/2,.58*e,"plane");const o=t/this.player.width,a=e/this.player.height,i=Math.min(o,a);this.player.setScale(.93-i),this.tweens.add({targets:this.player,loop:-1,yoyo:!0,ease:"Sine.easeInOut",duration:1500,props:{y:"-=175"}})}setupFooter(t,e){const o=.73*e,a=.835*e,i=.94*e;this.playButton=this.add.image(t/2+60,o,"playButton").setScale(1.9,1.9).setOrigin(0,.5).setInteractive().on("pointerup",(()=>{this.showSelection(t,e)})),this.leaderboardButton=this.add.image(t/2+65,o,"leaderboardButton").setScale(1.9,2.5).setOrigin(1,.5).setInteractive().on("pointerup",(()=>{this.showLeaderboard(t,e)})),this.planeButton=this.add.image(t/2,a,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerup",(()=>{window.open("https://www.geckoterminal.com/ton/pools/EQC1u0sVIjCIS4ldxfOC86nQlBkOeEO7mw4VcLGxYH_ZYgXh/","_blank")})),this.planeButtonText=this.add.text(this.planeButton.x,this.planeButton.y,localStorage.getItem("planePrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5),this.tonButton=this.add.image(t/2,i,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerup",(()=>{window.open("https://coinmarketcap.com/currencies/toncoin/","_blank")})),this.tonButtonText=this.add.text(this.tonButton.x,this.tonButton.y,localStorage.getItem("tonPrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5)}async retrievePrices(){const t="https://tonapi.io/v2/rates?tokens=ton,"+r+"&currencies=usd",e=await fetch(t),o=(await e.json()).rates,a=o[r],i=a.diff_24h.USD,s=a.prices.USD,n=o.TON,l=n.diff_24h.USD,d=n.prices.USD,c="$PLANE\n$"+s.toFixed(3)+"  "+i,h="$TON\n$"+d.toFixed(2)+"  "+l,g={x:this.planeButton.x,y:this.planeButton.y},u={x:this.tonButton.x,y:this.tonButton.y};void 0===localStorage.getItem("planePrice")?this.planeButtonText=this.add.text(g.x,g.y,c,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.planeButtonText.setText(c),void 0===localStorage.getItem("tonPrice")?this.tonButtonText=this.add.text(u.x,u.y,h,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.tonButtonText.setText(h),localStorage.setItem("planePrice",c),localStorage.setItem("tonPrice",h)}setupHighscores(){const t=JSON.parse(window.localStorage.getItem("sessionData"));for(let e=0;e<7;e++)fetch("https://F6BAC.playfabapi.com/Client/GetLeaderboardAroundPlayer",{method:"POST",body:JSON.stringify({StatisticName:"BestScore_"+e,MaxResultsCount:1,PlayFabId:t.PlayFabId}),headers:{"Content-Type":"application/json","X-Authorization":t.SessionTicket}}).then((t=>t.json())).then((t=>{localStorage.setItem("BestScore_"+e,t.data.Leaderboard[0].StatValue)}))}showHighscores(t,e){const o=1.5;this.highscores=this.add.container(t/2,e/2,[this.add.rectangle(0,0,t,e,0,.6),this.add.image(0,0,"panel").setDisplaySize(.72*t,.66*e).setOrigin(.5,.54),this.add.text(0,.26*-e,(localStorage.getItem("username")??"Guest").toUpperCase(),{fontFamily:"Arial",fontStyle:"bold",fontSize:56,color:"#000"}).setOrigin(.5,o),this.add.text(0,.19*-e,"HANDCUFFS BEST: "+(localStorage.getItem("BestScore_0")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,o),this.add.text(0,.13*-e,"TONK BEST: "+(localStorage.getItem("BestScore_1")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,o),this.add.text(0,.07*-e,"TONSHIP BEST: "+(localStorage.getItem("BestScore_2")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,o),this.add.text(0,.01*-e,"TONFISH BEST: "+(localStorage.getItem("BestScore_3")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,o),this.add.text(0,.05*e,"RESISTANCE DOG BEST: "+(localStorage.getItem("BestScore_4")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,o),this.add.text(0,.11*e,"CRYPTON BEST: "+(localStorage.getItem("BestScore_5")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,o),this.add.text(0,.17*e,"OYSTER LABS BEST: "+(localStorage.getItem("BestScore_6")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,o),this.add.image(0,.275*e,"done").setDisplaySize(200,180).setInteractive().on("pointerup",(()=>{this.highscores.alpha=0,this.highscores.destroy()})).setOrigin(.5,.8)]).setSize(t,e).setInteractive()}showLeaderboard(t,e,o="-1"){"-1"===o&&(o="0");var a="";switch(o){case"0":default:a="HANDCUFFS";break;case"1":a="TONK";break;case"2":a="TONSHIP";break;case"3":a="TONFISH";break;case"4":a="RESISTANCE DOG";break;case"5":a="CRYPTON";break;case"6":a="OYSTER LABS"}var i=this.add.container(t/2,e/2,[this.add.rectangle(0,0,t,e,0,.5).setInteractive(),this.add.image(t/2,e/2.2,"panel").setDisplaySize(.7*t,.7*e).setOrigin(1.21)]),s=this.add.container(),n=this.rexUI.add.scrollablePanel({x:t/2-16,y:e/2+24,height:.6*e,width:.65*t,scrollMode:"y",background:this.rexUI.add.roundRectangle({fillColor:0,radius:10}),panel:{child:s,mask:{padding:1}},slider:{track:this.rexUI.add.roundRectangle({width:20,radius:10,color:2493956}).setOrigin(.5),thumb:this.rexUI.add.roundRectangle({radius:13,color:8085079})},mouseWheelScroller:{focus:!1,speed:.1},header:this.add.container(0,0,[this.add.text(0,-108,a,{fontFamily:"Arial",fontStyle:"bold italic",fontSize:56,color:"#54AFAA"}).setOrigin(.5,1),this.add.text(.26*-t,-8,"RANK",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#54AFAA"}).setOrigin(.5,1),this.add.text(0,-8,"NAME",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#54AFAA"}).setOrigin(.9,1),this.add.text(.26*t,-8,"SCORE",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#54AFAA"}).setOrigin(.5,1)]).setSize(.7*t,50),space:{left:20,right:20,top:5,bottom:20,panel:3,header:5,footer:5}}).layout();const r=JSON.parse(window.localStorage.getItem("sessionData"));var l,d,c;fetch("https://F6BAC.playfabapi.com/Client/GetLeaderboard",{method:"POST",body:JSON.stringify({StatisticName:"BestScore_"+o,MaxResultsCount:100}),headers:{"Content-Type":"application/json","X-Authorization":r.SessionTicket}}).then((t=>t.json())).then((e=>{e.data.Leaderboard.forEach(((e,o)=>{const a=96*o;s.add(this.add.text(.08*t,a+24,String(o+1),{fontFamily:"Arial",fontSize:"48px",color:"#000"}).setOrigin(.5)),s.add(this.add.text(.22*t,a+24,e.DisplayName,{fontFamily:"Arial",fontSize:"48px",color:"#000"}).setOrigin(0,.5)),s.add(this.add.text(.63*t,a+24,String(e.StatValue),{fontFamily:"Arial",fontSize:"48px",color:"#000"}).setOrigin(.5)),s.setSize(.7*t,a+64)})),n.layout()}));const h=()=>{i.destroy(),n.destroy(),l.destroy(),d.destroy(),c.destroy()};l=this.add.image(.3*t,.9*e,"prevButton").setInteractive().on("pointerup",(()=>{var a=Number(o)-1;a<0&&(a=6),this.showLeaderboard(t,e,a.toString()),h()})).setOrigin(.5).setScale(2.2,2.2),d=this.add.image(.7*t,.9*e,"playButton").setInteractive().on("pointerup",(()=>{var a=Number(o)+1;a>6&&(a=0),this.showLeaderboard(t,e,a.toString()),h()})).setOrigin(.5).setScale(2.2,2.2),c=this.add.image(.5*t,.9*e,"homeButton").setInteractive().on("pointerup",(()=>{h()})).setOrigin(.5,.47).setScale(2.25,2.25)}showSelection(t,e){console.log("Show game selection screen")}}class d extends o.Scene{constructor(){super("Preloader")}init(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.add.text(t/2,.15*e,"Paper $PLANE Game",{align:"center",fontFamily:"Arial",fontStyle:"bold",fontSize:80,color:"#fff"}).setOrigin(.5);const o=this.add.rectangle(0,.6*e,0,28,16777215),a=this.add.text(512,.63*e+64,"Starting Jets . . . 0%",{fontFamily:"Arial",fontStyle:"bold",fontSize:64,color:"#fff"}).setOrigin(.5).setX(t/2);this.load.on("progress",(e=>{o.width=t*e,a.setText("Starting Jets . . . "+Math.floor(100*e)+"%"),a.setX(t/2)}))}preload(){this.load.audio("bgMusic",["sounds/music.mp3","sounds/music.ogg"]);const t=Math.floor(7*Math.random())+1;this.load.image("background","assets/bg_"+t+".png"),this.load.image("plane","assets/player_0.png"),this.load.image("profileButton","assets/profileButton.png"),this.load.image("soundOn","assets/soundOn.png"),this.load.image("soundOff","assets/soundOff.png"),this.load.image("telegramButton","assets/telegramButton.png"),this.load.image("titleImage","assets/titleImage.png"),this.load.image("panel","assets/panel.png"),this.load.image("done","assets/done.png"),this.load.image("playButton","assets/playButton.png"),this.load.image("leaderboardButton","assets/leaderboardButton.png"),this.load.image("buttonBG","assets/buttonBG.png"),this.load.image("homeButton","assets/homeButton.png"),this.load.image("prevButton","assets/prevButton.png"),window.localStorage.setItem("Character",window.localStorage.getItem("Character")??"0"),window.localStorage.setItem("Obstacle",window.localStorage.getItem("Obstacle")??"0"),window.localStorage.setItem("Background",window.localStorage.getItem("Background")??"0")}create(){window.document.getElementById("loading").style.display="none",this.scene.start("MainMenu")}}const c={type:Phaser.AUTO,width:1200,height:1600,parent:"game-container",backgroundColor:"#111",physics:{default:"arcade",arcade:{gravity:{x:0,y:200}}},scale:{mode:Phaser.Scale.HEIGHT_CONTROLS_WIDTH,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[n,d,l]};new o.Game(c);
