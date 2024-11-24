import { Flag, GenericFlagItem, flags } from "react-beauty-flags"

import { SearchParams } from "@/types/params"
import CopySnippet from "@/components/CopySnippet"
import FlagsList from "@/components/FlagsList/FlagsList"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const q = (await searchParams)[SearchParams.search]

  // flags that name, code or type contains the search query
  const filteredFlags: GenericFlagItem[] = flags.filter((flag) => {
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
    <div className="flex justify-center font-[family-name:var(--font-geist-sans)] ">
      <div className="flex flex-col gap-8 items-center justify-center max-w-4xl w-full p-4 md:p-10 pt-20">
        <header className="flex flex-col gap-10 justify-center items-center py-20">
          <div className="flex gap-10 pt-20">
            <Flag code="Es" className="w-[40px] mb-0" />
            <Flag code="Br" className="w-[30px] mb-4" />
            <Flag code="De" className="w-[80px] mb-2" />
            <Flag code="Ve" className="w-[60px] mb-6" />
          </div>

          <hgroup className="flex flex-col gap-2 items-center">
            <h1 className="text-5xl font-light">React Beauty Flags</h1>
            <h2 className="text-lg">Fancy flags from around the world</h2>
          </hgroup>

          <CopySnippet />
        </header>

        <FlagsList list={filteredFlags} />
      </div>
    </div>
  )
}
