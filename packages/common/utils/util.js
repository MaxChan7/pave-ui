function processComponentName(Component, { prefix = '', firstUpperCase = false } = {}) {
  const name = Component.name
  const pureName = name.replace(/^pave-/i, '')
  let camelizeName = `${prefix}${pureName}`
  if (firstUpperCase) {
    camelizeName = camelizeName.charAt(0).toUpperCase() + camelizeName.slice(1)
  }
  return camelizeName
}

export {
  processComponentName
}
