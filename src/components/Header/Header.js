import React from 'react';
import ResumeSvg from '../../assets/resumeSvg.svg'

const Header = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-6 bg-emerald-200'>
            <div className='flex justify-center items-center order-2 md:order-1'>
                <h4 className='text-4xl font-semibold text-dark'>Build your <span className='text-blue-500'>Resume</span> <br /> for <span className='text-red-500'> free</span>  with <br /> <span className='text-blue-400'> Resume Builder</span> </h4>

            </div>
            <div className='order-2 md:order-1'>
                <img className='p-6' src={ResumeSvg} alt="" />
            </div>
        </div>
    );
};

export default Header;