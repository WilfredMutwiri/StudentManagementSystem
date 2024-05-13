import {Link,useNavigate} from 'react-router-dom'
import {Button, Label, TextInput} from 'flowbite-react'
const Login = () => {
    const  navigate=useNavigate();
    const handleLogin=()=>{
        let userSelect=prompt("Login as 1.Admin, 2.User (select 1 or 2)")
        if(userSelect=1){
            let adminConfirm=prompt("Enter admin login password")
            if(adminConfirm=1234){
                navigate('/admin')
            }
        }
    }
    return (
        <div className="w-full">
            <div className="flex p-3">
            <span className="text-orange-500 text-2xl bg-black p-1 rounded-md">X</span>
            <h2 className="text-pink-700 text-2xl p-1">Manager</h2>
            </div>
            <hr />
            <div className="block md:flex w-10/12 pt-20 m-auto gap-5">
                <div className='flex-1'>
                <div className="flex p-3">
                <span className="text-orange-500 text-2xl bg-black p-2 rounded-md">X</span>
                <h2 className="text-pink-700 text-2xl p-2">Manager</h2>
                </div>  
                <p>
                    Your ultimate school manager, send sms to your students'parents, teachers and other workers with ease,
                    Login today with your email and password to get access to enjoy our services!
                </p>
                </div>
                <div className='flex-1'>
                    <form className='flex flex-col gap-3'>
                        <Label value='Your Username'/>
                        <TextInput placeholder='mark' type='text'/>
                        <Label value='Your Email'/>
                        <TextInput placeholder='mark@gmail.com' type='email'/>
                        <Label value='Your Password'/>
                        <TextInput placeholder='*******' type='password'/>
                        <Button onClick={handleLogin} gradientDuoTone='pinkToOrange'>Login</Button>
                    </form>
                    <p className='pt-3 text-sm'>
                        Don't have an account? <span className='text-blue-600'><a href='/Signup'>Create Account</a></span>
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Login