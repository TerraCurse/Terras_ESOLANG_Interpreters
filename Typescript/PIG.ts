async function Interprete(code: string) {
    const encoder = new TextEncoder();
    const splitted = code.split("PIG")
    const splitted2 = splitted.slice(1);
    const path = "./" + splitted[0]
    await Deno.writeFile(path, encoder.encode(splitted2.join("PIG")))
    console.log("Success")
}

REPL();
function REPL() {
    console.log("PIG Typescript REPL v0.1")
    while (true) {
        const input = prompt(";")
        if (!input || input == "exit") {
            Deno.exit(1)
        }else {
            Interprete(input)
        }
    }
}
