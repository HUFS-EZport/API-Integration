import {cpSync, rmSync, writeFileSync} from "fs";


cpSync("./dist/src", "./lib/mjs", { force: true, recursive: true });
cpSync("./dist/dist", "./lib/cjs",{ force: true, recursive: true });

writeFileSync("./lib/mjs/package.json", `{"type": "module"}`);
writeFileSync("./lib/cjs/package.json", `{"type": "commonjs"}`);
