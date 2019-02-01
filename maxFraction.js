maxFraction = (n, d) =>{
    r = 0
    m = n[0]/d[0]
    for(i = 0;i<n.length;i++){
        if(m < n[i]/d[i]){
            r = i
            m = n[i]/d[i]
        }
    }
    return r
}

/***
Given a list of fractions, find the index of the largest one (0-based). It is guaranteed that there are no equal fractions in the input.

Example

For numerators = [5, 2, 5] and denominators = [6, 3, 4], the output should be
maxFraction(numerators, denominators) = 2.

5/4 is the largest fraction, so the answer is 2.
*/
