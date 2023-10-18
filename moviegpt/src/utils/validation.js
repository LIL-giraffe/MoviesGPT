export const validation=(email,password)=>{
   let emailval=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
   let pasval=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

   if(!emailval){
    return "Enter correct email"
   }
   if(!pasval){
    return "Password should begin with capital alphabet and must contain a special character"
   }

   return null
}