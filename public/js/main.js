/**
 * Main application script
 * Handles routing, navigation, and page initialization
 */

class JungleeBillaApp {
  constructor() {
    this.currentPage = null;
    this.user = null;
    this.init();
  }

  /**
   * Initialize the application
   */
  async init() {
    console.log('🚀 Junglee Billa App Initializing...');
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Check authentication status
    await this.checkAuthStatus();
    
    // Setup navigation
    this.setupNavigation();
    
    // Route to current page
    this.route();
  }

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && !e.target.hasAttribute('target')) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          this.navigateTo(href);
        }
      }
    });
  }

  /**
   * Setup navigation menu
   */
  setupNavigation() {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
      });
    }
  }

  /**
   * Check user authentication status
   */
  async checkAuthStatus() {
    try {
      const response = await fetch('/api/auth/status');
      if (response.ok) {
        this.user = await response.json();
        this.updateAuthUI();
      }
    } catch (error) {
      console.log('User not authenticated');
    }
  }

  /**
   * Update authentication UI elements
   */
  updateAuthUI() {
    const loginBtn = document.querySelector('[data-auth-login]');
    const profileBtn = document.querySelector('[data-auth-profile]');
    const userAvatar = document.querySelector('[data-user-avatar]');

    if (this.user) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (profileBtn) profileBtn.style.display = 'block';
    } else {
      if (loginBtn) loginBtn.style.display = 'block';
      if (profileBtn) profileBtn.style.display = 'none';
    }
  }

  /**
   * Navigate to a page
   */
  navigateTo(path) {
    window.history.pushState({}, '', path);
    this.route();
  }

  /**
   * Route to the current page
   */
  async route() {
    const path = window.location.pathname;
    
    // Load appropriate page
    switch (path) {
      case '/':
        await this.loadPage('pages/home.html');
        break;
      case '/about':
        await this.loadPage('pages/about.html');
        break;
      case '/contact':
        await this.loadPage('pages/contact.html');
        break;
      case '/portfolio':
        await this.loadPage('pages/portfolio.html');
        break;
      case '/services':
        await this.loadPage('pages/services.html');
        break;
      case '/gallery':
        await this.loadPage('pages/gallery.html');
        break;
      case '/blog':
        await this.loadPage('pages/blog.html');
        break;
      case '/login':
        await this.loadPage('pages/login.html');
        break;
      case '/profile':
        if (this.user) {
          await this.loadPage('pages/profile.html');
        } else {
          this.navigateTo('/login');
        }
        break;
      default:
        this.loadPage('pages/404.html');
    }
    
    // Animate page content
    this.animatePageEntry();
  }

  /**
   * Load HTML content for a page
   */
  async loadPage(pagePath) {
    try {
      const response = await fetch(pagePath);
      if (response.ok) {
        const html = await response.text();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.innerHTML = html;
          this.currentPage = pagePath;
        }
      }
    } catch (error) {
      console.error('Error loading page:', error);
    }
  }

  /**
   * Animate page entry
   */
  animatePageEntry() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.add('animate-fade-in');
      
      // Animate child elements
      const elements = mainContent.querySelectorAll('section');
      elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('animate-slide-in-up');
      });
    }
  }

  /**
   * Logout user
   */
  async logout() {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      this.user = null;
      this.updateAuthUI();
      this.navigateTo('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app = new JungleeBillaApp();
  });
} else {
  window.app = new JungleeBillaApp();
}
