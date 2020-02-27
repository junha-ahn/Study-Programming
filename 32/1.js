
const star = (n) => {
for(let i = 0; i < n; i ++){
    console.log(' '.repeat(n - (i+1)) + '*'.repeat(i*2 + 1))
}
for(let j = n-1; j >= 1; j --){
    console.log(' '.repeat(n - j) + '*'.repeat(j*2 - 1))
}
}

star(5)