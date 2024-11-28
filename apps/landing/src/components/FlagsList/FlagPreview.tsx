import { parseAsString, useQueryStates } from "nuqs"
import { cn } from "pol-ui"
import { Flag, FlagCode } from "react-beauty-flags"

const FlagPreview = ({ code }: { code: FlagCode }) => {
  const options = {
    rounded: [
      "rounded-none",
      "rounded-xl",
      "rounded-2xl",
      "rounded-3xl",
      "rounded-full",
    ],
    border: ["border-none", "border", "border-2", "border-4", "border-8"],
    shadow: ["shadow-none", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl"],
  }
  const [style, setStyle] = useQueryStates({
    rounded: parseAsString.withDefault(options.rounded[1]),
    shadow: parseAsString.withDefault(options.shadow[1]),
    border: parseAsString.withDefault(options.border[2]),
  })

  return (
    <div className="w-full grid grid-cols-[1fr,2fr] gap-8">
      <Flag
        code={code}
        className={cn(
          "border-secondary-200 dark:border-secondary-800 w-fit",
          style.rounded,
          style.shadow,
          style.border
        )}
        height={100}
        width={140}
      />

      <div className="flex flex-col gap-2 items-start">
        {Object.keys(options).map((o) => {
          const items: string[] = options[o as keyof typeof options]
          return (
            <ul className="grid grid-cols-6 gap-2">
              {items.map((key) => (
                <button
                  onClick={() => setStyle({ [o]: key })}
                  className={cn(
                    "border-2 border-secondary-200 dark:border-secondary-800   aspect-square w-[30px] relative overflow-hidden rounded-md",
                    {
                      "border-primary-800 dark:border-primary-200":
                        style[o as keyof typeof style] === key,
                    }
                  )}
                >
                  <li
                    className={cn(
                      "bg-secondary-400 border-secondary-700 h-[70px] w-[70px] -mt-[60px] -ml-[50px] ",
                      style.rounded,
                      style.border,
                      style.shadow,
                      key
                    )}
                  ></li>
                </button>
              ))}
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default FlagPreview
