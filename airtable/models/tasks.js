const Model = require("../core/model");

/**
 * TYPEDEFS
 *
 * @typedef {import('../core/api').BaseAliases} BaseAliases
 */

class Sites extends Model {
  /**@type {BaseAliases} */
  static base = "scheduledTasks";

  static table = "tasks";

  static async all() {
    return this.getAll({ view: "active_tasks" });
  }
}

module.exports = Sites;
