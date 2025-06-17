import { Link } from "react-router-dom";
import { assets, blogs, projects, services, slugify } from "../assets/asset";

import "./../style/home.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { LuCalendar, LuCircleUserRound, LuUser } from "react-icons/lu";

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <section
          className="hero"
          aria-label="Agency introduction section with call to action"
        >
          <div className="vid_bg" aria-hidden="true">
            <video
              src={assets.video_bg}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            ></video>
          </div>

          <div className="container">
            <div className="content">
              <p className="tagline">
                We solve complex problems through design and technology.
              </p>
              <h1>
                Our expert team combines agile development with deep tech
                expertise to deliver powerful, scalable solutions fast.
              </h1>
              <div className="actions">
                <Link to="/hire-us" className="button" aria-label="Hire us now">
                  <span>Hire us Now</span>
                </Link>
                <Link
                  to="/portfolio"
                  className="btn secondary"
                  aria-label="View our past projects"
                >
                  <span>Our Past Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="content">
              <h1>
                Your clients deserve user-friendly, purposeful digital products
                — we’re here to design and build them.
              </h1>
              <h3 aria-label="who we are">
                We design, build, and scale innovative software and creative
                products that solve real-world problems. From strategy to
                execution, we partner with startups and forward-thinking brands
                to drive impact through technology and design.
              </h3>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <div className="content">
              <div className="titles">
                <div>
                  <p>
                    Explore how we turn bold ideas into real digital
                    experiences.
                  </p>
                  <h3>
                    From early-stage startups to growing brands, we've helped
                    teams turn ideas into real products. Here are a few
                    highlights of our recent work — where strategy, design, and
                    development come together to deliver impact.
                  </h3>
                </div>

                <div>
                  <Link to={"/projects"}>
                    <span>View more work</span>
                    <span>
                      <IoIosArrowRoundForward />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="projects-box">
                {projects.map(
                  (work, index) =>
                    work.isFeatured && (
                      <Link
                        to={`/case-study/${slugify(work.title)}`}
                        className="box"
                        key={index}
                      >
                        <img src={work.thumbnail} alt={work.title} />
                        <div className="details">
                          <h3>{work.title}</h3>
                          <ul>
                            {work.services.slice(0, 3).map((service, i) => (
                              <li key={i}>{service}</li>
                            ))}
                          </ul>
                          <span className="button">
                            <span>
                              <BsArrowRight />
                            </span>
                          </span>
                        </div>
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="services-sec">
          <div className="container">
            <div className="content">
              <div className="sec-title">
                <h3>
                  Our services are custom-crafted to bring real business
                  value—delivered in a way that fits naturally into your
                  workflow.
                </h3>
                <h1>
                  Whether you're shaping a new visual identity, designing
                  interfaces for mobile apps, launching websites, or running
                  powerful marketing campaigns—we work with you from idea to
                  execution to make it real.
                </h1>
              </div>
              <div className="service-boxes">
                {services.map((service, index) => (
                  <div className="box" key={index}>
                    <span className="icon">
                      <img
                        src={service.icon}
                        alt={service.title}
                        loading="lazy"
                      />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.subServices.map((sub, i) => (
                        <li key={i}>{sub.title}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta1">
          <div className="container">
            <div className="content">
              <p>
                We don’t just create websites, apps, or campaigns—we create
                pathways to success. Clients trust us because we embrace their
                goals as our own, offering comprehensive support from strategy
                to launch and beyond.
              </p>
              <div className="btns">
                <Link>
                  <span>Hire us</span>
                </Link>
                <div className="clutch">
                  <img
                    src={assets.icons.clutch}
                    alt="Clutch Logo"
                    loading="lazy"
                  />
                  <div className="txt">
                    <span className="main__text">
                      <span className="num">4.8</span>
                      <span>Rating on Clutch</span>
                    </span>
                    <span className="sec__text">
                      Top IT Companies in Rwanda
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="blog_list">
          <div className="container">
            <div className="content">
              <div className="sec-title">
                <div>
                  <h2>Industry Resources</h2>
                  <p>
                    Latest trends and expert tips that will help you navigate
                    evolving world of tech and design.
                  </p>
                </div>
                <div>
                  <Link to={"/resources"}>
                    <span>View all Posts</span>
                  </Link>
                </div>
              </div>
              <div className="blog__list">
                {blogs.map(
                  (blog, index) =>
                    blog.isFeatured && (
                      <div className="blog_box" key={index}>
                        <div className="img">
                          <img src={blog.media.coverImage} alt={blog.title} />
                        </div>
                        <div className="author_date">
                          <Link to={`/team/${blog.author}`} className="author">
                            <span>
                              <LuCircleUserRound />
                            </span>
                            <span>Iwmvictor</span>
                          </Link>
                          <div className="date">
                            <span>
                              <LuCalendar />
                            </span>
                            <span className="num">
                              {new Date(blog.publishedAt).toLocaleDateString(
                                undefined,
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>

                        <Link className="blog_header"
                        //  to={`/article/${slugify(blog.title)}`}
                        to={`/article/${blog.id}`}
                        >
                          <span>{blog.title}</span>
                        </Link>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
