import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="w-full bg-gradient-to-r from-orange-100 to-green-100 pt-10 pb-10 font-serif">
            <div class="flex justify-evenly">
            <h2 class="text-xl font-bold text-center text-orange-500">Student Management System</h2>
            <Link to="/Login"><button class="bg-green-600 rounded-md p-1 text-white hover:bg-orange-500">Logout</button></Link>
            </div>
            <hr/>
            <div class="w-10/12 m-auto">
                <h2 class="text-lg text-green-600 font-semibold  text-center pt-5">Send Message:</h2>
                <form action="" class="block md:flex pt-5">
                    <div>
                        <label>Student Id:</label><br/>
                        <input type="text" placeholder="S001" class="p-1 rounded-md w-64 shadow-sm shadow-green-300 bg-white" required /><br/>
                        <label>Student Name</label><br/>
                        <input type="text" placeholder="John Kamau" class="p-1 rounded-md w-64 shadow-sm shadow-green-300 bg-white" required/><br/>
                        <label>Parent Phone No:</label><br/>
                        <input type="number" placeholder="+2547-----" class="p-1 rounded-md w-64 shadow-sm shadow-green-300 bg-white" required/><br/>
                    </div>
                    <div class="ml-0 md:ml-36">
                        <label>Message:</label><br/>
                        <textarea name="" id="" cols="30" rows="10" class="p-2 rounded-md w-64 shadow-sm shadow-green-300 bg-white" placeholder="Dear Parent..."></textarea><br/>
                        <button class="bg-orange-500 p-2 text-white hover:bg-green-600 rounded-md w-64 mt-3">Send Message</button>
                    </div>
                </form>
            </div>
            <hr class="mt-5" />
            <section>
                <div class="w-10/12 m-auto block md:flex">
                    <div class="block">
                        <h2 class="pt-5 text-green-600 font-semibold pb-3">Add New Student</h2>
                        <form action="">
                            <label>First Name</label><br/>
                            <input type="text" placeholder="John" class="p-1 rounded-md w-64 shadow-sm shadow-orange-300 bg-white" required /><br/>
                            <label>Last Name</label><br/>
                            <input type="text" placeholder="Kamau" class="p-1 rounded-md w-64 shadow-sm shadow-orange-300 bg-white" required /><br/>
                            <label>Parent Phone No:</label><br/>
                            <input type="number" placeholder="+2547----" class="p-1 rounded-md w-64 shadow-sm shadow-orange-300 bg-white" required/><br/>
                            <label>Student Id</label><br/>
                            <input type="text" placeholder="S001" class="p-1 rounded-md w-64 shadow-sm shadow-orange-300 bg-white" required/><br/>
                            <button class="bg-orange-500 p-2 text-white hover:bg-green-600 rounded-md w-64 mt-3">Add Student</button>
                        </form>
                    </div>
                    <div class="ml-0 md:ml-36">
                    <h2 class="pt-5 text-green-600 font-semibold pb-3">Available Students</h2>
                    <ul>
                        <li>
                            <p>
                            Name:James Juma<br/>
                            Student Id:S001<br/>
                            Parent Phone No: +254734567567
                            </p>
                        </li><br/>
                        <li>
                        Name:Aisha Pendo<br/>
                        Student Id:S002<br/>
                        Parent Phone No: +254746467867
                        </li><br/>
                        <li>
                        Name:Jackline Mwende<br/>
                        Student Id:S003<br/>
                        Parent Phone No: +254738977567
                        </li><br/>
                    </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

 
export default Home;
