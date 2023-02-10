const { getBase } = require("./api");

/**
 * TYPDEFS
 *
 * @typedef {import('airtable').Records<any>} Records
 * @typedef {import('./api').BaseAliases} BaseAliases
 * @typedef {Record<string, any>} CreateEntryData
 * @typedef {{ id: string, fields: Record<string, any> }} UpdateEntryData
 */

class Model {
  /**@type {BaseAliases | null} */
  static base = null;

  /**@type {string | null} */
  static table = null;

  /**
   * @param {CreateEntryData[]} data
   */
  static async create(data) {
    return new Promise(async (resolve, reject) => {
      if (this.base && this.table) {
        const createdRecords = [];

        // Make a chunked requests of 10 items (max per create request)
        const chunkedData = [];

        data.forEach((itemData, index) => {
          const chunkIndex = Math.floor(index / 10);

          if (!chunkedData[chunkIndex]) {
            chunkedData[chunkIndex] = [];
          }

          chunkedData[chunkIndex].push(itemData);
        });

        for (let itemsData of chunkedData) {
          // Add interval between each request to avoid hitting the rate limit
          await new Promise((res) => setTimeout(res, 500));

          await this.getTable()?.create(
            itemsData.map((fields) => ({ fields })),
            (err, records) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                createdRecords.push(...records);
              }
            }
          );
        }

        resolve(createdRecords);
      } else {
        resolve([]);
      }
    });
  }

  /**
   * @param {UpdateEntryData[]} data
   */
  static async update(data) {
    return new Promise((resolve, reject) => {
      if (this.base && this.table) {
        this.getTable()?.update(data, (err, records) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(records);
          }
        });
      } else {
        resolve([]);
      }
    });
  }

  /**
   * @returns {Promise<Records>}*/
  static async all(options = {}, pageFunction = (records) => {}) {
    return this.getAll(options, pageFunction);
  }

  /**
   * @returns {Promise<Records>}*/
  static async getAll(options = {}, pageFunction = (records) => {}) {
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

  static async delete(recordIds) {
    return new Promise(async (resolve, reject) => {
      const deletedRecords = [];

      if (this.base && this.table && recordIds.length) {
        // Make a chunked requests of 10 items (max per create request)
        const chunkedData = [];

        recordIds.forEach((itemData, index) => {
          const chunkIndex = Math.floor(index / 10);

          if (!chunkedData[chunkIndex]) {
            chunkedData[chunkIndex] = [];
          }

          chunkedData[chunkIndex].push(itemData);
        });

        for (let itemsData of chunkedData) {
          // Add interval between each request to avoid hitting the rate limit
          await new Promise((res) => setTimeout(res, 500));

          await this.getTable()
            ?.destroy(itemsData)
            .then((err, records) => {
              if (err) {
                console.error(err);
                reject(err);
              } else {
                deletedRecords.push(...records);
              }
            })
            .catch((err) => reject(err));
        }
      }

      resolve(deletedRecords);
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
