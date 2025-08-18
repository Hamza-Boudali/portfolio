'use client';

import { motion, useReducedMotion } from 'framer-motion';

const skills = [
  { skill: 'HTML & Semantic Markup', level: 70 },
  { skill: 'CSS / Tailwind', level: 60 },
  { skill: 'JavaScript (ES6+)', level: 50 },
  { skill: 'React / Next.js', level: 35 },
  { skill: 'Responsive Design', level: 65 },
  { skill: 'Git & Version Control', level: 60 },
  { skill: 'APIs & REST (basics)', level: 40 },
];

const learningNow = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'API integration',
];

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 px-4 bg-gray-100" aria-labelledby="skills-heading">
      <div className="max-w-4xl mx-auto">
        <h2 id="skills-heading" className="text-3xl font-bold mb-6 text-center text-gray-900">
          Technical Skills
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Practical, project-focused skills — updated as I ship new work. Strong foundation in math/statistics. Currently building with Next.js & Tailwind.
        </p>

        {/* Currently learning badges */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {learningNow.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.05 }}
              className="text-xs rounded-full border bg-white/70 px-3 py-1 text-gray-700"
              aria-label={`Currently learning ${tag}`}
            >
              🚧 Learning: {tag}
            </motion.span>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm text-gray-700">
                <span>{item.skill}</span>
                <span aria-hidden="true">{item.level}%</span>
              </div>

              <div
                className="h-3 bg-gray-200 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={item.level}
                aria-label={`${item.skill} proficiency ${item.level} percent`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.level}%` }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-700">
          <strong>Certifications:</strong> CompTIA A+ (foundation; focusing on web/SaaS)
        </div>
      </div>
    </section>
  );
}