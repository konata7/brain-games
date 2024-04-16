#!/usr/bin/env node
import * as brainEven from '../src/games/brain-even.js';
import runGame from '../src/index.js';

runGame(brainEven.gameTask, brainEven.gameLoop);
