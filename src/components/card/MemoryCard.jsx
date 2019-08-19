import React from 'react';
import PropTypes from 'prop-types';

import './styles.css'

//destructuring instead passing props
export default function MemoryCard({ 
    handleClick,
    disabled, 
    id, 
    type,
    flipped,
    solved,  
    height, 
    width
}){
    return(
        <div className={`flip-container ${flipped ? 'flipped' : ''}`}
            style={{
                width, height
            }}
            onClick={() => disabled ? null : handleClick(id)}
        >
            <div className="flipper">
                <img 
                style={{
                    height, width
                }}
                className={flipped ? 'front' : 'back'}
                src={flipped || solved ? `/img/katakana/${type}.png` : `/img/katakana/back.jpg`}
                />

            </div>
        </div>
    )
}

MemoryCard.propTypes = {
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    flipped: PropTypes.bool.isRequired,
    flipped: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}