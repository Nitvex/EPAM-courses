module.exports = function arrayMap(arr, fn) {
    let res=[];
    arr.reduce((acc, cur, i, arr) => {
        res.push(fn(cur))
    },[]);
    return res
};



