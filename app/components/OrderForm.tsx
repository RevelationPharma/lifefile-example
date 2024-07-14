// components/OrderForm.jsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const orderSchema = z.object({
  referenceId: z.string().max(200),
  memo: z.string().max(120).optional(),
  npi: z.string().max(40),
  licenseState: z.string().max(2),
  lastName: z.string().max(30),
  firstName: z.string().max(30),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  gender: z.enum(["m", "f", "a", "u"]),
  address1: z.string().max(60),
  city: z.string().max(30),
  state: z.string().max(2),
  zip: z.string().max(10),
  country: z.string().max(2),
  drugName: z.string().max(254),
  quantity: z.string().max(45),
  directions: z.string().max(65535).optional(),
  // Add other fields as needed
});

export default function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(orderSchema),
  });

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const onSubmit = (data: any) => {
    fetch("/post-order", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" {...register("referenceId")} placeholder="Reference ID" />
        {errors.referenceId && typeof errors.referenceId.message === "string" && (
          <span>{errors.referenceId.message}</span>
        )}
      </div>
      <div>
        <input type="text" {...register("memo")} placeholder="Memo" />
        {errors.memo && typeof errors.memo.message === "string" && <span>{errors.memo.message}</span>}
      </div>
      <div>
        <input type="text" {...register("npi")} placeholder="NPI" />
        {errors.npi && typeof errors.npi.message === "string" && <span>{errors.npi.message}</span>}
      </div>
      <div>
        <input type="text" {...register("licenseState")} placeholder="License State" />
        {errors.licenseState && typeof errors.licenseState.message === "string" && (
          <span>{errors.licenseState.message}</span>
        )}
      </div>
      <div>
        <input type="text" {...register("lastName")} placeholder="Last Name" />
        {errors.lastName && typeof errors.lastName.message === "string" && <span>{errors.lastName.message}</span>}
      </div>
      <div>
        <input type="text" {...register("firstName")} placeholder="First Name" />
        {errors.firstName && typeof errors.firstName.message === "string" && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <input type="date" {...register("dateOfBirth")} />
        {errors.dateOfBirth && typeof errors.dateOfBirth.message === "string" && (
          <span>{errors.dateOfBirth.message}</span>
        )}
      </div>
      <div>
        <select {...register("gender")}>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="a">Animal</option>
          <option value="u">Unknown</option>
        </select>
        {errors.gender && typeof errors.gender.message === "string" && <span>{errors.gender.message}</span>}
      </div>
      <div>
        <input type="text" {...register("address1")} placeholder="Address" />
        {errors.address1 && typeof errors.address1.message === "string" && <span>{errors.address1.message}</span>}
      </div>
      <div>
        <input type="text" {...register("city")} placeholder="City" />
        {errors.city && typeof errors.city.message === "string" && <span>{errors.city.message}</span>}
      </div>
      <div>
        <input type="text" {...register("state")} placeholder="State" />
        {errors.state && typeof errors.state.message === "string" && <span>{errors.state.message}</span>}
      </div>
      <div>
        <input type="text" {...register("zip")} placeholder="Zip" />
        {errors.zip && typeof errors.zip.message === "string" && <span>{errors.zip.message}</span>}
      </div>
      <div>
        <input type="text" {...register("country")} placeholder="Country" />
        {errors.country && typeof errors.country.message === "string" && <span>{errors.country.message}</span>}
      </div>
      <div>
        <input type="text" {...register("drugName")} placeholder="Drug Name" />
        {errors.drugName && typeof errors.drugName.message === "string" && <span>{errors.drugName.message}</span>}
      </div>
      <div>
        <input type="text" {...register("quantity")} placeholder="Quantity" />
        {errors.quantity && typeof errors.quantity.message === "string" && <span>{errors.quantity.message}</span>}
      </div>
      <div>
        <textarea {...register("directions")} placeholder="Directions" />
        {errors.directions && typeof errors.directions.message === "string" && <span>{errors.directions.message}</span>}
      </div>
      {/* Add other fields as needed */}
      <button type="submit">Submit Order</button>
    </form>
  );
}
