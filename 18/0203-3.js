function solution(s, n) {
    let string = ""; 
    for (let i=0; i<s.length;i++) { 
        if ( s[i] == ' ' ) 
            string += ' ' 
        else 
            string += String.fromCharCode( (s.charCodeAt(i)>90) ? (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 ) 
    } 
    return string;
}

console.log(solution('ABcd', 1))