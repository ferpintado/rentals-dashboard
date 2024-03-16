import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { ChevronDownIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen flex items-stretch divide-x">
      {/* Sidebar start */}
      <div className="w-1/5 h-full p-7">
        <div className="mb-8">
          <h1 className="uppercase">Revenue manager</h1>
        </div>
        <Card>
          <CardHeader className="p-4 flex flex-row">
            <div className="w-1/5">
              <div className="w-[24px] h-[24px] bg-green-200 border-2 border-green-500 rounded-full mt-1.5"></div>
            </div>
            <CardTitle className="text-base font-medium w-4/5 mt-0">
              Price available units
              <CardDescription className="font-normal text-green-500">
                2 tasks
              </CardDescription>
            </CardTitle>
          </CardHeader>

          <CardContent className="px-4 mx-auto flex flex-col space-y-2">
            <div className="flex items-center space-x-4 ml-9">
              <Checkbox id="terms" className="rounded-full border-gray-200" />
              <label
                htmlFor="terms"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Holywood
              </label>
            </div>
            <div className="flex items-center space-x-4 ml-9">
              <Checkbox id="terms" className="rounded-full border-gray-200" />
              <label
                htmlFor="terms"
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Holywood 2
              </label>
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
      {/* sidebar end */}
      {/* center start */}
      <div className="w-2/5 h-full p-7">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-normal">Dogwood</h2>
          <p className="text-sm text-gray-400">March 15, 2023</p>
        </div>
        <p>table here</p>
      </div>
      {/* center end */}
      {/* gpt start */}
      <div className="w-2/5 h-full p-7 bg-slate-100 flex flex-col">
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
              ChatGPT may produce inaccurate information about people, places,
              or facts. ChatGPT July 20 Version
            </p>
          </div>
        </div>
      </div>

      {/* gtp end */}
    </main>
  );
}
