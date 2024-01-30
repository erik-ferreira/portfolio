export async function api<T = any>(
  input: RequestInfo | URL,
  init?: RequestInit
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api${input}`,
    init
  )

  return response as T
}
