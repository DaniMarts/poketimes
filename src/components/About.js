import React from 'react';
import Rainbow from "../HOC/Rainbow";

function About(props) {
    //setTimeout(() => props.history.push("/contact"), 2000);
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, tenetur, vero atque saepe nam quidem fugit enim reprehenderit delectus laboriosam reiciendis sint! Nisi possimus veritatis laborum vitae impedit voluptate fugiat.</p>
        </div>
    )
}

export default Rainbow(About, 'blue');