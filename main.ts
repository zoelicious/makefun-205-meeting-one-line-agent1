import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LINE =
  "The fifteen-minute quick sync ended after two hours, at which point we scheduled another quick sync to discuss why the quick sync took two hours.";

function outputDir() {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  return "/output";
}

function main() {
  const dir = outputDir();
  const target = join(dir, "entry.txt");
  try {
    mkdirSync(dir, { recursive: true });
  } catch (err) {
    throw new Error(`cannot create output directory ${dir}: ${String(err)}`);
  }
  try {
    writeFileSync(target, LINE + "\n", { encoding: "utf8" });
  } catch (err) {
    throw new Error(`cannot write entry file ${target}: ${String(err)}`);
  }
}

main();
