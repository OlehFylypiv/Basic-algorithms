function searchWords(str) {
    
    let buff = str.split('WUB').join(' ');
    
    if (buff.indexOf('WUB') !== -1) {
        return searchWords(buff);
    }

    return buff;
}


const str = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB';

console.log(searchWords(str));