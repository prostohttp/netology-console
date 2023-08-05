#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const CURRENTS = {
	year: "year",
	month: "month",
	date: "date",
};

const argv = yargs(hideBin(process.argv))
	.option(CURRENTS.year, {
		alias: "y",
		describe: "Вывести текущий год",
		type: "boolean",
		coerce() {
			const year = new Date().getFullYear();
			console.log(`Текущий год: ${year}`);
		},
	})
	.option(CURRENTS.month, {
		alias: "m",
		describe: "Вывести текущий месяц",
		type: "boolean",
		coerce() {
			const month = new Date().getMonth() + 1;
			console.log(`Текущий месяц: ${month}`);
		},
	})
	.option(CURRENTS.date, {
		alias: "d",
		describe: "Вывести текущую дату",
		type: "boolean",
		coerce() {
			const date = new Date().getDate();
			console.log(`Текущая дата: ${date}`);
		},
	})
	.command("add", "Добавить к дате", (yargs) => {
		if (CURRENTS.year in yargs.argv) {
			const current = 1000 * 60 * 60 * 24 * 365 * yargs.argv._[1];
			console.log(
				`Текущая дата плюс ${yargs.argv._[1]} г. - ${new Date(
					current + Date.now()
				).toISOString()}`
			);
		}
		if (CURRENTS.month in yargs.argv) {
			const current = 1000 * 60 * 60 * 24 * 30 * yargs.argv._[1];
			console.log(
				`Текущая дата плюс ${yargs.argv._[1]} м. - ${new Date(
					current + Date.now()
				).toISOString()}`
			);
		}
		if (CURRENTS.date in yargs.argv) {
			const current = 1000 * 60 * 60 * 24 * yargs.argv._[1];
			console.log(
				`Текущая дата плюс ${yargs.argv._[1]} д. - ${new Date(
					current + Date.now()
				).toISOString()}`
			);
		}
	})
	.command("sub", "Вычесть из даты", (yargs) => {
		if (CURRENTS.year in yargs.argv) {
			const current = 1000 * 60 * 60 * 24 * 365 * yargs.argv._[1];
			console.log(
				`Текущая дата минус ${yargs.argv._[1]} г. - ${new Date(
					Date.now() - current
				).toISOString()}`
			);
		}
		if (CURRENTS.month in yargs.argv) {
			const current = 1000 * 60 * 60 * 24 * 30 * yargs.argv._[1];
			console.log(
				`Текущая дата минус ${yargs.argv._[1]} м. - ${new Date(
					Date.now() - current
				).toISOString()}`
			);
		}
		if (CURRENTS.date in yargs.argv) {
			const current = 1000 * 60 * 60 * 24 * yargs.argv._[1];
			console.log(
				`Текущая дата минус ${yargs.argv._[1]} д. - ${new Date(
					Date.now() - current
				).toISOString()}`
			);
		}
	}).argv;

if (
	!(CURRENTS.year in argv) &&
	!(CURRENTS.month in argv) &&
	!(CURRENTS.date in argv)
) {
	console.log(`Текущая дата в формате ISO: ${new Date().toISOString()}`);
}
