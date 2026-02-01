import sys
import string
def interprete(code:str):
    acc = 0
    for chara in code:
        if chara == "i":
            if (acc + 1) > 255:
                acc = 0
            else:
                acc += 1
        elif chara == "d":
            if (acc - 1) < 0:
                acc = 255
            else:
                acc -= 1
        elif chara == "s":
            if (acc * acc) > 255:
                acc = 0
            else:
                acc = (acc * acc)
        elif chara == "o":
            print(chr(acc),end="")
        elif chara == "r":
            acc = 0


if len(sys.argv) > 1:
    if sys.argv[1].endswith(".tdf"):
        print("Running " + sys.argv[1] + "...")
        with open(sys.argv[1]) as f:
            data = f.read().rstrip()
            interprete(data)
        print("\n")
        input("Press enter to exit.")
    else:
        print("Inputted file is not a (Terras) DeadFish file.")
else:
    print("TPDFI Console Mode, Input will be interpreted as DeadFish code.")
    while True:
        try:
            inp = input(">")
            interprete(inp)
            print("\n")
        except KeyboardInterrupt:
            print("Exitting TPDFI console.")
            exit()
