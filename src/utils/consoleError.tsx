export const enableConsoleError = (consoleError: any) => {
  console.error = consoleError
}

export const disableConsoleError = () => {
  const consoleError = console.error
  console.error = () => false
  return consoleError
}
