

function TechnicalSkills(){
    const PLs = [
        'Python 3',
        'JavaScript E6+',
        'PostgreSQL',
        'HTML5',
        'CSS3'
    ]
    const frontEnd = [
        'React',
        'Redux Tool Kit',
        'Bootstrap',
        'DOM manipulation',
        'Websockets'
    ]
    const backEnd= [
        'FastAPI',
        'Django 4',
        'PostgreSQL',
        'CI/CD',
    ]
    const systemDesign = [
        'Microservices',
        'Monoliths',
        'Domain-driven design',
        'Message passing',
        'Event sourcing'
    ]
    return(
        <div id='tech' className="p-5">
            <h6 id='name'>TECHNICAL SKILLS</h6>
            <div className="d-flex">
                <div>
                    <b>Programming Languages: </b>
                </div>
            {PLs.map(lang => {
                return(
                    <div className='ms-3'> {lang}</div>
                )
            })}
            </div>
            <div className="d-flex">
                <div>
                    <b>Front-end: </b>
                </div>
            {frontEnd.map(lang => {
                return(
                    <div className='ms-3'> {lang} </div>
                )
            })}
            </div>
            <div className="d-flex">
                <div>
                    <b>System Design: </b>
                </div>
            {systemDesign.map(lang => {
                return(
                    <div className='ms-3'> {lang} </div>
                )
            })}
            </div>
            <div className="d-flex">
                <div>
                    <b>Back-end: </b>
                </div>
            {backEnd.map(lang => {
                return(
                    <div className='ms-3'> {lang} </div>
                )
            })}
            </div>
        </div>
    )
}
export default TechnicalSkills