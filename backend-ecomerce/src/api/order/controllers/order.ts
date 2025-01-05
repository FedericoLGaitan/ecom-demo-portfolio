"use strict"

//@ts-ignore
const stripe = require('stripe')(process.env.STRIPE_KEY)


/**
 * order controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::order.order');

export default factories.createCoreController('api::order.order', ({strapi}) =>
({   
    async create(ctx) {
        //@ts-ignore

        const {products} = ctx.request.body

        try {
            const lineItems = await Promise.all(
                  products.map(async (product) => {
                     const item = await strapi
                     .service('api::product.prodsuct')
                     .findOne(product.id)

                     return  {
                        price_data: {
                            currency: "ars" ,
                            product_data: {
                                 name: item.productName
                            },
                            unit_amount: Math.round(item.price * 100), 
                        },
                        quantity: 1
                     }
                        
                  })
            )
            const session = await stripe.checkout.sessions.create({
                shipping_adress_collection: {allowed_countries: ["US"]},
                payment_method_types: ["card"],
                mode: 'payment',
                success_url: process.env.CLIENT_URL + "/success",
                cancel_url: process.env.CLIENT_URL + "/successError",
                line_items: lineItems
            })

            await strapi.service("api::order.order").create({
                data: {
                    products,
                    stripeId: session.id
                }
            })

            return {stripeSession: session}
        } catch(error) {

            ctx.respone.status = 500
           return error
        }
    }
}))
