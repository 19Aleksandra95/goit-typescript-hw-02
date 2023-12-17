/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDay):boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

if(isWeekend(WeekDay.Wednesday)) {
  console.log("Free day to you!")
} else {
  console.log("You must go to work 😮‍💨 ")
}