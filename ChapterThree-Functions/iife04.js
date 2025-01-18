// iife
(function chai(){
    console.log('DB CONNECTED')
}
)();//iife named
(()=>{
    console.log('db connected')
})();
// need to end the line with the semicolan
// that means need to complete one section complete

// syntax()
// ()() 


((name)=>{
    console.log(`db connected',${name}`)
})('prabhanjan')