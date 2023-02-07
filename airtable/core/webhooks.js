const fetch = require("node-fetch");
const {
  AIRTABLE_PERSONAL_ACCESS_TOKEN,
  AIRTABLE_BASE_SCHEDULED_TASKS,
} = require("./config");

const BASE_URL = `https://api.airtable.com/v0/bases/${AIRTABLE_BASE_SCHEDULED_TASKS}/webhooks`;

class Webhooks {
  static async list() {
    const listData = await this.#request();
    return listData;
  }

  static async #request(webhooksPath = "", method = "GET") {
    const url = [BASE_URL, webhooksPath].filter(Boolean).join("/");
    const response = await fetch(url, {
      method,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${AIRTABLE_PERSONAL_ACCESS_TOKEN}`,
      },
    });
    const data = await response.json();
    return data;
  }
}

module.exports = Webhooks;
