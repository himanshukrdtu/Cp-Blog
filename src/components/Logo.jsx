import React from "react";
import photo from "./Photos/Infinity.jpg"
function Logo({ size = '49px' }) {
    return (
        <div style={{
            width: size,
            height: size,
            borderRadius: '50%', // Makes the div circular
            overflow: 'hidden', // Ensures the image does not overflow the circular boundary
        }}>
            <img 
                src={photo}
                style={{
                    width: '100%', // Ensures the image fills the circular div
                    height: 'auto' // Maintains aspect ratio
                }}
                alt="Logo"
            />
        </div>
    );
}

export default Logo;