function aboba(str) {
    const a = /\d/g;
    return( str.replace(a, '!'));
    
}

console.log(aboba('fdhg4s9dr84yhgsr'))