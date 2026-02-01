async function Interprete(code: string) {
    const encoder = new TextEncoder();
    const splitted = code.split("PIG")
    const path = "./" + splitted[0]
    await Deno.writeFile(path, encoder.encode("Your pig has unfortunately died. Please try again."))
    console.log("Success")
}

REPL();
function REPL() {
    console.log("DEADPIG Typescript REPL v0.1")
    while (true) {
        const input = prompt(";")
        if (!input || input == "exit") {
            Deno.exit(1)
        }else {
            Interprete(input)
        }
    }
}
