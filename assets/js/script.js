// Enhanced Matrix Rain Animation
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#64ffda';
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i*fontSize, rainDrops[i]*fontSize);
        
        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

// Project data
const projects = [
    {
        title: "GhostC OS",
        description: "A custom operating system kernel developed from scratch, demonstrating low-level system programming expertise. Features include basic memory management, process scheduling, and hardware interactions. This project showcases my passion for kernel development and systems programming.",
        technologies: ["C", "Assembly", "Operating Systems", "Kernel Development", "System Architecture"],
        features: [
            "Custom bootloader implementation",
            "Memory management system",
            "Basic process scheduling",
            "Hardware abstraction layer",
            "System calls implementation"
        ],
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Official-ghostC-OS",
        category: "systems"
    },
    {
        title: "Network Scanner",
        description: "A robust network scanning tool built with security in mind. This tool demonstrates my understanding of network protocols and security principles, allowing for comprehensive network analysis and vulnerability assessment.",
        technologies: ["Python", "Networking", "Security", "Scapy", "Socket Programming"],
        features: [
            "Port scanning capabilities",
            "Network device discovery",
            "Service enumeration",
            "Basic vulnerability detection",
            "Network mapping"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/NetworkScanner",
        category: "security"
    },
    {
        title: "Mini Code Editor",
        description: "A lightweight code editor built as part of my full-stack development journey. Features syntax highlighting and basic text editing capabilities, demonstrating front-end development skills and UI/UX design principles.",
        technologies: ["JavaScript", "HTML", "CSS", "CodeMirror", "Web APIs"],
        features: [
            "Syntax highlighting",
            "Basic text editing",
            "File management",
            "Theme customization",
            "Keyboard shortcuts"
        ],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/mini-code-editor",
        category: "fullstack"
    },
    {
        title: "C++ Learning Projects",
        description: "A collection of C++ projects demonstrating my progression in systems programming and algorithm implementation. These projects showcase my understanding of low-level programming concepts and data structures.",
        technologies: ["C++", "Data Structures", "Algorithms", "STL", "Memory Management"],
        features: [
            "Custom data structures",
            "Algorithm implementations",
            "Memory management examples",
            "Performance optimization",
            "Best practices demonstration"
        ],
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Hello-World-C-",
        category: "systems"
    },
    {
        title: "Front-End Portfolio",
        description: "A showcase of my front-end development skills as part of my full-stack education. This project demonstrates my ability to create responsive, modern web interfaces with clean and maintainable code.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Web APIs"],
        features: [
            "Responsive layouts",
            "Modern CSS techniques",
            "Interactive components",
            "Performance optimization",
            "Cross-browser compatibility"
        ],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Hello-World-Front-End",
        category: "fullstack"
    },
    {
        title: "Weather Dashboard",
        description: "A full-stack weather application showcasing API integration, data visualization, and modern web development practices. Built as part of my full-stack development coursework.",
        technologies: ["React", "Node.js", "Express", "Weather API", "Chart.js"],
        features: [
            "Real-time weather data",
            "Interactive charts",
            "Location-based services",
            "Responsive design",
            "API integration"
        ],
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        link: "https://github.com/Anon23261/Module6-Mini-Project",
        category: "fullstack"
    }
];

// Project filtering
let currentFilter = 'all';

function filterProjects(category) {
    currentFilter = category;
    const projectsContainer = document.querySelector('.projects-grid');
    projectsContainer.style.opacity = '0';
    
    setTimeout(() => {
        populateProjects();
        projectsContainer.style.opacity = '1';
    }, 300);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

// Typing animation with cursor effect
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        setTimeout(() => typeWriter(element, text, i + 1), 100);
    } else {
        element.innerHTML = text + '<span class="cursor">|</span>';
    }
}

// Initialize typing animations
function initTypeAnimations() {
    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        typeWriter(element, text);
    });
}

// Intersection Observer for animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('typing-text')) {
                typeWriter(entry.target, entry.target.dataset.text);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('section, .terminal-box, .key-point').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Populate projects with terminal-style cards
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    const filteredProjects = projects.filter(project => 
        currentFilter === 'all' || project.category === currentFilter
    );

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card terminal-box';
        projectCard.innerHTML = `
            <div class="terminal-header">
                <span class="terminal-button close"></span>
                <span class="terminal-button minimize"></span>
                <span class="terminal-button maximize"></span>
            </div>
            <h3>${project.title}</h3>
            <p class="terminal-prompt">$ cat description.txt</p>
            <p>${project.description}</p>
            <div class="project-tech">
                <p class="terminal-prompt">$ ls technologies/</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
            <div class="project-links">
                <a href="${project.link}" target="_blank" class="btn primary">
                    <i class="fab fa-github"></i> View Source
                </a>
                ${project.demo ? `
                    <a href="${project.demo}" target="_blank" class="btn secondary">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                ` : ''}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Add loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate sending (replace with actual form submission)
    setTimeout(() => {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Message sent successfully! I'll get back to you soon.
        `;
        this.appendChild(successMessage);
        
        // Reset form
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Remove success message after 5 seconds
        setTimeout(() => successMessage.remove(), 5000);
    }, 1500);
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initTypeAnimations();
    populateProjects();
});

// Handle navigation highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
