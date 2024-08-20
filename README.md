# LifeFile Example App

This is a simple example app that demonstrates how to use the LifeFile API to create orders,
update order status, update shipping status, and retrieve push data.

## To run the app locally

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`

## Files to note

- `app/data/shared.server.ts` - This is where the necessary environment variables are checked.
- `app/routes/orders.create.tsx` - This is where the order creation logic is.
- `app/routes/api.push.tsx` - This is where the push data retrieval logic is.
- `app/routes/api.order-update-status.ts` - This is where the order status update logic is.
- `app/routes/api.order-update-shipping.ts` - This is where the shipping status update logic is.