"use client";

import {useForm} from "react-hook-form";
import {cn} from "cn";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import {Input} from "@/components/ui/input";
import {ARAB_COUNTRIES, ROUTES} from "@/lib/constants";
import {useSignup} from "@/features/auth/useSignup";
import Link from "next/link";

export function SignupForm({className, ...props}) {
  const {signupUser, isPending} = useSignup();

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
    },
  });

  const passwordValue = watch("password");

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);
    if (data.country) {
      formData.append("country", data.country);
    }
    signupUser(formData);
  }

  return (
    <Card className="p-4 sm:p-6 shadow-none w-full">
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        {...props}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <p className="text-sm text-balance text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>

          {/* Name & Phone (Side by side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name (Required) */}
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                aria-invalid={!!errors.name}
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-xs text-destructive font-medium mt-1">
                  {errors.name.message}
                </p>
              )}
            </Field>

            {/* Phone (Required) */}
            <Field>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <Input
                id="phone"
                type="tel"
                placeholder="+20 123 456 7890"
                aria-invalid={!!errors.phone}
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 8,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-xs text-destructive font-medium mt-1">
                  {errors.phone.message}
                </p>
              )}
            </Field>
          </div>

          {/* Email (Required) */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              aria-invalid={!!errors.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-xs text-destructive font-medium mt-1">
                {errors.email.message}
              </p>
            )}
          </Field>

          {/* Password & Confirm Password (Side by side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                aria-invalid={!!errors.password}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-xs text-destructive font-medium mt-1">
                  {errors.password.message}
                </p>
              )}
            </Field>

            <Field>
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                aria-invalid={!!errors.confirmPassword}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) => {
                    if (passwordValue !== val) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-xs text-destructive font-medium mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </Field>
          </div>

          {/* Country (Optional Select) */}
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="country">Country</FieldLabel>
              <span className="text-xs text-muted-foreground font-medium">
                Optional
              </span>
            </div>
            <select
              id="country"
              defaultValue=""
              {...register("country")}
              className={cn(
                "h-9 w-full min-w-0 rounded-3xl border border-transparent bg-input/50 px-3 py-1 text-base md:text-sm text-foreground transition-[color,box-shadow,background-color] outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 cursor-pointer dark:bg-input/30",
              )}>
              <option value="" className="bg-popover text-muted-foreground">
                Select your country (optional)
              </option>
              {ARAB_COUNTRIES.map((country) => (
                <option
                  key={country.value}
                  value={country.value}
                  className="bg-popover text-foreground">
                  {country.label}
                </option>
              ))}
            </select>
          </Field>

          {/* Submit Button */}
          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Creating account..." : "Create account"}
            </Button>
          </Field>

          <FieldSeparator />

          {/* Link to Login */}
          <Field>
            <FieldDescription className="text-center">
              Already have an account?{" "}
              <Link
                href={ROUTES.LOGIN}
                className="underline underline-offset-4">
                Login
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </Card>
  );
}
