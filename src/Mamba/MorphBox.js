import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Container,
  FigCaption,
  Link,
  CloseIcon,
  CloseButton,
  OpenButton,
  Overlay,
  calculateScale,
} from "./index";

const Image = styled.img`
  transform-origin: center 0;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  transition: transform 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
`;

export function MorphBox(props) {
  const gallerySize = props.gallerySize;
  const galleryIndex = props.galleryIndex;
  const activeIndex = props.galleryIndex - props.currentIndex;
  const sendMorphstate = props.sendMorphstate;

  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const bodyRef = useRef(null);

  const [isMorphed, setIsMorphed] = useState(false);
  const [captionX, setCaptionX] = useState(0);
  const [captionY, updateCaptionY] = useState(0);
  const [translateX, updateTranslateX] = useState(0);
  const [translateY, updateTranslateY] = useState(0);
  const [currentScale, setCurrentScale] = useState(0.14652014652014653);

  function handleMorph(event) {
    setIsMorphed(!isMorphed);
    sendMorphstate(!isMorphed);
  }

  useEffect(() => {
    const container = {
      width: isMorphed ? window.innerWidth * 0.8 : props.smallWidth,
      height: isMorphed ? window.innerHeight * 0.8 : props.smallHeight,
    };
    const content = {
      width: props.width,
      height: props.height,
    };
    const imageY = imageRef.current.getBoundingClientRect().y;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const textHeightOffset = captionRef.current.scrollHeight / 2;
    const textY = captionRef.current.getBoundingClientRect().y;
    const textWidth = captionRef.current.scrollWidth;

    // Calculate scale
    const scale = calculateScale(container, content);
    const imageWidth = content.width * scale;
    const imageHeight = content.height * scale;

    // 1. Scale sizes
    const imageWhitespaceX = screenWidth - imageWidth;
    const imageOffsetX = screenWidth - imageWidth - textWidth;
    const textWhitespaceX = screenWidth - textWidth;
    const imageWhitespaceY = screenHeight - imageHeight;

    // 2.1 Image position
    const imageMorphY = imageY - imageWhitespaceY / 2;
    const imageMorphX = 240 - imageWhitespaceX / 2 + imageOffsetX / 2;
    const textMorphY =
      textY - imageWhitespaceY / 2 - imageHeight / 2 + textHeightOffset;
    const textMorphX =
      240 - textWhitespaceX / 2 + imageOffsetX / 2 + imageWidth;

    // Update values
    updateTranslateX(isMorphed ? imageMorphX : 0);
    updateTranslateY(isMorphed ? -imageMorphY : 0);
    setCurrentScale(scale);
    setCaptionX(isMorphed ? textMorphX : 0);
    updateCaptionY(isMorphed ? -textMorphY : 0);
  }, [isMorphed]);

  useEffect(() => {
    const dissmissModal = () => {
      setIsMorphed(false);
    };
    window.addEventListener("resize", dissmissModal);
    return () => window.removeEventListener("resize", dissmissModal);
  }, []);

  return (
    <Container
      isMorphed={isMorphed}
      galleryIndex={galleryIndex}
      gallerySize={gallerySize}
      activeIndex={activeIndex}
      ref={bodyRef}
      onClick={(event) => handleMorph(event)}
    >
      <Overlay isMorphed={isMorphed}>
        <CloseButton
          ariaLabel='Close'
          type='button'
          onClick={() => (setIsMorphed(!isMorphed), sendMorphstate(!isMorphed))}
          isMorphed={isMorphed}
        >
          <CloseIcon />
        </CloseButton>
      </Overlay>
      <Image
        ref={imageRef}
        width={props.width}
        height={props.height}
        src={props.image}
        isMorphed={isMorphed}
        style={{
          transform: `matrix(${currentScale}, 0, 0, ${currentScale}, ${translateX}, ${translateY})`,
        }}
      />
      <FigCaption
        ref={captionRef}
        style={{
          transform: `matrix(${isMorphed ? 1 : 0.65}, 0, 0, ${
            isMorphed ? 1 : 0.65
          }, ${captionX}, ${captionY})`,
        }}
        className={isMorphed && "is-morphed"}
      >
        <strong>{props.project}. </strong>
        {props.description}
        {props.href && (
          <>
            <br />
            <br />
            <Link
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: "var(--red)" }}
              href={props.href}
            >
              {props.label}
            </Link>
          </>
        )}
      </FigCaption>
      <OpenButton ariaLabel='Open' type='button' isMorphed={isMorphed}>
        <strong>{props.project}</strong>
        Learn more
      </OpenButton>
    </Container>
  );
}
