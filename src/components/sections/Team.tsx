// src/components/sections/Team.jsx
import { teamMembers } from '../../data/team'

const Team = () => {
  return (
    <section id="teams" className="section bg-#2d1547 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center animate-slide-up opacity-0">
          Our <span className="text-primary-lighter">Team</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-primary-dark p-4 md:p-5 rounded-2xl text-center shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl card-hover animate-scale-in opacity-0"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xs md:text-sm font-bold mb-1">{member.name}</h3>
              <p className="text-primary-lighter mb-3">{member.position}</p>
              <p className="text-[11px] md:text-xs mb-4 leading-tight">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                {member.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    className="text-primary-lighter hover:text-white transition-colors duration-300"
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          <p className="text-lg md:text-xl mb-6">
            We're always looking for talented individuals to join our growing team.
          </p>
          <a
            href="#contact"
            className="bg-primary hover:bg-primary-light text-white font-semibold py-3 md:py-3.5 px-10 md:px-12 text-base md:text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  )
}

export default Team
