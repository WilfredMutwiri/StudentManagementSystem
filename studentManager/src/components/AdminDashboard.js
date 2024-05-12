import { Button } from 'flowbite-react';
import profilePic from '../images/c42342e7743a6b9de0a54a599a591043.jpg'
import { Link } from 'react-router-dom';
const AdminDashboard = () => {
    return (
        <div>
            <div>
            <div className="flex justify-between">
            <div className="flex p-3">
                <span className="text-orange-500 text-2xl bg-black p-1 rounded-md">X</span>
                <h2 className="text-pink-700 text-2xl p-1">Manager</h2>
            </div>
            <div className="flex gap-3 pr-5 pt-2">
                <h2 className='pt-2'>Admin</h2>
                <span className="text-pink-600 pt-2">@mark</span>
                <div>
                    <Link to="/login">
                    <Button gradientDuoTone='pinkToOrange'>Logout</Button>
                    </Link>
                </div>
            </div>
            </div>
            </div>
            <hr />
            <section>
                <div className="flex w-11/12 m-auto mt-10">
                <div className="bg-gray-200 rounded-md p-4 shadow-sm shadow-pink-500 ">
                    <div>
                        <img className='h-36 rounded-full' src={profilePic}/>
                    </div>
                    <h2 className='text-center p-3'>Admin <span className='text-pink-500'>@Mark</span></h2>
                    <div className='pt-4'>
                        <ul className='flex flex-col gap-5 text-center'>
                            <li className='p-2 hover:bg-gray-100 rounded-md text-orange-500 hover:text-pink-500 cursor-pointer'>Teachers</li>
                            <li className='p-2 hover:bg-gray-100 rounded-md text-orange-500 hover:text-pink-500 cursor-pointer'>Classes</li>
                            <li className='p-2 hover:bg-gray-100 rounded-md text-orange-500 hover:text-pink-500 cursor-pointer'>Workers</li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
                </div>
            </section>
        </div>
    );
}
 
export default AdminDashboard;