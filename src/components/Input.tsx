import { icons } from "lucide-react"
import { ComponentProps } from "react"
import { ClassNameValue } from "tailwind-merge"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "@/components/Icon"

const input = tv({
  slots: {
    container: "relative group",
    base: [
      "peer w-full bg-section py-3 outline-none rounded",
      "text-lg placeholder:text-slate-500",
      "transition-colors border-[1.5px]",
      "focus:border-blue-600",
      "disabled:opacity-50",
      "[&:not(:placeholder-shown)]:border-blue-600",
    ],
    icon: [
      "absolute top-[18px] w-4.5 h-4.5",
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
      false: {
        base: "border-transparent enabled:group-hover:border-blue-600",
        icon: "text-slate-500 ",
      },
      true: {
        base: "border-red-600 enabled:group-hover:border-red-700",
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
    nameIcon?: keyof typeof icons
    classNameContainer?: ClassNameValue
  }

export function Input({
  error,
  nameIcon = "User",
  variant,
  className,
  classNameContainer,
  ...rest
}: InputProps) {
  const hasError = !!error
  const { container, base, icon, errorContainer, errorIcon, errorMessage } =
    input({ className, hasError, variant })

  return (
    <div className={container({ className: classNameContainer })}>
      <label>
        <input className={base()} {...rest} />

        <Icon name={nameIcon} className={icon()} />

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
