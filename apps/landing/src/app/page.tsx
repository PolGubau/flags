import { FlagData, flags } from "react-beauty-flags"

import { SearchParams } from "@/types/params"
import CopySnippet from "@/components/CopySnippet"
import ExampleFlags from "@/components/ExampleFlags"
import FlagsList from "@/components/FlagsList/FlagsList"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const q = (await searchParams)[SearchParams.search]

  // flags that name, code or type contains the search query
  const filteredFlags: FlagData[] = flags.filter((flag) => {
    if (!q) return true
    const stringifiedQ = Array.isArray(q) ? q.join("") : q
    const search = stringifiedQ.toLowerCase()
    return (
      flag.name.toLowerCase().includes(search) ||
      flag.code.toLowerCase().includes(search) ||
      flag.type.toLowerCase().includes(search)
    )
  })

  return (
    <main className="flex flex-col gap-4 w-full">
      <header className="flex flex-col gap-10 justify-center items-center pb-20">
        <ExampleFlags />

        <hgroup className="flex flex-col gap-2 items-center">
          <h1 className="text-3xl md:text-5xl font-light text-center">
            React Beauty Flags
          </h1>
          <h2 className="text-lg text-center text-pretty">
            Fancy flags for you React projects
          </h2>
        </hgroup>

        <nav className="flex gap-2 items-center">
          <CopySnippet />
        </nav>
      </header>
      <div className="pb-20">
        <FlagsList list={filteredFlags} />
      </div>
    </main>
  )
}
