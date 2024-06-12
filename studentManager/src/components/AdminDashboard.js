
import { IoMdClose } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { RiSchoolFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { Button, TextInput } from 'flowbite-react';
import profilePic from '../images/c42342e7743a6b9de0a54a599a591043.jpg'
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { useRef } from "react";
const AdminDashboard = () => {
    const menuRef=useRef()
    const menuIcon=useRef()
    const bodyRef=useRef()
    const handleRevealMenu=()=>{
        if(menuIcon.current  && menuRef.current){
            menuRef.current.style.display="none"
        }
    }
    return (
        <div>
            <div className=" w-full overflow-hidden ">
            <div className="flex justify-between">
            <div className="flex p-3">
                <span className="text-orange-500 text-2xl bg-black p-1 rounded-md">J</span>
                <h2 className="text-pink-700 text-2xl p-1">abana</h2>
            </div>
            <div className="flex gap-0 md:gap-3 pr-2 md:pr-5 pt-4 -ml-2 md:-ml-0">
                <h2 className='pt-2'>Admin</h2>
                <span className="text-pink-600 pt-2">@mark</span>
                <div>
                    <Link to="/login">
                    <Button gradientDuoTone='pinkToOrange'>Logout</Button>
                    </Link>
                </div>
                <CiMenuKebab className="text-2xl text-black mt-2 hidden" ref={menuIcon} onClick={handleRevealMenu}/>
            </div>
            </div>
            </div>
            <hr />
            <section>
                <div className="block md:flex w-11/12 m-auto mt-10 gap-10">
                    {/* left section */}
                <div className="bg-gray-200 rounded-md p-4 shadow-sm shadow-pink-500 w-auto mb-5 md:mb-0" ref={menuRef}>
                    <div>
                        <img className='h-36 rounded-full mx-auto' src={profilePic}/>
                    </div>
                    <h2 className='text-center p-3'>Admin <span className='text-pink-500'>@Mark</span></h2>
                    <div className='pt-4'>
                        <ul className='flex flex-col gap-5 text-center'>
                            <li className='p-2 hover:bg-gray-100 rounded-md text-orange-500 hover:text-pink-500 cursor-pointer flex gap-3'><span><FaUsers className="text-xl"/></span>Teachers <span className='text-black'>100+</span></li>
                            <li className='p-2 hover:bg-gray-100 rounded-md text-orange-500 hover:text-pink-500 cursor-pointer flex gap-3'><span><RiSchoolFill className="text-xl"/></span>Classes <span className='text-black'>24+</span></li>
                            <li className='p-2 hover:bg-gray-100 rounded-md text-orange-500 hover:text-pink-500 cursor-pointer flex gap-3'><span><GrUserWorker className="text-xl"/></span>Workers <span className='text-black'>100+</span></li>
                        </ul>
                    </div>
                    <IoMdClose className="text-center mt-4 mx-auto hidden"/>
                </div>
                {/* right section */}
                <div className="bg-gray-200 rounded-md shadow-sm shadow-pink-500 p-3 flex-1" ref={bodyRef}>
                    <h2 className="text-xl text-center font-semibold text-pink-500">Mbitini Secondary School</h2>
                    <hr/>
                    <div className="block md:grid grid-cols-3 pt-3 gap-6">
                        {/* teachers div */}
                        <div className="bg-gray-300 rounded-md p-3">
                            <h2 className="text-center font-semibold text-orange-500">Teachers Square</h2>
                            <div>
                                <h2>Send Message to:</h2>
                                <div className=" pt-3 flex flex-col gap-4">
                                    <div className="flex gap-3">
                                    <Button className="w-full">All Teachers</Button>
                                    <Button gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                    <hr />
                                    <div>
                                    <Button className="w-full">All Teachers except</Button>
                                    <TextInput type="text" className="mt-2 mb-2" placeholder="07 00 000 000"/>
                                    <Button className="w-full" gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                    <hr />
                                    <div>
                                    <Button className="w-full">Special Teacher</Button>
                                    <TextInput type="text" className="mt-2 mb-2" placeholder="07 00 000 000"/>
                                    <Button className="w-full" gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-300 rounded-md p-3 mt-6 md:mt-0"> 
                            <h2 className="text-center font-semibold text-orange-500">Students' Parents Square</h2>
                            <h2>Send Message to:</h2>
                                <div className=" pt-3 flex flex-col gap-4">
                                    <div className="flex gap-3">
                                    <Button className="w-full">All Parents</Button>
                                    <Button gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                    <hr />
                                    <div>
                                    <Button className="w-full">All Parents except</Button>
                                    <TextInput type="text" className="mt-2 mb-2" placeholder="07 00 000 000"/>
                                    <Button className="w-full" gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                    <hr />
                                    <div>
                                    <Button className="w-full">Special Parent</Button>
                                    <TextInput type="text" className="mt-2 mb-2" placeholder="07 00 000 000"/>
                                    <Button className="w-full" gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                </div>
                        </div>
                        <div className="bg-gray-300 rounded-md p-3 mt-6 md:mt-0">
                        <h2 className="text-center font-semibold text-orange-500">Workers Square</h2>
                            <h2>Send Message to:</h2>
                                <div className=" pt-3 flex flex-col gap-4">
                                    <div className="flex gap-3">
                                    <Button className="w-full">All Workers</Button>
                                    <Button gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                    <hr />
                                    <div>
                                    <Button className="w-full">All Workers except</Button>
                                    <TextInput type="text" className="mt-2 mb-2" placeholder="07 00 000 000"/>
                                    <Button className="w-full" gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                    <hr />
                                    <div>
                                    <Button className="w-full">Special Worker</Button>
                                    <TextInput type="text" className="mt-2 mb-2" placeholder="07 00 000 000"/>
                                    <Button className="w-full" gradientDuoTone="pinkToOrange">Send</Button>
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}
 
export default AdminDashboard;