import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";

function ContactInfo({ icon, title, content, href }) {
  const ContentWrapper = href ? "a" : "div";
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <ContentWrapper
          href={href}
          className={href ? "text-blue-600 hover:text-blue-700 transition-colors" : "text-gray-600"}
        >
          {content}
        </ContentWrapper>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Let's Connect
          </h2>
        </FadeIn>

        <div className="max-w-xl mx-auto">
          <FadeIn direction="up">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm always interested in hearing about new projects and
                opportunities. Feel free to reach out! 😄  💻  🏀
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="w-5 h-5" />}
                  title="Email"
                  content="nprasad2077@gmail.com"
                  href="mailto:nprasad2077@gmail.com"
                />
                <ContactInfo
                  icon={<Phone className="w-5 h-5" />}
                  title="Phone"
                  content="+1 (832) 464-5585"
                  href="tel:+18324645585"
                />
                <ContactInfo
                  icon={<MapPin className="w-5 h-5" />}
                  title="Location"
                  content="Houston, TX"
                />
                <ContactInfo
                  icon={<FileText className="w-5 h-5" />}
                  title="Resume"
                  content="Download PDF"
                  href="https://tinyurl.com/nickpras"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
