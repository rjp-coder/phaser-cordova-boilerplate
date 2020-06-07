import main from './index.js'

class Gui {

static initGui(){
  return {
  scoreText:null,
    drawText:null,
    enemyFont:{ fontSize: '20px', fill: '#fff', align: 'center' },
    miniEnemyFont:{ fontSize: '14px', fill: '#fff', align: 'center' },
    infoFont:{ fontSize: '16px', fill: '#fff' },
    timeText:null,
    livesText:null,
    debugText:null,
    SHOWFPS:false,
    objectiveText:"Display some kind of objective here!",
    guiBox:null,
    topBound:50,
    bg:null,
}
}
  static createGui(levelObj){
    let sc = main.getScene("Level");
    let cw = sc.sys.canvas.width;
    let ch = sc.sys.canvas.height;
    levelObj.gui.bg = sc.add.tileSprite(0, 0, cw, ch, 'sheet', 'background.png').setOrigin(0);
    levelObj.gui.objectiveText = sc.add.text(cw / 2, ch / 2,"Press any letter or number to shoot")
    levelObj.gui.objectiveText.setOrigin(0.5, 0.5).setDepth(1).setWordWrapWidth(cw - 1);
    sc.tweens.add({
      targets: levelObj.objectiveText,
      delay: 3000,
      alpha: 0,
      duration: 3000,
      ease: 'Power2'
    });
    levelObj.gui.drawText = sc.add.text(sc.plane.x, sc.plane.y, sc.props.cmd, { fontSize: '24px', fill: '#000', align: 'center' });
    levelObj.gui.drawText.setOrigin(0.5, 0)
    levelObj.gui.drawText.setDepth(1);
    levelObj.gui.timeText = sc.add.text(0, 0, '', levelObj.gui.infoFont).setDepth(1);
    levelObj.gui.scoreText = sc.add.text(cw / 2, 16, 'score: 0', levelObj.gui.enemyFont).setDepth(1);
    levelObj.gui.debugText = sc.add.text(0, ch - 16, 'FPS:0', levelObj.gui.infoFont).setDepth(1);
    levelObj.gui.scoreText.setStroke('#000000', 2).setAlign('center').originX = 0.5;
    levelObj.gui.livesText = sc.add.text(310, 0, "".padStart(Math.min(sc.props.lives, 20), "♥"), levelObj.gui.infoFont).setDepth(1)
    levelObj.gui.livesText.setAlign('right').originX = 1;
    levelObj.gui.comboText = sc.add.text(310, ch - 16, sc.combo + "", levelObj.gui.infoFont).setDepth(1)
    levelObj.gui.comboText.setAlign('right').originX = 1;
    levelObj.gui.guiBox = sc.add.rectangle(0, 0, cw, 50, 0x000000, 1).setDepth(1000);
    levelObj.gui.guiBox.setOrigin(0, 0);
    for (let item of [levelObj.gui.scoreText, levelObj.gui.timeText, levelObj.gui.livesText]) {
      item.setDepth(1001);
    }
  }

  static updateGui(levelObj){
    let sc = main.getScene();
    levelObj.gui.scoreText.setAlign('center');
    levelObj.gui.livesText.setAlign('right');
    levelObj.gui.comboText.setAlign('right').setText(sc.props.combo + "");
    if (levelObj.gui.SHOWFPS) { levelObj.gui.debugText.text = "FPS: " + Math.round(sc.loop.actualFps * 100) / 100 };
    levelObj.gui.drawText.x = sc.plane.x;
    levelObj.gui.drawText.y = sc.plane.y;
  }

}



export default Gui;