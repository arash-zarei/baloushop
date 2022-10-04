import React from 'react';

// Gif
import loading from '../../gif/loading.gif'

const Loading = () => {
    return (
        <div style={{textAlign: 'center', width: "100%"}}>
            <img src={loading} alt="Loading ..." />
        </div>
    );
};

export default Loading;