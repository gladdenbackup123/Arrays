function generate(s,curr,i){
    //base case 
    if(i==s.length){
        console.log(curr);
        return
    }

    //take
    generate(s,curr+s[i],i+1)
    //leave 
    generate(s,curr,i+1)
}

let s = "cat";
generate(s,"",0);