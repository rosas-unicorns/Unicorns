import React, {Component} from 'react'
import Pandance from './Pandance'
import DiscoScene from './DiscoScene'

const flare = '/assets/flare.png'
const bubble = '/assets/bubble.png'

export default class Selection extends Component {
  constructor() {
    super()
    this.state = {
      play: false,
      background: 'space',
      character: 'panda',
      particle: 'flare',
      particleNum: 500
    }

    this.selectBackground = this.selectBackground.bind(this)
    this.selectCharacter = this.selectCharacter.bind(this)
    this.readyToPlay = this.readyToPlay.bind(this)
    this.changeParticle = this.changeParticle.bind(this)
  }

  selectBackground(e) {
    console.log(e.target)
    this.setState({
      background: e.target.name
    })
  }

  selectCharacter(e) {
    this.setState({
      character: e.target.name
    })
  }

  changeParticle = e => {
    this.setState({
      particle: e.target.value
    })
  }

  setParticleNum = e => {
    this.setState({
      particleNum: parseInt(e.target.value)
    })
  }

  readyToPlay() {
    this.setState({
      play: true
    })
  }

  render() {
    const backgrounds = ['space', 'disco']
    const characterName = ['panda', 'robot']
    const particle = this.state.particle === 'flare' ? flare : bubble

    const scenes = [
      <Pandance
        character={this.state.character}
        background={this.state.background}
        particle={particle}
        particleNum={this.state.particleNum}
      />,
      <DiscoScene
        character={this.state.character}
        background={this.state.background}
        particle={particle}
        particleNum={this.state.particleNum}
      />
    ]

    const background = this.state.background === 'space' ? 0 : 1

    return (
      <div>
        {!this.state.play ? (
          <div className="container">
            <h1>Select A Scene</h1>
            {backgrounds.map((background, idx) => {
              return (
                <button
                  className="button"
                  type="button"
                  key={background}
                  name={background}
                  onClick={this.selectBackground}
                >
                  {background}
                </button>
              )
            })}
            <h1>Select A Character</h1>
            {characterName.map((character, idx) => {
              return (
                <button
                  type="button"
                  className="button"
                  key={character}
                  name={character}
                  onClick={this.selectCharacter}
                >
                  {character}
                </button>
              )
            })}
            <h1>Set Particle</h1>
            Particle:{' '}
            <select onChange={e => this.changeParticle(e)}>
              <option value="flare">Flare</option>
              <option value="bubble">Bubble</option>
            </select>
            Amount of Particle:{' '}
            <select onChange={e => this.setParticleNum(e)}>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
              <option value="5000">5000</option>
              <option value="10000">10000</option>
            </select>
            <button
              className="btn-play"
              type="button"
              onClick={this.readyToPlay}
            >
              Play
            </button>
          </div>
        ) : (
          <div>{scenes[background]}</div>
        )}
      </div>
    )
  }
}
