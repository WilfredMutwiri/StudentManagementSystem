const Login = () => {
    return (
        <div class="w-full pt-5 pb-5 bg-gray-100">
        <div class="w-[80%] md:w-[30%] bg-gray-300 p-5 m-auto mt-10 mb-10 shadow-md rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 m-auto -mt-16 bg-gray-100 rounded-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <form action="" class="justify-center">
            <label htmlFor="" class="text-lg">Username</label> <br></br>
            <input type="text" class="p-1 w-full md:w-64" placeholder="e.g Mark Juma"/><br></br>
            <label htmlFor="" class="text-lg">Password</label><br></br>
            <input type="password" class="p-1 w-full md:w-64" placeholder="Enter password" required /><br></br>
            <button class="bg-red-700 p-2 mt-5 w-24 text-white">Login</button>
        </form>
        <p class="pt-5">Don't have an account? <a href="#" class="text-blue-700 hover:text-red-600">Create Account</a></p>
        </div>
        </div>
    );
}
 
export default Login;