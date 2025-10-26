import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { insertCategorySchema } from "@/db/schema";
import z from "zod";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { useCreateCategory } from "@/features/categories/api/use-create-category";
import { CategoryForm } from "@/features/categories/components/category-form";

const formSchema = insertCategorySchema.pick({ name: true });

type FormValues = z.infer<typeof formSchema>;

const NewCategorySheet = () => {
  const { isOpen, onClose } = useNewCategory();

  const { mutate: createCategory, isPending: isCreating } = useCreateCategory();

  const onSubmit = (values: FormValues) => {
    createCategory(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Category</SheetTitle>
          <SheetDescription>
            Create a new category to get started.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <CategoryForm
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

export default NewCategorySheet;
