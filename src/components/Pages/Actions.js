import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

const Actions = () => {
    const colors = ['5572e6', 'a45c31', '45ffbb', '96e2dc', '0ecd51']
    return (
        <div className='flex justify-between mt-4 px-6 items-center'>
            <div className='flex gap-3 py-2'>
                {
                    colors.map((color) => <span
                        className='h-6 w-6 rounded-full'
                        key={color}
                        style={{ backgroundColor: `#${color}` }}
                    ></span>
                    )
                }
            </div>
            <div className='text-4xl font-semibold text-blue-500 hidden md:block'>Resume Builder</div>
            <div>
                <button className='bg-red-400 p-1 rounded-lg hover:bg-red-600 font-semibold flex items-center gap-1'>Download <AiOutlineDownload></AiOutlineDownload></button>
            </div>
        </div>
    );
};

export default Actions;