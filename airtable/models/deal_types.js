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

  static async allData() {
    const dealTypes = await this.all({
      view: "active_deal_types",
    }).then((records) =>
      records.map(({ fields }) => ({
        ...fields,
        ...this.constructLabels(fields),
      }))
    );
    return dealTypes;
  }

  static constructLabels(dealTypeFields) {
    const labels = {
      /**@type {Record<string, string>[]} */
      nav_label: [],
      /**@type {Record<string, string>[]} */
      label: [],
    };

    Object.keys(dealTypeFields).forEach((field) => {
      switch (true) {
        case /^nav_label_/.test(field):
          labels.nav_label.push({
            language: /**@type {string} */ (field.split("_").pop()),
            label: dealTypeFields[field],
          });
          break;
        case /^section_label_/.test(field):
          labels.label.push({
            language: /**@type {string} */ (field.split("_").pop()),
            label: dealTypeFields[field],
          });
          break;
        default:
      }
    });

    return labels;
  }
}

module.exports = DealTypes;
