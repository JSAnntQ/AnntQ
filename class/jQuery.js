function func() {
  try {
    if (true) {
      return { a: 1 }
    }
  } catch (error) {
    return {
      msg: error
    }
  }
}

console.log(func());
