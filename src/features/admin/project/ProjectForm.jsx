"use client";

import {useState} from "react";
import {Button, buttonVariants} from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {CURRENCIES, PROJECT_STATUSES} from "@/lib/constants";
import {generatedSlug} from "@/lib/helpers";
import {PlusSignIcon} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import {cn} from "cn";
import {Controller, useForm} from "react-hook-form";
import useCreateProject from "./useCreateProject";

export default function ProjectForm({trigger, children}) {
  const [open, setOpen] = useState(false);
  const {createNewProject, isCreating} = useCreateProject();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      status: "not-started",
      base_price: "",
      currency: "USD",
      start_date: "",
      expected_end_date: "",
    },
  });

  const onSubmit = (data) => {
    createNewProject(data, {
      onSuccess: () => {
        reset();
        setOpen(false);
      },
    });
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setValue("slug", generatedSlug(value), {shouldValidate: true});
  };

  return (
    <Drawer swipeDirection="right" open={open} onOpenChange={setOpen}>
      {trigger || children ? (
        <DrawerTrigger render={trigger || children} />
      ) : (
        <DrawerTrigger
          className={cn(
            buttonVariants({variant: "default", size: "lg"}),
            "flex items-center gap-2 cursor-pointer",
          )}>
          <HugeiconsIcon icon={PlusSignIcon} size={20} />
          <span>New Project</span>
        </DrawerTrigger>
      )}

      <DrawerContent className="data-[swipe-axis=x]:sm:[--drawer-content-width:32rem] data-[swipe-axis=x]:[--drawer-content-width:92vw] h-full flex flex-col">
        <DrawerHeader className="border-b px-6 py-4">
          <DrawerTitle className="text-xl font-bold">New Project</DrawerTitle>
          <DrawerDescription>
            Fill in the details below to create a new project.
          </DrawerDescription>
        </DrawerHeader>

        <form
          id="project-drawer-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex-1 overflow-y-auto px-6 py-5">
          <FieldGroup className="gap-5">
            {/* Name & Slug */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="name">Project Name *</FieldLabel>
                <Input
                  id="name"
                  placeholder="e.g. Modern E-commerce Platform"
                  aria-invalid={!!errors.name}
                  {...register("name", {
                    required: "Project name is required",
                    onChange: handleNameChange,
                  })}
                />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </Field>

              <Field>
                <FieldLabel htmlFor="slug">Slug *</FieldLabel>
                <Input
                  id="slug"
                  placeholder="e.g. modern-ecommerce-platform"
                  aria-invalid={!!errors.slug}
                  {...register("slug", {
                    required: "Slug is required",
                  })}
                />
                {errors.slug && <FieldError>{errors.slug.message}</FieldError>}
              </Field>
            </div>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <textarea
                id="description"
                rows={3}
                placeholder="Provide a detailed overview of the project..."
                className={cn(
                  "w-full min-w-0 rounded-2xl border border-transparent bg-input/50 p-3 text-base md:text-sm text-foreground placeholder:text-muted-foreground transition-[color,box-shadow,background-color] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 dark:bg-input/30 resize-y",
                )}
                {...register("description")}
              />
            </Field>

            {/* Status & Currency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="status">Status *</FieldLabel>
                <Controller
                  control={control}
                  name="status"
                  rules={{required: "Status is required"}}
                  render={({field}) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="status"
                        className="w-full"
                        aria-invalid={!!errors.status}>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {PROJECT_STATUSES.map((status) => (
                          <SelectItem key={status.value} value={status.value}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.status && (
                  <FieldError>{errors.status.message}</FieldError>
                )}
              </Field>

              <Field>
                <FieldLabel htmlFor="currency">Currency</FieldLabel>
                <Controller
                  control={control}
                  name="currency"
                  render={({field}) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger
                        id="currency"
                        className="w-full"
                        aria-invalid={!!errors.currency}>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        {CURRENCIES.map((curr) => (
                          <SelectItem key={curr.value} value={curr.value}>
                            {curr.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.currency && (
                  <FieldError>{errors.currency.message}</FieldError>
                )}
              </Field>
            </div>

            {/* Base Price */}
            <Field>
              <FieldLabel htmlFor="base_price">Base Price</FieldLabel>
              <Input
                id="base_price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                {...register("base_price", {
                  setValueAs: (v) => (v === "" ? null : Number(v)),
                })}
              />
            </Field>

            {/* Start Date & Expected End Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="start_date">Start Date</FieldLabel>
                <Input
                  id="start_date"
                  type="date"
                  {...register("start_date")}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="expected_end_date">
                  Expected End Date
                </FieldLabel>
                <Input
                  id="expected_end_date"
                  type="date"
                  {...register("expected_end_date")}
                />
              </Field>
            </div>
          </FieldGroup>
        </form>

        <DrawerFooter className="border-t px-6 py-4 flex flex-row items-center justify-end gap-3">
          <DrawerClose
            disabled={isCreating}
            className={cn(
              buttonVariants({variant: "outline"}),
              "cursor-pointer",
            )}>
            Cancel
          </DrawerClose>
          <Button
            type="submit"
            form="project-drawer-form"
            disabled={isCreating}>
            {isCreating ? "Creating..." : "Create Project"}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
