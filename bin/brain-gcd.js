#!/usr/bin/env node
import * as brainGcd from '../src/games/brain-gcd.js';
import runGame from '../src/index.js';

runGame(brainGcd.gameTask, brainGcd.gameLoop);
