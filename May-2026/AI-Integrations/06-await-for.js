const stream = {
    count: 0,
    async next() { // built in stream function
        this.count++
        if(this.count > 5){
            return {done: true}
        }
        return {
            done: false,
            value: `Chunk ${this.count}`
        }
    },
    [Symbol.asyncIterator](){
        return this
    }
}

for await (const chunk of stream) {
  console.log(chunk);
}