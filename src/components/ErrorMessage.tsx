import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode
}

export default function ErrorMessage({children} : ErrorMessageProps) {
  return (
    <p className=" bg-red-600 p-2 text-center text-white uppercase text-sm font-bold">{children}</p>
  )
}
