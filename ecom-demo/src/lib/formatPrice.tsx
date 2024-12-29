
export function formatPrice(price: number) {
 const priceFormatted = new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
})

 const finalPrice = priceFormatted.format(price)

 return finalPrice
}