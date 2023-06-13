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

async function isAdmissionPossible() {
    try {
        const data = await lpuFunction(300, 700);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

isAdmissionPossible();
