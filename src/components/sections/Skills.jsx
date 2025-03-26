// src/components/sections/Skills.jsx
const skills = {
  'Languages': [
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 85 },
  ],
  'Frameworks & Technologies': [
    { name: 'React', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'FastAPI', level: 75 },
    { name: '.NET Web API', level: 75 },
    { name: 'Express.js', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind', level: 85 },
    { name: 'REST API', level: 85 },
  ],
  'Tools & Infrastructure': [
    { name: 'Docker', level: 80 },
    { name: 'AWS Services', level: 75 },
    { name: 'PostgreSQL', level: 90 },
    { name: 'Microsoft SQL Server', level: 85 },
    { name: 'Git/Azure DevOps', level: 85 },
    { name: 'DBT-core', level: 80 },
    { name: 'Power BI', level: 75 },
    { name: 'SSRS/SSIS', level: 80 },
  ]
};

function SkillBar({ name, level, category }) {
  const barColors = {
    'Languages': 'bg-blue-600',
    'Frameworks & Technologies': 'bg-blue-600',
    'Tools & Infrastructure': 'bg-blue-600'
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className={`h-full ${barColors[category]} rounded-full transition-all duration-500`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6">{category}</h3>
              <div className="space-y-6">
                {skillList.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    {...skill} 
                    category={category}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
