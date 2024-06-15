import {Link,useNavigate} from 'react-router-dom'
import {Button, Label, TextInput} from 'flowbite-react'
const Login = () => {

    return (
        <div className="w-full">
            <hr/>
            <div className="block md:flex w-10/12 pt-20 m-auto gap-5">
                <div className='flex-1'>
                <div className="flex p-3">
                <span className="text-orange-500 text-2xl bg-black p-2 rounded-md">J</span>
                <h2 className="text-pink-700 text-2xl p-2">abana</h2>
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
                        <Link to="/admin">
                        <Button  gradientDuoTone='pinkToOrange'className='w-full'>Login</Button>
                        </Link>
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