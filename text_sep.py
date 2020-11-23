import sys

f_1 = open("C:\dev\usercode.txt", 'r')
lines = f_1.readlines()
f_2 = open("C:\dev\usercode2.txt", 'w')

for line in lines:
    item = line.split("'")
    print(item[1])
    f_2.write("\n")
    f_2.write(item[1])




