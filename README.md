# LifeFile Example App

This is a simple example app that demonstrates how to use the LifeFile API to create orders,
update order status, update shipping status, and retrieve push data.

## To run the app locally

1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm dev`

## Important files

- `app/data/shared.server.ts` - This is where the necessary environment variables are checked.
- `app/routes/orders.create.tsx` - This is where the order creation logic is.
- `app/routes/orders.update-status.tsx` - This is where the order status update logic is.
- `app/routes/orders.update-shipping.tsx` - This is where the shipping status update logic is.
- `app/routes/api.post.tsx` - This is where the push data retrieval logic is.


## API Data Push

The API data push is a feature that allows you to receive data from LifeFile API in real-time. This is useful for
receiving order updates, shipping updates, and other important data.

LifeFile requires the endpoint to be secured using a Basic Authentication scheme 
(refer to https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme 
and https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization#basic_authentication for more information).

`https://your-app-url.com/api/post`

```json
[
  {
    pharmacyLocation: 'Innovationcompounding',
    fillId: '1234567',
    rxNumber: '1234567',
    foreignRxNumber: null,
    orderId: '12345678',
    referenceId: null,
    practiceId: '1234567',
    providerId: '333333333',
    patientId: '444444444',
    lfdrugId: '5555555',
    rxStatus: 'Shipping',
    rxStatusDateTime: '2024-09-30T07:29:34',
    deliveryService: 'UPS NEXT DAY SAVER - HOME',
    service: '7642',
    trackingNumber: '1ZHE55491325575555',
    shipAddressLine1: '1218 SUNSET VW',
    shipAddressLine2: null,
    shipAddressLine3: null,
    shipCity: 'San Antonio',
    shipState: 'TX',
    shipZip: '78258',
    shipCountry: 'US',
    shipCarrier: 'EASYPOST',
    foreignOrderId: 'xxxxxxxxxxx',
    patientEmail: null
  }
]
```

> Note: In our deployed demo app, the data push has been configured to execute when one or more prescriptions from
> the MedBridge practice pass the shipping event.

### Available products in the Sandbox environment

1. **Product ID:** 305157958
    - **Drug Name:** Benzocaine, USP
    - **Drug Strength:** -
    - **Drug Form:** Powder
    - **Quantity Units:** grams

2. **Product ID:** 305157959
    - **Drug Name:** Lidocaine, USP
    - **Drug Strength:** -
    - **Drug Form:** Powder
    - **Quantity Units:** grams

3. **Product ID:** 305157960
    - **Drug Name:** Tetracaine, USP
    - **Drug Strength:** -
    - **Drug Form:** Solution
    - **Quantity Units:** grams

4. **Product ID:** 305157961
    - **Drug Name:** Stevia
    - **Drug Strength:** 90%
    - **Drug Form:** Powder
    - **Quantity Units:** grams

5. **Product ID:** 305157962
    - **Drug Name:** Butylated hydroxytoluene
    - **Drug Strength:** -
    - **Drug Form:** Powder
    - **Quantity Units:** each

6. **Product ID:** 305157965
    - **Drug Name:** Polyethylene Glycol 3350, USP
    - **Drug Strength:** -
    - **Drug Form:** Powder
    - **Quantity Units:** grams

7. **Product ID:** 305157968
    - **Drug Name:** Benzocaine, Lidocaine, Tetracaine Suspension Dental
    - **Drug Strength:** 10%, 10%, 4%
    - **Drug Form:** Paste
    - **Quantity Units:** grams

### New Order Payload

```javascript
///////////////////////////////////////////////////////////////////////
// The hardcoded payload below was provided by the LifeFile support team and is accepted by the API.
///////////////////////////////////////////////////////////////////////
const HARDCODED_ORDER_PAYLOAD = {
   message: {
      id: 9876543210,
      sentTime: "2050-03-14 06:21:30",
   },
   order: {
      general: {
         memo: "REVP: TEST LF API ORDER. DO NOT USE.",
      },
      prescriber: {
         npi: 99999999,
         licenseState: "CA",
         licenseNumber: 99999999,
         dea: "GQ9999999",
         lastName: "NODOCTOR",
         firstName: "NODOCTOR",
         middleName: "NODOCTOR",
         address1: "123 NO ADDRESS 123",
         address2: "Apt. 333",
         city: "SAN DIEGO",
         state: "CA",
         zip: "92101",
         phone: "(999) 999-9999",
         fax: "(999) 999-9998",
         email: "nodoctor@testlfrevp.com",
      },
      practice: {
         id: 988599,
      },
      patient: {
         lastName: "NOPATIENT",
         firstName: "NOPATIENT",
         middleName: "NOPATIENT",
         gender: "m",
         dateOfBirth: "2008-07-17",
         address1: "456 NO ADDRESS DR",
         address2: "Apt. 999",
         address3: "Suite 2",
         city: "SAN DIEGO",
         state: "CA",
         zip: "92101",
         country: "US",
         phoneHome: "(555) 555-5555",
         phoneMobile: "(555) 555-5556",
         phoneWork: "(555) 555-5557",
         email: "nopatient@testlfrevp.com",
      },
      shipping: {
         recipientType: "patient",
         recipientLastName: "NOPATIENT",
         recipientFirstName: "NOPATIENT",
         recipientPhone: "(555) 555-5556",
         recipientEmail: "nopatient@testlfrevp.com",
         addressLine1: "456 NO ADDRESS DR",
         addressLine2: "Apt. 999",
         addressLine3: "Suite 2",
         city: "SAN DIEGO",
         state: "CA",
         zipCode: "92101",
         country: "US",
         service: 9,
      },
      billing: {
         payorType: "pat",
      },
      rxs: [
         {
            rxType: "new",
            drugName: "NOPRODUCT",
            drugStrength: "1 MG/ML",
            drugForm: "CREAM",
            lfProductID: 1,
            externalPmsProductID: 1,
            quantity: 1,
            quantityUnits: "GM",
            directions: "TEST NON-EXISTING PRODUCT FROM REVP. DO NOT USE.",
            refills: 1,
            dateWritten: "2023-05-01",
            daysSupply: 1,
         },
      ],
   },
};
```
