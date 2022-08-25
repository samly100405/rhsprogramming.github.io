import JoinButton from "./JoinButton";

function TitleSection() {
  return (
    <div id="title-section" className="section">
      <div className="title-section-text">
        <h1>Welcome!</h1>
        <p className="subtitle">We're the <span className="underlined-text">RHS Programming Club.</span></p>
      </div>
      <JoinButton link='https://forms.gle/WwLzJ7thZqHvSYDZA'/>
    </div>
  )
}

export default TitleSection;