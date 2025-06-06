import './FeaturedPost.css';

import unsplash1 from "../assets/unsplash_hHdHCfAifHU.png";
import unsplash2 from "../assets/unsplash_tVEqStC2uz8.png";
import unsplash3 from "../assets/unsplash_dEGu-oCuB1Y.png";
import iconDate from "../assets/coolicon.svg";
import iconComment from "../assets/Vector.svg";
import iconLearnMore from "../assets/none.svg";

const posts = [
  {
    id: 1,
    imageSrc: unsplash1,
    imageAlt: "Blog Post 1",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    imageSrc: unsplash2,
    imageAlt: "Blog Post 2",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    imageSrc: unsplash3,
    imageAlt: "Blog Post 3",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'intégral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

const FeaturedPostsSection = () => (
  <section className="featured-posts-section">
    <header className="featured-posts-header">
      <p className="featured-posts-header__suptitle">Practice Advice</p>
      <h1 className="featured-posts-header__title">Featured Posts</h1>
    </header>
    <div className="posts-grid">
      {posts.map((post) => (
        <article className="post-card" key={post.id}>
          <div className="post-card__image-wrapper">
            <img
              className="post-card__image"
              src={post.imageSrc}
              alt={post.imageAlt}
            />
            <span className="post-card__badge">NEW</span>
          </div>
          <div className="post-card__body">
            <div className="post-card__tags">
              {post.tags.map((tag, tidx) => (
                <span
                  className={
                    "post-card__tag" +
                    (tag === "Google"
                      ? " post-card__tag--blue"
                      : tag === "New"
                      ? " post-card__tag--grey"
                      : "")
                  }
                  key={tidx}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="post-card__title">{post.title}</h2>
            <p className="post-card__desc">{post.description}</p>
            <div className="post-card__meta-row">
              <span className="post-card__meta">
                <img src={iconDate} alt="" />
                <span className="post-card__meta-text">{post.date}</span>
              </span>
              <span className="post-card__meta">
                <img src={iconComment} alt="" />
                <span className="post-card__meta-text">{post.comments} comments</span>
              </span>
            </div>
            <a href="#" className="post-card__learn-more">
              <span>Learn More</span>
              <img src={iconLearnMore} alt="" />
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturedPostsSection;