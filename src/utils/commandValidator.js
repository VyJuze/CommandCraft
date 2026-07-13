

export const normalize = (command) => {
  return command.trim().toLowerCase().replace(/\s+/g, " ");
}

export const validateCommand = (command, acceptedCommands) => {
  const normalizedCommand = normalize(command)
  return acceptedCommands.some((acceptedCommand) => normalizedCommand === normalize(acceptedCommand))
  
}