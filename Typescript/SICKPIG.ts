async function Interprete(code: string) {
    const encoder = new TextEncoder();
    const splitted = code.split("PIG")
    const sounds = ["GRUNT", "MOAN", "OINK", "BURP", "GROAN", "WHINE"]
    const path = "./" + splitted[0]
    await Deno.writeFile(path, encoder.encode(sounds[Math.floor(Math.random() * sounds.length)]))
    console.log("Success")
}

REPL();
function REPL() {
    console.log("SICKPIG Typescript REPL v0.1")
    while (true) {
        const input = prompt(";")
        if (!input || input == "exit") {
            Deno.exit(1)
        }else {
            Interprete(input)
        }
    }
}
