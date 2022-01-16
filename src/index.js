module.exports = function check(str, bracketsConfig) {
  let openArr = []
  let closeArr = []
  let newObj = {}

  bracketsConfig.map(i => {
    openArr.push(i[0])
    closeArr.push(i[1])
    newObj[i[1]] = i[0]
  })

  let stack = []

  for (let i = 0; i < str.length; i++) {
    let current = str[i]
    let topEl = stack[stack.length - 1]

    if (openArr.includes(current) && closeArr.includes(current)) {
      if (topEl === current) {
        stack.pop()
      } else {
        stack.push(current)
      }
    } else if (openArr.includes(current)) {
      stack.push(current)
    } else {
      if (stack.length === 0) {
        return false
      }

      if (newObj[current] === topEl) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}