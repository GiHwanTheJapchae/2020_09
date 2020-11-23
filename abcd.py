import sys
import time

start_time = time.time()
flytime = 0
i = 4

while flytime <=10:
    flytime = time.time() - start_time
    print(flytime)
