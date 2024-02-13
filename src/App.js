import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="title">
        <b>freda suyi ding</b>
      </header>
      <div className="topLinks">
        <div className="softButton">
          <a href="https://github.com/pseuyi" target="_blank" rel="noreferrer">
            github
          </a>
        </div>
        <div className="softButton">
          <a href="https://gitlab.com/pseuyi" target="_blank" rel="noreferrer">
            gitlab
          </a>
        </div>
        <div className="softButton">
          <a
            href="https://www.linkedin.com/in/pseuyi/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </div>
        <div className="softButton">
          <a
            href="https://docs.google.com/document/d/18GQSqlOH4n46326_tAB26Go9NKEBiMQGqiRomDJTP6w/edit?usp=sharing"
            rel="noreferrer"
          >
            resume
          </a>
        </div>
      </div>

      <div className="sections">
        <details open>
          <summary className="summary">currently</summary>
          <div className="info">
            i'm working on{" "}
            <a
              href="https://www.costarastrology.com/"
              target="_blank"
              rel="noreferrer"
              className="clickable"
            >
              ai-powered creative content generation
            </a>{" "}
            using functional programming paradigms.
          </div>
        </details>

        <details open>
          <summary className="summary">about me</summary>
          <div className="info">
            i'm a computer programmer based in chinatown, nyc interested in
            writing elegant, safe, and functional software.
            <br />
            outside of programming i can be found{" "}
            <a
              href="https://www.mountainproject.com/user/200352257/freda-nyc"
              target="_blank"
              rel="noreferrer"
              className="clickable"
            >
              climbing
            </a>{" "}
            or
            <a
              href="https://art.pseuyi.dev"
              target="_blank"
              rel="noreferrer"
              className="clickable"
            >
              {" "}
              drawing
            </a>
            .<p>links</p>
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
                  href="mailto:pseuyi@gmail.com?Subject=hi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  send me mail
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

        <details open>
          <summary className="summary">site archive</summary>
          <div className="info">
            some former iterations
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

      <div id="blockTray">
        <div id="square" class="block"></div>
        <div id="triangle1" class="block"></div>
        <div id="triangle2" class="block"></div>
        <div id="triangle3" class="block"></div>
        <div id="triangle4" class="block"></div>
        <div id="triangle5" class="block"></div>
        <div id="parallelogram" class="block"></div>
      </div>

      <footer>
        <div className="softButton">
          <a
            href="http://pseuyi.123Guestbook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="guestbook">📖</span> guestbook
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
