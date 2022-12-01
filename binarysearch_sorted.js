const arr=[1,3,5,8,9,11,14]

function search(arr,key){
    let left=0
    let right=arr.length-1
    
    while(true){
        let mid=(left+right)/2
        if(key<arr[mid]) right=mid-1
        else if(key>arr[mid])left=mid+1
        else return mid
        if(left>right)return -1
    }    
}

console.log("Object's index is",search(arr,5))