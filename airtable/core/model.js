const { getBase } = require("./api");

/**
 * TYPDEFS
 *
 * @typedef {Record<string, any>} CreateEntryData
 */

/**
 * @typedef {import('./api').BaseAliases} BaseAliases
 */

class Model {
  /**@type {BaseAliases | null} */
  static base = null;

  /**@type {string | null} */
  static table = null;

  /**
   *
   * @param {CreateEntryData[]} data
   * @returns
   */
  static create(data) {
    if (this.base && this.table) {
      return (
        this.getTable()?.create(data.map((fields) => ({ fields }))) || null
      );
    }

    return null;
  }

  static getBase() {
    return getBase(this.base);
  }

  static getTable() {
    const base = this.getBase();

    if (this.table) {
      return base(this.table);
    }

    return null;
  }
}

module.exports = Model;
