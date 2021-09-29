const attendances = [
  { name: "Ahmed", attendance: 8 },
  { name: "Clement", attendance: 10 },
  { name: "Elamin", attendance: 6 },
  { name: "Adam", attendance: 7 },
  { name: "Tayoa", attendance: 11 },
  { name: "Nina", attendance: 10 },
];

// function eligibleStudents(attendances) {
//   for (var i = 0; i < attendances.length; i++) {
//     if (attendances[i].attendance >= 8) {
//       let arr = [];
//       console.log([attendances[i].name]);
//     }
//   }
// }

function eligibleStudents(attendances) {
  const arr = [];
  // for (var i = 0; i < attendances.length; i++) {
  //   if (attendances[i].attendance >= 8) {
  //     arr.push(attendances[i].name);
  //   }
  // }
  // return arr;
  attendances
    .filter((attendee) => attendee.attendance >= 8)
    .forEach((attendee) => arr.push(attendee.name));
  return arr;
}

console.log(eligibleStudents(attendances));
// eligibleStudents(attendances);
