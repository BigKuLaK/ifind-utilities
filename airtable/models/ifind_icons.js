const Model = require("../core/model");

/**
 * TYPEDEFS
 *
 * @typedef {import('../core/api').BaseAliases} BaseAliases
 */

class IfindIcons extends Model {
  /**@type {BaseAliases} */
  static base = "scheduledTasks";

  static table = "ifind_icons";

  /**
   * Replaces the current record with the given icons names list
   * If an icon name is already present in the table, retain it
   * If an icon name is not yet present in the table, add it
   * If an icon name from the table is not in the list, delete it
   * @param {{ id: string }[]} iconsList
   */
  static async matchList(iconsList) {
    const iconsRecords = await this.all();

    const iconsToDelete = iconsRecords
      .filter(({ fields }) => !iconsList.find(({ id }) => id === fields.id))
      .map(({ id }) => id);

    const iconsToAdd = iconsList.filter(
      ({ id }) => !iconsRecords.find(({ fields }) => id === fields.id)
    );

    try {
      // Delete icons that are not in the list
      const deletedIcons = await IfindIcons.delete(iconsToDelete);

      await new Promise((res) => setTimeout(res, 500));

      // Add new icons
      const addedIcons = await IfindIcons.create(iconsToAdd);

      return {
        deleted: deletedIcons.map(({ fields }) => fields.id),
        added: addedIcons.map(({ fields }) => fields.id),
      };
    } catch (err) {
      console.error(err);

      return {
        deleted: [],
        added: [],
      };
    }
  }
}

module.exports = IfindIcons;
