// src/components/sections/About.jsx
import { FadeIn } from '../animations/FadeIn';

export function About() {
  const features = [
    {
      icon: '🎯',
      title: 'Data Engineering',
      description: 'Building efficient data pipelines and solutions',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '💡',
      title: 'Full Stack Development',
      description: 'Creating end-to-end web applications',
      bgColor: 'bg-green-100'
    },
    {
      icon: '✨',
      title: 'System Optimization',
      description: 'Improving performance and efficiency',
      bgColor: 'bg-purple-100'
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
                src="https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa"
                alt="Sarah working"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </FadeIn>

          {/* Content Section */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <p className="text-xl text-gray-600">
                Growth-oriented data enthusiast passionate about web development and system optimization. 
                Skilled in writing clear, concise, and easily maintainable code. 
                Seeking opportunities to expand expertise in data applications and software development.
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