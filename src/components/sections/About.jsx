// src/components/sections/About.jsx
import { FadeIn } from '../animations/FadeIn';

export function About() {
  const features = [
    {
      icon: '🎯',
      title: 'Strategic Design',
      description: 'Creating solutions that align with business goals',
      bgColor: 'bg-blue-100'
    },
    {
      icon: '💡',
      title: 'User-Centered',
      description: 'Focusing on real user needs and pain points',
      bgColor: 'bg-green-100'
    },
    {
      icon: '✨',
      title: 'Pixel Perfect',
      description: 'Attention to detail in every design decision',
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
                I'm a product designer with 6+ years of experience creating
                digital products that solve real problems. My approach combines
                user-centered design principles with strategic thinking to
                deliver meaningful experiences.
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