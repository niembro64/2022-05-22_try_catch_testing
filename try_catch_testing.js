try {
    console.log("Pre Ex");
    throw "myException"; // generates an exception
    console.log("Post Ex");
} catch (e) {
    // statements to handle any exceptions
    console.log(e); // pass exception object to error handler
}
