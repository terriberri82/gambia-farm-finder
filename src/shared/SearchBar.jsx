import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const LabelStyle = styled.label`
  padding-right: 0.3em;
  font-size: 1.25em;
  color: #000000;
`;

const InputStyle = styled.input`
  margin-right: 0.5em;
  background-color: rgba(199, 238, 214, 1);
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1em;
  color: #000000;
`;
const Button = styled.button`
  background-color: rgb(9, 99, 9);
  color: white;
  border-radius: 10px;
  padding: 0.5em 0.5em;
  font-size: 1em;
`;
function SearchBar({ elementId, labelText, onChange, value, onSubmit }) {
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
      <Button onClick={onSubmit}>Submit</Button>
    </Wrapper>
  );
}

export default SearchBar;
