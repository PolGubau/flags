"use client";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { DarkThemeToggle, PoluiProvider } from "pol-ui";
import type { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <PoluiProvider>
      <DarkThemeToggle className="fixed right-4 top-4" />
      <div className="flex justify-center font-[family-name:var(--font-geist-sans)] ">
        <div className="flex flex-col gap-8 overflow-x-hidden items-center justify-center max-w-4xl w-full p-4 md:p-10 pt-20 md:pt-40">
          <NuqsAdapter>{children}</NuqsAdapter>
        </div>
      </div>
    </PoluiProvider>
  );
};
