/// <reference path="../typing/phaser.d.ts"/>
import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';

///Makes a new Phaser game instance and adds a scene
new Phaser.Game(Object.assign(config, {
  scene: [GameScene],
}));
