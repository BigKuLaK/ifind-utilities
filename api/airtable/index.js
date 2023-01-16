const { AIRTABLE_API_KEY, AIRTABLE_BASE_SCHEDULED_TASKS } = require("./config");

var Airtable = require("airtable");
var base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(
  AIRTABLE_BASE_SCHEDULED_TASKS
);

base("sites")
  .select({
    // Selecting the first 3 records in Grid view:
    // maxRecords: 3,
    // view: "Grid view"
  })
  .firstPage(function page(err, records) {
    records?.forEach((record) => {
      console.log("Retrieved", record);
    });
  });
