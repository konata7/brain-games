#!/usr/bin/env node
import * as brainPrime from '../src/games/brain-prime.js';
import runGame from '../src/index.js';

runGame(brainPrime.gameTask, brainPrime.gameLoop);
