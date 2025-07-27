// https://leetcode.com/problems/time-needed-to-buy-tickets/

var timeRequiredToBuy = function(tickets, k) {
    //put everyone in the queue
    let n = tickets.length;
    let q = [];
    for(let i=0 ; i<n ; i++)
        q.push(i)

    let time = 0;
    
    while(tickets[k]!=0){
        let person = q.shift();
        tickets[person] -= 1; 
        time += 1;

        if(tickets[person]>0)
            q.push(person);
    }
    return time;
};