import React from 'react';


const AboutBodyContainer = ({ Bio, statement, vision, contact}) => {
    console.log('aboutbodycontainer here');
    return(
        <section>
            {Bio}
            {statement}
            {vision}
            {contact}
        </section>
    )
}

export default AboutBodyContainer;