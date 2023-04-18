/**
 * Swaps dot and comma. Normally usefull for converting Euro to Dollar notation
 *
 * @param {string} currency
 * @returns {string}
 */
const swapDotAndComma = (currency) => {
  const [noSymbol] = currency.trim().match(/[0-9]+[0-9,. ]*/) || [];

  if (noSymbol) {
    return noSymbol.replace(/[,. ]/g, (match) => {
      switch (match) {
        case ".":
        case " ":
          return ",";
        case ",":
          return ".";
        default:
          return match;
      }
    });
  }

  return "";
};

module.exports = {
  swapDotAndComma,
};
