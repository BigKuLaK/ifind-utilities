const Model = require("../core/model");

/**
 * TYPEDEFS
 *
 * @typedef {import('../core/api').BaseAliases} BaseAliases
 */

class Sites extends Model {
  /**@type {BaseAliases} */
  static base = "scheduledTasks";

  static table = "task_frequencies";
}

module.exports = Sites;
