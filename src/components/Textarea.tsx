import { icons } from "lucide-react"
import { ClassNameValue } from "tailwind-merge"
import { ComponentProps, forwardRef } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { Icon } from "@/components/Icon"

const textarea = tv({
  slots: {
    container: "max-w-[45rem] h-32 relative group",
    base: [
      "peer w-full h-full bg-slate-200 py-3 px-4 indent-8 outline-none rounded resize-none",
      "text-lg placeholder:text-slate-500",
      "transition-colors border-2 enabled:group-hover:border-blue-600",
      "focus:border-blue-600",
      "disabled:opacity-50",
      "[&:not(:placeholder-shown)]:border-blue-600",

      "dark:bg-section dark:border-[1.5px]",
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
        base: "border-red-500 dark:border-red-600",
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
    classNameContainer?: ClassNameValue
  }

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      error,
      nameIcon = "MessageSquare",
      className,
      classNameContainer,
      ...rest
    },
    ref
  ) => {
    const hasError = !!error
    const { container, base, icon, errorContainer, errorIcon, errorMessage } =
      textarea({ className, hasError })

    return (
      <div className={container({ className: classNameContainer })}>
        <label>
          <textarea className={base()} ref={ref} {...rest} />

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
)

Textarea.displayName = "Textarea"
