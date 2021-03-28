import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";

// FIXME: Is this the right position for these objects
const slides = [
  { id: "Mollie Mobile", width: 137, x: 0 },
  { id: "Mollie Video", width: 130, x: 137 },
  { id: "Mollie Checkout", width: 160, x: 267 },
  { id: "Mollie Apple Pay", width: 163, x: 427 },
];

const posts = [
  { id: "Hello world", url: "hello_world", width: 122, x: 0 },
  { id: "Suntory Toki review", url: "suntory_toki_review", width: 185, x: 122 },
];

export default function Nav({
  slideId,
  postId,
  setPostId,
  setFilterId,
  filterId,
  setSlideId,
}) {
  const router = useRouter();
  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = posts.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <a className={styles.buttonLink}>
          <Image
            className={styles.buttonLinkIcon}
            src='/images/memoji.jpg'
            height={24}
            width={24}
            alt='Georgemaine Lourens'
            // FIXME: Image doesn't have padding-right
          />
          Georgemaine
        </a>
      </Link>
      <div className={styles.filtersContainer}>
        <nav className={styles.filters}>
          {filterId === "posts" ? (
            <button
              className={styles.buttonLink}
              onClick={() => (router.push("/"), setFilterId("slides"))}
            >
              Work
            </button>
          ) : (
            slides.map((slide, index) => (
              <button
                className={styles.filter}
                onClick={() => setSlideId(slide.id)}
                key={index}
              >
                {slide.id}
              </button>
            ))
          )}
          {filterId == "slides" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: slides[selectedSlide].width,
                transform: `translateX(${slides[selectedSlide].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>
        <nav className={styles.filters}>
          {filterId === "slides" ? (
            <button
              className={styles.buttonLink}
              onClick={() => setFilterId("posts")}
            >
              Articles
            </button>
          ) : (
            posts.map((post, index) => (
              <Link
                key={index}
                href={`/?postId=${post.url}`}
                as={`/post/${post.url}`}
              >
                <button
                  onClick={() => setPostId(post.id)}
                  className={styles.filter}
                >
                  {post.id}
                </button>
              </Link>
            ))
          )}
          {filterId == "posts" ? (
            <div
              className={styles.filterSelection}
              style={{
                width: posts[selectedPost].width,
                transform: `translateX(${posts[selectedPost].x}px)`,
              }}
            ></div>
          ) : null}
        </nav>
      </div>
      <button>Get in touch</button>
    </header>
  );
}
