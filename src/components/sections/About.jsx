// src/components/sections/About.jsx
import { FadeIn } from '../animations/FadeIn';
import profileImage from '../../assets/images/profile.jpeg'

export function About() {
  const features = [
    {
      icon: '🎯',
      title: 'Data Engineering',
      description: 'Large-scale ETL/ELT pipelines processing 800M+ records/month',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '☁️',
      title: 'Cloud Platforms',
      description: 'AWS, Microsoft Fabric, and Snowflake data architectures',
      bgColor: 'bg-green-200'
    },
    {
      icon: '✨',
      title: 'Data Governance',
      description: 'Quality frameworks, HIPAA compliance, and lineage tracking',
      bgColor: 'bg-slate-500'
    }
  ];

  return (
    <section id="about" className="py-32 bg-[#F8F8F8]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <FadeIn direction="right">
            <div className="relative">
              <img
                src={profileImage}
                alt="Nick Prasad"
                loading="lazy"
                decoding="async"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square"
              />
            </div>
          </FadeIn>

          {/* Content Section */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-xl text-gray-600">
                Data Engineer with 3+ years designing and operating large-scale data pipelines, 
                data warehouses, and lakehouse architectures across AWS and Microsoft Fabric. 
                PharmD background enables deep fluency in clinical, pharmacy benefit, and Medicare enrollment data. 
                Passionate about building reliable, observable data systems that power business decisions.
              </p>
              
              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}