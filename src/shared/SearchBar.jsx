import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em; 
`

const LabelStyle = styled.label`
  padding-right: 0.30em;
  font-size: 1.25em;
  color: #000000;
`

const InputStyle = styled.input`
  margin-right: 0.50em;
  background-color: rgba(199, 238, 214, 1);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1em;
  color: #000000;
`
const Button = styled.button`
background-color:rgba(5, 19, 10, 1) ;
`
function SearchBar({ elementId, labelText, onChange, value, onClick }){

    return (
      <Wrapper>
        <LabelStyle htmlFor={elementId}>{labelText}</LabelStyle>
        <InputStyle
        type="text"
        id={elementId}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
      <Button onClick={onClick}>
      Submit
    </Button>
    
    </Wrapper>
)
  }

  export default SearchBar