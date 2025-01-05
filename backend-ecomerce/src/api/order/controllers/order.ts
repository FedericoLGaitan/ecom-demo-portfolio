"use strict"

//@ts-ignore
const stripe = require('stripe')(process.env.STRIPE_KEY)


/**
 * order controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::order.order');

export default factories.createController('api::order.order', ({strapi}) =>
({   
    async create(ctx) {
        //@ts-ignore

        const {products} = ctx.request.body

        try {
            const lineItems = await Promise.all(
                  products.map(async (product) => {
                     const item = await strapi.service('api::product.prodsuct').findOne(product.id)
                  })
            )
        } catch(error)
    }
}))
