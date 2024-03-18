import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AppContext } from "@/context/app-context";
import { ChevronDownIcon } from "lucide-react";
import { useContext } from "react";

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
      <div className="flex flex-col p-4 h-full space-y-4 justify-between">
        <div className="border-b-2 border-grey-400 mb-4">
          <div>
            <p className="uppercase text-sm font-medium text-gray-500">
              Question
            </p>
            <p className="my-6 text-2xl text-gray-700">
              What is the suggested rent for Unit 2301?
            </p>
          </div>
          <div>
            <p className="uppercase text-sm font-medium text-gray-500">
              Answer
            </p>
            <p className="py-6 text-base">
              Based upon the comparable market, the suggested rent for Unit
              #2301 is $2325.00
            </p>
          </div>
        </div>
        <div>graph</div>
        <div>
          <Input />
          <p className="text-xs py-2 text-center text-gray-400">
            ChatGPT may produce inaccurate information about people, places, or
            facts. ChatGPT July 20 Version
          </p>
        </div>
      </div>
    </div>
  );
}
