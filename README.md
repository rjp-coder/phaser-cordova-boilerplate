# phaser-3-cordova

A simple boilerplate for getting started with Phaser3.js and Cordova.

It is intended to show some Phaser functionality, how it can be built as an apk, and be developed with modular javaScript. 

 - Tutorial website for Phaser 3 development:
https://gamedevacademy.org/?p=6497
 - Phaser 3 samples:
https://phaser.io/examples
 - Cordova Documentation:
https://cordova.apache.org/

## Getting started:
First clone the directory or install as zip file. 
Note that if you git clone with windows there might be a file name length limitation which prevents the node modules from being downloaded. You can work around this by changing your git config on an administrator cmd prompt `git config --system core.longpaths true`

To run the app go to the project directory and open the terminal.
If you did not download the node modules folder, you can do `npm install`. 
Type `cordova run browser` to open the app on a browser. 
If you have a mobile emulator (can be configured with Android SDK but need hyper-V enabled on machine), you can also try `cordova run android`. 
If you have no emulator you can type cordova build android, copy the app-debug output file to your phone, and see it on your phone. You can also debug the app by connecting your phone to your computer with "enable usb-debugging" developer mode settings enabled and then using chrome browser on your computer, chrome://inspect.
To add/remove a platform to Cordova you can type `cordova platform add/remove <browser|android|ios>`

## Notes for further improvement:

This only uses the most basic functionality of webpack to bundle js files into one. There is not yet separation of source files and distribution files, the main.js is under the same directory as the other js files. The app is configured for development and there is no separate webpack production config. Minification could improve performance. 

The actual "game" here is a bare minimum demo. You can shoot a random target upon press of a letter or number key. The mobile version of the game has no input method, so it will need one to be added. Adding a "fire" button to the game would do the trick, or else enabling the keyboard on mobile. 

## Creating a signed apk:

To generate keys 
`keytool -genkey -v -keystore <keystoreName>.keystore -alias <Keystore AliasName> -keyalg <Key algorithm> -keysize <Key size> -validity <Key Validity in Days>`
E.g.
`keytool -genkey -v -keystore NAME-mobileapps.keystore -alias NAMEmobileapps -keyalg RSA -keysize 2048 -validity 10000`

### Cordova build--release cmd:

`cordova build android --info --release -- --keystore=C:\Dev\PhaserCordova\platforms\android\release.keystore 
--storePassword=enteryourpasswordhere --alias=aliasname --password=enteryourpasswordhere`
