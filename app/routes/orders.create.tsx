// app/routes/orders.create.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { type ActionFunction, json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import React, { useTransition } from "react";
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
  const finalOrderData = {
    message: {
      id: orderData.referenceId,
    },
    prescriber: {
      npi: orderData.npi,
      lastName: orderData.prescriberLastName,
    },
    patient: {
      lastName: orderData.patientLastName,
      firstName: orderData.patientFirstName,
      dateOfBirth: orderData.dateOfBirth,
      gender: orderData.gender,
    },
    rxs: [{ drugName }],
  };
  console.log("Final order data:", finalOrderData);

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

    return redirect("/orders/confirmation");
  } catch (error) {
    console.error("Error submitting order:", error);
    return json({ errors: { submit: "Failed to submit order" } }, { status: 500 });
  }
};

export default function OrdersCreate() {
  const actionData = useActionData<ActionData>();
  const [isPending] = useTransition();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    control,
  } = useForm({
    resolver: zodResolver(orderSchema),
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = async (data: any) => {
    try {
      const form = new FormData();
      for (const key in data) {
        form.append(key, data[key]);
      }
      const response = await fetch("/orders/create", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      window.location.href = "/orders/confirmation";
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
          <DatePicker
            onDateChange={(date) => {
              if (date) {
                console.log("Date selected:", date);
                console.log("Date ISO string:", date.toISOString().split("T")[0]);
                setValue("dateOfBirth", date.toISOString().split("T")[0]);
              }
            }}
          />
          {errors.dateOfBirth && typeof errors.dateOfBirth.message === "string" && (
            <span className="text-red-600">{errors.dateOfBirth.message}</span>
          )}
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
                <Select onValueChange={(value) => field.onChange(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m">Male</SelectItem>
                    <SelectItem value="f">Female</SelectItem>
                    <SelectItem value="a">Animal</SelectItem>
                    <SelectItem value="u">Unknown</SelectItem>
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

        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Order"}
        </Button>
      </form>
    </Card>
  );
}
