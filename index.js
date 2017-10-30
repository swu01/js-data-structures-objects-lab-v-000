// Write your solution in this file!
const driver = {}

function updatedriverWithKeyAndValue(driver, key, value) {
  const newDriver = Object.assign({}, driver);
  return Object.assign(newDriver, {[key]: value});
}
