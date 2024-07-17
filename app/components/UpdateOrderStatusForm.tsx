// components/UpdateOrderStatusForm.jsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";
import { updateOrderStatusSchema } from "~/routes/api.order-update-status";

export default function UpdateOrderStatusForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateOrderStatusSchema),
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = async (data: any) => {
    const response = await fetch(`${BASE_API_URL}/update-order-status`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      console.log("Order status updated successfully:", result);
    } else {
      console.error("Failed to update order status:", result);
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
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
          Status:
        </label>
        <Input type="text" id="status" {...register("status")} placeholder="Status" />
        {errors.status && typeof errors.status.message === "string" && (
          <span className="text-red-600">{errors.status.message}</span>
        )}
      </div>
      <Button type="submit">Update Status</Button>
    </form>
  );
}
