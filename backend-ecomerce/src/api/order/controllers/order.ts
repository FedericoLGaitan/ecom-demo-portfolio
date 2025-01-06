//@ts-ignore
const stripe = require('stripe')(process.env.STRIPE_KEY)

/**
 * order controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::order.order');

export default factories.createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        //@ts-ignore
        const { products } = ctx.request.body;

        try {
            // Construir los line items para la sesión de Stripe
            const lineItems = await Promise.all(
                products.map(async (product) => {
                    const item = await strapi
                    .documents('api::product.product')
                    .findOne({
                        documentId: product.documentId,
                      });
                      
                      
                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.productName,
                            },
                            unit_amount: Math.round(item.price * 100),
                        },
                        quantity: 1,
                    };
                })
            );

            // Crear la sesión de Stripe
            const session = await stripe.checkout.sessions.create({
                shipping_address_collection: { allowed_countries: ["US"] },
                payment_method_types: ["card"],
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}/success`,
                cancel_url: `${process.env.CLIENT_URL}/successError`,
                line_items: lineItems,
            });

            // Crear la orden en Strapi
            await strapi.service("api::order.order").create({
                data: {
                    products,
                    stripeId: session.id,
                },
            });

            return { stripeSession: session };
        } catch (error) {
            console.error('Stripe Checkout Session Error:', error);
            ctx.response.status = 500;
            ctx.response.body = { error: error.message };
        }
    },
}));
