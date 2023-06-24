import * as Toggle from "@radix-ui/react-toggle";

export default function ToggleButton({ ...props }) {
  return (
    <Toggle.Root
      {...props}
      aria-label="Toggle price plan"
      className="group relative h-8 w-16 rounded-l-full rounded-r-full bg-brand-grey p-1">
      <span className="block h-6 w-6 rounded-full bg-brand-black transition group-data-[state=on]:translate-x-[32px]" />
    </Toggle.Root>
  );
}
