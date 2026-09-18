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
import {ROUTES} from "@/lib/constants";
import {useLogin} from "@/features/auth/useLogin";
import Link from "next/link";

export function LoginForm({className, ...props}) {
  const {loginUser, isPending} = useLogin();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    loginUser(formData);
  }

  return (
    <Card className="p-4 shadow-none max-w-sm mx-auto w-full">
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        {...props}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-2xl font-bold">Login to your account</h1>
            <p className="text-sm text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>

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

          <Field>
            <div className="flex items-center">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Link
                href={ROUTES.FORGOT_PASSWORD}
                className="ms-auto text-sm underline-offset-4 hover:underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              aria-invalid={!!errors.password}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="text-xs text-destructive font-medium mt-1">
                {errors.password.message}
              </p>
            )}
          </Field>

          <Field>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </Field>

          <FieldSeparator />

          <Field>
            <FieldDescription className="text-center">
              Don&apos;t have an account?{" "}
              <Link
                href={ROUTES.SIGNUP}
                className="underline underline-offset-4">
                Sign up
              </Link>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </Card>
  );
}
