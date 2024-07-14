// components/OrderForm.jsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import { DatePicker } from "~/components/ui/date-picker";
import { Input } from "~/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";

const orderSchema = z.object({
  referenceId: z.string().max(200),
  memo: z.string().max(120).optional(),
  npi: z.string().max(40),
  licenseState: z.string().max(2),
  lastName: z.string().max(30),
  firstName: z.string().max(30),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  gender: z.enum(["m", "f", "a", "u"]),
  drugName: z.string().max(254),
  quantity: z.string().max(45),
  directions: z.string().max(65535).optional(),
  // Add other fields as needed
});

export default function OrderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = (data: any) => {
    fetch("/api/post-order", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="referenceId" className="block text-sm font-medium text-gray-700">
          Message ID:
        </label>
        <Input type="text" id="referenceId" {...register("referenceId")} placeholder="Reference ID" />
        {errors.referenceId && typeof errors.referenceId.message === "string" && (
          <span className="text-red-600">{errors.referenceId.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="memo" className="block text-sm font-medium text-gray-700">
          Memo:
        </label>
        <Input type="text" id="memo" {...register("memo")} placeholder="Memo" />
        {errors.memo && typeof errors.memo.message === "string" && (
          <span className="text-red-600">{errors.memo.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="npi" className="block text-sm font-medium text-gray-700">
          NPI:
        </label>
        <Input type="text" id="npi" {...register("npi")} placeholder="NPI" />
        {errors.npi && typeof errors.npi.message === "string" && (
          <span className="text-red-600">{errors.npi.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="licenseState" className="block text-sm font-medium text-gray-700">
          License State:
        </label>
        <Input type="text" id="licenseState" {...register("licenseState")} placeholder="License State" />
        {errors.licenseState && typeof errors.licenseState.message === "string" && (
          <span className="text-red-600">{errors.licenseState.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name:
        </label>
        <Input type="text" id="lastName" {...register("lastName")} placeholder="Last Name" />
        {errors.lastName && typeof errors.lastName.message === "string" && (
          <span className="text-red-600">{errors.lastName.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name:
        </label>
        <Input type="text" id="firstName" {...register("firstName")} placeholder="First Name" />
        {errors.firstName && typeof errors.firstName.message === "string" && (
          <span className="text-red-600">{errors.firstName.message}</span>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
        <DatePicker
          onDateChange={(date) => {
            if (date) {
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
          Gender:
        </label>
        <Select {...register("gender")}>
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
        {errors.gender && typeof errors.gender.message === "string" && (
          <span className="text-red-600">{errors.gender.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="drugName" className="block text-sm font-medium text-gray-700">
          Drug Name:
        </label>
        <Input type="text" id="drugName" {...register("drugName")} placeholder="Drug Name" />
        {errors.drugName && typeof errors.drugName.message === "string" && (
          <span className="text-red-600">{errors.drugName.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
          Quantity:
        </label>
        <Input type="text" id="quantity" {...register("quantity")} placeholder="Quantity" />
        {errors.quantity && typeof errors.quantity.message === "string" && (
          <span className="text-red-600">{errors.quantity.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="directions" className="block text-sm font-medium text-gray-700">
          Directions:
        </label>
        <Textarea id="directions" {...register("directions")} placeholder="Directions" />
        {errors.directions && typeof errors.directions.message === "string" && (
          <span className="text-red-600">{errors.directions.message}</span>
        )}
      </div>

      <Button type="submit">Submit Order</Button>
    </form>
  );
}
