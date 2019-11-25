#!/usr/bin/env node
var shell = require('shelljs');


shell.exec(__dirname + "/GithubAnalysis/shell/gitStatsAll.sh " + __dirname + "/GithubAnalysis/resources/valid/statsEverything.txt");

shell.cd(__dirname + "/GithubAnalysis/src");


if (shell.exec('./main.js ' + process.argv.slice(2).join(" ")).code !== 0) {
  shell.echo('Error: analysis failed');
  shell.exit(1);
}
shell.cd(__dirname);

shell.mv("./GithubAnalysis/resources/output/javaOut.json", "./viz_metro/input.json");
shell.cd(__dirname + "/viz_metro");
shell.exec('npm start');

