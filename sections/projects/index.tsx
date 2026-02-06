import React from 'react'
import Image from 'next/image'
import { projects, IProject } from '@/constants/projects'
import { Github, ExternalLink } from 'lucide-react'

const ProjectCard = ({ project }: { project: IProject }) => {
    return (
        <div className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={project.image_path}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 z-0"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <div className="text-center space-y-4 px-6 relative z-20">
                        <h4 className="text-2xl font-bold text-white mb-2">{project.name}</h4>
                        <p className="text-sm text-white/90 line-clamp-2 mb-4">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {project.key_techs.slice(0, 4).map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 justify-center">
                            <a
                                href={project.deployed_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2"
                            >
                                <ExternalLink className="text-base" />
                                View Live
                            </a>
                            {project.github_url && (
                                <a
                                    href={project.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 border border-white/20"
                                >
                                    <Github className="text-base" />
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                <p className="text-sm text-white/70 line-clamp-2 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.key_techs.slice(0, 3).map((tech, idx) => (
                        <span
                            key={idx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

const ProjectContainer = () => {
    return (
        <main className='max-w-[1400px] mx-auto px-6'>
            <section className="space-y-12">
                <div>
                    <h2 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
                        02 / Projects
                    </h2>
                    <p className="text-[#9dabb9] text-lg font-normal leading-relaxed max-w-2xl">
                        A collection of projects showcasing my expertise in building modern, scalable web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default ProjectContainer