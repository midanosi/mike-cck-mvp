cronAdd("hello", "*/30 * * * *", () => {
    console.log("Hello, it's been 30minutes!")
})