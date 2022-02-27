class Stack
{
top;
array;
total_size;

constructor(total_size)
{
    this.array=[]
    this.top = -1;
    this.total_size = total_size;             
}

push(ele)    
{
if(this.top==this.total_size-1)
{
    console.log("Cannot insert! Stack overflow")
}
else
{
    this.top = this.top + 1;
    this.array[this.top] = ele;
    console.log(`The element being pushed is ${ele}`)
    return this.top;
}
}

}
