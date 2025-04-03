const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600 dark:text-gray-300">
                © {currentYear} King David Mazimpaka. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/DavidkingMazimpaka" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/mazimpaka-king-david-583182319/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                LinkedIn
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;