// components/UpdateOrderShippingForm.jsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { BASE_API_URL } from "~/data/shared";

const updateOrderShippingSchema = z.object({
  orderId: z.number().int(),
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
});

export default function UpdateOrderShippingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateOrderShippingSchema),
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = async (data: any) => {
    const response = await fetch(`${BASE_API_URL}/update-order-shipping`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Vendor-ID": "11324", // Replace with actual Vendor ID
        "X-Location-ID": "110033", // Replace with actual Location ID
        "X-API-Network-ID": "233582", // Replace with actual API Network ID
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      console.log("Order shipping updated successfully:", result);
    } else {
      console.error("Failed to update order shipping:", result);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
          Order ID:
        </label>
        <Input type="number" id="orderId" {...register("orderId", { valueAsNumber: true })} placeholder="Order ID" />
        {errors.orderId && typeof errors.orderId.message === "string" && (
          <span className="text-red-600">{errors.orderId.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="recipientType" className="block text-sm font-medium text-gray-700">
          Recipient Type:
        </label>
        <select id="recipientType" {...register("recipientType")} className="input">
          <option value="clinic">Clinic</option>
          <option value="patient">Patient</option>
        </select>
        {errors.recipientType && typeof errors.recipientType.message === "string" && (
          <span className="text-red-600">{errors.recipientType.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="recipientLastName" className="block text-sm font-medium text-gray-700">
          Recipient Last Name:
        </label>
        <Input
          type="text"
          id="recipientLastName"
          {...register("recipientLastName")}
          placeholder="Recipient Last Name"
        />
        {errors.recipientLastName && typeof errors.recipientLastName.message === "string" && (
          <span className="text-red-600">{errors.recipientLastName.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="recipientFirstName" className="block text-sm font-medium text-gray-700">
          Recipient First Name:
        </label>
        <Input
          type="text"
          id="recipientFirstName"
          {...register("recipientFirstName")}
          placeholder="Recipient First Name"
        />
        {errors.recipientFirstName && typeof errors.recipientFirstName.message === "string" && (
          <span className="text-red-600">{errors.recipientFirstName.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="recipientPhone" className="block text-sm font-medium text-gray-700">
          Recipient Phone:
        </label>
        <Input type="text" id="recipientPhone" {...register("recipientPhone")} placeholder="Recipient Phone" />
        {errors.recipientPhone && typeof errors.recipientPhone.message === "string" && (
          <span className="text-red-600">{errors.recipientPhone.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700">
          Recipient Email:
        </label>
        <Input type="email" id="recipientEmail" {...register("recipientEmail")} placeholder="Recipient Email" />
        {errors.recipientEmail && typeof errors.recipientEmail.message === "string" && (
          <span className="text-red-600">{errors.recipientEmail.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
          Address Line 1:
        </label>
        <Input type="text" id="addressLine1" {...register("addressLine1")} placeholder="Address Line 1" />
        {errors.addressLine1 && typeof errors.addressLine1.message === "string" && (
          <span className="text-red-600">{errors.addressLine1.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City:
        </label>
        <Input type="text" id="city" {...register("city")} placeholder="City" />
        {errors.city && typeof errors.city.message === "string" && (
          <span className="text-red-600">{errors.city.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          State:
        </label>
        <Input type="text" id="state" {...register("state")} placeholder="State" />
        {errors.state && typeof errors.state.message === "string" && (
          <span className="text-red-600">{errors.state.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
          Zip Code:
        </label>
        <Input type="text" id="zipCode" {...register("zipCode")} placeholder="Zip Code" />
        {errors.zipCode && typeof errors.zipCode.message === "string" && (
          <span className="text-red-600">{errors.zipCode.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country:
        </label>
        <Input type="text" id="country" {...register("country")} placeholder="Country" />
        {errors.country && typeof errors.country.message === "string" && (
          <span className="text-red-600">{errors.country.message}</span>
        )}
      </div>
      <Button type="submit">Update Shipping</Button>
    </form>
  );
}
