var delay = (second, callback) => {
  if (second > 3) {
    callback(new Error("It took too long"));
  } else {
    setTimeout(() => callback(null, `It took ${second} second`), second);
  }
};

delay(2, (error, message) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(message);
  }
});
