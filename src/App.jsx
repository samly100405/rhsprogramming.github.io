import TitleSection from "./components/TitleSection"
import Section from "./components/Section"
import sectionsData from './assets/data/sections-data'

function App() {
  const sections = sectionsData.map(
    d => {
      return <Section key={d.text} title={d.title} text={d.text}/>
    }
  )
  return (
    <div className="App">
      <TitleSection />
      <div className="desc">
        <p>Scroll down for more info</p>
        <p style={{fontSize: 30}}>↓</p>
      </div>
      {sections}
    </div>
  )
}

export default App
