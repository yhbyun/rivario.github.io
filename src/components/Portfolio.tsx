'use client'

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, MapPin } from 'lucide-react';

export default function Portfolio(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
      setDarkMode(false); // Default to light mode if there's an error
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const skills: string[] = [
    "Laravel Framework", "PHP", "JavaScript", "MySQL", "Docker", "Git", "RESTful APIs"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">rivario.com</h1>
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</a>
              <a href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-800 to-gray-600 dark:from-gray-300 dark:to-gray-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User size={48} className="text-white dark:text-gray-800" />
                </div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  YongHun Byun
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Web Developer</p>
                <p className="text-lg text-gray-500 dark:text-gray-400 flex items-center justify-center">
                  <MapPin size={18} className="mr-1" />
                  South Korea
                </p>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Passionate web developer specializing in Laravel Framework. Currently building amazing web solutions at Exporum.
                I love creating efficient, scalable applications that solve real-world problems.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Code size={32} className="mx-auto mb-4 text-gray-700 dark:text-gray-300" />
                <h3 className="text-xl font-semibold mb-2">Laravel Expert</h3>
                <p className="text-gray-600 dark:text-gray-300">Building robust web applications with my favorite PHP framework</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <Briefcase size={32} className="mx-auto mb-4 text-gray-700 dark:text-gray-300" />
                <h3 className="text-xl font-semibold mb-2">Currently at Exporum</h3>
                <p className="text-gray-600 dark:text-gray-300">Contributing to innovative web solutions and learning every day</p>
              </div>
              <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <User size={32} className="mx-auto mb-4 text-gray-700 dark:text-gray-300" />
                <h3 className="text-xl font-semibold mb-2">Full Stack</h3>
                <p className="text-gray-600 dark:text-gray-300">Frontend to backend, database to deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">My Story</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  I&apos;m a dedicated web developer from South Korea with a passion for creating elegant, efficient web solutions.
                  My journey in web development has been driven by curiosity and a love for problem-solving.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Laravel has captured my heart with its elegant syntax and powerful features. Currently, I&apos;m applying my skills
                  at Exporum, where I work on exciting projects that challenge me to grow as a developer every day.
                </p>
                <div className="flex space-x-4">
                  <a href="#contact" className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-100 text-white px-6 py-3 rounded-lg transition-colors">
                    Get In Touch
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="bg-white dark:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              <a href="mailto:yonghunbyun@gmail.com" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                <Mail size={24} />
                <span>Email</span>
              </a>
              <a href="https://github.com/yhbyun" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/yonghunbyun/" className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>

            <a href="mailto:yonghunbyun@gmail.com" className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-100 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-block">
              Send Message
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 rivario.com. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
