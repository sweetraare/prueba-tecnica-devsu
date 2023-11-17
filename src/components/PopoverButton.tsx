import { Popover } from "@headlessui/react";

interface PopoverButtonProps {
  options: string[];
  onOptionSelected: (option: string) => void;
}

function PopoverButton({ options, onOptionSelected }: PopoverButtonProps) {
  return (
    <Popover className="">
      <Popover.Button>
        ...
      </Popover.Button>

      <Popover.Panel className="absolute z-10 mr-10">
        <div className="flex flex-col bg-slate-100 absolute">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onOptionSelected(option)}
              className="p-2"
            >
              {option}
            </button>
          ))}
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
}

export default PopoverButton;
