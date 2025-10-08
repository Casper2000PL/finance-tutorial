"use client";

import { useNewAccount } from "@/app/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { isOpen, onOpen } = useNewAccount();

  return (
    <div>
      Home Page
      <Button onClick={onOpen}>Open</Button>
    </div>
  );
}
