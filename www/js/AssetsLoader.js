class AssetsLoader {
  static load(sc) {
    sc.load.atlas('sheet', 'img/sheet.png', 'img/sheet.json');
    sc.load.image('bkg10', 'img/bkg10.jpg');
    sc.load.image('bkg12', 'img/bkg12.jpg');
    sc.load.image('bullet', 'img/bullet.png');
    sc.load.image('ufo', 'img/ufo2.png');
  }

}
export default AssetsLoader