import styled from "styled-components";

const SeekBarFill = styled.div`
  border-radius: 4px;
  margin: 0;
  padding: 0;
  height: 4px;
  width: 100%;
  bottom: 0;
  left: 0;
  top: 0;
  margin-top: auto;
  margin-bottom: auto;
  position: absolute;
`;
const SeekBarInput = styled.input`
  &[type="range"] {
    width: 100%;
    height: 4px;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }
`;
const SeekBarThumb = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: scale(0.3333);
  transform-origin: 50% 50%;
  background-color: var(--white);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  pointer-events: none;

  transition: transform 0.25s ease;
`;

const SeekBarContainer = styled.div`
  margin: 0 8px;
  width: 100%;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;

  &:hover ${SeekBarThumb} {
    transform: scale(0.8333);
  }
`;

export function SeekBar(props) {
  return (
    <SeekBarContainer>
      <SeekBarFill ref={props.seekBarFillRef} />
      <SeekBarInput
        value={props.value}
        onChange={props.onChange}
        onMouseDown={props.onMouseDown}
        onMouseUp={props.onMouseUp}
        type='range'
      />
      <SeekBarThumb ref={props.seekBarThumbRef} />
    </SeekBarContainer>
  );
}
