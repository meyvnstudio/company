import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../assets/Assets";
import { MdOutlineFullscreen } from "react-icons/md";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Projects = () => {
  const [fullWork, setFullWork] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 4;

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleFullScreen = (project) => {
    setFullWork(project);
  };

  const closeModal = () => {
    setFullWork(null);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <div className="works" id="works">
        <div className="container">
          <div className="sec-title">
            <div>
              <h2>Latest projects we worked on</h2>
            </div>
            <div>
              <Link to="/projects">Explore more</Link>
            </div>
          </div>
          <div className="content">
            <div className="project-list">
              {currentProjects.map((project, index) => (
                <div key={index} className="project">
                  <div className="preview">
                    {project.thumbnail.includes(".mp4") ? (
                      <video autoPlay loop muted>
                        <source src={project.thumbnail} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={project.thumbnail} />
                    )}
                  </div>
                  <div className="overlay"></div>
                  <div className="project-info">
                    <h3>{project.title}</h3>

                    <div className="action">
                      <button
                      //  onClick={() => handleFullScreen(project)}
                       >
                        <MdOutlineFullscreen />
                      </button>

                      <Link
                        to={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live preview
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <div className="navigator">
                <button
                  onClick={handlePrev}
                  className={`prev ${currentPage === 1 ? "disabled" : ""}`}
                  disabled={currentPage === 1}
                >
                  <LuChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  className={`next ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                  disabled={currentPage === totalPages}
                >
                  <LuChevronRight />
                </button>
              </div>
              <div className="nums">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={index}
                      className={`page-number ${
                        currentPage === pageNumber ? "active" : ""
                      }`}
                      onClick={() => paginate(pageNumber)}
                    >
                      <span className="span"></span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {fullWork && (
        <div className="fullscreen">
          <div className="overlay" onClick={closeModal}></div>
          <span className="close" onClick={closeModal}>
            <MdClose />
          </span>
          <div className="modal-content">
            <div className="img">
              <img src={fullWork.thumbnail} alt={fullWork.title} />
            </div>
            <div className="detail">
              <h2>{fullWork.title}</h2>
              <div className="col">
                <ul>
                  <span className="thetitle">Designs</span>
                  {fullWork.design.map((item, index) => (
                    <li key={index} className="design">
                      {item}
                    </li>
                  ))}
                </ul>
                <ul>
                  <span className="thetitle">Client</span>
                  <li>{fullWork.client}</li>
                </ul>
              </div>
              <div className="description">
                <span className="thetitle">Description</span>
                <p>{fullWork.description}</p>
              </div>
              <div>
                <a
                  href={fullWork.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
