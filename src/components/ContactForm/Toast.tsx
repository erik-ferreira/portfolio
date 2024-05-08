import { useEffect } from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"

import { Icon } from "@/components/Icon"

import { twMerge } from "@/utils/twMerge"

export type TypeToastProps = "error" | "success"

interface ToastProps extends ToastPrimitive.ToastProps {
  typeToast?: TypeToastProps
}

export function Toast({
  className,
  typeToast = "success",
  open,
  onOpenChange,
  ...rest
}: ToastProps) {
  // To close toast after time 2.5s
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        if (onOpenChange) {
          onOpenChange(false)
        }
      }, 2500)
    }
  }, [open, onOpenChange])

  return (
    <>
      <ToastPrimitive.Root
        className={twMerge(
          "max-w-[450px] w-full bg-slate-100 rounded px-5 py-3",
          "border flex items-center gap-4",
          "data-[state=open]:animate-slideIn data-[state=closed]:animate-hide",
          "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0",
          "data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut",

          {
            "border-blue-600": typeToast === "success",
            "border-red-600": typeToast === "error",
          },

          "md:w-fit",
          "dark:bg-page"
        )}
        open={open}
        onOpenChange={onOpenChange}
        {...rest}
      >
        {typeToast === "success" ? (
          <>
            <Icon name="Check" className="text-emerald-600" />

            <div>
              <ToastPrimitive.Title className="font-bold text-base md:text-lg">
                Seu email foi enviado com sucesso!
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="text-slate-400 text-sm md:text-base">
                Entrarei em contato com você assim que possível.
              </ToastPrimitive.Description>
            </div>
          </>
        ) : (
          <>
            <Icon name="X" className="text-red-600 min-w-6 min-h-6" />

            <div>
              <ToastPrimitive.Title className="font-bold text-base md:text-lg">
                Não foi possível enviar o email!
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="text-slate-400 text-sm md:text-base">
                Você pode entrar em contato comigo através do WhatsApp em quanto
                concerto essa instabilidade.
              </ToastPrimitive.Description>
            </div>
          </>
        )}
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className="fixed top-0 right-0 p-4 max-w-[100vw] z-50 outline-none" />
    </>
  )
}
