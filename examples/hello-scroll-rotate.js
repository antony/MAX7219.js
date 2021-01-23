'use strict'

const Max7219 = require('..')
const controllerCount = 4

const m = new Max7219({ device: '/dev/spidev0.0', controllerCount})

async function init () {
  await m.resetAll();
  await m.scroll('HELLO WORLD',{scrollIn: true, loop: false, speed: 100, glyphRotate: 270})
  await m.resetAll();
}

init()
