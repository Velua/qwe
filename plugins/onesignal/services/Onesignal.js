"use strict";

const axios = require("axios");

/**
 * Onesignal.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
  pushNotification: async (message, playerids) => {
    // Add your own logic here.
    console.log("RAN")
    console.log(message, playerids);
    const appId = "11940624-80ad-45c0-8995-0e7847ee4ecc";
    const authKey = "YjljM2YzODMtMjcyOC00MWVmLTkzMTktMDQ1ZDJkODhlZWVi";

    strapi.config.environments.development.apiKey
    const instance = axios.create({
      baseURL: "https://onesignal.com/api/v1",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${strapi.config.environments.development.authKey}`
      }
    });


    instance
      .post("/notifications", {
        app_id: strapi.config.environments.development.appId,
        include_player_ids: playerids,
        contents: {
          en: message
        }
      })
  }
}
