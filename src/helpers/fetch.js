const url = ' https://node-red-nxdup.mybluemix.net/visitor';
const fecthPost = () =>{
    fetch(url , {
        method: 'POST'
    })
    .catch(err => console.log(err));
}
const fectgGet = (url ) =>{
    fetch(url );
}

export {
    fecthPost,
    fectgGet
}