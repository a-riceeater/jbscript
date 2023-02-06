const variableHandler = require(require('path').resolve(__dirname, './modules/variableHandler.js'))

const varTypes = ["String", "Bool", "Integer"]
function checkIfStringStartsWith(str, substrs) {
  return substrs.some(substr => str.startsWith(substr));
}

async function c_log(log) {
  if (checkIfStringStartsWith(log.toString(), varTypes)) {
    log = await processVariable(log.split(" ")[1], log.split(" ")[0])
    console.log(log)
    return
  }
  console.log(log);
}

function c_warn(log) {
  console.warn(log)
}

function c_error(log) {
  console.error(log)
}

function c_throwError(err) {
  throw new Error(err);
}

function c_throwTypeError(err) {
  throw new TypeError(err)
}

function processVariable(varName, varType) {
  if (varType == "String") return variableHandler.strVar(varName)
  else if (varType == "Bool") return variableHandler.bVar(varName)
  else if (varType == "Integer") return variableHandler.intVar(varName)
}
