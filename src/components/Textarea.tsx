import { icons } from "lucide-react"
import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "@/components/Icon"

const textarea = tv({
  slots: {
    container: "max-w-[46.75rem] h-32 relative group",
    base: [
      "peer w-full h-full bg-section py-3 pl-10.5 pr-4 outline-none rounded resize-none",
      "text-lg placeholder:text-slate-500",
      "transition-colors border-[1.5px] enabled:group-hover:border-blue-600",
      "focus:border-blue-600",
      "disabled:opacity-50",
      "[&:not(:placeholder-shown)]:border-blue-600",
    ],
    icon: [
      "absolute left-4 top-[18px] w-4.5 h-4.5",
      "group-focus-within:text-blue-600 peer-[&:not(:placeholder-shown)]:text-blue-600",
    ],
    errorContainer: "flex items-center gap-2 mt-2",
    errorIcon: "w-4 h-4 text-red-500",
    errorMessage: "text-sm text-red-500",
  },

  variants: {
    hasError: {
      false: {
        base: "border-transparent",
        icon: "text-slate-500",
      },
      true: {
        base: "border-red-600",
        icon: "text-red-600",
      },
    },
  },

  defaultVariants: {
    hasError: false,
  },
})

type TextareaProps = ComponentProps<"textarea"> &
  VariantProps<typeof textarea> & {
    error?: string
    nameIcon?: keyof typeof icons
  }

export function Textarea({
  error,
  nameIcon = "MessageSquare",
  className,
  ...rest
}: TextareaProps) {
  const hasError = !!error
  const { container, base, icon, errorContainer, errorIcon, errorMessage } =
    textarea({ className, hasError })

  return (
    <div className={container()}>
      <label>
        <textarea className={base()} {...rest} />

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
