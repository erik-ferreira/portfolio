import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "@/components/Icon"

const input = tv({
  slots: {
    container: "relative group",
    base: [
      "peer w-full bg-section py-3 outline-none rounded",
      "text-lg placeholder:text-slate-500",
      "transition-colors border-[1.5px] border-transparent enabled:group-hover:border-blue-600",
      "focus:border-blue-600",
      "disabled:opacity-50",
      "[&:not(:placeholder-shown)]:border-blue-600",
    ],
    icon: [
      "absolute top-[18px] w-4.5 h-4.5 text-slate-500 ",
      "group-focus-within:text-blue-600 peer-[&:not(:placeholder-shown)]:text-blue-600",
    ],
    errorContainer: "flex items-center gap-2 mt-2",
    errorIcon: "w-4 h-4 text-red-500",
    errorMessage: "text-sm text-red-500",
  },

  variants: {
    variant: {
      default: {
        container: "max-w-[25rem]",
        base: "pl-10.5 pr-4",
        icon: "left-4",
      },
      search: {
        container: "max-w-[37.5rem]",
        base: "pr-10.5 pl-4",
        icon: "right-4",
      },
    },
    hasError: {
      true: {
        base: "border-red-600",
        icon: "text-red-600",
      },
    },
  },

  defaultVariants: {
    variant: "default",
    hasError: false,
  },
})

type InputProps = ComponentProps<"input"> &
  VariantProps<typeof input> & {
    error?: string
  }

export function Input({ error, variant, className, ...rest }: InputProps) {
  const hasError = !!error
  const { container, base, icon, errorContainer, errorIcon, errorMessage } =
    input({ className, hasError, variant })

  return (
    <div className={container()}>
      <label>
        <input className={base()} {...rest} />

        <Icon name="User" className={icon()} />

        {hasError && (
          <div className={errorContainer()}>
            <Icon name="AlertCircle" className={errorIcon()} />
            <span className={errorMessage()}>{error}</span>
          </div>
        )}
      </label>
    </div>
  )
}

//  <div className="relative group">
//       <label>
//         <input
//           placeholder="Nome"
//           className={twMerge(
//             "max-w-[25rem] w-full bg-section pl-10.5 pr-4 py-3 outline-none rounded text-lg placeholder:text-slate-500",
//             "transition-colors border-[1.5px] border-transparent enabled:group-hover:border-blue-600",
//             "focus:border-blue-600",
//             "disabled:opacity-50 peer [&:not(:placeholder-shown)]:border-blue-600"
//           )}
//           {...rest}
//         />

//         <Icon
//           name="User"
//           className={twMerge(
//             // "absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500",
//             "absolute left-4 top-4 w-4.5 h-4.5 text-slate-500",
//             "group-focus-within:text-blue-600 peer-[&:not(:placeholder-shown)]:text-blue-600"
//           )}
//         />

//   </label>
// </div>

{
  /* <div className="flex items-center gap-2 mt-2">
          <Icon name="AlertCircle" className="w-4 h-4 text-red-500" />
          <span className="text-sm text-red-500">Error text</span>
        </div> */
}
