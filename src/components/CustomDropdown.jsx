import React, { useState } from 'react';

function CustomDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="custom-dropdown">
            <button onClick={toggleDropdown}>Toggle Dropdown</button>
            {isOpen && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            )}
        </div>
    );
}

export default CustomDropdown;