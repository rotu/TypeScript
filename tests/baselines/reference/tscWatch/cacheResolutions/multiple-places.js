Input::
//// [/src/project/tsconfig.json]
{"compilerOptions":{"composite":true,"cacheResolutions":true,"traceResolution":true},"files":["fileWithImports.ts","randomFileForImport.ts","a/fileWithImports.ts","b/ba/fileWithImports.ts","b/randomFileForImport.ts","c/ca/fileWithImports.ts","c/ca/caa/randomFileForImport.ts","c/ca/caa/caaa/fileWithImports.ts","c/cb/fileWithImports.ts","d/da/daa/daaa/x/y/z/randomFileForImport.ts","d/da/daa/daaa/fileWithImports.ts","d/da/daa/fileWithImports.ts","d/da/fileWithImports.ts","e/ea/fileWithImports.ts","e/ea/eaa/fileWithImports.ts","e/ea/eaa/eaaa/fileWithImports.ts","e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]}

//// [/src/project/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/randomFileForImport.ts]
export const x = 10;

//// [/src/project/a/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/b/ba/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/b/randomFileForImport.ts]
export const x = 10;

//// [/src/project/c/ca/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/c/ca/caa/randomFileForImport.ts]
export const x = 10;

//// [/src/project/c/ca/caa/caaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/c/cb/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts]
export const x = 10;

//// [/src/project/d/da/daa/daaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/d/da/daa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/d/da/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/eaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/eaa/eaaa/fileWithImports.ts]
import type { ImportInterface0 } from "pkg0";


//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts]
export const x = 10;

//// [/src/project/node_modules/pkg0/index.d.ts]
export interface ImportInterface0 {}

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }


/a/lib/tsc.js -w --explainFiles
Output::
>> Screen clear
[[90m12:01:39 AM[0m] Starting compilation in watch mode...

======== Resolving module 'pkg0' from '/src/project/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
File '/src/project/node_modules/pkg0/package.json' does not exist.
File '/src/project/node_modules/pkg0.ts' does not exist.
File '/src/project/node_modules/pkg0.tsx' does not exist.
File '/src/project/node_modules/pkg0.d.ts' does not exist.
File '/src/project/node_modules/pkg0/index.ts' does not exist.
File '/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/a/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/a/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/b/ba/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/b/ba/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/b/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/c/ca/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/caa/caaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/ca/caa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/c/ca'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/c/cb/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/cb/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/c'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/d/da/daa/daaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg0' was found in cache from location '/src/project/d/da/daa'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/d/da/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Resolution for module 'pkg0' was found in cache from location '/src/project/d/da'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/e/ea/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/e/ea'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
======== Resolving module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/eaaa/node_modules' does not exist, skipping all lookups in it.
Resolution for module 'pkg0' was found in cache from location '/src/project/e/ea/eaa'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'fileWithImports.ts'
  Imported via "pkg0" from file 'a/fileWithImports.ts'
  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
fileWithImports.ts
  Part of 'files' list in tsconfig.json
randomFileForImport.ts
  Part of 'files' list in tsconfig.json
a/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/ba/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/caaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/cb/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
[[90m12:02:50 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/project/fileWithImports.ts","/src/project/randomFileForImport.ts","/src/project/a/fileWithImports.ts","/src/project/b/ba/fileWithImports.ts","/src/project/b/randomFileForImport.ts","/src/project/c/ca/fileWithImports.ts","/src/project/c/ca/caa/randomFileForImport.ts","/src/project/c/ca/caa/caaa/fileWithImports.ts","/src/project/c/cb/fileWithImports.ts","/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts","/src/project/d/da/daa/daaa/fileWithImports.ts","/src/project/d/da/daa/fileWithImports.ts","/src/project/d/da/fileWithImports.ts","/src/project/e/ea/fileWithImports.ts","/src/project/e/ea/eaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]
Program options: {"composite":true,"cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/src/project/node_modules/pkg0/index.d.ts (used version)
/src/project/filewithimports.ts (computed .d.ts during emit)
/src/project/randomfileforimport.ts (computed .d.ts during emit)
/src/project/a/filewithimports.ts (computed .d.ts during emit)
/src/project/b/ba/filewithimports.ts (computed .d.ts during emit)
/src/project/b/randomfileforimport.ts (computed .d.ts during emit)
/src/project/c/ca/filewithimports.ts (computed .d.ts during emit)
/src/project/c/ca/caa/randomfileforimport.ts (computed .d.ts during emit)
/src/project/c/ca/caa/caaa/filewithimports.ts (computed .d.ts during emit)
/src/project/c/cb/filewithimports.ts (computed .d.ts during emit)
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts (computed .d.ts during emit)
/src/project/d/da/daa/daaa/filewithimports.ts (computed .d.ts during emit)
/src/project/d/da/daa/filewithimports.ts (computed .d.ts during emit)
/src/project/d/da/filewithimports.ts (computed .d.ts during emit)
/src/project/e/ea/filewithimports.ts (computed .d.ts during emit)
/src/project/e/ea/eaa/filewithimports.ts (computed .d.ts during emit)
/src/project/e/ea/eaa/eaaa/filewithimports.ts (computed .d.ts during emit)
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts (computed .d.ts during emit)

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/a/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/ba/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/caaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/cb/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/eaaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

PolledWatches::
/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/node_modules/pkg0/index.d.ts:
  {}
/src/project/randomfileforimport.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/project/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/fileWithImports.d.ts]
export {};


//// [/src/project/randomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/project/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/a/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/a/fileWithImports.d.ts]
export {};


//// [/src/project/b/ba/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/b/ba/fileWithImports.d.ts]
export {};


//// [/src/project/b/randomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/project/b/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/c/ca/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/c/ca/fileWithImports.d.ts]
export {};


//// [/src/project/c/ca/caa/randomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/project/c/ca/caa/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/c/ca/caa/caaa/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/c/ca/caa/caaa/fileWithImports.d.ts]
export {};


//// [/src/project/c/cb/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/c/cb/fileWithImports.d.ts]
export {};


//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/d/da/daa/daaa/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/d/da/daa/daaa/fileWithImports.d.ts]
export {};


//// [/src/project/d/da/daa/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/d/da/daa/fileWithImports.d.ts]
export {};


//// [/src/project/d/da/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/d/da/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/e/ea/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/eaa/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/e/ea/eaa/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/eaa/eaaa/fileWithImports.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


//// [/src/project/e/ea/eaa/eaaa/fileWithImports.d.ts]
export {};


//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;


//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts]
export declare const x = 10;


//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa","./e/ea/eaa/eaaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}",{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[10,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[3,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,3,2,4],"latestChangedDtsFile":"./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}}],"names":["pkg0"],"resolutionEntries":[[1,1]],"modules":[[20,[1]],[21,[1]],[22,[1]],[23,[1]],[24,[1]],[25,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa",
      "./e/ea/eaa/eaaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./a/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/ba/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/cb/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./filewithimports.ts",
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "latestChangedDtsFile": "./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3658
}


Change:: modify randomFileForImport by adding import

Input::
//// [/src/project/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0";
export const x = 10;


Output::
>> Screen clear
[[90m12:02:55 AM[0m] File change detected. Starting incremental compilation...

Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg0' from '/src/project/randomFileForImport.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
File '/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
File '/src/project/node_modules/pkg0.ts' does not exist.
File '/src/project/node_modules/pkg0.tsx' does not exist.
File '/src/project/node_modules/pkg0.d.ts' does not exist.
File '/src/project/node_modules/pkg0/index.ts' does not exist.
File '/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Reusing resolution of module 'pkg0' from '/src/project/a/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/ba/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/cb/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'fileWithImports.ts'
  Imported via "pkg0" from file 'randomFileForImport.ts'
  Imported via "pkg0" from file 'a/fileWithImports.ts'
  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
fileWithImports.ts
  Part of 'files' list in tsconfig.json
randomFileForImport.ts
  Part of 'files' list in tsconfig.json
a/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/ba/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/caaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/cb/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
[[90m12:03:02 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/project/fileWithImports.ts","/src/project/randomFileForImport.ts","/src/project/a/fileWithImports.ts","/src/project/b/ba/fileWithImports.ts","/src/project/b/randomFileForImport.ts","/src/project/c/ca/fileWithImports.ts","/src/project/c/ca/caa/randomFileForImport.ts","/src/project/c/ca/caa/caaa/fileWithImports.ts","/src/project/c/cb/fileWithImports.ts","/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts","/src/project/d/da/daa/daaa/fileWithImports.ts","/src/project/d/da/daa/fileWithImports.ts","/src/project/d/da/fileWithImports.ts","/src/project/e/ea/fileWithImports.ts","/src/project/e/ea/eaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]
Program options: {"composite":true,"cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Semantic diagnostics in builder refreshed for::
/src/project/randomFileForImport.ts

Shape signatures in builder refreshed for::
/src/project/randomfileforimport.ts (computed .d.ts)

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/a/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/ba/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/caaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/cb/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/eaaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

PolledWatches::
/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/node_modules/pkg0/index.d.ts:
  {}
/src/project/randomfileforimport.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/project/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa","./e/ea/eaa/eaaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}",{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[10,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[3,1],[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,3,2,4],"latestChangedDtsFile":"./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}}],"names":["pkg0"],"resolutionEntries":[[1,1]],"modules":[[20,[1]],[21,[1]],[22,[1]],[23,[1]],[24,[1]],[25,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa",
      "./e/ea/eaa/eaaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./a/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/ba/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/cb/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./filewithimports.ts",
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "latestChangedDtsFile": "./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3712
}


Change:: modify b/randomFileForImport by adding import

Input::
//// [/src/project/b/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0";
export const x = 10;


Output::
>> Screen clear
[[90m12:03:08 AM[0m] File change detected. Starting incremental compilation...

Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/a/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/ba/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg0' from '/src/project/b/randomFileForImport.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/b/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
File '/src/project/node_modules/pkg0.ts' does not exist.
File '/src/project/node_modules/pkg0.tsx' does not exist.
File '/src/project/node_modules/pkg0.d.ts' does not exist.
File '/src/project/node_modules/pkg0/index.ts' does not exist.
File '/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Reusing resolution of module 'pkg0' from '/src/project/c/ca/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/cb/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'fileWithImports.ts'
  Imported via "pkg0" from file 'randomFileForImport.ts'
  Imported via "pkg0" from file 'a/fileWithImports.ts'
  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
  Imported via "pkg0" from file 'b/randomFileForImport.ts'
  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
fileWithImports.ts
  Part of 'files' list in tsconfig.json
randomFileForImport.ts
  Part of 'files' list in tsconfig.json
a/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/ba/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/caaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/cb/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
[[90m12:03:15 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/project/fileWithImports.ts","/src/project/randomFileForImport.ts","/src/project/a/fileWithImports.ts","/src/project/b/ba/fileWithImports.ts","/src/project/b/randomFileForImport.ts","/src/project/c/ca/fileWithImports.ts","/src/project/c/ca/caa/randomFileForImport.ts","/src/project/c/ca/caa/caaa/fileWithImports.ts","/src/project/c/cb/fileWithImports.ts","/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts","/src/project/d/da/daa/daaa/fileWithImports.ts","/src/project/d/da/daa/fileWithImports.ts","/src/project/d/da/fileWithImports.ts","/src/project/e/ea/fileWithImports.ts","/src/project/e/ea/eaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]
Program options: {"composite":true,"cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Semantic diagnostics in builder refreshed for::
/src/project/b/randomFileForImport.ts

Shape signatures in builder refreshed for::
/src/project/b/randomfileforimport.ts (computed .d.ts)

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/a/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/ba/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/caaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/cb/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/eaaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

PolledWatches::
/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/node_modules/pkg0/index.d.ts:
  {}
/src/project/randomfileforimport.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/project/b/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa","./e/ea/eaa/eaaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}",{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[7,1],[10,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[3,1],[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,3,2,4],"latestChangedDtsFile":"./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}}],"names":["pkg0"],"resolutionEntries":[[1,1]],"modules":[[20,[1]],[21,[1]],[22,[1]],[23,[1]],[24,[1]],[25,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa",
      "./e/ea/eaa/eaaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./a/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/ba/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/cb/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./filewithimports.ts",
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "latestChangedDtsFile": "./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3766
}


Change:: modify c/ca/caa/randomFileForImport by adding import

Input::
//// [/src/project/c/ca/caa/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0";
export const x = 10;


Output::
>> Screen clear
[[90m12:03:21 AM[0m] File change detected. Starting incremental compilation...

Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/a/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/ba/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg0' from '/src/project/c/ca/caa/randomFileForImport.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/c/ca/caa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/ca/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/c/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
File '/src/project/node_modules/pkg0.ts' does not exist.
File '/src/project/node_modules/pkg0.tsx' does not exist.
File '/src/project/node_modules/pkg0.d.ts' does not exist.
File '/src/project/node_modules/pkg0/index.ts' does not exist.
File '/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/cb/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'fileWithImports.ts'
  Imported via "pkg0" from file 'randomFileForImport.ts'
  Imported via "pkg0" from file 'a/fileWithImports.ts'
  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
  Imported via "pkg0" from file 'b/randomFileForImport.ts'
  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/caa/randomFileForImport.ts'
  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
fileWithImports.ts
  Part of 'files' list in tsconfig.json
randomFileForImport.ts
  Part of 'files' list in tsconfig.json
a/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/ba/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/caaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/cb/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
[[90m12:03:28 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/project/fileWithImports.ts","/src/project/randomFileForImport.ts","/src/project/a/fileWithImports.ts","/src/project/b/ba/fileWithImports.ts","/src/project/b/randomFileForImport.ts","/src/project/c/ca/fileWithImports.ts","/src/project/c/ca/caa/randomFileForImport.ts","/src/project/c/ca/caa/caaa/fileWithImports.ts","/src/project/c/cb/fileWithImports.ts","/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts","/src/project/d/da/daa/daaa/fileWithImports.ts","/src/project/d/da/daa/fileWithImports.ts","/src/project/d/da/fileWithImports.ts","/src/project/e/ea/fileWithImports.ts","/src/project/e/ea/eaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]
Program options: {"composite":true,"cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Semantic diagnostics in builder refreshed for::
/src/project/c/ca/caa/randomFileForImport.ts

Shape signatures in builder refreshed for::
/src/project/c/ca/caa/randomfileforimport.ts (computed .d.ts)

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/a/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/ba/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/caaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/cb/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/eaaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

PolledWatches::
/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/node_modules/pkg0/index.d.ts:
  {}
/src/project/randomfileforimport.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/project/c/ca/caa/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa","./e/ea/eaa/eaaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}",{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[7,1],[10,1],[9,1],[8,1],[11,1],[13,1],[14,1],[15,1],[18,1],[17,1],[16,1],[3,1],[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,3,2,4],"latestChangedDtsFile":"./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}}],"names":["pkg0"],"resolutionEntries":[[1,1]],"modules":[[20,[1]],[21,[1]],[22,[1]],[23,[1]],[24,[1]],[25,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa",
      "./e/ea/eaa/eaaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./a/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/ba/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/cb/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./filewithimports.ts",
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "latestChangedDtsFile": "./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3820
}


Change:: modify d/da/daa/daaa/x/y/z/randomFileForImport by adding import

Input::
//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0";
export const x = 10;


Output::
>> Screen clear
[[90m12:03:35 AM[0m] File change detected. Starting incremental compilation...

Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/a/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/ba/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/cb/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg0' from '/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/d/da/daa/daaa/x/y/z/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/daaa/x/y/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/daaa/x/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/daaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/daa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/da/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/d/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
File '/src/project/node_modules/pkg0.ts' does not exist.
File '/src/project/node_modules/pkg0.tsx' does not exist.
File '/src/project/node_modules/pkg0.d.ts' does not exist.
File '/src/project/node_modules/pkg0/index.ts' does not exist.
File '/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'fileWithImports.ts'
  Imported via "pkg0" from file 'randomFileForImport.ts'
  Imported via "pkg0" from file 'a/fileWithImports.ts'
  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
  Imported via "pkg0" from file 'b/randomFileForImport.ts'
  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/caa/randomFileForImport.ts'
  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/x/y/z/randomFileForImport.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
fileWithImports.ts
  Part of 'files' list in tsconfig.json
randomFileForImport.ts
  Part of 'files' list in tsconfig.json
a/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/ba/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/caaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/cb/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
[[90m12:03:42 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/project/fileWithImports.ts","/src/project/randomFileForImport.ts","/src/project/a/fileWithImports.ts","/src/project/b/ba/fileWithImports.ts","/src/project/b/randomFileForImport.ts","/src/project/c/ca/fileWithImports.ts","/src/project/c/ca/caa/randomFileForImport.ts","/src/project/c/ca/caa/caaa/fileWithImports.ts","/src/project/c/cb/fileWithImports.ts","/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts","/src/project/d/da/daa/daaa/fileWithImports.ts","/src/project/d/da/daa/fileWithImports.ts","/src/project/d/da/fileWithImports.ts","/src/project/e/ea/fileWithImports.ts","/src/project/e/ea/eaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]
Program options: {"composite":true,"cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Semantic diagnostics in builder refreshed for::
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts

Shape signatures in builder refreshed for::
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts (computed .d.ts)

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/a/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/ba/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/caaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/cb/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/eaaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

PolledWatches::
/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/node_modules/pkg0/index.d.ts:
  {}
/src/project/randomfileforimport.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa/x/y/z","./e/ea/eaa/eaaa"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}",{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"-10726455937-export const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[7,1],[10,1],[9,1],[8,1],[11,1],[13,1],[12,1],[14,1],[15,1],[18,1],[17,1],[16,1],[3,1],[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,3,2,4],"latestChangedDtsFile":"./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}},{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}}],"names":["pkg0"],"resolutionEntries":[[1,1],[1,2]],"modules":[[20,[1]],[21,[1]],[22,[1]],[23,[1]],[24,[2]],[25,[1]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa/x/y/z",
      "./e/ea/eaa/eaaa"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./a/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/ba/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/cb/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "-10726455937-export const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "-10726455937-export const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./filewithimports.ts",
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "latestChangedDtsFile": "./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        },
        {
          "original": [
            1,
            2
          ],
          "resolutionEntryId": 2,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa/x/y/z",
          "resolutions": [
            {
              "resolutionEntryId": 2,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 3960
}


Change:: modify e/ea/eaa/eaaa/x/y/z/randomFileForImport by adding import

Input::
//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts]
import type { ImportInterface0 } from "pkg0";
export const x = 10;


Output::
>> Screen clear
[[90m12:03:48 AM[0m] File change detected. Starting incremental compilation...

Reusing resolution of module 'pkg0' from '/src/project/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/a/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/ba/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/b/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/ca/caa/caaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/c/cb/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/daaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/daa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/d/da/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
Reusing resolution of module 'pkg0' from '/src/project/e/ea/eaa/eaaa/fileWithImports.ts' of old program, it was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'.
======== Resolving module 'pkg0' from '/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts'. ========
Module resolution kind is not specified, using 'NodeJs'.
Loading module 'pkg0' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/src/project/e/ea/eaa/eaaa/x/y/z/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/ea/eaa/eaaa/x/y/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/ea/eaa/eaaa/x/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/ea/eaa/eaaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/ea/eaa/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/ea/node_modules' does not exist, skipping all lookups in it.
Directory '/src/project/e/node_modules' does not exist, skipping all lookups in it.
File '/src/project/node_modules/pkg0/package.json' does not exist according to earlier cached lookups.
File '/src/project/node_modules/pkg0.ts' does not exist.
File '/src/project/node_modules/pkg0.tsx' does not exist.
File '/src/project/node_modules/pkg0.d.ts' does not exist.
File '/src/project/node_modules/pkg0/index.ts' does not exist.
File '/src/project/node_modules/pkg0/index.tsx' does not exist.
File '/src/project/node_modules/pkg0/index.d.ts' exist - use it as a name resolution result.
Resolving real path for '/src/project/node_modules/pkg0/index.d.ts', result '/src/project/node_modules/pkg0/index.d.ts'.
======== Module name 'pkg0' was successfully resolved to '/src/project/node_modules/pkg0/index.d.ts'. ========
../../a/lib/lib.d.ts
  Default library for target 'es5'
node_modules/pkg0/index.d.ts
  Imported via "pkg0" from file 'fileWithImports.ts'
  Imported via "pkg0" from file 'randomFileForImport.ts'
  Imported via "pkg0" from file 'a/fileWithImports.ts'
  Imported via "pkg0" from file 'b/ba/fileWithImports.ts'
  Imported via "pkg0" from file 'b/randomFileForImport.ts'
  Imported via "pkg0" from file 'c/ca/fileWithImports.ts'
  Imported via "pkg0" from file 'c/ca/caa/randomFileForImport.ts'
  Imported via "pkg0" from file 'c/ca/caa/caaa/fileWithImports.ts'
  Imported via "pkg0" from file 'c/cb/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/x/y/z/randomFileForImport.ts'
  Imported via "pkg0" from file 'd/da/daa/daaa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/daa/fileWithImports.ts'
  Imported via "pkg0" from file 'd/da/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/fileWithImports.ts'
  Imported via "pkg0" from file 'e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts'
fileWithImports.ts
  Part of 'files' list in tsconfig.json
randomFileForImport.ts
  Part of 'files' list in tsconfig.json
a/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/ba/fileWithImports.ts
  Part of 'files' list in tsconfig.json
b/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
c/ca/caa/caaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
c/cb/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
d/da/daa/daaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/daa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
d/da/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/fileWithImports.ts
  Part of 'files' list in tsconfig.json
e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
  Part of 'files' list in tsconfig.json
[[90m12:03:55 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/src/project/fileWithImports.ts","/src/project/randomFileForImport.ts","/src/project/a/fileWithImports.ts","/src/project/b/ba/fileWithImports.ts","/src/project/b/randomFileForImport.ts","/src/project/c/ca/fileWithImports.ts","/src/project/c/ca/caa/randomFileForImport.ts","/src/project/c/ca/caa/caaa/fileWithImports.ts","/src/project/c/cb/fileWithImports.ts","/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts","/src/project/d/da/daa/daaa/fileWithImports.ts","/src/project/d/da/daa/fileWithImports.ts","/src/project/d/da/fileWithImports.ts","/src/project/e/ea/fileWithImports.ts","/src/project/e/ea/eaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/fileWithImports.ts","/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts"]
Program options: {"composite":true,"cacheResolutions":true,"traceResolution":true,"watch":true,"explainFiles":true,"configFilePath":"/src/project/tsconfig.json"}
Program structureReused: SafeModules
Program files::
/a/lib/lib.d.ts
/src/project/node_modules/pkg0/index.d.ts
/src/project/fileWithImports.ts
/src/project/randomFileForImport.ts
/src/project/a/fileWithImports.ts
/src/project/b/ba/fileWithImports.ts
/src/project/b/randomFileForImport.ts
/src/project/c/ca/fileWithImports.ts
/src/project/c/ca/caa/randomFileForImport.ts
/src/project/c/ca/caa/caaa/fileWithImports.ts
/src/project/c/cb/fileWithImports.ts
/src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
/src/project/d/da/daa/daaa/fileWithImports.ts
/src/project/d/da/daa/fileWithImports.ts
/src/project/d/da/fileWithImports.ts
/src/project/e/ea/fileWithImports.ts
/src/project/e/ea/eaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/fileWithImports.ts
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Semantic diagnostics in builder refreshed for::
/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts

Shape signatures in builder refreshed for::
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts (computed .d.ts)

File: /src/project/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/a/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/ba/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/b/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/ca/caa/caaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/c/cb/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/x/y/z/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/daaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/daa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/d/da/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/eaaa/fileWithImports.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

File: /src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.ts
resolvedModules:
pkg0: {
  "resolvedModule": {
    "resolvedFileName": "/src/project/node_modules/pkg0/index.d.ts",
    "extension": ".d.ts",
    "isExternalLibraryImport": true
  }
}

PolledWatches::
/src/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/src/project/tsconfig.json:
  {}
/src/project/filewithimports.ts:
  {}
/src/project/node_modules/pkg0/index.d.ts:
  {}
/src/project/randomfileforimport.ts:
  {}
/src/project/a/filewithimports.ts:
  {}
/src/project/b/ba/filewithimports.ts:
  {}
/src/project/b/randomfileforimport.ts:
  {}
/src/project/c/ca/filewithimports.ts:
  {}
/src/project/c/ca/caa/randomfileforimport.ts:
  {}
/src/project/c/ca/caa/caaa/filewithimports.ts:
  {}
/src/project/c/cb/filewithimports.ts:
  {}
/src/project/d/da/daa/daaa/x/y/z/randomfileforimport.ts:
  {}
/src/project/d/da/daa/daaa/filewithimports.ts:
  {}
/src/project/d/da/daa/filewithimports.ts:
  {}
/src/project/d/da/filewithimports.ts:
  {}
/src/project/e/ea/filewithimports.ts:
  {}
/src/project/e/ea/eaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/filewithimports.ts:
  {}
/src/project/e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts:
  {}
/a/lib/lib.d.ts:
  {}

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

//// [/src/project/e/ea/eaa/eaaa/x/y/z/randomFileForImport.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../a/lib/lib.d.ts","./node_modules/pkg0/index.d.ts","./filewithimports.ts","./randomfileforimport.ts","./a/filewithimports.ts","./b/ba/filewithimports.ts","./b/randomfileforimport.ts","./c/ca/filewithimports.ts","./c/ca/caa/randomfileforimport.ts","./c/ca/caa/caaa/filewithimports.ts","./c/cb/filewithimports.ts","./d/da/daa/daaa/x/y/z/randomfileforimport.ts","./d/da/daa/daaa/filewithimports.ts","./d/da/daa/filewithimports.ts","./d/da/filewithimports.ts","./e/ea/filewithimports.ts","./e/ea/eaa/filewithimports.ts","./e/ea/eaa/eaaa/filewithimports.ts","./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts","./a","./b/ba","./c/ca/caa/caaa","./c/cb","./d/da/daa/daaa/x/y/z","./e/ea/eaa/eaaa/x/y/z"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"769951468-export interface ImportInterface0 {}",{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"7372004325-import type { ImportInterface0 } from \"pkg0\";\n","signature":"-3531856636-export {};\n"},{"version":"10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;","signature":"-6821242887-export declare const x = 10;\n"}],"options":{"cacheResolutions":true,"composite":true},"fileIdsList":[[2]],"referencedMap":[[5,1],[6,1],[7,1],[10,1],[9,1],[8,1],[11,1],[13,1],[12,1],[14,1],[15,1],[18,1],[19,1],[17,1],[16,1],[3,1],[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,5,6,7,10,9,8,11,13,12,14,15,18,19,17,16,3,2,4],"latestChangedDtsFile":"./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts","cacheResolutions":{"resolutions":[{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}},{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}},{"resolvedModule":{"resolvedFileName":2,"isExternalLibraryImport":true}}],"names":["pkg0"],"resolutionEntries":[[1,1],[1,2],[1,3]],"modules":[[20,[1]],[21,[1]],[22,[1]],[23,[1]],[24,[2]],[25,[3]]]}},"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../a/lib/lib.d.ts",
      "./node_modules/pkg0/index.d.ts",
      "./filewithimports.ts",
      "./randomfileforimport.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./a",
      "./b/ba",
      "./c/ca/caa/caaa",
      "./c/cb",
      "./d/da/daa/daaa/x/y/z",
      "./e/ea/eaa/eaaa/x/y/z"
    ],
    "fileNamesList": [
      [
        "./node_modules/pkg0/index.d.ts"
      ]
    ],
    "fileInfos": {
      "../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./node_modules/pkg0/index.d.ts": {
        "version": "769951468-export interface ImportInterface0 {}",
        "signature": "769951468-export interface ImportInterface0 {}"
      },
      "./filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./a/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/ba/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./b/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/ca/caa/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./c/ca/caa/caaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./c/cb/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      },
      "./d/da/daa/daaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/daa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./d/da/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/filewithimports.ts": {
        "original": {
          "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "7372004325-import type { ImportInterface0 } from \"pkg0\";\n",
        "signature": "-3531856636-export {};\n"
      },
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": {
        "original": {
          "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
          "signature": "-6821242887-export declare const x = 10;\n"
        },
        "version": "10580737119-import type { ImportInterface0 } from \"pkg0\";\nexport const x = 10;",
        "signature": "-6821242887-export declare const x = 10;\n"
      }
    },
    "options": {
      "cacheResolutions": true,
      "composite": true
    },
    "referencedMap": {
      "./a/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/ba/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./b/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/caaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/caa/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/ca/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./c/cb/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/daa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./d/da/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/eaa/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./e/ea/filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./filewithimports.ts": [
        "./node_modules/pkg0/index.d.ts"
      ],
      "./randomfileforimport.ts": [
        "./node_modules/pkg0/index.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../a/lib/lib.d.ts",
      "./a/filewithimports.ts",
      "./b/ba/filewithimports.ts",
      "./b/randomfileforimport.ts",
      "./c/ca/caa/caaa/filewithimports.ts",
      "./c/ca/caa/randomfileforimport.ts",
      "./c/ca/filewithimports.ts",
      "./c/cb/filewithimports.ts",
      "./d/da/daa/daaa/filewithimports.ts",
      "./d/da/daa/daaa/x/y/z/randomfileforimport.ts",
      "./d/da/daa/filewithimports.ts",
      "./d/da/filewithimports.ts",
      "./e/ea/eaa/eaaa/filewithimports.ts",
      "./e/ea/eaa/eaaa/x/y/z/randomfileforimport.ts",
      "./e/ea/eaa/filewithimports.ts",
      "./e/ea/filewithimports.ts",
      "./filewithimports.ts",
      "./node_modules/pkg0/index.d.ts",
      "./randomfileforimport.ts"
    ],
    "latestChangedDtsFile": "./e/ea/eaa/eaaa/x/y/z/randomFileForImport.d.ts",
    "cacheResolutions": {
      "resolutions": [
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 1,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 2,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        },
        {
          "original": {
            "resolvedModule": {
              "resolvedFileName": 2,
              "isExternalLibraryImport": true
            }
          },
          "resolutionId": 3,
          "resolvedModule": {
            "resolvedFileName": "./node_modules/pkg0/index.d.ts",
            "isExternalLibraryImport": true
          }
        }
      ],
      "names": [
        "pkg0"
      ],
      "resolutionEntries": [
        {
          "original": [
            1,
            1
          ],
          "resolutionEntryId": 1,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 1,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        },
        {
          "original": [
            1,
            2
          ],
          "resolutionEntryId": 2,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 2,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        },
        {
          "original": [
            1,
            3
          ],
          "resolutionEntryId": 3,
          "name": "pkg0",
          "resolution": {
            "resolutionId": 3,
            "resolvedModule": {
              "resolvedFileName": "./node_modules/pkg0/index.d.ts",
              "isExternalLibraryImport": true
            }
          }
        }
      ],
      "modules": [
        {
          "dir": "./a",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./b/ba",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/ca/caa/caaa",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./c/cb",
          "resolutions": [
            {
              "resolutionEntryId": 1,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 1,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./d/da/daa/daaa/x/y/z",
          "resolutions": [
            {
              "resolutionEntryId": 2,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 2,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        },
        {
          "dir": "./e/ea/eaa/eaaa/x/y/z",
          "resolutions": [
            {
              "resolutionEntryId": 3,
              "name": "pkg0",
              "resolution": {
                "resolutionId": 3,
                "resolvedModule": {
                  "resolvedFileName": "./node_modules/pkg0/index.d.ts",
                  "isExternalLibraryImport": true
                }
              }
            }
          ]
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 4100
}

