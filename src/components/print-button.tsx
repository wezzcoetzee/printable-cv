"use client";

import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";

export function PrintButton() {
  return (
    <Button
      className="h-9 gap-x-1.5 px-3 font-mono text-xs"
      variant="outline"
      onClick={() => window.print()}
    >
      <PrinterIcon className="size-4" />
      Print
    </Button>
  );
}
