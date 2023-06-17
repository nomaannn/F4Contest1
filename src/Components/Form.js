import './Form.css'
import {useState} from 'react'



function Form(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcpassword] = useState('');
    const [err, setErr] = useState('');
    let bol;
function submit(e){
    e.preventDefault()
    console.log(name,email,password,cpassword)
    if(name==='' && email===''&&password===''&&cpassword===''){
        setErr("All fields are mandatory")
        bol = true
        console.log(bol)
    }
    else if(password!==cpassword){
        setErr("Password is not matching")
        bol = true
    }
    else{
        setErr("Successfully Signed Up!")
        bol = false
    }
}


    return(
      <div className='main'>
        <div>
        <h1>Signup</h1>
        <form onSubmit={submit} className='form'>
            <div>
            <input type='text' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
            <input type='password' placeholder='Confirm Password' onChange={(e)=>setcpassword(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
        <div className='err'>{err}</div>
        
        </div>
      </div>
    )
  }
  
  export default Form