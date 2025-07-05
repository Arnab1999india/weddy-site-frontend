import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const [month, setMonth] = React.useState<Date>(props.month ?? new Date());

  return (
    <div className="relative">
      <div className="flex justify-between mb-2">
        <button
          className={buttonVariants({ variant: "outline" })}
          onClick={() =>
            setMonth(new Date(month.getFullYear(), month.getMonth() - 1))
          }
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          className={buttonVariants({ variant: "outline" })}
          onClick={() =>
            setMonth(new Date(month.getFullYear(), month.getMonth() + 1))
          }
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <DayPicker
        month={month}
        onMonthChange={setMonth}
        showOutsideDays={showOutsideDays}
        className={cn("p-3", className)}
        classNames={{
          // ...your classNames...
          ...classNames,
        }}
        {...props}
      />
    </div>
  );
}

export { Calendar };
