import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <UserButton />
      <Button>Click Me</Button>
    </div>
  );
}
