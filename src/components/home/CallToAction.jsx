import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="large">
                Get in Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="large">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 