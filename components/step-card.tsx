import type { ReactNode } from "react";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StepCardProps = {
  step: string;
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
  badgeClassName?: string;
};

export function StepCard({
  step,
  title,
  description,
  icon,
  children,
  className,
  badgeClassName,
}: StepCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-white/70 bg-white/80 shadow-xl shadow-slate-200/70 backdrop-blur-sm",
        className
      )}
    >
      <CardHeader className="space-y-4 pb-0">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg",
              badgeClassName
            )}
          >
            {icon}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Step {step}
            </p>
            <CardTitle className="mt-1 text-xl text-slate-900">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">{children}</CardContent>
      <CardFooter className="flex-col items-start gap-2 border-t border-slate-200/80 pt-4 text-left">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
      </CardFooter>
    </Card>
  );
}