import {LoginForm} from "@/features/auth/login-form";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

function page() {
  return <LoginForm />;
}

export default page;
