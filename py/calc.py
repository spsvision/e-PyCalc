from __future__ import print_function
import sys

def getPrec(c):
    if c in "+-":
        return 1
    if c in "*/":
        return 2
    if c in "^":
        return 3
    return 0

def getAssoc(c):
    if c in "+-*/":
        return "LEFT"
    if c in "^":
        return "RIGHT"
    return "LEFT"

def getBin(op, a, b):
    if op == '+':
        return a + b
    if op == '-':
        return a - b
    if op == '*':
        return a * b
    if op == '/':
        return a / b
    if op == '^':
        return a ** b
    return 0

def calcs(s):
    numStk = []
    opStk = []
    i = 0
    isUnary = True
    while (i < len(s)):
        while (i < len(s) and s[i] == ' '):
            i += 1
        if (i >= len(s)):
            break
        if (s[i].isdigit()):
            num = ''
            while (i < len(s) and (s[i].isdigit() or s[i] == '.')):
                num += s[i]
                i += 1
            numStk.append(float(num))
            isUnary = False
            continue

        if (s[i] in "+-*/^"):
            if isUnary:
                opStk.append('#')
            else:
                while (len(opStk) > 0):
                    if ((getAssoc(s[i]) == "LEFT" and getPrec(s[i]) <= getPrec(opStk[-1])) or 
                        (getAssoc(s[i]) == "RIGHT" and getPrec(s[i]) < getPrec(opStk[-1]))):
                        op = opStk.pop()
                        if op == '#':
                            numStk.append(-numStk.pop())
                        else:
                            b = numStk.pop()
                            a = numStk.pop()
                            numStk.append(getBin(op, a, b))
                        continue
                    break
                opStk.append(s[i])
            isUnary = True
        elif (s[i] == '('):
            opStk.append(s[i])
            isUnary = True
        else:
            while (len(opStk) > 0):
                op = opStk.pop()
                if (op == '('):
                    break
                if op == '#':
                    numStk.append(-numStk.pop())
                else:
                    b = numStk.pop()
                    a = numStk.pop()
                    numStk.append(getBin(op, a, b))
        i += 1

    while (len(opStk) > 0):
        op = opStk.pop()
        if op == '#':
            numStk.append(-numStk.pop())
        else:
            b = numStk.pop()
            a = numStk.pop()
            numStk.append(getBin(op, a, b))

    return numStk.pop()


calc = sys.argv[1]
if calc:
    print(calcs(calc))
    sys.stdout.flush()
