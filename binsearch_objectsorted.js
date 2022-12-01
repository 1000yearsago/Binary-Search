const arr=[
    {name:"John",age:13},
    {name:"Ana",age:15},
    {name:"Ana",age:20},
]

function search(arr,key){
    let left=0
    let right=arr.length-1
    
    while(true){
        let mid=(left+right)/2
        if(key<arr[mid].age) right=mid-1
        else if(key>arr[mid].age)left=mid+1
        else return mid
        if(left>right)return -1
    }    
}

console.log("Object's index is",search(arr,15))
