import { Flag, FlagData, flags } from "react-beauty-flags"

import { SearchParams } from "@/types/params"
import CopySnippet from "@/components/CopySnippet"
import FlagsList from "@/components/FlagsList/FlagsList"
import Footer from "@/components/footer"

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
    <div className="flex flex-col gap-4 w-full">
      <header className="flex flex-col gap-10 justify-center items-center pb-20">
        <div className="flex gap-10 pt-20 h-full">
          <Flag
            code="Se"
            className="-rotate-6 shadow-lg rounded-md"
            width={28 * 1.3}
            height={20 * 1.3}
          />
          <Flag
            code="Es"
            className="shadow-lg rounded-lg"
            width={28 * 2.5}
            height={20 * 2.5}
          />
          <Flag
            code="De"
            className="shadow-lg rounded-lg"
            width={28 * 2.0}
            height={20 * 2.0}
          />
          <Flag
            code="Ve"
            className="rotate-12 shadow-lg rounded-md"
            width={28 * 1.5}
            height={20 * 1.5}
          />
        </div>

        <hgroup className="flex flex-col gap-2 items-center">
          <h1 className="text-5xl font-light">React Beauty Flags</h1>
          <h2 className="text-lg">Fancy flags for you React projects</h2>
        </hgroup>

        <nav className="flex gap-2 items-center">
          <CopySnippet />
        </nav>
      </header>
      <main className="pb-20">
        <FlagsList list={filteredFlags} />
      </main>

      <div className="w-full sticky bottom-0 p-3 bg-secondary-50/40 dark:bg-secondary-900/40 backdrop-blur-md ">
        <p className="text-center text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://polgubau.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pol Gubau Amores
          </a>
        </p>
      </div>
      <Footer />
    </div>
  )
}
