// app/routes/orders.create.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { type ActionFunction, json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { DatePicker } from "~/components/ui/date-picker";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";

const orderSchema = z.object({
  referenceId: z.string().max(200),
  npi: z.string().max(40),
  prescriberLastName: z.string().max(30),
  patientLastName: z.string().max(30),
  patientFirstName: z.string().max(30),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  gender: z.enum(["m", "f", "a", "u"]),
  drugName: z.string().max(254),
});

interface ActionData {
  errors?: {
    submit?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log("Received data:", data);

  // Validate data against the schema
  const result = orderSchema.safeParse(data);
  if (!result.success) {
    console.log("Validation errors:", result.error.flatten().fieldErrors); // Log validation errors
    return json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
  }

  const orderData = result.data;
  const drugName = orderData.drugName;

  ///////////////////////////////////////////////////////////////////////
  // NOTE: The following payload _should_ be all that is required according to the API documentaion.
  // However, it is rejected by the API with a 403 error.
  // The hardcoded payload below was provided by the LifeFile support team and is accepted by the API.
  // I am still working to track down which fields are truly required.
  ///////////////////////////////////////////////////////////////////////

  // const finalOrderData = {
  //   message: {
  //     id: orderData.referenceId,
  //   },
  //   prescriber: {
  //     npi: orderData.npi,
  //     lastName: orderData.prescriberLastName,
  //   },
  //   patient: {
  //     lastName: orderData.patientLastName,
  //     firstName: orderData.patientFirstName,
  //     dateOfBirth: orderData.dateOfBirth,
  //     gender: orderData.gender,
  //   },
  //   rxs: [
  //     {
  //       drugName,
  //     },
  //   ],
  // };

  const finalOrderData = {
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
  // console.log("!!!Final order data:", finalOrderData);

  // Post the order data to the external API
  try {
    const response = await fetch(`${BASE_API_URL}/order`, {
      method: "POST",
      headers: API_HEADERS,
      body: JSON.stringify(finalOrderData),
    });

    if (!response.ok) {
      console.log("Failed to submit order to external API:", response.status, response.statusText);
      throw new Error("Failed to submit order to external API");
    }

    const responseData = await response.json();
    console.log("Order create: Received response from external API:", responseData);
    const orderId = responseData.data?.orderId;

    return redirect(`/orders/confirmation?orderId=${orderId}`);
  } catch (error) {
    console.error("Error submitting order:", error);
    return json({ errors: { submit: "Failed to submit order" } }, { status: 500 });
  }
};

const genders = [
  {
    value: "m",
    label: "Male",
  },
  {
    value: "f",
    label: "Female",
  },
  {
    value: "a",
    label: "Animal",
  },
  {
    value: "u",
    label: "Unknown",
  },
];

export default function OrdersCreate() {
  const actionData = useActionData<ActionData>();
  const submit = useSubmit();
  const navigation = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      referenceId: "5551234",
      npi: "1234567890",
      prescriberLastName: "Jones",
      patientLastName: "Smith",
      patientFirstName: "Rachel",
      dateOfBirth: "2002-04-05",
      gender: "f",
      drugName: "Sema",
    },
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      submit(formData, { method: "post" });
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <Card className="m-auto max-w-lg p-4">
      <h1 className="text-neutral-600 font-bold text-sm mb-4">Create a New Order</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="referenceId" className="block text-sm font-medium text-gray-700">
            Reference ID*:
          </label>
          <Input type="text" id="referenceId" {...register("referenceId")} placeholder="Reference ID" />
          {errors.referenceId && typeof errors.referenceId.message === "string" && (
            <span className="text-red-600">{errors.referenceId.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="npi" className="block text-sm font-medium text-gray-700">
            NPI*:
          </label>
          <Input type="text" id="npi" {...register("npi")} placeholder="NPI" />
          {errors.npi && typeof errors.npi.message === "string" && (
            <span className="text-red-600">{errors.npi.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="prescriberLastName" className="block text-sm font-medium text-gray-700">
            Prescriber Last Name*:
          </label>
          <Input
            type="text"
            id="prescriberLastName"
            {...register("prescriberLastName")}
            placeholder="Prescriber Last Name"
          />
          {errors.prescriberLastName && typeof errors.prescriberLastName.message === "string" && (
            <span className="text-red-600">{errors.prescriberLastName.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="patientLastName" className="block text-sm font-medium text-gray-700">
            Patient Last Name*:
          </label>
          <Input type="text" id="patientLastName" {...register("patientLastName")} placeholder="Patient Last Name" />
          {errors.patientLastName && typeof errors.patientLastName.message === "string" && (
            <span className="text-red-600">{errors.patientLastName.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="patientFirstName" className="block text-sm font-medium text-gray-700">
            Patient First Name*:
          </label>
          <Input type="text" id="patientFirstName" {...register("patientFirstName")} placeholder="Patient First Name" />
          {errors.patientFirstName && typeof errors.patientFirstName.message === "string" && (
            <span className="text-red-600">{errors.patientFirstName.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth*:</label>

          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field }) => {
              return (
                <DatePicker
                  defaultDate={!!field.value ? new Date(field.value) : undefined}
                  onDateChange={(date) => {
                    if (date) {
                      field.onChange(date.toISOString().split("T")[0]);
                    }
                  }}
                />
              );
            }}
          />
          <div>
            {errors.dateOfBirth && typeof errors.dateOfBirth.message === "string" && (
              <span className="text-red-600">{errors.dateOfBirth.message}</span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Patient Gender*:
          </label>
          <Controller
            control={control}
            name="gender"
            render={({ field }) => {
              return (
                <Select defaultValue={field.value} onValueChange={(value) => field.onChange(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    {genders.map((g) => {
                      return (
                        <SelectItem key={g.value} value={g.value}>
                          {g.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              );
            }}
          />
          {errors.gender && typeof errors.gender.message === "string" && (
            <span className="text-red-600">{errors.gender.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="drugName" className="block text-sm font-medium text-gray-700">
            Drug Name*:
          </label>
          <Input type="text" id="drugName" {...register("drugName")} placeholder="Drug Name" />
          {errors.drugName && typeof errors.drugName.message === "string" && (
            <span className="text-red-600">{errors.drugName.message}</span>
          )}
        </div>

        {actionData?.errors?.submit && <div className="text-red-600">{actionData.errors.submit}</div>}

        <Button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Submitting..." : "Submit Order"}
        </Button>
      </form>
    </Card>
  );
}
