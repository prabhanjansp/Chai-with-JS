// iife
(function chai(){
    console.log('DB CONNECTED')
}
)();//iife named
(()=>{
    console.log('db connected')
})();
// need to end the line with the semicolan

// syntax()
// ()()


((name)=>{
    console.log(`db connected',${name}`)
})('prabhanjan')