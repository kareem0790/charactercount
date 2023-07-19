import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #ffffff;
  padding: 30px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  height: 90vh;
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const LeftTopContainer = styled.div`
  height: 200px;
  background-color: #ffbf1f;
  padding: 20px;
`
export const LeftTopHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`
export const LeftBottomContainer = styled.div`
  background-color: #ffc533;
  padding: 30px;
  height: 100%;
`

export const RightContainer = styled.div`
  background-color: #0f172a;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CountHeading = styled.h1`
  color: #ffbf1f;
  font-family: 'Roboto';
  font-size: 26px;
  text-align: center;
  margin-top: 30px;
  font-weight: 600;
`
export const Image = styled.img`
  width: 100%;
`
export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: transparent;
  padding: 0px;
  border: none;
  width: 80%;
  margin: auto;
  margin-top: 50px;
`
export const Input = styled.input`
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
  height: 40px;
  border-radius: 10px;
  flex-grow: 1;
  outline: none;
  color: #1e293b;
  padding-left: 20px;
  margin-right: 20px;
`
export const AddButton = styled.button`
  padding: 8px 16px 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #ffbf1f;
  border-radius: 8px;
  color: #1e293b;
  font-size: 18px;
  height: 40px;
`
export const ListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const List = styled.li`
  list-style-type: none;
  font-family: 'Roboto';
  font-size: 22px;
  color: #0f172a;
  font-weight: 600;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #0f172a;
  font-weight: 600;
`
