#!/usr/bin/env node
import * as brainProgression from '../src/games/brain-progression.js';
import runGame from '../src/index.js';

runGame(brainProgression.gameTask, brainProgression.gameLoop);
