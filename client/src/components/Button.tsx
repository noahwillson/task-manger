import { Button } from "./ui/moving-border";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function MovingBorderButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          borderRadius="1.75rem"
          className="bg-inherit dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Create new Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="content" className="text-right">
              Content
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className=" dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

{
  /* <Dialog>
<DialogTrigger asChild>
  <Button variant="outline">Edit Profile</Button>
</DialogTrigger>
<DialogContent className="sm:max-w-[425px]">
  <DialogHeader>
    <DialogTitle>Edit profile</DialogTitle>
    <DialogDescription>
      Make changes to your profile here. Click save when you're done.
    </DialogDescription>
  </DialogHeader>
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="name" className="text-right">
        Name
      </Label>
      <Input
        id="name"
        defaultValue="Pedro Duarte"
        className="col-span-3"
      />
    </div>
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="username" className="text-right">
        Username
      </Label>
      <Input
        id="username"
        defaultValue="@peduarte"
        className="col-span-3"
      />
    </div>
  </div>
  <DialogFooter>
    <Button type="submit">Save changes</Button>
  </DialogFooter>
</DialogContent>
</Dialog> */
}
