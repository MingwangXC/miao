var mingwangxc = {
  chunk: function (array, size = 1) {
    var result = []
    var level = []
    var j = 0
    for (i = 0; i < array.length; i++) {
      level.push(array[i]);
      j++
      if (j >= size) {
        j = 0
        result.push(level)
        level = []
      }
    }
    if (j != 0) {
      result.push(level)
    }
    return result
  }
}
