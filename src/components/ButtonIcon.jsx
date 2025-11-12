import { CircleFadingArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <CircleFadingArrowUpIcon className="h-5 w-5" />
    </Button>
  );
}
