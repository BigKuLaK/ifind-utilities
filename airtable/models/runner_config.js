const Model = require("../core/model");

/**
 * TYPEDEFS
 *
 * @typedef {import('../core/api').BaseAliases} BaseAliases
 */

class RunnerConfig extends Model {
  /**@type {BaseAliases} */
  static base = "scheduledTasks";

  static table = "runner_config";

  static async asMap() {
    const configEntries = await this.all();
    const mapData = {};

    configEntries.forEach(({ fields }) => {
      mapData[fields.config_key] = fields[`value_${fields.value_type}`];
    });

    return mapData;
  }
}

module.exports = RunnerConfig;
