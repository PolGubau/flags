import Link from "next/link"
import Docs from "@/markdown/docs.mdx"

const Page = () => {
  return (
    <section className="flex flex-col gap-10">
      <header className="flex flex-col gap-1">
        <Link
          href="/"
          passHref
          className="underline underline-offset-1 flex gap-1 items-center group decoration-wavy decoration-primary"
        >
          Back to Home
        </Link>
        <hgroup>
          <h1 className="text-5xl font-light">React Beauty Flags</h1>
          <h2 className="text-3xl opacity-75 font-light">Documentation</h2>
        </hgroup>
      </header>
      <Docs />
    </section>
  )
}

export default Page
