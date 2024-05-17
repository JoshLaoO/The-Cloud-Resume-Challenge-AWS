function Header() {
    const info = {
        "fa-solid fa-phone": "469-463-4946",
        "fa-solid fa-envelope": "jgarlao@gmail.com",
        "fa-solid fa-location-dot": "Carrollton, TX - Open to remote",
        "fa-brands fa-linkedin": "https://www.linkedin.com/in/josh-lao/",
        "fa-brands fa-github": "https://gitlab.com/JoshLao",
        "fa-brands fa-gitlab": "https://github.com/JoshLaoO"
    }
    return (
    <div id='header' className="container">
      <div className="row d-flex flex-row text-center">
        <h3 className='name'>Joshua Gar Lao</h3>
        <h6 id='job-title'>Full Stack Software Engineer</h6>
      </div>
      <div id="links" className='row d-flex text-center justify-content-center'>
        { Object.keys(info).map((icon) => {
            return(
                <div key={icon} className='col links'><a className="text-decoration-none" href={info[icon]}><i className={icon}/>{info[icon]}</a></div>
            )
        })}
        {/* <div>Phone - {info.phone}</div>
        <div>Email - {info.email}</div>
        <div>Location - {info.location}</div>
        <div>Linkedin - <a href={info.linkedin}>Linkedin</a></div>
        <div>Gitlab - {info.gitlab}</div>
        <div>Github - {info.github}</div> */}
      </div>
    </div>
  );
}
export default Header;
