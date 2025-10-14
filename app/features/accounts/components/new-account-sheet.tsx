import { useNewAccount } from "@/app/features/accounts/hooks/use-new-account";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { AccountForm } from "./account-form";
import z from "zod";
import { insertAccountSchema } from "@/db/schema";
import { useCreateAccount } from "../api/use-create-account";

const formSchema = insertAccountSchema.pick({ name: true });

type FormValues = z.infer<typeof formSchema>;

const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  const { mutate: createAccount, isPending: isCreating } = useCreateAccount();

  const onSubmit = (values: FormValues) => {
    createAccount(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to get started.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <AccountForm
            onSubmit={onSubmit}
            disabled={isCreating}
            onDelete={() => {}}
            defaultValues={{ name: "" }}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NewAccountSheet;
