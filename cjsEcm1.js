// const simp = require("./cjmEcm2")
/*
import { simple, complex as comp} from "./cjsEcm2.mjs"
simple()
comp()
*/

// sometimes we dont want to use {} in import at that time it will get default expot item from
// import sim from "./cjsEcm2.mjs"; // it wil import simple bydefault
// sim()

// mport all
import * as two from "./cjsEcm2.mjs"
console.log(two.default())