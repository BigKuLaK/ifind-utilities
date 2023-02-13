const Model = require("../core/model");

/**
 * TYPEDEFS
 *
 * @typedef {import('../core/api').BaseAliases} BaseAliases
 */

class DealCategories extends Model {
  /**@type {BaseAliases} */
  static base = "scheduledTasks";

  static table = "deal_categories";

  static async allData() {
    const dealTypes = await this.all().then((records) =>
      records.map(({ fields }) => ({
        ...fields,
        label: this.constructLabels(fields),
      }))
    );

    return dealTypes;
  }

  static constructLabels(dealCategoryFields) {
    const labels = [];

    Object.keys(dealCategoryFields).forEach((field) => {
      if (/label_/.test(field)) {
        const language = field.split("_").pop();
        const label = dealCategoryFields[field];
        labels.push({ language, label });
      }
    });

    return labels;
  }
}

module.exports = DealCategories;
