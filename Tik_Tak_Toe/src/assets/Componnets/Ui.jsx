import React, { useRef } from 'react';

function Ui() {
    const soundRef = useRef(null);

    const playSound = () => {
        if (soundRef.current) {
            soundRef.current.play();
        }
    };

    return (
        <div>
            <button onClick={playSound}>Play Sound</button>
            <audio ref={soundRef} src="/assets/y2mate.com - HAPPY HAPPY HAPPY TikTok sound effect.mp3" />
        </div>
    );
}

export default Ui;
