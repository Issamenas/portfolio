'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard, { ProjectCardSkeleton } from '@/components/ProjectCard'
import SectionLabel from '@/components/SectionLabel'
import { projects } from '@/data/content'
import { staggerContainer, itemEntrance } from '@/lib/animations'

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-content px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          <motion.div variants={itemEntrance}>
            <SectionLabel
              label="projects"
              description="Things I've built — internships, research, and personal work"
            />
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProjectCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
