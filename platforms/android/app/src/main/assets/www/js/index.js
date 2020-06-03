import Level from "./Level.js";
import Pause from "./Pause.js";


let game = null;

document.addEventListener('deviceready', function () {
    var config = {
        type: Phaser.AUTO,
        autoResize: true,
        parent: "game",
        width: 320, //resolution for smallest phone -iphone4s
        height: 480,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: true
            }
        },
        scene: [Level, Pause],
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.DOM.CENTER_BOTH
        },
        dom: {
            //required if inserting dom elements into the game
            createContainer: true,
            parent: "game"
        }

    };

    game = new Phaser.Game(config);
});

export const main = (function () {
    document.addEventListener("backbutton", onBackKeyDown, false);

    function onBackKeyDown() {
        //the existence of this function stops android's standard back button terminate app flow.
        let sceneName = main.getScene().scene.key;
        if (sceneName == "Pause") {
            if (navigator.app) {
                navigator.app.exitApp();
            } else if (navigator.device) {
                navigator.device.exitApp();
            } else {
                window.close();
            }
        } else if (sceneName == "Level") {
            main.getScene().scene.launch('Pause', [sceneName]);
            main.getScene().scene.pause();
        }
    }

    function getScene(str) {
        if (str) return game.scene.getScene(str);
        //gets active scenes and returns the first result.
        return game.scene.scenes.filter((x) => game.scene.isActive(x))[0];
    }


    if (!window.cordova) {
        window.dispatchEvent('deviceready');
    }

    if (window){window.getScene=getScene}

    return { getScene, onBackKeyDown }

})();

export default main;