'use strict';

/**
 * Name.js controller
 *
 * @description: A set of functions called "actions" for managing `Name`.
 */

module.exports = {

  /**
   * Retrieve name records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.name.search(ctx.query);
    } else {
      return strapi.services.name.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a name record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.name.fetch(ctx.params);
  },

  /**
   * Count name records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.name.count(ctx.query);
  },

  /**
   * Create a/an name record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.name.add(ctx.request.body);
  },

  /**
   * Update a/an name record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.name.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an name record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.name.remove(ctx.params);
  }
};
