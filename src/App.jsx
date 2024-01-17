import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
         <Player player="Houssem" symbol="X"/>
         <Player player="Lamis" symbol="O"/>
        </ol>
        GAME BOARD
      </div>
      log
    </main>
  );
}

export default App;
