import React from 'react';
import './Widgets.css'

const Widgets = () => {
    return (
        <div className="widgets">
            
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fspacenewsx%2Fposts%2F2887921151458428&show_text=true&width=500"
            width="120" height="100%" style={{border:"none", overflow:"hidden", marginRight:"12px"}} scrolling="no" frameborder="0" 
            allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>

        </>
    );
};

export default Widgets;