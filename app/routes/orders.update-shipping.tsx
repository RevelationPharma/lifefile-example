// app/routes/orders.update-shipping.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { type ActionFunction, json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";

const shippingServices = [
  { value: "9", label: "Pharmacy pickup" },
  { value: "999", label: "Delivery" },
  { value: "6223", label: "Fedex 2 Day" },
  { value: "6224", label: "Fedex Express Saver" },
  { value: "6225", label: "Fedex Ground" },
  { value: "6226", label: "Fedex First Overnight" },
  { value: "6227", label: "Fedex Ground Home Delivery" },
  { value: "6228", label: "Fedex Priority Overnight" },
  { value: "6230", label: "Fedex Standard Overnight" },
  { value: "6231", label: "Fedex 2 Day AM" },
];

const updateOrderShippingSchema = z.object({
  orderId: z.string().min(1),
  recipientType: z.enum(["clinic", "patient"]),
  recipientLastName: z.string().max(30),
  recipientFirstName: z.string().max(30),
  recipientPhone: z.string().max(16),
  recipientEmail: z.string().max(100),
  addressLine1: z.string().max(60),
  city: z.string().max(30),
  state: z.string().max(2),
  zipCode: z.string().max(10),
  country: z.string().max(2),
  service: z.string().min(1),
});

interface ActionData {
  errors?: {
    submit?: string;
  };
  success?: boolean;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const shippingFormData = Object.fromEntries(formData);

  // Validate data against the schema
  const result = updateOrderShippingSchema.safeParse(shippingFormData);
  if (!result.success) {
    console.log("Validation errors:", result.error.flatten().fieldErrors); // Log validation errors
    return json(
      { errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { orderId } = shippingFormData;
  const finalShippingInfo = {
    shipping: {
      recipientType: shippingFormData.recipientType,
      recipientLastName: shippingFormData.recipientLastName,
      recipientFirstName: shippingFormData.recipientFirstName,
      recipientPhone: shippingFormData.recipientPhone,
      recipientEmail: shippingFormData.recipientEmail,
      addressLine1: shippingFormData.addressLine1,
      city: shippingFormData.city,
      state: shippingFormData.state,
      zipCode: shippingFormData.zipCode,
      country: shippingFormData.country,
      service: Number(shippingFormData.service),
    },
  };
  console.log("Received shipping data:", orderId, finalShippingInfo);

  // Post the shipping data to the external API
  try {
    const response = await fetch(`${BASE_API_URL}/order/${orderId}/shipping`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify(finalShippingInfo),
    });

    if (!response.ok) {
      console.log(
        "Failed to update order shipping information:",
        response.status,
        response.statusText
      );
      throw new Error("Failed to update order shipping information");
    }

    const responseData = await response.json();
    console.log("Received response from external API:", responseData);

    // return redirect(`/orders/confirmation?orderId=${orderId}`);
    return json({ success: true });
  } catch (error) {
    console.error("Error updating shipping information:", error);
    return json(
      { errors: { submit: "Failed to update shipping info" } },
      { status: 500 }
    );
  }
};

const recipientTypes = [
  { value: "clinic", label: "Clinic" },
  { value: "patient", label: "Patient" },
];

export default function OrdersUpdateShipping() {
  const actionData = useActionData<ActionData>();
  const submit = useSubmit();
  const navigation = useNavigation();
  const form = useForm({
    resolver: zodResolver(updateOrderShippingSchema),
    defaultValues: {
      orderId: "64809556",
      recipientType: "patient",
      recipientLastName: "Jones",
      recipientFirstName: "Rachel",
      recipientPhone: "(555) 555-5555",
      recipientEmail: "rjones@email.com",
      addressLine1: "123 Main St",
      city: "Anytown",
      state: "NY",
      zipCode: "12345",
      country: "US",
      service: shippingServices[0].value,
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = form;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      submit(formData, { method: "post" });
    } catch (error) {
      console.error("Error submitting shipping update:", error);
    }
  };

  return (
    <Card className={"m-auto max-w-lg p-4 w-[360px]"}>
      <h1
        className={
          "text-neutral-600 dark:text-neutral-200 font-bold text-sm mb-4"
        }
      >
        Update Order Shipping
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="orderId" className="block text-sm font-medium">
            Order ID:
          </label>
          <Input id="orderId" {...register("orderId")} placeholder="Order ID" />
          {errors.orderId && (
            <span className="text-red-600">{errors.orderId.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="recipientType" className="block text-sm font-medium">
            Recipient Type:
          </label>
          <Controller
            control={control}
            name="recipientType"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Recipient Type" />
                </SelectTrigger>
                <SelectContent>
                  {recipientTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.recipientType && (
            <span className="text-red-600">{errors.recipientType.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="recipientLastName"
            className="block text-sm font-medium"
          >
            Recipient Last Name:
          </label>
          <Input
            type="text"
            id="recipientLastName"
            {...register("recipientLastName")}
            placeholder="Last Name"
          />
          {errors.recipientLastName && (
            <span className="text-red-600">
              {errors.recipientLastName.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="recipientFirstName"
            className="block text-sm font-medium"
          >
            Recipient First Name:
          </label>
          <Input
            type="text"
            id="recipientFirstName"
            {...register("recipientFirstName")}
            placeholder="First Name"
          />
          {errors.recipientFirstName && (
            <span className="text-red-600">
              {errors.recipientFirstName.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="recipientPhone" className="block text-sm font-medium">
            Recipient Phone:
          </label>
          <Input
            type="tel"
            id="recipientPhone"
            {...register("recipientPhone")}
            placeholder="Phone Number"
          />
          {errors.recipientPhone && (
            <span className="text-red-600">
              {errors.recipientPhone.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="recipientEmail" className="block text-sm font-medium">
            Recipient Email:
          </label>
          <Input
            type="email"
            id="recipientEmail"
            {...register("recipientEmail")}
            placeholder="Email Address"
          />
          {errors.recipientEmail && (
            <span className="text-red-600">
              {errors.recipientEmail.message}
            </span>
          )}
        </div>

        <div>
          <label htmlFor="addressLine1" className="block text-sm font-medium">
            Address Line 1:
          </label>
          <Input
            type="text"
            id="addressLine1"
            {...register("addressLine1")}
            placeholder="Address Line 1"
          />
          {errors.addressLine1 && (
            <span className="text-red-600">{errors.addressLine1.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium">
            City:
          </label>
          <Input
            type="text"
            id="city"
            {...register("city")}
            placeholder="City"
          />
          {errors.city && (
            <span className="text-red-600">{errors.city.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium">
            State:
          </label>
          <Input
            type="text"
            id="state"
            {...register("state")}
            placeholder="State (2 letters)"
            maxLength={2}
          />
          {errors.state && (
            <span className="text-red-600">{errors.state.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium">
            Zip Code:
          </label>
          <Input
            type="text"
            id="zipCode"
            {...register("zipCode")}
            placeholder="Zip Code"
          />
          {errors.zipCode && (
            <span className="text-red-600">{errors.zipCode.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium">
            Country:
          </label>
          <Input
            type="text"
            id="country"
            {...register("country")}
            placeholder="Country (2 letters)"
            maxLength={2}
          />
          {errors.country && (
            <span className="text-red-600">{errors.country.message}</span>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium">
            Service:
          </label>

          <Controller
            control={control}
            name="service"
            render={({ field }) => {
              return (
                <Select
                  defaultValue={field.value}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {shippingServices.map((g) => {
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

          {errors.country && (
            <span className="text-red-600">{errors.country.message}</span>
          )}
        </div>

        {actionData?.errors?.submit && (
          <div className="text-red-600">{actionData.errors.submit}</div>
        )}

        {actionData?.success && (
          <div className={"text-green-500"}>SUCCESS!</div>
        )}

        <Button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Submitting..."
            : "Update Shipping"}
        </Button>
      </form>
    </Card>
  );
}
