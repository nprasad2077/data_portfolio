// src/components/sections/Skills.jsx
const skills = {
  '⚡ Languages & Pipelines': [
    { name: 'SQL', level: 95 },
    { name: 'Python / PySpark', level: 90 },
    { name: 'dbt-core', level: 90 },
    { name: 'Apache Spark', level: 85 },
    { name: 'Go (Fiber)', level: 75 },
    { name: 'Bash / PowerShell', level: 80 },
  ],
  '☁️ Cloud & Infrastructure': [
    { name: 'AWS (S3, Glue, Athena, ECS, Lambda)', level: 90 },
    { name: 'Microsoft Fabric', level: 90 },
    { name: 'Docker / Containers', level: 85 },
    { name: 'Terraform / Pulumi / IaC', level: 80 },
    { name: 'PostgreSQL / MS SQL Server', level: 90 },
    { name: 'Kafka / Kinesis', level: 75 },
  ],
  '📊 Data Modeling & Analytics': [
    { name: 'Star Schema / Kimball', level: 90 },
    { name: 'Medallion Architecture', level: 90 },
    { name: 'Power BI / Fabric Reports', level: 85 },
    { name: 'SSIS / SSRS', level: 80 },
    { name: 'Data Governance / HIPAA', level: 85 },
    { name: 'Parquet / Delta Lake', level: 85 },
    { name: 'CI/CD (Git, Azure DevOps)', level: 85 },
  ]
};

function SkillBar({ name, level, category }) {
  const barColors = {
    '⚡ Languages & Pipelines': 'bg-blue-600',
    '☁️ Cloud & Infrastructure': 'bg-emerald-600',
    '📊 Data Modeling & Analytics': 'bg-violet-600'
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
