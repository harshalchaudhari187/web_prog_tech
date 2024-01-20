var date = new Date(2012, 0, 3);
//Write a function getWeekDay(date) to show the weekday in short format: ‘Mon’, ‘Tue’, ‘Wed’, ‘Thurs’,‘Fri’, ‘Sat’, ‘Sun’.

const getWeekDay = (date) => {
  var day = date.getDay();
  switch (day) {
    case 0:
      console.log("Sun");
      break;
    case 1:
      console.log("Mon");
      break;
    case 2:
      console.log("Tue");
      break;
    case 3:
      console.log("Wed");
      break;
    case 4:
      console.log("Thu");
      break;
    case 5:
      console.log("Fri");
      break;
    case 6:
      console.log("Sat");
      break;
  }
};

getWeekDay(date);
