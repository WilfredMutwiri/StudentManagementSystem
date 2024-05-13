import {BsFacebook,BsInstagram,BsTwitterX,BsWhatsapp} from 'react-icons/bs'
import { Footer, FooterTitle } from "flowbite-react";
const Footercomp = () => {
    return (
        <div>
            <div className="mt-20"> 
                <Footer container className="border border-t-8 border-teal-500">
                    <div className="w-full">
                    <div className="block md:flex justify-between">
                        <div className=''>
                        <div className="flex p-3">
                            <span className="text-orange-500 text-sm bg-black p-1 rounded-md">X</span>
                            <h2 className="text-pink-700 text-sm p-1">Manager</h2>
                            </div>
                            <h2 className="text-sm italic mb-3 md:mb-0">Your Altimate Manager</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <div>
                            <Footer.Title title="About"/>
                            <Footer.LinkGroup col>
                                <Footer.Link target="_blank" href="#">
                                Getting Started
                                </Footer.Link>
                            </Footer.LinkGroup>
                            </div>
                            <div>
                            <Footer.Title title="Privacy"/>
                            <Footer.LinkGroup col>
                                <Footer.Link target="_blank" href="#">
                                Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                            </div>
                            <div>
                            <Footer.Title title="Follow us"/>
                            <Footer.LinkGroup col>
                                <Footer.Link target="_blank" href="#">
                                Facebook
                                </Footer.Link>
                                <Footer.Link target="_blank" href="#">
                                Twitter X
                                </Footer.Link>
                            </Footer.LinkGroup>
                            <div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider/>
                    <div>
                    <Footer.Copyright by="x-manager" className='text-center' year={new Date().getFullYear()} />
                    <div className="flex gap-6 mt-3 w-40 mx-auto">
                        <Footer.Icon href="#" icon={BsFacebook}/>
                        <Footer.Icon href="#" icon={BsInstagram}/>
                        <Footer.Icon href="#" icon={BsTwitterX}/>
                        <Footer.Icon href="#" icon={BsWhatsapp}/>

                    </div>
                </div>
                    </div>
                </Footer>
            </div>
        </div>
    );
}
 
export default Footercomp;