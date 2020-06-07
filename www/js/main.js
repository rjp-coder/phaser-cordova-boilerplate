/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/AssetsLoader.js":
/*!********************************!*\
  !*** ./www/js/AssetsLoader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AssetsLoader {\r\n  static load(sc) {\r\n    sc.load.atlas('sheet', 'img/sheet.png', 'img/sheet.json');\r\n    sc.load.image('bkg10', 'img/bkg10.jpg');\r\n    sc.load.image('bkg12', 'img/bkg12.jpg');\r\n    sc.load.image('bullet', 'img/bullet.png');\r\n    sc.load.image('ufo', 'img/ufo2.png');\r\n  }\r\n\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AssetsLoader);\n\n//# sourceURL=webpack:///./www/js/AssetsLoader.js?");

/***/ }),

/***/ "./www/js/Level.js":
/*!*************************!*\
  !*** ./www/js/Level.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fileIO_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileIO.js */ \"./www/js/fileIO.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./www/js/index.js\");\n/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils.js */ \"./www/js/Utils.js\");\n/* harmony import */ var _LevelData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LevelData.js */ \"./www/js/LevelData.js\");\n/* harmony import */ var _gui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gui.js */ \"./www/js/gui.js\");\n/* harmony import */ var _AssetsLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AssetsLoader.js */ \"./www/js/AssetsLoader.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Level extends Phaser.Scene {\r\n\r\n  constructor() {\r\n    super(\"Level\");\r\n    this.plane = null,\r\n      this.enemies = null,\r\n      this.bullets = null,\r\n      this.cursors = null,\r\n      //have some level props, to separate Phaser's scene properties from \r\n      //game logic properties\r\n      this.props = _LevelData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initLevelData(),\r\n      //have a gui prop too, for the same reason\r\n      this.gui = _gui_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].initGui();\r\n  }\r\n\r\n  getAllEnemies() {\r\n    let sc = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene() || this;\r\n    return sc.enemies.getChildren();\r\n  }\r\n\r\n  createBullet(target, defaultVelocity) {\r\n    let scene = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene();\r\n    let bullet = scene.physics.add.sprite(this.plane.x, this.plane.y, 'bullet');\r\n    this.bullets.add(bullet);\r\n    this.time.delayedCall(2500, function () { this.destroy() }, null, bullet);\r\n    if (target) {\r\n      let angle = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene().physics.moveToObject(bullet, target, defaultVelocity || 600);\r\n      bullet.angle = Phaser.Math.RadToDeg(angle);\r\n      this.plane.angle = bullet.angle;\r\n    } else {\r\n      bullet.setVelocityX(defaultVelocity || 600);\r\n    }\r\n    bullet.target = target;\r\n    this.physics.add.collider(bullet, target, this.enemyHit, null, scene);\r\n    return bullet;\r\n  }\r\n\r\n  spawnEnemyAfterRandTime() {\r\n    let sr = this.props.ENEMY_SPAWN_RATE;\r\n    let time = sr * (Math.random() * 0.8 + 0.4);\r\n\r\n    if (!this.props.gameOver) {\r\n      this.time.delayedCall(time, this.createNewEnemy);\r\n      this.time.delayedCall(time, this.spawnEnemyAfterRandTime, null, this);\r\n    }\r\n  }\r\n\r\n  levelCompleted() {\r\n    //TODO\r\n  }\r\n\r\n  createNewEnemy(en){\r\n    if (!en) { en = {} };\r\n    let sc = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene();\r\n    if (sc.getAllEnemies().length >= sc.props.MAX_ENEMY_COUNT) return false;\r\n    let randX = en.x || Phaser.Math.Between(24, sc.sys.game.config.width - 24);\r\n    let randY = en.y || Phaser.Math.Between(sc.gui.topBound + 8, _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene().gui.topBound + 46);\r\n    let enemy = sc.physics.add.sprite(randX, randY, 'ufo');\r\n    Object.assign(enemy, en); //if you want to spawn an enemy with initial properties\r\n    if (!enemy.group) enemy.group = \"enemies\";\r\n    sc[enemy.group].add(enemy);\r\n    enemy.spd = sc.props.ENEMY_SPD * (enemy.spdMod ? enemy.spdMod : 1);\r\n    if (enemy.colour) {\r\n      enemy.setTint(enemy.colour);\r\n    }\r\n    return enemy;\r\n  }\r\n\r\n  destroy(enemy) {\r\n    enemy.destroy();\r\n  }\r\n\r\n\r\n  enemyHit(bullet, enemy) {\r\n    if (!bullet) {\r\n    }\r\n    if (bullet && bullet.target != enemy) return;\r\n    if (enemy.hp && enemy.hp > 1) {//enemies without hp are assumed to have 1, i.e. die in one hit\r\n      enemy.hp--;\r\n      if (bullet) bullet.destroy();\r\n      enemy.hitCallback();\r\n    } else {\r\n      if (bullet) bullet.destroy();\r\n      if (enemy.callback) enemy.callback(enemy);\r\n      this.destroy(enemy);\r\n      this.props.killCount++;\r\n      this.props.score += Math.round(5 * (2000 / this.props.ENEMY_SPAWN_RATE) * Math.sqrt(this.props.ENEMY_SPD));\r\n      this.gui.scoreText.setText('Score: ' + this.props.score + \"\\n\" + (this.props.hiscore ? \"Hi Score: \" + this.props.hiscore : \"\"));\r\n      if (this.props.targetKills && (this.props.killCount >= this.props.targetKills)) {\r\n        this.levelCompleted();\r\n      }\r\n    }\r\n  }\r\n\r\n  playerHit(player, enemy) {\r\n    this.props.lives--;\r\n    this.props.perfect = false;\r\n    player.setTint(\"0x0000ff\");\r\n    this.gui.livesText.text = \"\".padStart(Math.min(this.props.lives, 20), \"♥\");\r\n    if (this.props.lives == 0) {\r\n      this.props.gameOver = true;\r\n      this.physics.pause();\r\n      player.setTint(0xff0000);\r\n      this.time.removeAllEvents();\r\n      if (this.props.score && this.props.hiscore < this.props.score) console.log(\"new hi score!\")\r\n      this.time.delayedCall(2000, function () {\r\n        this.time.removeAllEvents();\r\n        _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene().scene.start('Level');\r\n        _fileIO_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file(\"hiscore\", 'w', this.props.score + \"\");\r\n      }, null, this);\r\n    } else {\r\n      this.time.delayedCall(500,()=>player.setTint(\"0x0000ff\"));\r\n      this.destroy(enemy);\r\n    }\r\n  }\r\n\r\n  init(data) {\r\n    this.props = _LevelData_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].initLevelData(),\r\n      this.gui = _gui_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].initGui();\r\n    if (!Object.keys(data).length) return;\r\n    //When coming from another scene, this scene can be initialised with some data\r\n    Object.assign(this.props, data);\r\n    console.table(data);\r\n  }\r\n\r\n  keyInput(event) {\r\n    let sc = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene();\r\n    let txt = event.key || event.target.textContent;\r\n    if (txt.match(/[a-zA-Z0-9]/) && txt.length==1){\r\n      console.log(txt);\r\n    let definiteTargets = [sc.getAllEnemies()[0]];\r\n    this.shoot(definiteTargets);\r\n    }\r\n  }\r\n\r\n\r\n  shoot(targets) {\r\n    let sc = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene();\r\n    for (let e of targets) {\r\n      sc.createBullet(e, 300);\r\n    }\r\n    sc.props.disableShot=1;\r\n    this.time.delayedCall(200, ()=>{sc.props.disableShot=0;});\r\n  }\r\n\r\n  preload() {\r\n    _AssetsLoader_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].load(this);\r\n  }\r\n\r\n  create() {\r\n    this.time.now = 0;\r\n    this.props.startTime = 0;\r\n    this.anims.create({\r\n      key: 'plane',\r\n      repeat: -1,\r\n      frameRate: 10,\r\n      frames: this.anims.generateFrameNames('sheet', { start: 1, end: 3, prefix: 'planeBlue', suffix: '.png' })\r\n    });\r\n    this.plane = this.physics.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height - 64, 'sheet').play('plane');\r\n    this.plane.body.setSize(64, 64, 32)\r\n    this.plane.setDepth(1); //CHECK was this.plane.body.setSize 64,64,32\r\n    this.enemies = this.physics.add.group();\r\n    this.bullets = this.physics.add.group();\r\n    this.spawnEnemyAfterRandTime();\r\n    this.plane.spd = 300;\r\n    this.plane.setCollideWorldBounds(true);\r\n    this.cursors = this.input.keyboard.createCursorKeys();\r\n    this.physics.add.collider(this.plane, this.enemies, this.playerHit, null, this);\r\n    _gui_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].createGui(this);\r\n  }\r\n\r\n  update(time) {\r\n    if (!this.props.startTime) { this.props.startTime = time; }\r\n    if (!this.props.gameOver) this.gui.timeText.setText('Time: ' + _Utils_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].formatTime(time - this.props.startTime));\r\n    if (this.props.targetTime && (time - this.props.startTime >= (this.props.targetTime * 1000))) this.levelCompleted();\r\n    if (this.props.gameOver) {\r\n      for (let e of this.getAllEnemies()) {\r\n        e.setVelocityX(0);\r\n        e.setVelocityY(0);\r\n      }\r\n      return;\r\n    }\r\n    _gui_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].updateGui(this);\r\n    if (this.cursors.left.isDown) {\r\n      this.plane.setVelocityX(-this.plane.spd);\r\n    } else if (this.cursors.right.isDown) {\r\n      this.plane.setVelocityX(this.plane.spd);\r\n    } else {\r\n      this.plane.setVelocityX(0);\r\n    }\r\n    if (this.cursors.up.isDown) {\r\n      this.plane.setVelocityY(-this.plane.spd);\r\n    } else if (this.cursors.down.isDown) {\r\n      this.plane.setVelocityY(this.plane.spd);\r\n    } else {\r\n      this.plane.setVelocityY(0);\r\n    }\r\n    ////////////\r\n    //keyboard handling -- command\r\n    ////////////\r\n    let sc = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getScene();\r\n    sc.input.keyboard.on('keydown', function (event) { if (!sc.props.disableShot) sc.keyInput(event); });\r\n    //\r\n    //handle game objects\r\n    //\r\n    for (let e of sc.getAllEnemies()) {\r\n      let calcSpd = e.spd * sc.props.enemySpdMultiplier;\r\n      this.physics.moveToObject(e, this.plane, calcSpd);\r\n    }\r\n\r\n\r\n\r\n  }\r\n}\r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (Level);\r\n\n\n//# sourceURL=webpack:///./www/js/Level.js?");

/***/ }),

/***/ "./www/js/LevelData.js":
/*!*****************************!*\
  !*** ./www/js/LevelData.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass LevelData {\r\n  static initLevelData() {\r\n    return {\r\n      score: 0,\r\n      gameOver: false,\r\n      ENEMY_SPAWN_RATE: 2000,\r\n      MAX_ENEMY_COUNT: 10,\r\n      ENEMY_SPD: 14,\r\n      startTime: 0,\r\n      disableShot:0,\r\n      lives: 3,\r\n      enemySpdMultiplier: 1,\r\n      forcefield: null,\r\n      LR_MIN_SPD: 40,\r\n      difficultyStr: \"\",\r\n      difficulty: undefined,\r\n      levelId: null,\r\n      targetKills: null,\r\n      targetTime: null,\r\n      killCount: 0,\r\n      perfect: true,\r\n      complete: 0\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (LevelData);\n\n//# sourceURL=webpack:///./www/js/LevelData.js?");

/***/ }),

/***/ "./www/js/Pause.js":
/*!*************************!*\
  !*** ./www/js/Pause.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./www/js/index.js\");\n\r\nclass Pause extends Phaser.Scene {\r\n    constructor() {\r\n        super(\"Pause\");\r\n        this.elem = null;\r\n        this.fromScene = null\r\n    }\r\n\r\n    preload() {\r\n        this.load.html('pause', 'assets/pause.html');\r\n    }\r\n\r\n    init(data) {\r\n        this.fromScene = data[0];\r\n    }\r\n\r\n    create() {\r\n        //resize();\r\n        this.elem = this.add.dom(0, 0).createFromCache('pause');\r\n        let form = this.elem;\r\n        form.setOrigin(0, 0);\r\n        form.addListener('click');\r\n        form.on('click', function (event) {\r\n            if (event.target.id === 'resumeGame') {\r\n                let sc = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getScene();\r\n                sc.scene.resume(sc.fromScene);\r\n                sc.scene.stop('Pause');\r\n            }\r\n        });\r\n        //resize();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pause);\n\n//# sourceURL=webpack:///./www/js/Pause.js?");

/***/ }),

/***/ "./www/js/Utils.js":
/*!*************************!*\
  !*** ./www/js/Utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Utils {\r\n\r\n  static formatTime(t) {\r\n    let s = t / 1000;\r\n    let mins = Math.floor(s / 60);\r\n    s = s % 60;\r\n    s = Math.floor(s * 1000) / 1000;\r\n    let ss = s + \"\";\r\n    let h = Math.floor(mins / 60);\r\n    mins = mins % 60;\r\n    let minsStr = mins + \"\";\r\n    if (mins) ss = (s + \"\").padStart(2, \"0\");\r\n    if (h) minsStr = minsStr.padStart(2, \"0\");\r\n    return (h ? (h + \":\") : \"\") + (mins ? (minsStr + \":\") : \"\") + ss;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\n\n//# sourceURL=webpack:///./www/js/Utils.js?");

/***/ }),

/***/ "./www/js/fileIO.js":
/*!**************************!*\
  !*** ./www/js/fileIO.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst io = (function () {\n    function file(fname, rw, textOrCallback) {\n        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {\n\n            console.log('file system open: ' + fs.name);\n            fs.root.getFile(fname, { create: true, exclusive: false }, function (fileEntry) {\n\n                console.log(\"fileEntry is file?\" + fileEntry.isFile.toString());\n                switch (rw) {\n                    case 'r':\n                        readFile(fileEntry, textOrCallback); break;\n                    case 'w':\n                        writeFile(fileEntry, textOrCallback); break;\n                }\n\n            }, onErrorCreateFile);\n\n        }, onErrorLoadFs);\n    }\n\n    function onErrorCreateFile(fileEntry) {\n        console.log(\"Problem with create/read/write file\");\n        console.log(JSON.stringify(fileEntry));\n    }\n\n    function onErrorLoadFs(fs) {\n        console.log(\"Problem with get file\");\n        console.log(JSON.stringify(fs));\n    }\n\n    function onErrorReadFile(fileEntry) {\n        console.log(\"Problem with read file\");\n        console.log(JSON.stringify(fileEntry));\n    }\n\n\n    function writeFile(fileEntry, text) {\n        // Create a FileWriter object for our FileEntry (log.txt).\n        fileEntry.createWriter(function (fileWriter, err) {\n\n            fileWriter.onwriteend = function (ev) {\n                console.log(\"Successful file write...\");\n                if (!ev.target.truncatedAlready) {\n                    ev.target.truncate(ev.target.fileSize);\n                    ev.target.truncatedAlready = true;\n                }\n            };\n\n            fileWriter.onwritestart = function (ev) {\n                //fileWriter.truncate(0);\n            }\n\n            fileWriter.onerror = function (e) {\n                console.log(\"Failed file write: \" + e.toString());\n            };\n\n            let dataObj = new Blob([text], { type: 'text/plain' });\n\n            fileWriter.fileSize = dataObj.size;\n            fileWriter.truncatedAlready = false;\n\n            fileWriter.write(dataObj);\n\n        });\n    }\n\n    function readFile(fileEntry, callback) {\n\n        fileEntry.file(function (file) {\n            var reader = new FileReader();\n\n            reader.onloadend = function () {\n                console.log(\"Successful file read: \" + this.result);\n                if (callback) callback(this.result);\n            };\n\n            reader.readAsText(file);\n\n        }, onErrorReadFile);\n\n\n    }\n\n    return { file };\n\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (io);\n\n//# sourceURL=webpack:///./www/js/fileIO.js?");

/***/ }),

/***/ "./www/js/gui.js":
/*!***********************!*\
  !*** ./www/js/gui.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./www/js/index.js\");\n\r\n\r\nclass Gui {\r\n\r\nstatic initGui(){\r\n  return {\r\n  scoreText:null,\r\n    drawText:null,\r\n    enemyFont:{ fontSize: '20px', fill: '#fff', align: 'center' },\r\n    miniEnemyFont:{ fontSize: '14px', fill: '#fff', align: 'center' },\r\n    infoFont:{ fontSize: '16px', fill: '#fff' },\r\n    timeText:null,\r\n    livesText:null,\r\n    debugText:null,\r\n    SHOWFPS:false,\r\n    objectiveText:\"Display some kind of objective here!\",\r\n    guiBox:null,\r\n    topBound:50,\r\n    bg:null,\r\n}\r\n}\r\n  static createGui(levelObj){\r\n    let sc = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getScene(\"Level\");\r\n    let cw = sc.sys.canvas.width;\r\n    let ch = sc.sys.canvas.height;\r\n    levelObj.gui.bg = sc.add.tileSprite(0, 0, cw, ch, 'sheet', 'background.png').setOrigin(0);\r\n    levelObj.gui.objectiveText = sc.add.text(cw / 2, ch / 2,\"Press any letter or number to shoot\")\r\n    levelObj.gui.objectiveText.setOrigin(0.5, 0.5).setDepth(1).setWordWrapWidth(cw - 1);\r\n    sc.tweens.add({\r\n      targets: levelObj.objectiveText,\r\n      delay: 3000,\r\n      alpha: 0,\r\n      duration: 3000,\r\n      ease: 'Power2'\r\n    });\r\n    levelObj.gui.drawText = sc.add.text(sc.plane.x, sc.plane.y, sc.props.cmd, { fontSize: '24px', fill: '#000', align: 'center' });\r\n    levelObj.gui.drawText.setOrigin(0.5, 0)\r\n    levelObj.gui.drawText.setDepth(1);\r\n    levelObj.gui.timeText = sc.add.text(0, 0, '', levelObj.gui.infoFont).setDepth(1);\r\n    levelObj.gui.scoreText = sc.add.text(cw / 2, 16, 'score: 0', levelObj.gui.enemyFont).setDepth(1);\r\n    levelObj.gui.debugText = sc.add.text(0, ch - 16, 'FPS:0', levelObj.gui.infoFont).setDepth(1);\r\n    levelObj.gui.scoreText.setStroke('#000000', 2).setAlign('center').originX = 0.5;\r\n    levelObj.gui.livesText = sc.add.text(310, 0, \"\".padStart(Math.min(sc.props.lives, 20), \"♥\"), levelObj.gui.infoFont).setDepth(1)\r\n    levelObj.gui.livesText.setAlign('right').originX = 1;\r\n    levelObj.gui.comboText = sc.add.text(310, ch - 16, sc.combo + \"\", levelObj.gui.infoFont).setDepth(1)\r\n    levelObj.gui.comboText.setAlign('right').originX = 1;\r\n    levelObj.gui.guiBox = sc.add.rectangle(0, 0, cw, 50, 0x000000, 1).setDepth(1000);\r\n    levelObj.gui.guiBox.setOrigin(0, 0);\r\n    for (let item of [levelObj.gui.scoreText, levelObj.gui.timeText, levelObj.gui.livesText]) {\r\n      item.setDepth(1001);\r\n    }\r\n  }\r\n\r\n  static updateGui(levelObj){\r\n    let sc = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getScene();\r\n    levelObj.gui.scoreText.setAlign('center');\r\n    levelObj.gui.livesText.setAlign('right');\r\n    levelObj.gui.comboText.setAlign('right').setText(sc.props.combo + \"\");\r\n    if (levelObj.gui.SHOWFPS) { levelObj.gui.debugText.text = \"FPS: \" + Math.round(sc.loop.actualFps * 100) / 100 };\r\n    levelObj.gui.drawText.x = sc.plane.x;\r\n    levelObj.gui.drawText.y = sc.plane.y;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gui);\n\n//# sourceURL=webpack:///./www/js/gui.js?");

/***/ }),

/***/ "./www/js/index.js":
/*!*************************!*\
  !*** ./www/js/index.js ***!
  \*************************/
/*! exports provided: main, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony import */ var _Level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Level.js */ \"./www/js/Level.js\");\n/* harmony import */ var _Pause_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pause.js */ \"./www/js/Pause.js\");\n\r\n\r\n\r\n\r\nlet game = null;\r\n\r\ndocument.addEventListener('deviceready', function () {\r\n    var config = {\r\n        type: Phaser.AUTO,\r\n        autoResize: true,\r\n        parent: \"game\",\r\n        width: 320, //resolution for smallest phone -iphone4s\r\n        height: 480,\r\n        physics: {\r\n            default: 'arcade',\r\n            arcade: {\r\n                gravity: { y: 0 },\r\n                debug: true\r\n            }\r\n        },\r\n        scene: [_Level_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Pause_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]],\r\n        scale: {\r\n            mode: Phaser.Scale.FIT,\r\n            autoCenter: Phaser.DOM.CENTER_BOTH\r\n        },\r\n        dom: {\r\n            //required if inserting dom elements into the game\r\n            createContainer: true,\r\n            parent: \"game\"\r\n        }\r\n\r\n    };\r\n\r\n    game = new Phaser.Game(config);\r\n});\r\n\r\nconst main = (function () {\r\n    document.addEventListener(\"backbutton\", onBackKeyDown, false);\r\n\r\n    function onBackKeyDown() {\r\n        //the existence of this function stops android's standard back button terminate app flow.\r\n        let sceneName = main.getScene().scene.key;\r\n        if (sceneName == \"Pause\") {\r\n            if (navigator.app) {\r\n                navigator.app.exitApp();\r\n            } else if (navigator.device) {\r\n                navigator.device.exitApp();\r\n            } else {\r\n                window.close();\r\n            }\r\n        } else if (sceneName == \"Level\") {\r\n            main.getScene().scene.launch('Pause', [sceneName]);\r\n            main.getScene().scene.pause();\r\n        }\r\n    }\r\n\r\n    function getScene(str) {\r\n        if (str) return game.scene.getScene(str);\r\n        //gets active scenes and returns the first result.\r\n        return game.scene.scenes.filter((x) => game.scene.isActive(x))[0];\r\n    }\r\n\r\n\r\n    if (!window.cordova) {\r\n        window.dispatchEvent('deviceready');\r\n    }\r\n\r\n    if (window){window.getScene=getScene}\r\n\r\n    return { getScene, onBackKeyDown }\r\n\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./www/js/index.js?");

/***/ })

/******/ });