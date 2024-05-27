import Login from "@/app/(beforeLogin)/_component/login/Login";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session?.user) {
    redirect("/home");
  }
  return <Login />;
};

export default LoginPage;
