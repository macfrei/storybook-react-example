import styled from 'styled-components'

export default function Card({ title, text, author, backgroundColor }) {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <h2>{title}</h2>
      <p>{text}</p>
      <small>{author ? author : 'No author'}</small>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'hotpink'};
`
