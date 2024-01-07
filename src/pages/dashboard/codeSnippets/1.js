const code = `
let programmer = {
    name: "Aubrey Yates",
    email: "aubreyyates999@hotmail.com",
    location: "Iowa City, IA",
    phone: "319-530-0432",
    age: 29,
};

let job = new Job();

job.hire(programmer);
job.run();

console.log(job.successful); // Prints true
`;

export default code.substring(1);
