import { FlagData, flags } from "react-beauty-flags"

import CopySnippet from "@/components/CopySnippet"
import ExampleFlags from "@/components/ExampleFlags"
import Filters from "@/components/Filters/Filters"
import FlagsList from "@/components/FlagsList/FlagsList"
import NoResults from "@/components/FlagsList/NoResults"

export default async function Home({ searchParams }: { searchParams: any }) {
  const q = searchParams?.q ?? null

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
    <main className="w-full">
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

        <CopySnippet />
      </header>
      <div className="pb-20 gap-6 md:gap-20 flex flex-col items-center">
        <Filters />
        {filteredFlags.length > 0 ? (
          <FlagsList list={filteredFlags} />
        ) : (
          <NoResults q={searchParams.q?.toString() ?? ""} />
        )}
      </div>
    </main>
  )
}
