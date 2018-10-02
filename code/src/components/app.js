import React from "react"

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <div className="header">
          <div>
            <ul>
              <li>Home</li>
              <li>Technology</li>
              <li>Creativity</li>
              <li>Entrepreneurship</li>
              <li>Self</li>
              <li>Culture</li>
              <li>Digital design</li>
              <li>Popular on medium</li>
              <li>Politics</li>
              <li>More</li>
            </ul>
          </div>
          <div><button className="button headerButton">Get started</button>
          </div>
        </div>


        <div className="top">
          <div className="topText">
            <h1>Interesting ideas that set your mind in motion.</h1>
            <h2>Hear directly from the people who know it best. From tech to politics to creativity and more - whatever your interest, we&apos;ve got you covered.</h2>
            <div className="topButtons">
              <div>
                <button className="button topButton1">Get started</button>
                </div>
                  <div>
                  <button className="button topButton2">Learn more</button>
                </div>
                </div>
              </div>
              <div>
            <img className="mainImage" src="./images/medium-image.png"/>
          </div>
        </div>

        <div className="container">

          <div className="flexContainer">
            <img className="containerImage" src="./images/medium-image-puff-1.jpeg" />
            <div className="containerText">
              <div className="postText">
                <h2>The Boy Who Tamed the Sea</h2>
                <p>At 5:30 am, on any morning I can handle it, I&apos;ll slip out of the dark mouth of my covers and creep through the silver lig...</p>
              </div>
              <div className="Containerbelow">
                <div className="infobox">
                  <img className="portrait" src="./images/writer-1.png" />
                  <div>
                    <h3>Carl Moore</h3>
                    <h4>Oct 27 8 min read</h4>
                  </div>
                </div>
                <img className="bookmark" src="./images/bookmark.png" width="10px" height="15px"/>
              </div>
            </div>
          </div>

          <div className="flexContainer">
              <img className="containerImage" src="./images/medium-image-puff-2.png" />
              <div className="containerText">
                <div className="postText">
                  <h2>The Role of Human Emotions in the Future of Transport</h2>
                  <p>Getting from A to B is about to feel very different.</p>
                </div>
                <div className="containerbelow">
                  <div className="infobox">
                    <img className="portrait" src="./images/writer-2.jpeg" />
                    <div>
                      <h3>Ben Bland</h3>
                      <h4>Nov 1 7 min read</h4>
                    </div>
                  </div>
                  <img className="bookmark" src="./images/bookmark.png" width="10px" height="15px"/>
                </div>
              </div>
          </div>

          <div className="flexContainer">
            <img className="containerImage" src="./images/medium-image-puff-4.jpeg" />
            <div className="containerText">
              <div className="postText">
                <h2>The March of the Losers</h2>
                <p>Around the world, the victims are becoming the abusers, and Donald Trump is their king.</p>
              </div>
              <div className="containerbelow">
                  <div className="infobox">
                    <img className="portrait" src="./images/writer-3.jpeg" />
                    <div>
                      <h3>Henry Wismayer</h3>
                      <h4>Nov 10 8 min read</h4>
                    </div>
                  </div>
                  <img className="bookmark" src="./images/bookmark.png" width="10px" height="15px"/>
              </div>
            </div>
          </div>

          <div className="flexContainer">
            <img className="containerImage" src="./images/medium-image-puff-3.png" />
            <div className="containerText">
              <div className="postText">
                <h2>The Burning Season</h2>
                <p>You cannot save everything when the fire come to Northern California.</p>
              </div>
              <div className="containerbelow">
                <div className="infobox">
                  <img className="portrait" src="./images/writer-4.jpeg" />
                  <div>
                    <h3>Lindsey Smith</h3>
                    <h4>Nov 9  31 min read</h4>
                  </div>
                </div>
                <img className="bookmark" src="./images/bookmark.png" width="10px" height="15px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App
