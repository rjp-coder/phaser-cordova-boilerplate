import main from "./index.js";
class Pause extends Phaser.Scene {
    constructor() {
        super("Pause");
        this.elem = null;
        this.fromScene = null
    }

    preload() {
        this.load.html('pause', 'assets/pause.html');
    }

    init(data) {
        this.fromScene = data[0];
    }

    create() {
        //resize();
        this.elem = this.add.dom(0, 0).createFromCache('pause');
        let form = this.elem;
        form.setOrigin(0, 0);
        form.addListener('click');
        form.on('click', function (event) {
            if (event.target.id === 'resumeGame') {
                let sc = main.getScene();
                sc.scene.resume(sc.fromScene);
                sc.scene.stop('Pause');
            }
        });
        //resize();
    }
}

export default Pause