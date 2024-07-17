// components/UpdateOrderShippingForm.jsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";
import { updateOrderShippingSchema } from "~/routes/api.order-update-shipping";

export default function UpdateOrderShippingForm() {
  const form = useForm({
    resolver: zodResolver(updateOrderShippingSchema),
  });
  const {
    register,
    formState: { errors },
  } = form;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = async (data: any) => {
    const response = await fetch(`${BASE_API_URL}/update-order-shipping`, {
      method: "PUT",
      headers: { ...API_HEADERS },
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
    <Form {...form}>
      <FormItem>
        <FormLabel htmlFor="orderId">Order ID:</FormLabel>
        <FormControl>
          <Input type="number" id="orderId" {...register("orderId", { valueAsNumber: true })} placeholder="Order ID" />
        </FormControl>
        <FormMessage />
      </FormItem>

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="recipientType">Recipient Type:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Select {...register("recipientType")}>*/}
      {/*      <SelectTrigger>*/}
      {/*        <SelectValue placeholder="Select type" />*/}
      {/*      </SelectTrigger>*/}
      {/*      <SelectContent>*/}
      {/*        <SelectItem value="clinic">Clinic</SelectItem>*/}
      {/*        <SelectItem value="patient">Patient</SelectItem>*/}
      {/*      </SelectContent>*/}
      {/*    </Select>*/}
      {/*  </FormControl>*/}
      {/*  {errors.recipientType && <FormMessage>{errors.recipientType.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="recipientLastName">Recipient Last Name:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input*/}
      {/*      type="text"*/}
      {/*      id="recipientLastName"*/}
      {/*      {...register("recipientLastName")}*/}
      {/*      placeholder="Recipient Last Name"*/}
      {/*    />*/}
      {/*  </FormControl>*/}
      {/*  {errors.recipientLastName && <FormMessage>{errors.recipientLastName.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="recipientFirstName">Recipient First Name:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input*/}
      {/*      type="text"*/}
      {/*      id="recipientFirstName"*/}
      {/*      {...register("recipientFirstName")}*/}
      {/*      placeholder="Recipient First Name"*/}
      {/*    />*/}
      {/*  </FormControl>*/}
      {/*  {errors.recipientFirstName && <FormMessage>{errors.recipientFirstName.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="recipientPhone">Recipient Phone:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input type="text" id="recipientPhone" {...register("recipientPhone")} placeholder="Recipient Phone" />*/}
      {/*  </FormControl>*/}
      {/*  {errors.recipientPhone && <FormMessage>{errors.recipientPhone.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="recipientEmail">Recipient Email:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input type="email" id="recipientEmail" {...register("recipientEmail")} placeholder="Recipient Email" />*/}
      {/*  </FormControl>*/}
      {/*  {errors.recipientEmail && <FormMessage>{errors.recipientEmail.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="addressLine1">Address Line 1:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input type="text" id="addressLine1" {...register("addressLine1")} placeholder="Address Line 1" />*/}
      {/*  </FormControl>*/}
      {/*  {errors.addressLine1 && <FormMessage>{errors.addressLine1.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="city">City:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input type="text" id="city" {...register("city")} placeholder="City" />*/}
      {/*  </FormControl>*/}
      {/*  {errors.city && <FormMessage>{errors.city.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="state">State:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input type="text" id="state" {...register("state")} placeholder="State" />*/}
      {/*  </FormControl>*/}
      {/*  {errors.state && <FormMessage>{errors.state.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="zipCode">Zip Code:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input type="text" id="zipCode" {...register("zipCode")} placeholder="Zip Code" />*/}
      {/*  </FormControl>*/}
      {/*  {errors.zipCode && <FormMessage>{errors.zipCode.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      {/*<FormItem>*/}
      {/*  <FormLabel htmlFor="country">Country:</FormLabel>*/}
      {/*  <FormControl>*/}
      {/*    <Input type="text" id="country" {...register("country")} placeholder="Country" />*/}
      {/*  </FormControl>*/}
      {/*  {errors.country && <FormMessage>{errors.country.message}</FormMessage>}*/}
      {/*</FormItem>*/}

      <Button type="submit">Update Shipping</Button>
    </Form>
  );
}
