import io from './fileIO.js';
import main from './index.js';
import utils from './Utils.js';
import LevelData from './LevelData.js'
import Gui from './gui.js'

import AssetsLoader from './AssetsLoader.js';


class Level extends Phaser.Scene {

  constructor() {
    super("Level");
    this.plane = null,
      this.enemies = null,
      this.bullets = null,
      this.cursors = null,
      //have some level props, to separate Phaser's scene properties from 
      //game logic properties
      this.props = LevelData.initLevelData(),
      //have a gui prop too, for the same reason
      this.gui = Gui.initGui();
  }

  getAllEnemies() {
    let sc = main.getScene() || this;
    return sc.enemies.getChildren();
  }

  createBullet(target, defaultVelocity) {
    let scene = main.getScene();
    let bullet = scene.physics.add.sprite(this.plane.x, this.plane.y, 'bullet');
    this.bullets.add(bullet);
    this.time.delayedCall(2500, function () { this.destroy() }, null, bullet);
    if (target) {
      let angle = main.getScene().physics.moveToObject(bullet, target, defaultVelocity || 600);
      bullet.angle = Phaser.Math.RadToDeg(angle);
      this.plane.angle = bullet.angle;
    } else {
      bullet.setVelocityX(defaultVelocity || 600);
    }
    bullet.target = target;
    this.physics.add.collider(bullet, target, this.enemyHit, null, scene);
    return bullet;
  }

  spawnEnemyAfterRandTime() {
    let sr = this.props.ENEMY_SPAWN_RATE;
    let time = sr * (Math.random() * 0.8 + 0.4);

    if (!this.props.gameOver) {
      this.time.delayedCall(time, this.createNewEnemy);
      this.time.delayedCall(time, this.spawnEnemyAfterRandTime, null, this);
    }
  }

  levelCompleted() {
    //TODO
  }

  createNewEnemy(en){
    if (!en) { en = {} };
    let sc = main.getScene();
    if (sc.getAllEnemies().length >= sc.props.MAX_ENEMY_COUNT) return false;
    let randX = en.x || Phaser.Math.Between(24, sc.sys.game.config.width - 24);
    let randY = en.y || Phaser.Math.Between(sc.gui.topBound + 8, main.getScene().gui.topBound + 46);
    let enemy = sc.physics.add.sprite(randX, randY, 'ufo');
    Object.assign(enemy, en); //if you want to spawn an enemy with initial properties
    if (!enemy.group) enemy.group = "enemies";
    sc[enemy.group].add(enemy);
    enemy.spd = sc.props.ENEMY_SPD * (enemy.spdMod ? enemy.spdMod : 1);
    if (enemy.colour) {
      enemy.setTint(enemy.colour);
    }
    return enemy;
  }

  destroy(enemy) {
    enemy.destroy();
  }


  enemyHit(bullet, enemy) {
    if (!bullet) {
    }
    if (bullet && bullet.target != enemy) return;
    if (enemy.hp && enemy.hp > 1) {//enemies without hp are assumed to have 1, i.e. die in one hit
      enemy.hp--;
      if (bullet) bullet.destroy();
      enemy.hitCallback();
    } else {
      if (bullet) bullet.destroy();
      if (enemy.callback) enemy.callback(enemy);
      this.destroy(enemy);
      this.props.killCount++;
      this.props.score += Math.round(5 * (2000 / this.props.ENEMY_SPAWN_RATE) * Math.sqrt(this.props.ENEMY_SPD));
      this.gui.scoreText.setText('Score: ' + this.props.score + "\n" + (this.props.hiscore ? "Hi Score: " + this.props.hiscore : ""));
      if (this.props.targetKills && (this.props.killCount >= this.props.targetKills)) {
        this.levelCompleted();
      }
    }
  }

  playerHit(player, enemy) {
    this.props.lives--;
    this.props.perfect = false;
    player.setTint("0x0000ff");
    this.gui.livesText.text = "".padStart(Math.min(this.props.lives, 20), "♥");
    if (this.props.lives == 0) {
      this.props.gameOver = true;
      this.physics.pause();
      player.setTint(0xff0000);
      this.time.removeAllEvents();
      if (this.props.score && this.props.hiscore < this.props.score) console.log("new hi score!")
      this.time.delayedCall(2000, function () {
        this.time.removeAllEvents();
        main.getScene().scene.start('Level');
        io.file("hiscore", 'w', this.props.score + "");
      }, null, this);
    } else {
      this.time.delayedCall(500,()=>player.setTint("0x0000ff"));
      this.destroy(enemy);
    }
  }

  init(data) {
    this.props = LevelData.initLevelData(),
      this.gui = Gui.initGui();
    if (!Object.keys(data).length) return;
    //When coming from another scene, this scene can be initialised with some data
    Object.assign(this.props, data);
    console.table(data);
  }

  keyInput(event) {
    let sc = main.getScene();
    let txt = event.key || event.target.textContent;
    if (txt.match(/[a-zA-Z0-9]/) && txt.length==1){
      console.log(txt);
    let definiteTargets = [sc.getAllEnemies()[0]];
    this.shoot(definiteTargets);
    }
  }


  shoot(targets) {
    let sc = main.getScene();
    for (let e of targets) {
      sc.createBullet(e, 300);
    }
    sc.props.disableShot=1;
    this.time.delayedCall(200, ()=>{sc.props.disableShot=0;});
  }

  preload() {
    AssetsLoader.load(this);
  }

  create() {
    this.time.now = 0;
    this.props.startTime = 0;
    this.anims.create({
      key: 'plane',
      repeat: -1,
      frameRate: 10,
      frames: this.anims.generateFrameNames('sheet', { start: 1, end: 3, prefix: 'planeBlue', suffix: '.png' })
    });
    this.plane = this.physics.add.sprite(this.sys.canvas.width / 2, this.sys.canvas.height - 64, 'sheet').play('plane');
    this.plane.body.setSize(64, 64, 32)
    this.plane.setDepth(1); //CHECK was this.plane.body.setSize 64,64,32
    this.enemies = this.physics.add.group();
    this.bullets = this.physics.add.group();
    this.spawnEnemyAfterRandTime();
    this.plane.spd = 300;
    this.plane.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.plane, this.enemies, this.playerHit, null, this);
    Gui.createGui(this);
  }

  update(time) {
    if (!this.props.startTime) { this.props.startTime = time; }
    if (!this.props.gameOver) this.gui.timeText.setText('Time: ' + utils.formatTime(time - this.props.startTime));
    if (this.props.targetTime && (time - this.props.startTime >= (this.props.targetTime * 1000))) this.levelCompleted();
    if (this.props.gameOver) {
      for (let e of this.getAllEnemies()) {
        e.setVelocityX(0);
        e.setVelocityY(0);
      }
      return;
    }
    Gui.updateGui(this);
    if (this.cursors.left.isDown) {
      this.plane.setVelocityX(-this.plane.spd);
    } else if (this.cursors.right.isDown) {
      this.plane.setVelocityX(this.plane.spd);
    } else {
      this.plane.setVelocityX(0);
    }
    if (this.cursors.up.isDown) {
      this.plane.setVelocityY(-this.plane.spd);
    } else if (this.cursors.down.isDown) {
      this.plane.setVelocityY(this.plane.spd);
    } else {
      this.plane.setVelocityY(0);
    }
    ////////////
    //keyboard handling -- command
    ////////////
    let sc = main.getScene();
    sc.input.keyboard.on('keydown', function (event) { if (!sc.props.disableShot) sc.keyInput(event); });
    //
    //handle game objects
    //
    for (let e of sc.getAllEnemies()) {
      let calcSpd = e.spd * sc.props.enemySpdMultiplier;
      this.physics.moveToObject(e, this.plane, calcSpd);
    }



  }
}

  export default Level;
