const Airtable = require("airtable");
const { AIRTABLE_API_KEY, AIRTABLE_BASE_SCHEDULED_TASKS } = require("./config");

/**
 * TYPEDEFS
 *
 * @typedef {keyof typeof BASES | null} BaseAliases
 */

const airTable = new Airtable({ apiKey: AIRTABLE_API_KEY });

const BASES = {
  scheduledTasks: AIRTABLE_BASE_SCHEDULED_TASKS,
  test: "test",
};

module.exports = {
  BASES: BASES,

  /**@param {BaseAliases} baseAlias */
  getBase: (baseAlias) => {
    if (baseAlias && baseAlias in BASES) {
      return airTable.base(BASES[baseAlias]);
    }

    throw new Error(`Provided base alias does not exist: ${baseAlias}`);
  },
};
