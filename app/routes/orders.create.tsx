import { zodResolver } from "@hookform/resolvers/zod";
import { type ActionFunction, json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { DatePicker } from "~/components/ui/date-picker";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { SANDBOX_PRODUCTS } from "~/data/sandbox-products";
import { Label } from "~/components/ui/label";
import { ChevronDown } from "lucide-react";

interface ActionData {
  errors?: {
    submit?: string;
  };
}

const orderSchema = z.object({
  message: z.object({
    id: z.number(),
    sentTime: z.string(),
  }),
  order: z.object({
    general: z.object({
      memo: z.string(),
    }),
    prescriber: z.object({
      npi: z.string(),
      licenseState: z.string(),
      licenseNumber: z.string(),
      dea: z.string(),
      lastName: z.string(),
      firstName: z.string(),
      middleName: z.string(),
      address1: z.string(),
      address2: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
      phone: z.string(),
      fax: z.string(),
      email: z.string().email(),
    }),
    practice: z.object({
      id: z.number(),
    }),
    patient: z.object({
      lastName: z.string(),
      firstName: z.string(),
      middleName: z.string(),
      gender: z.enum(["m", "f", "a", "u"]),
      dateOfBirth: z.string(),
      address1: z.string(),
      address2: z.string(),
      address3: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
      country: z.string(),
      phoneHome: z.string(),
      phoneMobile: z.string(),
      phoneWork: z.string(),
      email: z.string().email(),
    }),
    shipping: z.object({
      recipientType: z.string(),
      recipientLastName: z.string(),
      recipientFirstName: z.string(),
      recipientPhone: z.string(),
      recipientEmail: z.string().email(),
      addressLine1: z.string(),
      addressLine2: z.string(),
      addressLine3: z.string(),
      city: z.string(),
      state: z.string(),
      zipCode: z.string(),
      country: z.string(),
      service: z.number(),
    }),
    billing: z.object({
      payorType: z.string(),
    }),
    rxs: z.array(
      z.object({
        rxType: z.string(),
        drugName: z.string(),
        drugStrength: z.string().nullable(),
        drugForm: z.string(),
        lfProductID: z.number(),
        externalPmsProductID: z.number(),
        quantity: z.number(),
        quantityUnits: z.string(),
        directions: z.string(),
        refills: z.number(),
        dateWritten: z.string(),
        daysSupply: z.number(),
      })
    ),
  }),
});

type OrderSchema = z.infer<typeof orderSchema>;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = {
    message: JSON.parse(formData.get("message") as string),
    order: {} as Record<string, unknown>,
  };

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("order[")) {
      const orderKeyMatch = key.match(/order\[(.*?)]/);
      const orderKey = orderKeyMatch ? orderKeyMatch[1] : null;

      if (orderKey) {
        data.order[orderKey] = JSON.parse(value as string);
      }
    }
  }

  // Validate data against the schema
  const result = orderSchema.safeParse(data);
  if (!result.success) {
    console.log("Validation errors:", result.error.flatten().fieldErrors);
    return json(
      { errors: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const orderData = result.data;

  // Post the order data to the external API
  try {
    const response = await fetch(`${BASE_API_URL}/order`, {
      method: "POST",
      headers: API_HEADERS,
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      console.log(
        "Failed to submit order to external API:",
        response.status,
        response.statusText
      );
      throw new Error("Failed to submit order to external API");
    }

    const responseData = await response.json();
    console.log(
      "Order create: Received response from external API:",
      responseData
    );
    const orderId = responseData.data?.orderId;

    return redirect(`/orders/confirmation?orderId=${orderId}`);
  } catch (error) {
    console.error("Error submitting order:", error);
    return json(
      { errors: { submit: "Failed to submit order" } },
      { status: 500 }
    );
  }
};

export default function OrdersCreate() {
  const actionData = useActionData<ActionData>();
  const submit = useSubmit();
  const navigation = useNavigation();
  const { register, handleSubmit, control } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      message: {
        id: 9876543210,
        sentTime: new Date().toISOString(),
      },
      order: {
        general: {
          memo: "REVP: TEST LF API ORDER. DO NOT USE.",
        },
        prescriber: {
          npi: "99999999",
          licenseState: "CA",
          licenseNumber: "99999999",
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
            drugName: SANDBOX_PRODUCTS[0].drugName,
            drugStrength: SANDBOX_PRODUCTS[0].drugStrength,
            drugForm: SANDBOX_PRODUCTS[0].drugForm,
            lfProductID: SANDBOX_PRODUCTS[0].productId,
            externalPmsProductID: SANDBOX_PRODUCTS[0].productId,
            quantity: 1,
            quantityUnits: SANDBOX_PRODUCTS[0].quantityUnits,
            directions: "Use as directed",
            refills: 0,
            dateWritten: new Date().toISOString().split("T")[0],
            daysSupply: 30,
          },
        ],
      },
    },
  });

  const { fields, append, remove } = useFieldArray<OrderSchema>({
    control,
    name: "order.rxs",
  });

  const onSubmit = async (data: OrderSchema) => {
    try {
      const formData = new FormData();

      // Ensure message is an object
      formData.append("message", JSON.stringify(data.message));

      // Append each order field separately
      for (const [key, value] of Object.entries(data.order)) {
        formData.append(`order[${key}]`, JSON.stringify(value));
      }

      submit(formData, { method: "post" });
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <Card className="m-auto max-w-lg p-4">
      <h1 className="text-neutral-600 dark:text-neutral-200 font-bold text-sm mb-4">
        Create a New Order
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Prescriber Information */}
        <h2 className="text-lg font-semibold">Prescriber Information</h2>
        <div>
          <Label htmlFor="prescriber-npi">NPI</Label>
          <Input
            id="prescriber-npi"
            {...register("order.prescriber.npi")}
            placeholder="NPI"
          />
        </div>

        <div className={"flex gap-2"}>
          <div>
            <Label htmlFor="prescriber-lastName">Doctor's Last Name</Label>
            <Input
              id="prescriber-lastName"
              {...register("order.prescriber.lastName")}
              placeholder="Last Name"
            />
          </div>
          <div>
            <Label htmlFor="prescriber-firstName">Doctor's First Name</Label>
            <Input
              id="prescriber-firstName"
              {...register("order.prescriber.firstName")}
              placeholder="First Name"
            />
          </div>
        </div>

        {/* Patient Information */}
        <h2 className="text-lg font-semibold">Patient Information</h2>
        <div className={"flex gap-2"}>
          <div>
            <Label htmlFor="patient-lastName">Last Name</Label>
            <Input
              id="patient-lastName"
              {...register("order.patient.lastName")}
              placeholder="Last Name"
            />
          </div>
          <div>
            <Label htmlFor="patient-firstName">First Name</Label>
            <Input
              id="patient-firstName"
              {...register("order.patient.firstName")}
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <Label className={"block pb-1"}>Date of Birth</Label>
          <Controller
            control={control}
            name="order.patient.dateOfBirth"
            render={({ field }) => (
              <DatePicker
                defaultDate={field.value ? new Date(field.value) : undefined}
                onDateChange={(date) =>
                  field.onChange(date?.toISOString().split("T")[0])
                }
              />
            )}
          />
        </div>
        <div>
          <Label htmlFor="patient-gender">Gender</Label>
          <Controller
            control={control}
            name="order.patient.gender"
            render={({ field }) => (
              <Select defaultValue={field.value} onValueChange={field.onChange}>
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
            )}
          />
        </div>

        {/* RX Selection */}
        <h2 className="text-lg font-semibold">Included RXs</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Select RXs ({fields.length})
              <ChevronDown className={"ml-1"} size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Available RXs</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {SANDBOX_PRODUCTS.map((product) => (
              <DropdownMenuCheckboxItem
                key={product.productId}
                checked={fields.some(
                  (field) => field.lfProductID === product.productId
                )}
                onCheckedChange={(checked) => {
                  if (checked) {
                    append({
                      rxType: "new",
                      drugName: product.drugName,
                      drugStrength: product.drugStrength,
                      drugForm: product.drugForm,
                      lfProductID: product.productId,
                      externalPmsProductID: product.productId,
                      quantity: 1,
                      quantityUnits: product.quantityUnits,
                      directions: "Use as directed",
                      refills: 0,
                      dateWritten: new Date().toISOString().split("T")[0],
                      daysSupply: 30,
                    });
                  } else {
                    const index = fields.findIndex(
                      (field) => field.lfProductID === product.productId
                    );
                    if (index !== -1) {
                      remove(index);
                    }
                  }
                }}
              >
                {product.drugName}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Display selected RXs */}
        {fields.map((field, index) => {
          const fieldId = `rx-${index}`;
          return (
            <div
              key={fieldId}
              className="border p-2 rounded border-dashed border-gray-500"
            >
              <h3 className={"font-bold"}>{field.drugName}</h3>
              <div className={"flex gap-2"}>
                <div>
                  <Label htmlFor={`${fieldId}-quantity`}>Quantity</Label>
                  <Input
                    {...register(`order.rxs.${index}.quantity` as const)}
                    id={`${fieldId}-quantity`}
                    type="number"
                    placeholder="Quantity"
                  />
                </div>

                <div>
                  <Label htmlFor={`${fieldId}-refills`}>Refills</Label>
                  <Input
                    {...register(`order.rxs.${index}.refills` as const)}
                    id={`${fieldId}-refills`}
                    type="number"
                    placeholder="Refills"
                  />
                </div>
              </div>

              <div className={"mb-2"}>
                <Label htmlFor={`${fieldId}-directions`}>Directions</Label>
                <Input
                  {...register(`order.rxs.${index}.directions` as const)}
                  id={`${fieldId}-directions`}
                  placeholder="Directions"
                />
              </div>
              <Button
                onClick={() => remove(index)}
                size={"sm"}
                type="button"
                variant={"destructiveOutline"}
              >
                Remove
              </Button>
            </div>
          );
        })}

        {actionData?.errors?.submit && (
          <div className="text-red-600">{actionData.errors.submit}</div>
        )}

        <div>
          <Button type="submit" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting"
              ? "Submitting..."
              : "Submit Order"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
