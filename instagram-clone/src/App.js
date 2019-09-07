    // src/App.js

    import React, { Component } from 'react';
    import './App.css';
    import Header from './components/Header';
    import Post from './components/Post';

    class App extends Component {
      render() {

        //first div for whole page
        return <div className="App">

            /* header */
            <Header />


            /* 3 col */


            /* col 1 */
            <div>

            </div>


            /* col 2 */
            <div>

            </div>


            /* header */
            <div>

            </div>



            <section className="App-main">
              <Post nickname="Chris" avatar="https://cdn2.iconfinder.com/data/icons/Qetto___icons_by_ampeross-d4njobq/256/jpg.png" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              <Post nickname="OG" avatar="https://upload.wikimedia.org/wikipedia/commons/3/36/Icon-Teacher-at-class.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />

              {/* more posts */}
            </section>
          </div>;
      }
    }

    export default App;
