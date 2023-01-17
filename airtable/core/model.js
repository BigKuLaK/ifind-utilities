const { getBase } = require("./api");

/**
 * TYPDEFS
 *
 * @typedef {import('airtable').Records<any>} Records
 * @typedef {import('./api').BaseAliases} BaseAliases
 * @typedef {Record<string, any>} CreateEntryData
 */

class Model {
  /**@type {BaseAliases | null} */
  static base = null;

  /**@type {string | null} */
  static table = null;

  /**
   *
   * @param {CreateEntryData[]} data
   */
  static async create(data) {
    return new Promise((resolve, reject) => {
      if (this.base && this.table) {
        this.getTable()?.create(
          data.map((fields) => ({ fields })),
          (err, records) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(records);
            }
          }
        );
      } else {
        resolve([]);
      }
    });
  }

  /**
   * @returns {Promise<Records>}*/
  static async all(options = {}, pageFunction = (records) => {}) {
    return new Promise((resolve, reject) => {
      const records = [];

      if (this.base && this.table) {
        this.getTable()
          ?.select(options)
          .eachPage(
            (pageRecords, fetchNexPage) => {
              pageFunction(pageRecords);
              records.push(...pageRecords);
              fetchNexPage();
            },
            (err) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                resolve(records);
              }
            }
          );
      } else {
        resolve(records);
      }
    });
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
