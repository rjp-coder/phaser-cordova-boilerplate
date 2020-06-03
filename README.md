# phaser-3-cordova

A simple boilerplate for getting started with Phaser3.js and Cordova.

It is intended to show some Phaser functionality and how it can be built as an apk. 

Tutorial website:
https://gamedevacademy.org/?p=6497

Getting started:
To run the app go to the project directory and open the terminal.
Type cordova run browser to open it on browser. 
If you have a mobile emulator, you can also try cordova run android. 

Creating a signed apk:

To generate keys 
keytool -genkey -v -keystore <keystoreName>.keystore -alias <Keystore AliasName> -keyalg <Key algorithm> -keysize <Key size> -validity <Key Validity in Days>
E.g.
keytool -genkey -v -keystore NAME-mobileapps.keystore -alias NAMEmobileapps -keyalg RSA -keysize 2048 -validity 10000

Cordova build cmd:

cordova build android --info --release -- --keystore=C:\Dev\PhaserCordova\platforms\android\release.keystore 
--storePassword=enteryourpasswordhere --alias=aliasname --password=enteryourpasswordhere
