const Model = require("../core/model");

/**
 * TYPEDEFS
 *
 * @typedef {import('../core/api').BaseAliases} BaseAliases
 */

class Site extends Model {
  /**@type {BaseAliases} */
  static base = "scheduledTasks";

  static table = "sites";
}

module.exports = Site;
