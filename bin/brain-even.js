#!/usr/bin/env node
import * as brainEven from '../src/games/brain-calc.js';
import runGame from '../src/index.js';

runGame(brainEven.gameTask, brainEven.gameLoop);
