const phoneNumber = tel => {
    const text = '*'
    const l = tel.length - 4
    return text.repeat(l) + tel.substr(l , 4)
}

console.log(phoneNumber('01012345678'))