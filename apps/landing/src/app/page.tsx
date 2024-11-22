"use client"

import {
  BrFlag,
  DeFlag,
  EsFlag,
  Flag,
  FlagCode,
  FlagsCodesEnum,
  GbFlag,
  VeFlag,
} from "react-beauty-flags"

import CopySnippet from "@/components/CopySnippet"

export default function Home() {
  return (
    <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-8 items-center justify-center">
        {/*  */}

        <div className="flex gap-10 text-background-50">
          <GbFlag className="w-[40px] pb-4" />
          <EsFlag className=" h-[70px] pb-2 " />
          <BrFlag className=" h-[30px] pb-2" />
          <DeFlag className=" h-[80px] pb-6" />
          <VeFlag className=" h-[60px] pb-3" />
        </div>

        <hgroup className="flex flex-col gap-2 items-center">
          <h1 className="text-5xl font-light">React Beauty Flags</h1>
          <h2 className="text-lg">Fancy flags from around the world</h2>
        </hgroup>

        <div className="bg-red-300">
          <CopySnippet />
        </div>

        <ul className="grid grid-cols-6 gap-4">
          {Object.keys(FlagsCodesEnum).map((flagCode) => (
            <li key={flagCode}>
              <Flag
                code={flagCode as FlagCode}
                props={{
                  width: 45,
                  height: 40,
                }}
              />
              {flagCode}
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
