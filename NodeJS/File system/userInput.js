const fs = require("fs");
const yargs = require("yargs");

const NOTE_FILE = "notes.json";

//store list of notes

// function getNotes() {
//     fs.readFile(NODE_FILE, {encoding: "utf-8"}, (err, data) => {
//         if(!err) {
//             let notes = JSON.parse(data);
//             console.log(notes);
//         }
//     })
// }
function getNotes() {
    try {
        let notes = fs.readFileSync(NOTE_FILE, { encoding: "utf-8" });
        return JSON.parse(notes);
    } catch (err) {
        return [];
    }
}

function addNewNote(note) {
    let notes = getNotes();
    notes.push(note);
    fs.writeFileSync(NOTE_FILE, JSON.stringify(notes));
}

yargs.version("2.1.0");

yargs.command({
    command: "add",
    describe: "This command add a new note",
    builder: {
        title: {
            describe: "This represents the title of the note",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "This represents the body of the note",
            demandOption: true,
            type: "string",
        },
    },
    handler: (args) => {
        let { title, body } = args;
        let notes = getNotes();
        notes.forEach((note) => {
            if (note.title == title) {
                console.log("Change title");
            }
        });
        let note = { title, body };
        addNewNote(note);
        // console.log(args);
    },
});

yargs.command({
    command: "list",
    describe: "This is used to list all notes",
    handler: () => {
        let notes = getNotes();
        notes.forEach((note) => {
            console.log(`NOTE:
            Title: ${note.title}
            Body: ${note.body}`);
        });
    },
});

yargs.command({
    command: "delete",
    describe: "This is used to delete a note",
    handler: (args) => {
        let { title, body } = args;
        let notes = getNotes();
        notes = notes.filter((note) => {
            if (note.title != title) {
                console.log(`Updated Notes: ${notes}`);
            } else {
                console.log("Title not found");
            }
        });
    },
});

yargs.parse();
