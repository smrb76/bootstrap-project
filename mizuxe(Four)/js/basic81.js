function main (int){
    const str = int + "";
    let arr = str.split('');
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        res += Number(arr[i]);//parsInt(string sentence)
    }
    console.log(res);
}
main(25);