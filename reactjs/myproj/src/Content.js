import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }
    
    const handleClick = (name) => {
        console.log(`${name} clicked the button`);
    }
    
    return (
        <main>
            <p>
                Hello {handleNameChange()}
            </p>
            <button onDoubleClick={() => handleClick('Dave')}>Click It</button>
        </main>
    )
}

export default Content