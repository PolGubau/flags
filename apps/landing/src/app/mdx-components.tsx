import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: ({ children }) => {
      const idText = String(children)?.replace(/ /g, "_").toLowerCase()
      return <h2 id={idText}>{children}</h2>
    },
  }
}
