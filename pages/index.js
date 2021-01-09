import React from "react";
import {
  Manifesto,
  Link,
  Headline,
  Header,
  Section,
  SocialLinks,
  SmallGallery,
  LargeGallery,
} from "../src/Mamba";

export default function Home() {
  return (
    <main
      style={{
        overflow: "hidden",
      }}
    >
      <Header>
        <img width={120} src='/images/memoji.png' alt='Memoji portait of me' />
        <Manifesto>
          Hi, I’m Georgemaine—A product designer currently working on{" "}
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://pitch.com/'
            style={{ color: "var(--red)" }}
          >
            Pitch
          </Link>
          , the next-gen presentation tool. I enjoy making digital tools so
          simple and fun to use that you'll want to use them all the time. I
          also like tinkering with software projects and animation videos on the
          side. If you have one and think I can help or simply want to
          chat—reach out.
        </Manifesto>
        <SocialLinks />
      </Header>
      <Section>
        <Headline>Work</Headline>
        <SmallGallery />
        <LargeGallery />
      </Section>
    </main>
  );
}
