const GameResultView = props => {
  const {myChoice, opponentChoice, resultMessage, playAgain} = props
  const {id, imageUrl} = opponentChoice

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <div>
      <div>
        <div>
          <h1>YOU</h1>
          <img src={myChoice[1]} alt="your choice" />
        </div>
        <div>
          <h1>OPPONENT</h1>
          <img src={imageUrl} alt="opponent choice" />
        </div>
      </div>
      <p>{resultMessage}</p>
      <div>
        <button type="button" onClick={onClickPlayAgainButton}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameResultView
