let lpuFunction = (numberOfStudents, numberOfSeatsRemaining) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numberOfSeatsRemaining > numberOfStudents) {
                resolve("Admission possible");
            } else {
                reject("Admission not possible");
            }
        }, 5000);
    });
};

function isAdmissionPossible() {
    lpuFunction(300, 700)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

isAdmissionPossible();
// const lpuFunction = (numberOfStudents, numberOfSeatsRemaining) => {
//     isAdmissionPossible(numberOfStudents, numberOfSeatsRemaining, (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("Admission Possible");
//       }
//     });
//   };

//   const isAdmissionPossible = (
//     numberOfStudents,
//     numberOfSeatsRemaining,
//     callback
//   ) => {
//     setTimeout(() => {
//       if (numberOfSeatsRemaining > numberOfStudents) {
//         callback(undefined, true);
//       }
//       return callback("Admission Not Possible");
//     }, 5 * 1000);
//   };

//   lpuFunction(700, 1000);
