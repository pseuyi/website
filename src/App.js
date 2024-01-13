import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="title">
        <b>freda suyi ding</b>
      </header>

      <details>
        <summary className="summary">currently</summary>
        <div className="info">
          working on{" "}
          <a
            href="https://www.costarastrology.com/"
            target="_blank"
            rel="noreferrer"
          >
            ai-powered creative content generation
          </a>{" "}
          using functional programming paradigms.
        </div>
      </details>

      <details>
        <summary className="summary">about me</summary>
        <div className="info">
          i'm a computer programmer based in chinatown, nyc. <br />
          i'm interested in writing elegant, safe, and functional software.
          <ul>
            <li>
              <a
                href="https://github.com/pseuyi"
                target="_blank"
                rel="noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pseuyi/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.are.na/after-freda"
                target="_blank"
                rel="noreferrer"
              >
                are.na
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/18GQSqlOH4n46326_tAB26Go9NKEBiMQGqiRomDJTP6w/edit?usp=sharing"
                rel="noreferrer"
              >
                resume
              </a>
            </li>
            <li>
              <a
                href="https://special.fish/after_freda"
                target="_blank"
                rel="noreferrer"
              >
                𓆝 𓆟 𓆞
              </a>
            </li>
            <li>
              <a href="https://art.pseuyi.dev" rel="noreferrer">
                art
              </a>
            </li>
          </ul>
        </div>
      </details>

      <details>
        <summary className="summary">archive</summary>
        <div className="info">
          past iterations of this site
          <ul>
            <li>
              <a
                href="https://pseuyi.dev/2016/"
                target="_blank"
                rel="noreferrer"
              >
                2016
              </a>
            </li>
          </ul>
        </div>
      </details>
    </div>
  );
}

export default App;
