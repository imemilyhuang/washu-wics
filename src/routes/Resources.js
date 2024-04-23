import React from 'react'

const Resources = () => {
  const achievements = [
    {link: "https://artsandculture.google.com/story/gAWBO5S1I8MMIQ?hl=en", title: "Breaking In: Women in Science, Technology, Engineering, and Mathematics", from: "Google Arts & Culture"},
    {link: "https://www.purdueglobal.edu/blog/information-technology/history-women-information-technology-6-female-computer-science-pioneers/", title: "History of Women in IT: 6 Female Pioneers in Computer Science", from: "Purdue Global"},
    {link: "https://obamawhitehouse.archives.gov/women-in-stem", title: "The Untold History of Women in Science and Technology", from: "The Obama White House"}
  ]

  const organizations = [
    {link: "https://www.computer.org/communities/women-in-computing", title: "IEEE Computer Society"},
    {link: "https://swe.org/", title: "Society of Women Engineers (SWE)"},
    {link: "https://ncwit.org/", title: "National Center for Women & Information Technology (NCWIT)"},
  ]
  const usefulLinks = [
    {link: "https://www.computerscience.org/resources/women-in-computer-science/", title: "ComputerScience.org"},
    {link: "https://www.hp.com/us-en/shop/tech-takes/computer-science-engineering-resources-women-stem", title: "HP"},
    {link: "https://www.computersciencezone.org/best-computer-science-scholarships/", title: "Best Scholarships"},
    {link: "https://ghc.anitab.org/", title: "Anita B Grace Hopper Celebration"},
  ]

  return (
    <div className="flex-column-center">
      <div className="flex-column-center padding-642 dark-gradient-container">
        <div className='heading-container padding-bottom-42'>
          <div className="title-container">
            <div className="title-text-control margin-bottom-1">
              <p>werubwpeu</p>
            </div>
            <h4 className='padding-bottom-21 white-text'>Bolster. Support. Empower.</h4>
          </div>

          <img 
            src={process.env.PUBLIC_URL+"/assets/home/laptop-typing.png"}
            className='hero-image' alt="typing on a laptop"
          />
          
        </div>
      </div>

      <div>
        <h4>Achievements in Technology</h4>
        <ul className='padb'>
          {
            achievements.map(data =>
              <li><a  href={data.link} target="_blank" rel="noopener noreferrer" className='link'><span className='bold'>{data.title}</span>, {data.from}</a></li>
            )
          }
        </ul>
        <h4>Organizations</h4>
        <ul className='padb'>
          {
            organizations.map(data =>
              <li><a  href={data.link} target="_blank" rel="noopener noreferrer" className='link'><span className='bold'>{data.title}</span></a></li>
            )
          }
        </ul>
        <h4>Useful Links</h4>
        <ul className='padb'>
          {
            usefulLinks.map(data =>
              <li><a  href={data.link} target="_blank" rel="noopener noreferrer" className='link'><span className='bold'>{data.title}</span></a></li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default Resources