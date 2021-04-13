import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Icon from "./Icon";
import { useState } from "react";

// FIXME: Is this the right position for these objects
const slides = [
  {
    id: "Mollie Mobile",
    caption:
      "Designed apps for iOS, Android and developed the landing page • 2020",
    width: 129,
    x: 0,
  },
  {
    id: "Mollie Video",
    caption:
      "Created an engaging video to help showcase Mollie at events • 2020",
    width: 121,
    x: 129,
  },
  {
    id: "Mollie Checkout",
    caption:
      "Redesigned and developed the Mollie Checkout Web application • 2019",
    width: 152,
    x: 250,
  },
  {
    id: "Mollie Apple Pay",
    caption:
      "Created an engaging promo video for the Mollie Apple Pay launch • 2019",
    width: 153,
    x: 402,
  },
];

const posts = [
  { id: "Hello world", url: "hello_world", width: 112, x: 0 },
  { id: "Suntory Toki review", url: "suntory_toki_review", width: 176, x: 112 },
];

const links = [
  {
    id: "Email",
    url: "mailto:georgemaine.lourens@gmail.com?subject=Hello%20%F0%9F%91%8B",
  },
  {
    id: "Twitter",
    url: "https://twitter.com/georgemaine",
  },
  {
    id: "Dribbble",
    url: "https://dribbble.com/georgemaine",
  },
  {
    id: "Github",
    url: "https://github.com/georgemaine",
  },
  {
    id: "LinkedIn",
    url: "https://www.linkedin.com/in/georgemaine",
  },
];

const Nav = ({
  slideId,
  postId,
  setPostId,
  setFilterId,
  filterId,
  setSlideId,
}) => {
  const router = useRouter();
  const [expandedContactLinks, setExpandedContactLinks] = useState(false);
  const selectedSlide = slides.findIndex((slide) => slide.id === slideId);
  const selectedPost = posts.findIndex((element) => element.id === postId); // FIXME: Combine the two methods into a single one

  const handleFilters = (hook, id) => {
    hook(id);
    setExpandedContactLinks(false);
  };

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.filters} ${
          filterId === "slides" && styles.workFiltersExpanded
        }`}
      >
        {filterId === "posts" ? (
          <button
            className={styles.buttonLink}
            onClick={() => (
              router.push("/"), handleFilters(setFilterId, "slides")
            )}
          >
            Work
          </button>
        ) : (
          slides.map((slide, index) => (
            // FIXME: Can we use components here?
            <button
              className={styles.filter}
              onClick={() => handleFilters(setSlideId, slide.id)}
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
              width: slides[selectedSlide].width, // FIXME: Update widths
              transform: `translateX(${slides[selectedSlide].x}px)`,
            }}
          ></div>
        ) : null}
      </nav>
      <nav
        className={`${styles.filters} ${
          filterId === "posts" && styles.articleFiltersExpanded
        }`}
      >
        {filterId === "slides" ? (
          <button
            className={styles.buttonLink}
            onClick={() => handleFilters(setFilterId, "posts")}
          >
            Articles
          </button>
        ) : (
          posts.map((post, index) => (
            // FIXME: Use components to create these
            <Link
              key={index}
              href={`/?postId=${post.url}`}
              as={`/post/${post.url}`}
            >
              <button
                onClick={() => handleFilters(setPostId, post.id)}
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
      <nav
        className={`${styles.filters} ${
          expandedContactLinks && styles.socialLinksExpanded
        }`}
      >
        {expandedContactLinks === false ? (
          <button
            className={styles.buttonLink}
            onClick={() => setExpandedContactLinks(true)}
          >
            Get in touch
          </button>
        ) : expandedContactLinks ? (
          links.map((link, index) => (
            <Link key={index} href={link.url}>
              <a
                target='_blank'
                rel='noreferrer'
                onClick={() => setExpandedContactLinks(false)}
                className={styles.button}
              >
                <Icon string={link.id} />
              </a>
            </Link>
          ))
        ) : null}
      </nav>
    </header>
  );
};

export default Nav;
