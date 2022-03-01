import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import Buttons from '../Buttons'
import GameResultView from '../GameResultView'

import {ScoreSpan} from './styledComponents'

class Game extends Component {
  state = {
    showResult: false,
    myChoice: {},
    opponentChoice: {},
    score: 0,
    resultMessage: '',
  }

  onClickPlayAgain = () => this.setState({showResult: false})

  onGetResult = () => {
    const {myChoice, opponentChoice, resultMessage} = this.state
    const {id, imageUrl} = opponentChoice
    return (
      <GameResultView
        myChoice={myChoice}
        opponentChoice={opponentChoice}
        resultMessage={resultMessage}
        playAgain={this.onClickPlayAgain}
      />
    )
  }

  onGetImages = () => {
    const {choicesList} = this.props
    return (
      <div>
        {choicesList.map(eachItem => (
          <Buttons
            key={eachItem.id}
            buttonDetails={eachItem}
            onGetId={this.getButtonId}
          />
        ))}
      </div>
    )
  }

  getButtonId = (id, imageUrl) => {
    const {choicesList} = this.props
    const number = Math.floor(Math.random() * choicesList.length)
    if (choicesList[number].id === 'ROCK' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        myChoice: [id, imageUrl],
        score: prevState.score - 1,
        opponentChoice: choicesList[number],
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        opponentChoice: choicesList[number],
        myChoice: [id, imageUrl],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        opponentChoice: choicesList[number],
        myChoice: [id, imageUrl],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (choicesList[number].id === 'SCISSORS' && id === 'PAPER') {
      this.setState(prevState => ({
        showResult: true,
        opponentChoice: choicesList[number],
        myChoice: [id, imageUrl],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'ROCK') {
      this.setState(prevState => ({
        showResult: true,
        opponentChoice: choicesList[number],
        myChoice: [id, imageUrl],
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (choicesList[number].id === 'PAPER' && id === 'SCISSORS') {
      this.setState(prevState => ({
        showResult: true,
        opponentChoice: choicesList[number],
        myChoice: [id, imageUrl],
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else {
      this.setState({
        showResult: true,
        myChoice: [id, imageUrl],
        opponentChoice: choicesList[number],
        resultMessage: 'IT IS DRAW',
      })
    }
  }

  render() {
    const {showResult, score, myChoice, opponentChoice} = this.state
    return (
      <p>
        <p>
          <div>
            <h1>
              ROCK
              <br />
              PAPER
              <br />
              SCISSORS
            </h1>
          </div>
          <p>
            <p>Score</p>
            <ScoreSpan>{score}</ScoreSpan>
          </p>
        </p>
        {showResult ? this.onGetResult() : this.onGetImages()}
        <div>
          <Popup modal trigger={<button type="button">Rules</button>}>
            {close => (
              <div>
                <div>
                  <button type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </button>
                </div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
            )}
          </Popup>
        </div>
      </p>
    )
  }
}
export default Game
