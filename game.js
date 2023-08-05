#!/usr/bin/env node
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const secret = Math.floor(Math.random() * 100);
const start = 0;
const end = 100;

const rl = readline.createInterface({ input, output });
let answer = await rl.question(
	`Загадано число в диапазоне от ${start} до ${end}\nВведите число:`
);

while (+answer !== +secret) {
	console.log(secret);
	if (+secret > +answer) {
		answer = await rl.question(`Больше\n---\nВведите новое число: `);
	} else if (+secret < +answer) {
		answer = await rl.question(`Меньше\n---\nВведите новое число: `);
	}
}
console.log("Вы угадали!");
rl.close()
