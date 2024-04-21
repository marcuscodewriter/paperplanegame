var t=Object.defineProperty,e=(e,a,o)=>(((e,a,o)=>{a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o})(e,"symbol"!=typeof a?a+"":a,o),o);import{p as a}from"./phaser-cxBNu8M8.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const a of t)if("childList"===a.type)for(const t of a.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}(),window.Telegram.WebApp.ready();var o=window.Telegram.WebApp.initDataUnsafe.user,i="Guest";o&&(o.username&&o.username.length>0?i=o.username:o.first_name&&o.first_name.length>0&&(i=o.first_name)),window.Telegram.WebApp.MainButton.setText("Join Paper $PLANE"),window.Telegram.WebApp.MainButton.onClick((function(){window.Telegram.WebApp.openTelegramLink("https://t.me/paperplane_ton")})),window.Telegram.WebApp.MainButton.enable(),window.Telegram.WebApp.MainButton.show(),PlayFab.settings.titleId="F6BAC",PlayFab.settings.developerSecretKey={VITE_TITLE_ID:"F6BAC",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1}.VITE_DEVELOPER_SECRET_KEY,"Guest"!==i&&window.localStorage.setItem("username",i);var s={TitleId:PlayFab.settings.titleId,CustomId:i,CreateAccount:!0};PlayFabClientSDK.LoginWithCustomID(s,(function(t,e){null!==t?window.localStorage.setItem("sessionData",JSON.stringify(t.data)):null!==e&&console.error(PlayFab.GenerateErrorReport(e))}));class n extends a.Scene{constructor(){super("Boot")}preload(){this.load.spritesheet("loadingSpritesheet","assets/loadingSpritesheet.png",{frameWidth:296,frameHeight:154}),window.document.getElementById("loading").style.display="block"}create(){this.scene.start("Preloader")}}class r extends a.Scene{constructor(){super("Game"),e(this,"camera"),e(this,"background"),e(this,"msg_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(65280),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.msg_text=this.add.text(512,384,"Make something fun!\nand share it with us:\nsupport@phaser.io",{fontFamily:"Arial Black",fontSize:38,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.msg_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("GameOver")}))}}class l extends a.Scene{constructor(){super("GameOver"),e(this,"camera"),e(this,"background"),e(this,"gameover_text")}create(){this.camera=this.cameras.main,this.camera.setBackgroundColor(16711680),this.background=this.add.image(512,384,"background"),this.background.setAlpha(.5),this.gameover_text=this.add.text(512,384,"Game Over",{fontFamily:"Arial Black",fontSize:64,color:"#ffffff",stroke:"#000000",strokeThickness:8,align:"center"}),this.gameover_text.setOrigin(.5),this.input.once("pointerdown",(()=>{this.scene.start("MainMenu")}))}}const d="EQAX9J60va-0wIDMdqGLRMf7imJvG0Ytyi3Yxnq9y-nbNCq2";class c extends a.Scene{constructor(){super("MainMenu"),e(this,"background"),e(this,"profileButton"),e(this,"soundButton"),e(this,"telegramButton"),e(this,"titleImage"),e(this,"player"),e(this,"playButton"),e(this,"leaderboardButton"),e(this,"planeButton"),e(this,"planeButtonText"),e(this,"tonButton"),e(this,"tonButtonText"),e(this,"highscores"),e(this,"leaderboard"),e(this,"planeMenu"),e(this,"obstacleMenu"),e(this,"backgroundMenu"),e(this,"planeButtonLabel"),e(this,"obstacleButtonLabel"),e(this,"backgroundButtonLabel")}preload(){this.load.scenePlugin({key:"rexuiplugin",url:"https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",sceneKey:"rexUI"}),this.load.bitmapFont("gothic","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.png","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.xml")}create(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.setupBackground(t,e),this.setupHeader(t,e),this.setupPlayer(t,e),this.setupFooter(t,e),this.retrievePrices(),this.setupMusic(),this.setupHighscores()}createMenu(t,e,a,o){var i=this,s=this.rexUI.add.menu({x:t,y:e,orientation:"y",items:a,createButtonCallback:function(t){return i.rexUI.add.label({background:i.rexUI.add.roundRectangle(0,0,40,40,25,16513785,1).setStrokeStyle(3,0),text:i.add.text(0,0,t.name,{fontFamily:"Arial",align:"center",fontSize:"40px",fontStyle:"bold italic",color:"#000"}).setSize(350,65).setOrigin(.5),space:{left:25,right:25,top:30}})},easeIn:{duration:200,orientation:"y"},easeOut:{duration:100,orientation:"y"}});return s.on("button.click",(function(t){o(t)})).on("popup.complete",(function(t){console.log("popup.complete")})).on("scaledown.complete",(function(){console.log("scaledown.complete")})),s}setupDropDown(t,e,a,o,i){var s=[{name:"WHITE PLANE"},{name:"BLUE PLANE"},{name:"TONK"},{name:"TONSHIP"},{name:"TONFISH"},{name:"RESISTANCE DOG"},{name:"CRYPTON"},{name:"OYSTER LABS"}],n=this;t.setInteractive().on("pointerup",(function(){n.planeMenu=n.createMenu(.5*o,t.y-63,s,(function(t){const e=s.indexOf(s.find((e=>e.name===t.text)));window.localStorage.setItem("Character",e.toString()),n.planeButtonLabel.text=t.text,n.planeMenu.collapse(),n.planeMenu=void 0}))}));var r=[{name:"HANDCUFFS"},{name:"TONK"},{name:"TONSHIP"},{name:"TONFISH"},{name:"RESISTANCE DOG"},{name:"CRYPTON"},{name:"OYSTER LABS"}];e.setInteractive().on("pointerup",(function(){n.obstacleMenu=n.createMenu(.5*o,e.y-63,r,(function(t){const e=r.indexOf(r.find((e=>e.name===t.text)));window.localStorage.setItem("Obstacle",e.toString()),n.obstacleButtonLabel.text=t.text,n.obstacleMenu.collapse(),n.obstacleMenu=void 0}))}));var l=[{name:"DAY"},{name:"NIGHT"},{name:"TONK"},{name:"TONSHIP"},{name:"TONFISH"},{name:"RESISTANCE DOG"},{name:"CRYPTON"},{name:"OYSTER LABS"}];a.setInteractive().on("pointerup",(function(){n.backgroundMenu=n.createMenu(.5*o,a.y-63,l,(function(t){const e=l.indexOf(l.find((e=>e.name===t.text)));window.localStorage.setItem("Background",e.toString()),n.backgroundButtonLabel.text=t.text,n.backgroundMenu.collapse(),n.backgroundMenu=void 0}))}))}setupMusic(){this.sound.add("bgMusic",{loop:!0}).play(),"false"===(localStorage.getItem("music")??"true")?this.sound.mute=!0:this.sound.mute=!1}setupBackground(t,e){this.background=this.add.image(t/2,e/2,"background").setOrigin(.5,.5);const a=t/this.background.width,o=e/this.background.height,i=Math.max(a,o);this.background.setScale(i),this.tweens.add({targets:this.background,scale:1.05*i,duration:3e3,yoyo:!0,ease:"Sine.easeInOut",repeat:-1})}setupHeader(t,e){this.profileButton=this.add.image(t/3,100,"profileButton").setScale(1.2).setInteractive().on("pointerup",(()=>{this.showHighscores(t,e)}));const a="false"===localStorage.getItem("music");this.soundButton=this.add.image(t/2,100,a?"soundOff":"soundOn").setScale(1.2).setInteractive().on("pointerup",(()=>{"false"===localStorage.getItem("music")?(this.sound.mute=!1,localStorage.setItem("music","true"),this.soundButton.setTexture("soundOn")):(this.sound.mute=!0,localStorage.setItem("music","false"),this.soundButton.setTexture("soundOff"))})),this.telegramButton=this.add.image(2*t/3,100,"telegramButton").setScale(1.2).setInteractive().on("pointerup",(()=>{window.open("https://t.me/paperplane_ton","_blank")})),this.titleImage=this.add.image(t/2,-30,"titleImage").setOrigin(.5,0).setScale(.8),this.tweens.chain({targets:this.titleImage,loop:-1,tweens:[{scale:.87,duration:2e3,ease:"Sine.easeInOut"},{scale:.8,duration:2e3,ease:"Sine.easeInOut"}]}),this.tweens.chain({targets:this.titleImage,loop:-1,tweens:[{angle:-2,duration:1e3,ease:"Sine.easeOut"},{angle:2,duration:2e3,ease:"Sine.easeInOut"},{angle:0,duration:1e3,ease:"Sine.easeIn"}]})}setupPlayer(t,e){this.player=this.add.image(t/2,.58*e,"plane");const a=t/this.player.width,o=e/this.player.height,i=Math.min(a,o);this.player.setScale(.93-i),this.tweens.add({targets:this.player,loop:-1,yoyo:!0,ease:"Sine.easeInOut",duration:1500,props:{y:"-=175"}})}setupFooter(t,e){const a=.73*e,o=.835*e,i=.94*e;this.playButton=this.add.image(t/2+60,a,"playButton").setScale(1.9,1.9).setOrigin(0,.5).setInteractive().on("pointerup",(()=>{this.showSelection(t,e)})),this.leaderboardButton=this.add.image(t/2+65,a,"leaderboardButton").setScale(1.9,2.5).setOrigin(1,.5).setInteractive().on("pointerup",(()=>{this.showLeaderboard(t,e)})),this.planeButton=this.add.image(t/2,o,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerup",(()=>{window.open("https://www.geckoterminal.com/ton/pools/EQC1u0sVIjCIS4ldxfOC86nQlBkOeEO7mw4VcLGxYH_ZYgXh/","_blank")})),this.planeButtonText=this.add.text(this.planeButton.x,this.planeButton.y,localStorage.getItem("planePrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5),this.tonButton=this.add.image(t/2,i,"buttonBG").setScale(2.6,2).setOrigin(.5).setInteractive().on("pointerup",(()=>{window.open("https://coinmarketcap.com/currencies/toncoin/","_blank")})),this.tonButtonText=this.add.text(this.tonButton.x,this.tonButton.y,localStorage.getItem("tonPrice")??"",{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5)}async retrievePrices(){const t="https://tonapi.io/v2/rates?tokens=ton,"+d+"&currencies=usd",e=await fetch(t),a=(await e.json()).rates,o=a[d],i=o.diff_24h.USD,s=o.prices.USD,n=a.TON,r=n.diff_24h.USD,l=n.prices.USD,c="$PLANE\n$"+s.toFixed(3)+"  "+i,h="$TON\n$"+l.toFixed(2)+"  "+r,u={x:this.planeButton.x,y:this.planeButton.y},g={x:this.tonButton.x,y:this.tonButton.y};void 0===localStorage.getItem("planePrice")?this.planeButtonText=this.add.text(u.x,u.y,c,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.planeButtonText.setText(c),void 0===localStorage.getItem("tonPrice")?this.tonButtonText=this.add.text(g.x,g.y,h,{fontFamily:"Arial",fontStyle:"bold",fontSize:44,color:"#208CE7",align:"center"}).setOrigin(.5):this.tonButtonText.setText(h),localStorage.setItem("planePrice",c),localStorage.setItem("tonPrice",h)}setupHighscores(){const t=JSON.parse(window.localStorage.getItem("sessionData"));for(let e=0;e<7;e++)fetch("https://F6BAC.playfabapi.com/Client/GetLeaderboardAroundPlayer",{method:"POST",body:JSON.stringify({StatisticName:"BestScore_"+e,MaxResultsCount:1,PlayFabId:t.PlayFabId}),headers:{"Content-Type":"application/json","X-Authorization":t.SessionTicket}}).then((t=>t.json())).then((t=>{localStorage.setItem("BestScore_"+e,t.data.Leaderboard[0].StatValue)}))}showHighscores(t,e){this.planeButton.destroy(),this.planeButtonText.destroy(),this.tonButton.destroy(),this.tonButtonText.destroy(),this.leaderboardButton.destroy(),this.playButton.destroy();const a=1.5;this.highscores=this.add.container(t/2,e/2,[this.add.rectangle(0,0,t,e,0,.6),this.add.image(0,0,"panel").setDisplaySize(.72*t,.66*e).setOrigin(.5,.54),this.add.text(0,.26*-e,(localStorage.getItem("username")??"Guest").toUpperCase(),{fontFamily:"Arial",fontStyle:"bold",fontSize:56,color:"#000"}).setOrigin(.5,a),this.add.text(0,.19*-e,"HANDCUFFS BEST: "+(localStorage.getItem("BestScore_0")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,a),this.add.text(0,.13*-e,"TONK BEST: "+(localStorage.getItem("BestScore_1")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,a),this.add.text(0,.07*-e,"TONSHIP BEST: "+(localStorage.getItem("BestScore_2")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,a),this.add.text(0,.01*-e,"TONFISH BEST: "+(localStorage.getItem("BestScore_3")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,a),this.add.text(0,.05*e,"RESISTANCE DOG BEST: "+(localStorage.getItem("BestScore_4")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,a),this.add.text(0,.11*e,"CRYPTON BEST: "+(localStorage.getItem("BestScore_5")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,a),this.add.text(0,.17*e,"OYSTER LABS BEST: "+(localStorage.getItem("BestScore_6")??"0"),{fontFamily:"Arial",fontStyle:"italic bold",fontSize:48,color:"#000"}).setOrigin(.5,a),this.add.image(0,.275*e,"done").setDisplaySize(200,180).setInteractive().on("pointerup",(()=>{this.highscores.alpha=0,this.highscores.destroy(),this.setupFooter(t,e)})).setOrigin(.5,.8)]).setSize(t,e).setInteractive()}showLeaderboard(t,e,a="-1"){this.planeButton.destroy(),this.planeButtonText.destroy(),this.tonButton.destroy(),this.tonButtonText.destroy(),this.leaderboardButton.destroy(),this.playButton.destroy(),"-1"===a&&(a="0");var o="";switch(a){case"0":default:o="HANDCUFFS";break;case"1":o="TONK";break;case"2":o="TONSHIP";break;case"3":o="TONFISH";break;case"4":o="RESISTANCE DOG";break;case"5":o="CRYPTON";break;case"6":o="OYSTER LABS"}var i=this.add.container(t/2,e/2,[this.add.rectangle(0,0,t,e,0,.5).setInteractive(),this.add.image(t/2,e/2.2,"panel").setDisplaySize(.7*t,.7*e).setOrigin(1.21)]),s=this.add.container(),n=this.rexUI.add.scrollablePanel({x:t/2-16,y:e/2+24,height:.6*e,width:.65*t,scrollMode:"y",background:this.rexUI.add.roundRectangle({fillColor:0,radius:10}),panel:{child:s,mask:{padding:1}},slider:{track:this.rexUI.add.roundRectangle({width:20,radius:10,color:2493956}).setOrigin(.5),thumb:this.rexUI.add.roundRectangle({radius:13,color:8085079})},mouseWheelScroller:{focus:!1,speed:.1},header:this.add.container(0,0,[this.add.text(30,-100,o,{fontFamily:"Arial",fontStyle:"bold italic",fontSize:56,color:"#54AFAA"}).setOrigin(.5,1),this.add.text(.26*-t,-8,"RANK",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#54AFAA"}).setOrigin(.5,1),this.add.text(0,-8,"NAME",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#54AFAA"}).setOrigin(.9,1),this.add.text(.26*t,-8,"SCORE",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#54AFAA"}).setOrigin(.5,1)]).setSize(.7*t,50),space:{left:20,right:20,top:5,bottom:20,panel:3,header:5,footer:5}}).layout();const r=JSON.parse(window.localStorage.getItem("sessionData"));var l,d,c;fetch("https://F6BAC.playfabapi.com/Client/GetLeaderboard",{method:"POST",body:JSON.stringify({StatisticName:"BestScore_"+a,MaxResultsCount:100}),headers:{"Content-Type":"application/json","X-Authorization":r.SessionTicket}}).then((t=>t.json())).then((e=>{e.data.Leaderboard.forEach(((e,a)=>{const o=96*a;s.add(this.add.text(.08*t,o+24,String(a+1),{fontFamily:"Arial",fontSize:"48px",color:"#000"}).setOrigin(.5)),s.add(this.add.text(.22*t,o+24,e.DisplayName,{fontFamily:"Arial",fontSize:"48px",color:"#000"}).setOrigin(0,.5)),s.add(this.add.text(.63*t,o+24,String(e.StatValue),{fontFamily:"Arial",fontSize:"48px",color:"#000"}).setOrigin(.5)),s.setSize(.7*t,o+64)})),n.layout()}));const h=()=>{i.destroy(),n.destroy(),l.destroy(),d.destroy(),c.destroy()};l=this.add.image(.3*t,.9*e,"prevButton").setInteractive().on("pointerup",(()=>{var o=Number(a)-1;o<0&&(o=6),this.showLeaderboard(t,e,o.toString()),h()})).setOrigin(.5).setScale(2.2,2.2),d=this.add.image(.7*t,.9*e,"playButton").setInteractive().on("pointerup",(()=>{var o=Number(a)+1;o>6&&(o=0),this.showLeaderboard(t,e,o.toString()),h()})).setOrigin(.5).setScale(2.2,2.2),c=this.add.image(.5*t,.9*e,"homeButton").setInteractive().on("pointerup",(()=>{h(),this.setupFooter(t,e)})).setOrigin(.5,.47).setScale(2.25,2.25)}showSelection(t,e){this.planeButton.destroy(),this.planeButtonText.destroy(),this.tonButton.destroy(),this.tonButtonText.destroy(),this.leaderboardButton.destroy(),this.playButton.destroy();const a=this.add.container(t/2,e/2,[this.add.rectangle(0,0,t,e,0,.5).setInteractive(),this.add.image(t/2,e/2.2,"panel").setDisplaySize(.7*t,.7*e).setOrigin(1.21)]);var o="WHITE PLANE",i="HANDCUFFS",s="DAY";switch(localStorage.getItem("Character")??"0"){case"0":o="WHITE PLANE";break;case"1":o="BLUE PLANE";break;case"2":o="TONK";break;case"3":o="TONSHIP";break;case"4":o="TONFISH";break;case"5":o="RESISTANCE DOG";break;case"6":o="CRYPTON";break;case"7":o="OYSTER LABS"}switch(localStorage.getItem("Obstacle")??"0"){case"0":i="HANDCUFFS";break;case"1":i="TONK";break;case"2":i="TONSHIP";break;case"3":i="TONFISH";break;case"4":i="RESISTANCE DOG";break;case"5":i="CRYPTON";break;case"6":i="OYSTER LABS"}switch(localStorage.getItem("Background")??"0"){case"0":s="DAY";break;case"1":s="NIGHT";break;case"2":s="TONK";break;case"3":s="TONSHIP";break;case"4":s="TONFISH";break;case"5":s="RESISTANCE DOG";break;case"6":s="CRYPTON";break;case"7":s="OYSTER LABS"}this.planeButtonLabel=this.add.text(.63*t,.2*e,o,{fontFamily:"Arial",fontStyle:"bold",fontSize:36,color:"#208CE7"}).setOrigin(.5);const n=this.add.image(.84*t,.2*e,"buttonBG").setDisplaySize(410,150).setOrigin(1,.5),r=this.add.text(.48*t,.2*e,"PLANE:",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#000"}).setOrigin(1,.5),l=this.add.container(void 0,void 0,[n,this.planeButtonLabel.setPosition(.67*t,.2*e).setOrigin(.5)]);this.obstacleButtonLabel=this.add.text(.63*t,.37*e,i,{fontFamily:"Arial",fontStyle:"bold",fontSize:36,color:"#208CE7"}).setOrigin(.5);const d=this.add.image(.84*t,.37*e,"buttonBG").setDisplaySize(410,150).setOrigin(1,.5),c=this.add.text(.48*t,.37*e,"OBSTACLE:",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#000"}).setOrigin(1,.5),h=this.add.container(void 0,void 0,[d,this.obstacleButtonLabel.setPosition(.67*t,.37*e).setOrigin(.5)]);this.backgroundButtonLabel=this.add.text(.63*t,.54*e,s,{fontFamily:"Arial",fontStyle:"bold",fontSize:36,color:"#208CE7"}).setOrigin(.5);const u=this.add.image(.84*t,.54*e,"buttonBG").setDisplaySize(410,150).setOrigin(1,.5),g=this.add.text(.48*t,.54*e,"BACKGROUND:",{fontFamily:"Arial",fontStyle:"bold italic",fontSize:48,color:"#000"}).setOrigin(1,.5),p=this.add.container(void 0,void 0,[u,this.backgroundButtonLabel.setPosition(.67*t,.54*e).setOrigin(.5)]),m=this.add.image(.7*t,.72*e,"playButton").setInteractive().on("pointerup",(()=>{this.scene.start("Game")})).setOrigin(.5).setScale(2.25,2.25);var S;S=this.add.image(.3*t,.72*e,"homeButton").setInteractive().on("pointerup",(()=>{a.destroy(),S.destroy(),m.destroy(),r.destroy(),l.destroy(),c.destroy(),h.destroy(),g.destroy(),p.destroy(),this.setupFooter(t,e)})).setOrigin(.5,.47).setScale(2.25,2.25),this.setupDropDown(n,d,u,t,e)}}class h extends a.Scene{constructor(){super("Preloader")}init(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.add.text(t/2,.15*e,"Paper $PLANE Game",{align:"center",fontFamily:"Arial",fontStyle:"bold",fontSize:80,color:"#fff"}).setOrigin(.5);const a=this.add.rectangle(0,.6*e,0,28,16777215),o=this.add.text(512,.63*e+64,"Starting Jets . . . 0%",{fontFamily:"Arial",fontStyle:"bold",fontSize:64,color:"#fff"}).setOrigin(.5).setX(t/2);this.load.on("progress",(e=>{a.width=t*e,o.setText("Starting Jets . . . "+Math.floor(100*e)+"%"),o.setX(t/2)}))}preload(){this.load.audio("bgMusic",["sounds/music.mp3","sounds/music.ogg"]);const t=Math.floor(7*Math.random())+1;this.load.image("background","assets/bg_"+t+".png"),this.load.image("plane","assets/player_0.png"),this.load.image("profileButton","assets/profileButton.png"),this.load.image("soundOn","assets/soundOn.png"),this.load.image("soundOff","assets/soundOff.png"),this.load.image("telegramButton","assets/telegramButton.png"),this.load.image("titleImage","assets/titleImage.png"),this.load.image("panel","assets/panel.png"),this.load.image("done","assets/done.png"),this.load.image("playButton","assets/playButton.png"),this.load.image("leaderboardButton","assets/leaderboardButton.png"),this.load.image("buttonBG","assets/buttonBG.png"),this.load.image("homeButton","assets/homeButton.png"),this.load.image("prevButton","assets/prevButton.png"),window.localStorage.setItem("Character",window.localStorage.getItem("Character")??"0"),window.localStorage.setItem("Obstacle",window.localStorage.getItem("Obstacle")??"0"),window.localStorage.setItem("Background",window.localStorage.getItem("Background")??"0")}create(){window.document.getElementById("loading").style.display="none",this.scene.start("MainMenu")}}const u={type:Phaser.AUTO,width:1200,height:1600,parent:"game-container",backgroundColor:"#111",physics:{default:"arcade",arcade:{gravity:{x:0,y:200}}},scale:{mode:Phaser.Scale.HEIGHT_CONTROLS_WIDTH,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[n,h,c,r,l]};new a.Game(u);
