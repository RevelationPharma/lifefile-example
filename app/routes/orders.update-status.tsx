import { zodResolver } from "@hookform/resolvers/zod";
import { type ActionFunction, json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
// app/routes/orders.update-status.tsx
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";

const updateOrderStatusSchema = z.object({
  orderId: z.string().min(1),
  status: z.string(),
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
  const result = updateOrderStatusSchema.safeParse(data);
  if (!result.success) {
    console.log("Validation errors:", result.error.flatten().fieldErrors); // Log validation errors
    return json({ errors: result.error.flatten().fieldErrors }, { status: 400 });
  }

  const orderData = result.data;
  const orderId = orderData.orderId;
  const status = orderData.status;

  // console.log("!!!Final order data:", finalOrderData);

  // Post the status to the external API
  try {
    const response = await fetch(`${BASE_API_URL}/order/${orderId}/status`, {
      method: "PUT",
      headers: API_HEADERS,
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      console.log("Failed to submit order to external API:", response.status, response.statusText);
      throw new Error("Failed to submit order to external API");
    }

    const responseData = await response.json();
    console.log("Received response from external API:", responseData);

    // return redirect(`/orders/confirmation?orderId=${orderId}`);
    return null;
  } catch (error) {
    console.error("Error updating order status:", error);
    return json({ errors: { submit: "Failed to update order status" } }, { status: 500 });
  }
};

const statusOptions = [
  { value: "b8535", label: "11433 Sandbox Status A" },
  { value: "beb0e", label: "11433 Sandbox Status B" },
];

export default function OrdersUpdateStatus() {
  const actionData = useActionData<ActionData>();
  const submit = useSubmit();
  const navigation = useNavigation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(updateOrderStatusSchema),
    defaultValues: {
      orderId: "64809556",
      status: "",
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
      console.error("Error updating status:", error);
    }
  };

  return (
    <Card className={"m-auto max-w-lg p-4"}>
      <h1 className={"text-neutral-600 font-bold text-sm mb-4"}>Update Order Status</h1>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
            Order ID:
          </label>
          <Input id="orderId" {...register("orderId")} placeholder="Order ID" />
          {errors.orderId && typeof errors.orderId.message === "string" && (
            <span className="text-red-600">{errors.orderId.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status:
          </label>
          <Controller
            control={control}
            name="status"
            render={({ field }) => {
              return (
                <Select defaultValue={field.value} onValueChange={(value) => field.onChange(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map((g) => {
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
          {errors.status && typeof errors.status.message === "string" && (
            <span className="text-red-600">{errors.status.message}</span>
          )}
        </div>
        {actionData?.errors?.submit && <div className="text-red-600">{actionData.errors.submit}</div>}

        <Button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Submitting..." : "Update Status"}
        </Button>
      </form>
    </Card>
  );
}
