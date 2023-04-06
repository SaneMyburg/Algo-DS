module.exports = function (str, str2) {
  let checkStr = /[^A-Za-z0-9]/g;
  let firstChar = str.replace(checkStr, '').toLowerCase();
  let secondChar = str2.replace(checkStr, '').toLowerCase();

  firstChar = firstChar.split('').sort().join('');
  secondChar = secondChar.split('').sort().join('');

  let result;

  if (firstChar === secondChar) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
