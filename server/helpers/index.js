function generateTimestamp() {
  var date = new Date();
  date.setMilliseconds(date.getMilliseconds() + 5 * 60 * 1000);
  return date;
}

var data = [
  {
    name: "Data 1",
    value: "123",
  },
  {
    name: "Data 2",
    value: "456",
  },
];

for (var i = 0; i < data.length; i++) {
  data[i].timestamp = generateTimestamp();
}
