import {Component} from 'react'

import {v4} from 'uuid'

import {
  AppContainer,
  ResponsiveContainer,
  LeftContainer,
  LeftTopContainer,
  LeftTopHeading,
  RightContainer,
  CountHeading,
  LeftBottomContainer,
  Image,
  InputContainer,
  Input,
  AddButton,
  ListContainer,
  List,
  Paragraph,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    inputValue: '',
    characterList: [],
  }

  renderEmptyList = () => (
    <Image
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
    />
  )

  onChangeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  onAddList = () => {
    const {inputValue} = this.state

    const newList = {
      id: v4(),
      input: inputValue,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newList],
      inputValue: '',
    }))
  }

  renderCharacterList = () => {
    const {characterList} = this.state

    return (
      <ListContainer>
        {characterList.map(each => (
          <List key={each.id}>
            <Paragraph>
              {each.input}: {each.input.length}
            </Paragraph>
          </List>
        ))}
      </ListContainer>
    )
  }

  render() {
    const {inputValue, characterList} = this.state

    return (
      <AppContainer>
        <ResponsiveContainer>
          <LeftContainer>
            <LeftTopContainer>
              <LeftTopHeading>
                Count the characters like a Boss...
              </LeftTopHeading>
            </LeftTopContainer>
            <LeftBottomContainer>
              {characterList.length > 0
                ? this.renderCharacterList()
                : this.renderEmptyList()}
            </LeftBottomContainer>
          </LeftContainer>
          <RightContainer>
            <CountHeading>Character Counter</CountHeading>
            <InputContainer onSubmit={this.onAddList}>
              <Input
                type="text"
                value={inputValue}
                onChange={this.onChangeInputValue}
                placeholder="Enter the Characters here"
              />
              <AddButton type="submit">Add</AddButton>
            </InputContainer>
          </RightContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default CharacterCounter
