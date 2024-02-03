import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="title">
        <b>freda suyi ding</b>
      </header>

      <div>
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
                  href="https://gitlab.com/pseuyi"
                  target="_blank"
                  rel="noreferrer"
                >
                  gitlab
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
                  href="https://docs.google.com/document/d/18GQSqlOH4n46326_tAB26Go9NKEBiMQGqiRomDJTP6w/edit?usp=sharing"
                  rel="noreferrer"
                >
                  cv
                </a>
              </li>
              <li>
                <a
                  href="mailto:pseuyi@gmail.com?Subject=hi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  email
                </a>
              </li>
            </ul>
          </div>
        </details>
        <details>
          <summary className="summary">links</summary>
          <div className="info">
            a few things i've been doing online...
            <ul>
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
                  href="https://special.fish/after_freda"
                  target="_blank"
                  rel="noreferrer"
                >
                  𓆝 𓆟 𓆞
                </a>
              </li>
              <li>
                <a
                  href="https://art.pseuyi.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  art
                </a>
              </li>
              <li>
                <a
                  href="https://webring.recurse.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="recurse center logo"
                    src="https://webring.recurse.com/icon.png"
                    width={16}
                    style={{ transform: "translate(0, 2px)" }}
                  />
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
                  href="https://pseuyi.github.io/2017/"
                  target="_blank"
                  rel="noreferrer"
                >
                  2017
                </a>
              </li>
              <li>
                <a
                  href="https://pseuyi.github.io/2016/"
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

      <footer>
        <a
          href="http://pseuyi.123Guestbook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="guestbook">📖</span> guestbook
        </a>
      </footer>
    </div>
  );
}

export default App;
