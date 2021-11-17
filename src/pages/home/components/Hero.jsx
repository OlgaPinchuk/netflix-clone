// Project files
import testHeroData from "./testHeroData"; // delete after refactoring

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-row">
        <div className="hero-image-wrapper">
          <img src={testHeroData.mainImageUrl} alt="Hero poster" />
        </div>
      </div>
      <div className="description">
        <h1>{testHeroData.name}</h1>
        <p>{testHeroData.description}</p>
      </div>
    </section>
  );
}
