
const fizzbuzz = (no: number): any => {
  if(no % 3 === 0 && no % 5 === 0) {
    return 'fizzbuzz'
  }

  if(no % 3 == 0) {
    return 'fizz'
  }

  if(no % 5 == 0) {
    return 'buzz'
  }

  return no
} 

export default fizzbuzz;