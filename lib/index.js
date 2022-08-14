const plugin = (options = {}) => tree => {
  const {prefix,replace} = options || {}
  const process = node => {
    // Write your code...
    if (node.attrs && node.attrs.class) {
      if(node.attrs.class.includes(prefix) && !node.attrs.class.includes(replace)){
        const reg = new RegExp(`(^|(\\s)*)\\${prefix}(?!icon)`, 'g')
        node.attrs.class = node.attrs.class.replace(reg, `$1${replace}`)
      }
    }
    // Return the node
    return node
  }

  return tree.walk(process)
}

export default plugin
