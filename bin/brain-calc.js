#!/usr/bin/env node
import * as brainCalc from '../src/games/brain-calc.js';
import runGame from '../src/index.js';

runGame(brainCalc.gameTask, brainCalc.gameLoop);
