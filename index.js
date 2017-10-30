// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = Object.assign({}, driver);
    return Object.assign(newDriver, {[key]: value});
}

function destructivelyUpdatedriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]: value});
}
