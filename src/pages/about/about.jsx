import Collapse from '../../components/Collapse/Collapse'
import AboutList from '../../datas/AboutList.json'
import './about.scss'

function About() {
  return (
    <main>
      <div className="banner about"></div>
      <div className="collapses">
        {AboutList.map(({ title, content }) => (
          <Collapse key={title} title={title} content={content} />
        ))}
      </div>
    </main>
  )
}

export default About
