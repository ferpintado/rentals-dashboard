import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AppContext } from "@/context/app-context";
import { ChevronDownIcon } from "lucide-react";
import { useContext } from "react";
import GptForm from "./gpt/gpt-form";

export default function Gpt() {
  const { activeTask } = useContext(AppContext);

  return (
    <div
      className={`${
        activeTask ? "w-2/5" : "w-4/5"
      }  h-full p-7 bg-slate-100 flex flex-col transition-all`}
    >
      <div className="flex justify-end">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto bg-slate-200 hover:bg-slate-100 rounded-full px-2"
            >
              <Avatar className="w-[24px] h-[24px]">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" align="end">
            <Command>
              <CommandList>
                <CommandGroup>
                  <CommandItem className="flex flex-col items-start px-4 py-2">
                    <p>Profile</p>
                  </CommandItem>
                  <CommandItem className="flex flex-col items-start px-4 py-2">
                    <p>Logout</p>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <GptForm />
    </div>
  );
}
