import operators

res1 = operators.addOperator(10, 5)
res2 = operators.divideOperator(10, 5)
print(res1, res2)

from operators import addOperator, divideOperator

res3 = addOperator(20, 10)
res4 = divideOperator(20, 10)
print(res3, res4)

import operators as op

res5 = op.addOperator(30, 15)
res6 = op.divideOperator(30, 15)
print(res5, res6)