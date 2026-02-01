function Interprete() {
    console.log("Success")
}

REPL();
function REPL() {
    console.log("DEAFPIG Typescript REPL v0.1")
    while (true) {
        const input = prompt(";")
        if (!input || input == "exit") {
            Deno.exit(1)
        }else {
            Interprete()
        }
    }
}
