
function RelevantProjects(){
    const sweetBullets = [
        "Improved data organization by creating & utilizing a PostgreSQL database to store candy, users, businesses, & orders",
        "Enhanced user engagement by implementing the React & Redux Toolkit front-end for the logout functionality, enabling users to seamlessly log out log back in with different buttons",
        "Designed an add candy form component for a business to add a unique candy to the market, using JavaScript & React for the functionallity, as well as Bootstrap for styling"
    ]
    const awsBullets = [
        "Implimented my resume with HTML, CSS, and React which resulted in a close replication of my current resume.",
        "Applied static website hosting with S3, resulting in a static website with my content.",
        "Improved security by using CloudFront, Certificate Manager, and Route 53 to allow HTTPS to my website with a custom domain."
    ]
    const carBullets = [
        "Developed a process for inventory management to handle manufacturers, vehicle models, & automobiles with proficiency in HTML, CSS, & JavaScript",
        "Applied a filtered search listing of car service records with React & JavaScript for functionallity, and HTML & CSS for the looks for easier sales team access to inventory records",
        "Created the sales microservice with the key features of adding and managing customers, salespeople, sales, and sales history which improved organization and productivity"
    ]
    const wb = [
        "Demonstrated effective communication which was needed once it got busier, serving at least 40 customers in a 5 hour shift",
        "Collaborated with a team of 5-8 employees by doing extra tasks for eachother to be more prepared and efficient"
    ]

    return(
        <div>
            <h6 className='name'>RELEVANT PROJECTS</h6>
            <div>
                <h6 className='name ps-5 pt-4'>
                    TheSweetSpot | Full Stack Engineer |https://gitlab.com/crunchybellpeppers/module3-project-gamma | Docker, Python, FastAPI, PostgreSQL, JavaScript, React
                </h6>
                <p className="ps-5 caption">
                Fullstack developement of a candy ecomerse application for the buying and selling of candies.
                </p>
                <ul>
                    {sweetBullets.map(b=> {
                        return (
                            <li key={b}>{b}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h6 className='name ps-5 pt-4'>
                CarCar| Full Stack Engineer | https://gitlab.com/JoshLao/project-beta | Docker, Python, Django, JavaScript, React
                </h6>
                <p className="ps-5 caption">
                Fullstack developement of an application for the management of a car dealership.
                </p>
                <ul>
                    {carBullets.map(b=> {
                        return (
                            <li key={b}>{b}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h6 className='name ps-5 pt-4'>
                    The Cloud Resume Challenge | Full Stack Engineer |https://github.com/JoshLaoO/The-Cloud-Resume-Challenge-AWS | Docker, JavaScript, React, AWS
                </h6>
                <p className="ps-5 caption">
                    An Applicaton made to show off my learning in AWS in the form of my resume.
                </p>
                <ul>
                    {awsBullets.map(b=> {
                        return (
                            <li key={b}>{b}</li>
                        )
                    })}
                </ul>
            </div>
            <h6 className='name'>WORK EXPERIENCE</h6>

            <div>
                <h6 className="name ps-5 pt-4">
                    Whataburger | Team Member
                </h6>
                <ul>
                    {wb.map(b => {
                        return(
                            <li key={b}>{b}</li>
                        )
                    })}
                </ul>
            </div>
            <h6 className='name'>RELEVANT EDUCATION</h6>

            <div>
                <h6 className="name ps-5 pt-4">
                    Hack Reactor | Advanced Software Engineering Immersive Program
                </h6>
                <p style={{fontSize:"12px"}}>
                    More than 700 hours of Python and Javascript coding training in an agile environment. Project-based learning including solo coding, pair programming,
                    and team collaboration.
                </p>
            </div>
        </div>
    )
}

export default RelevantProjects;