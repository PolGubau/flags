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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        {/* css var background */}
        <ul className="flex gap-10 color-inverse">
          <li>
            <GbFlag className="w-[40px] pb-4" />
          </li>
          <li>
            <EsFlag className=" h-[70px] pb-2 " />
          </li>
          <li>
            <BrFlag className=" h-[30px] pb-2" />
          </li>
          <li>
            <DeFlag className=" h-[80px] pb-6" />
          </li>
          <li>
            <VeFlag className=" h-[60px] pb-3" />
          </li>
        </ul>

        <hgroup className="flex flex-col gap-2 items-center">
          <h1 className="text-5xl font-light">React Beauty Flags</h1>
          <h2 className="text-lg">Fancy flags from around the world</h2>
        </hgroup>

        <CopySnippet />

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
