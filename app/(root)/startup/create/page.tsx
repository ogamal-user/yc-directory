import { auth } from "@/auth";
import StartupForm from "./StartupForm";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();

  if (!session) redirect("/");
  return (
    <div>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading"> submit your startup Pitch</h1>
      </section>

      <StartupForm />
    </div>
  );
}

export default page;
