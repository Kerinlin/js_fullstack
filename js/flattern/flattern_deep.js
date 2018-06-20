function flattern(arr) {
        return arr.reduce(function (prev, next) {
            console.log(prev, next);
            return prev.concat(Array.isArray(next)?flattern(next):next);
        }, []) 
}
console.log(flattern([1,2,[3,4],[5,[6,7]]]));
