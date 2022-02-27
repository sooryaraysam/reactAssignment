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

pop()
{
if(this.top==-1)
console.log("underfow!!");

else
{
    console.log("Initiating Stack pop process ")
    console.log(`${this.array[this.top]} is popped`)
    this.top=this.top-1;
    
    console.log("Pop process ends ")
    return this.top;       
}
}

peek()
{
if(this.top == -1)
{
    console.log("Stack is empty")
}
else
{   
    console.log("The top element of the Stack is " + this.array[this.top]);   
}
}


}
