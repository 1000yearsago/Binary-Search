const arr=[12,3,41,2,3,9,1]

function search(arr,key){
    let tmp
    
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                tmp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tmp
            }
        }
    }

    console.log('To perform function array was sorted, your array:',arr)

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

let a=search(arr,3)

console.log("Object's index is",a)
