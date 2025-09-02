// src/components/sections/Projects.jsx
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="section bg-primary py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center animate-slide-up opacity-0">Our <span className="text-primary-lighter">Projects</span></h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
          Innovative solutions that have transformed businesses across industries
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-primary-dark rounded-2xl overflow-hidden shadow-xl card-hover animate-scale-in opacity-0" style={{animationDelay: `${0.2 + index * 0.2}s`}}>
              <div className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-white text-6xl`}></i>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="mb-5 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-primary-lighter text-white text-xs px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <a href="#" className="text-primary-lighter font-semibold hover:text-white transition-colors duration-300">
                  View Case Study <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects