function main (str){
    const arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'a' && arr[i+4] =='b'){
            return true;
        }
    }
}
console.log(main("pane sborrowed"));


// function ab_Check(str)
//  {
//     return (/a...b/).test(str) || (/b...a/).test(str);
//  }

// console.log(ab_Check("Chainsbreak"));
// console.log(ab_Check("pane borrowed"));
// console.log(ab_Check("abCheck"));
