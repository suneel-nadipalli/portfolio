import { bioData } from "./data"

export default function BackgroundTab() {
  return (
    <div className="background-grid">
      <div className="profile-details">
        {bioData.Background.map((item, i) => (
          <div key={i}>
            <span className="label">{item.label}:</span> {item.value}
          </div>
        ))}
        <div className="blinking-cursor">▌</div>
      </div>

      <div className="profile-pic-box">
        <span>[Profile Image Placeholder]</span>
      </div>
    </div>
  )
}
