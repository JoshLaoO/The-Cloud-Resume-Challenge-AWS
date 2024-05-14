
function RelevantProjects(){
    const sweetBullets = [
        "Improved data organization by creating & utilizing a PostgreSQL database to store candy, users, businesses, & orders",
        "Enhanced user engagement by implementing the React & Redux Toolkit front-end for the logout functionality, enabling users to seamlessly log out log back in with different buttons",
        "Designed an add candy form component for a business to add a unique candy to the market, using JavaScript & React for the functionallity, as well as Bootstrap for styling"
    ]
    const awsBullets = [
    "Demonstrated my learning through The Cloud Resume Challenge."
]
    const carBullets = [
        "Developed a process for inventory management to handle manufacturers, vehicle models, & automobiles with proficiency in HTML, CSS, & JavaScript",
        "Applied a filtered search listing of car service records with React & JavaScript for functionallity, and HTML & CSS for the looks for easier sales team access to inventory records",
        "Created the sales microservice with the key features of adding and managing customers, salespeople, sales, and sales history which improved organization and productivity"
    ]

    return(
        <div>
            <h6 className='name'>RELEVANT PROJECTS</h6>
            <div>
                <h6 className='name ps-5 pt-5'>
                    TheSweetSpot | Full Stack Engineer |https://gitlab.com/crunchybellpeppers/module3-project-gamma | Docker, Python, FastAPI, PostgreSQL, JavaScript, React
                </h6>
                <p className="ps-5 caption">
                Fullstack developement of a candy ecomerse application for the buying and selling of candies.
                </p>
                <ul>
                    {sweetBullets.map(b=> {
                        return (
                            <li>{b}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h6 className='name ps-5 pt-5'>
                CarCar| Full Stack Engineer | https://gitlab.com/JoshLao/project-beta | Docker, Python, Django, JavaScript, React
                </h6>
                <p className="ps-5 caption">
                Fullstack developement of an application for the management of a car dealership.
                </p>
                <ul>
                    {carBullets.map(b=> {
                        return (
                            <li>{b}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h6 className='name ps-5 pt-5'>
                    The Cloud Resume Challenge | Full Stack Engineer |https://github.com/JoshLaoO/The-Cloud-Resume-Challenge-AWS | Docker, Python, PostgreSQL, JavaScript, React, AWS
                </h6>
                <p className="ps-5 caption">
                    An Applicaton made to show off my learning in AWS in the form of my resume.
                </p>
                <ul>
                    {awsBullets.map(b=> {
                        return (
                            <li>{b}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RelevantProjects;