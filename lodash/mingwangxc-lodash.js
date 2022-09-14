var mingwangxc = {
  chunk: function (array, size = 1) {
    var result = []
    var level = []
    var j = 0
    for (i = 0; i < array.length; i++) {
      level.push(array[i])
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



  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      result = result.concat(item)
    }
    return result
  }




  fill: function (array,value,start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  }
}
