import React, { useState } from 'react';

const ResumeEditor = () => {

    const sections = {
        basicInf: "Basic Info",
        workExp: "Work Experience",
        projects: "Projects",
        education: "Education",
        achievements: "Achievements",
        skills: "Achievements",
        language: "language",
        summary: "Summary",
    }

    const [sctiveSec, setActiveSec] = useState(sections)

    return (
        <div className='container mx-auto mt-6 border h-56'>
            <div className='flex flex-row gap-3 px-2 border-b-2'>
                {Object.keys(sections)?.map(section => <div
                    className='mx-auto'
                    key={section}
                >
                    {sections[section]} </div>)}

            </div>

        </div>
    );
};

export default ResumeEditor;