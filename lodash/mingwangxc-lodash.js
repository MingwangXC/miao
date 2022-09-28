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
  },



  flatten: function (array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
      var item = array[i]
      result = result.concat(item)
    }
    return result
  },




  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },


  compact : function (array) {
    var count = []
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        count.push(array[i])
      }
    }
    return count
  },


  drop : function (array, n = 1) {
    var count = []
    for (var i = n; i < array.length; i++) {
      count.push(array[i])
    }
    return count
  },


  head : function (array) {
    if (array == null){

    }else {
      return array[0]
    }

  },


  indexOf: function (array,searchElement,fromIndex = 0) {
    n = fromIndex
    if (n < 0) {
      n = array.length + n
    }
    for (var i = n; i < array.length;i++) {
      if (array[i] === searchElement) {
        return i
      }
    }
    return -1
  },



  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },



  join : function (array,char = `,`) {
    var sum = ``
    for (var i = 0; i < array.length - 1; i++) {
      sum = sum + String(array[i])  + char
    }
    return sum + String(array[i])
  },



  last : function (array) {
    if (array.length == 0) {
      return array
    }
    return (array[array.length - 1])
  },





  pull: function (array, ...values) {
    var newAry = []
    for (var i = 0; i < array.length; i++) {
      if (values.includes(array[i])) {

      } else {
        newAry.push(array[i])
      }
    }
    return newAry
  },

}
