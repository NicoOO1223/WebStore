import string
from random import sample

c=string.hexdigits
l = 16

p = ''.join(sample(c, l))

print(p)

