const Model = require("../core/model");

/**
 * TYPEDEFS
 *
 * @typedef {import('../core/api').BaseAliases} BaseAliases
 */

class DealTypes extends Model {
  /**@type {BaseAliases} */
  static base = "scheduledTasks";

  static table = "deal_types";
}

module.exports = DealTypes;
