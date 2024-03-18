import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ComparableTable from "./comparable-table";

export default function GptForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [question, setQuestion] = useState<string>("");

  const onSubmit = () => {
    setQuestion(inputRef.current?.value || "");
    inputRef.current!.value = "";
  };

  const onClear = () => {
    setQuestion("");
  };

  return (
    <div
      className={`flex flex-col p-4 h-full space-y-4 ${
        question ? "justify-between" : "justify-end"
      }`}
    >
      {question && (
        <>
          <div className="border-b-2 border-grey-400">
            <div>
              <p className="uppercase text-sm font-medium text-gray-500">
                Question
                <Button
                  className="float-right"
                  variant="ghost"
                  size="sm"
                  onClick={onClear}
                >
                  Clear
                </Button>
              </p>
              <div className="my-6 text-2xl text-gray-700">
                <span>{question}</span>
              </div>
            </div>
            <div>
              <p className="uppercase text-sm font-medium text-gray-500">
                Answer
              </p>
              <p className="py-6 text-base">
                <TypeAnimation
                  sequence={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet semper orci, quis convallis est. Pellentesque mollis nisi quam, quis consequat turpis tincidunt sollicitudin.",
                  ]}
                  wrapper="span"
                  speed={50}
                />
              </p>
            </div>
          </div>
          <div>
            <ComparableTable />
          </div>
        </>
      )}
      <div>
        <div className="flex w-full items-center space-x-2">
          <Input
            className="bg-gray-100"
            placeholder="Ask follow up..."
            ref={inputRef}
          />
          <Button size="icon" onClick={onSubmit}>
            <Send />
          </Button>
        </div>
        <p className="text-xs py-2 text-center text-gray-400">
          ChatGPT may produce inaccurate information about people, places, or
          facts. ChatGPT July 20 Version
        </p>
      </div>
    </div>
  );
}
