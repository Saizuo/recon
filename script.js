document.addEventListener('DOMContentLoaded', function() {
    // Mouse movement effect for visual elements
    const visualElements = document.querySelector('.visual-elements');
    const gridBox = document.querySelector('.grid-box');
    const circle = document.querySelector('.circle');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Subtle parallax effect on visual elements
        gridBox.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px) rotate(${mouseX * 5}deg)`;
        circle.style.transform = `translate(${mouseX * -40}px, ${mouseY * 40}px)`;
    });
    
    // Text scramble effect
    const text = document.querySelector('h1');
    const originalText = text.textContent;
    let isAnimating = false;
    
    function scrambleText() {
        if (isAnimating) return;
        isAnimating = true;
        
        let iteration = 0;
        const maxIterations = 15;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        const interval = setInterval(() => {
            text.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    
                    if (letter === ' ') return ' ';
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");
            
            if (iteration >= originalText.length) {
                clearInterval(interval);
                isAnimating = false;
            }
            
            iteration += 1 / 3;
        }, 30);
    }
    
    // Initial animation
    setTimeout(scrambleText, 500);
    
    // Cursor effect
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);
    
    const cursorOuter = document.createElement('div');
    cursorOuter.classList.add('cursor-outer');
    document.body.appendChild(cursorOuter);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        cursorOuter.style.left = `${e.clientX}px`;
        cursorOuter.style.top = `${e.clientY}px`;
    });
    
    // Add hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, .menu-toggle, .social-icons div');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorOuter.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorOuter.classList.remove('cursor-hover');
        });
    });
    
    // Create a typing effect for the tagline
    const tagline = document.querySelector('.tagline');
    const taglineText = tagline.innerHTML;
    tagline.innerHTML = '';
    
    let i = 0;
    function typeWriter() {
        if (i < taglineText.length) {
            tagline.innerHTML += taglineText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
    
    // Add scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
    
    // Create vertical line effect
    createVerticalLines();
    function createVerticalLines() {
        const linesContainer = document.createElement('div');
        linesContainer.classList.add('vertical-lines');
        document.body.appendChild(linesContainer);
        
        for (let i = 0; i < 10; i++) {
            const line = document.createElement('div');
            line.classList.add('v-line');
            line.style.left = `${i * 10}%`;
            line.style.animationDelay = `${i * 0.1}s`;
            linesContainer.appendChild(line);
        }
    }
});


// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Feature cards reveal animation
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const featureObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                featureObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    featureCards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        featureObserver.observe(card);
    });
    
    // Timeline items reveal animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 150);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach((item) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        timelineObserver.observe(item);
    });
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if current item is already active
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // If clicked item wasn't active, make it active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Initial tokenomics animation
    const tokenMetrics = document.querySelectorAll('.token-metric-item');
    
    tokenMetrics.forEach((metric, index) => {
        metric.style.opacity = '0';
        metric.style.transform = 'translateY(20px)';
        metric.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            metric.style.opacity = '1';
            metric.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
    
    // Animate chart segments on scroll
    const chartVisual = document.querySelector('.chart-visual');
    
    if (chartVisual) {
        const chartObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const segments = document.querySelectorAll('.chart-segment');
                    
                    segments.forEach((segment, index) => {
                        setTimeout(() => {
                            segment.style.opacity = '1';
                            segment.style.transform = 'scale(1)';
                        }, index * 150);
                    });
                    
                    chartObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        chartObserver.observe(chartVisual);
        
        // Initialize chart segments
        const segments = document.querySelectorAll('.chart-segment');
        segments.forEach(segment => {
            segment.style.opacity = '0';
            segment.style.transform = 'scale(0.8)';
            segment.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
    }
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Form validation
            let isValid = true;
            const errorMessages = [];
            
            if (!formData.name.trim()) {
                isValid = false;
                errorMessages.push('Name is required');
                document.getElementById('name').classList.add('error');
            } else {
                document.getElementById('name').classList.remove('error');
            }
            
            if (!formData.email.trim() || !isValidEmail(formData.email)) {
                isValid = false;
                errorMessages.push('Valid email is required');
                document.getElementById('email').classList.add('error');
            } else {
                document.getElementById('email').classList.remove('error');
            }
            
            if (!formData.message.trim()) {
                isValid = false;
                errorMessages.push('Message is required');
                document.getElementById('message').classList.add('error');
            } else {
                document.getElementById('message').classList.remove('error');
            }
            
            if (!isValid) {
                console.error('Form validation failed:', errorMessages);
                return;
            }
            
            // Show loading state on button
            const submitButton = contactForm.querySelector('.submit-button');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = `<span>SENDING...</span>`;
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Show success message
                alert('Message sent successfully! We will get back to you soon.');
            }, 1500);
        });
    }
    
    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Smooth scrolling for footer navigation links
    const footerLinks = document.querySelectorAll('.footer-nav a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Get the href attribute
            const href = this.getAttribute('href');
            
            // Check if it's an anchor link
            if (href.startsWith('#') && href.length > 1) {
                event.preventDefault();
                
                // Get the corresponding element
                const targetId = href.substring(1);
                const targetElement = document.getElementsByClassName(targetId + '-section')[0];
                
                if (targetElement) {
                    // Scroll to the element
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Add CSS for form validation
    const style = document.createElement('style');
    style.textContent = `
        .form-group input.error,
        .form-group textarea.error {
            border-color: rgba(255, 0, 0, 0.5);
            background-color: rgba(255, 0, 0, 0.05);
        }
    `;
    document.head.appendChild(style);
});


// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Interactive trading chart
    const tradingGraph = document.querySelector('.trading-graph');
    
    if (tradingGraph) {
        // Animate data points when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger animation for data points
                    const dataPoints = tradingGraph.querySelectorAll('.data-point');
                    dataPoints.forEach((point, index) => {
                        setTimeout(() => {
                            point.style.opacity = '0';
                            point.style.transform = 'translate(-50%, -50%) scale(0)';
                            
                            // Apply animation
                            point.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            
                            setTimeout(() => {
                                point.style.opacity = '1';
                                point.style.transform = 'translate(-50%, -50%) scale(1)';
                            }, 100);
                        }, index * 150);
                    });
                    
                    // Animate the indicators
                    const indicators = tradingGraph.querySelectorAll('.indicator');
                    indicators.forEach((indicator, index) => {
                        indicator.style.opacity = '0';
                        indicator.style.transform = 'translateY(20px)';
                        indicator.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        
                        setTimeout(() => {
                            indicator.style.opacity = '1';
                            indicator.style.transform = 'translateY(0)';
                        }, 1000 + (index * 200));
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(tradingGraph);
        
        // Interactive hover on chart container to show focus area
        const chartContainer = tradingGraph.querySelector('.chart-container');
        const focusArea = tradingGraph.querySelector('.chart-focus-area');
        
        chartContainer.addEventListener('mousemove', (e) => {
            // Get relative position in the chart
            const rect = chartContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update focus area position (with some constraints to keep it in bounds)
            const focusWidth = focusArea.offsetWidth;
            const focusHeight = focusArea.offsetHeight;
            
            const maxX = rect.width - focusWidth;
            const maxY = rect.height - focusHeight;
            
            const constrainedX = Math.max(0, Math.min(maxX, x - (focusWidth / 2)));
            const constrainedY = Math.max(0, Math.min(maxY, y - (focusHeight / 2)));
            
            focusArea.style.left = `${constrainedX}px`;
            focusArea.style.top = `${constrainedY}px`;
            focusArea.style.opacity = '0.6';
        });
        
        chartContainer.addEventListener('mouseleave', () => {
            // Reset to default position when mouse leaves
            focusArea.style.left = '55%';
            focusArea.style.top = '40%';
            focusArea.style.opacity = '0.4';
        });
    }
});


// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Sniper bot interface animations
    const sniperInterface = document.querySelector('.sniper-interface');
    
    if (sniperInterface) {
        // Make crosshair follow mouse movement slightly
        const scopeView = sniperInterface.querySelector('.scope-view');
        const crosshair = sniperInterface.querySelector('.scope-crosshair');
        const activeTarget = sniperInterface.querySelector('.scope-target.active');
        
        scopeView.addEventListener('mousemove', (e) => {
            const rect = scopeView.getBoundingClientRect();
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate distance from center
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Move crosshair slightly towards mouse (subtle effect)
            const offsetX = (mouseX - centerX) * 0.05;
            const offsetY = (mouseY - centerY) * 0.05;
            
            crosshair.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
            
            // Make the active target "dodge" the crosshair slightly
            if (activeTarget) {
                activeTarget.style.transform = `translate(calc(-50% - ${offsetX * 0.3}px), calc(-50% - ${offsetY * 0.3}px))`;
            }
        });
        
        scopeView.addEventListener('mouseleave', () => {
            // Reset position when mouse leaves
            crosshair.style.transform = 'translate(-50%, -50%)';
            if (activeTarget) {
                activeTarget.style.transform = 'translate(-50%, -50%)';
            }
        });
        
        // Animate radar targets appearing
        const targets = sniperInterface.querySelectorAll('.target');
        targets.forEach((target, index) => {
            target.style.opacity = '0';
            target.style.transform = 'translate(-50%, -50%) scale(0)';
            
            setTimeout(() => {
                target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                target.style.opacity = '1';
                target.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 500 + (index * 300));
        });
        
        // Random blips on the radar
        setInterval(() => {
            const blip = document.createElement('div');
            blip.className = 'radar-blip';
            blip.style.position = 'absolute';
            blip.style.width = '5px';
            blip.style.height = '5px';
            blip.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            blip.style.borderRadius = '50%';
            blip.style.opacity = '0';
            
            // Random position on the radar
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 45 + 5; // 5% to 50% from center
            const x = 50 + Math.cos(angle) * distance;
            const y = 50 + Math.sin(angle) * distance;
            
            blip.style.top = `${y}%`;
            blip.style.left = `${x}%`;
            
            const radarScreen = sniperInterface.querySelector('.radar-screen');
            radarScreen.appendChild(blip);
            
            // Animate the blip
            setTimeout(() => {
                blip.style.transition = 'opacity 0.2s ease-in, transform 0.2s ease-in';
                blip.style.opacity = '1';
                blip.style.transform = 'scale(1.5)';
                
                setTimeout(() => {
                    blip.style.opacity = '0';
                    blip.style.transform = 'scale(0.2)';
                    
                    setTimeout(() => {
                        radarScreen.removeChild(blip);
                    }, 200);
                }, 200);
            }, 10);
        }, 2000);
        
        // Update stats with random small variations
        const statValues = sniperInterface.querySelectorAll('.stat-value');
        
        // Store original values
        const originalValues = Array.from(statValues).map(stat => {
            const value = stat.textContent;
            return {
                element: stat,
                value: value,
                isPercentage: value.includes('%'),
                isTime: value.includes('s'),
                isNumber: value.includes('K')
            };
        });
        
        // Update with slight variations periodically
        setInterval(() => {
            originalValues.forEach(item => {
                if (item.isPercentage) {
                    const baseValue = parseFloat(item.value);
                    const variation = (Math.random() - 0.5) * 0.6; // ±0.3%
                    const newValue = (baseValue + variation).toFixed(1);
                    item.element.textContent = `${newValue}%`;
                }
                else if (item.isTime) {
                    const baseValue = parseFloat(item.value);
                    const variation = (Math.random() - 0.5) * 0.06; // ±0.03s
                    const newValue = (baseValue + variation).toFixed(2);
                    item.element.textContent = `${newValue}s`;
                }
            });
        }, 3000);
    }
});
// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Animate roadmap elements when they enter the viewport
    const milestones = document.querySelectorAll('.milestone');
    
    if (milestones.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animation class
                    entry.target.classList.add('milestone-visible');
                    
                    // Stop observing once it's visible
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        // Add initial styles and observe each milestone
        milestones.forEach((milestone, index) => {
            // Set initial state
            milestone.style.opacity = '0';
            milestone.style.transform = 'translateY(30px)';
            
            // Add transition properties
            milestone.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;
            
            // Create the reveal animation in CSS
            const style = document.createElement('style');
            style.textContent = `
                .milestone-visible {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
            `;
            document.head.appendChild(style);
            
            // Observe the milestone
            observer.observe(milestone);
        });
        
        // Add floating particles around the roadmap
        const roadmapJourney = document.querySelector('.roadmap-journey');
        if (roadmapJourney) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'roadmap-particle';
                
                // Random styles
                particle.style.position = 'absolute';
                particle.style.width = (Math.random() * 4 + 1) + 'px';
                particle.style.height = particle.style.width;
                particle.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
                particle.style.borderRadius = '50%';
                
                // Random position
                particle.style.left = (Math.random() * 100) + '%';
                particle.style.top = (Math.random() * 100) + '%';
                
                // Add animation
                particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s linear infinite`;
                particle.style.animationDelay = (Math.random() * 10) + 's';
                
                roadmapJourney.appendChild(particle);
            }
            
            // Add the floating animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes floatParticle {
                    0% {
                        transform: translate(0, 0);
                        opacity: 0;
                    }
                    25% {
                        opacity: 1;
                    }
                    75% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translate(${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100 + 50}px, ${Math.random() > 0.5 ? '+' : '-'}${Math.random() * 100 + 50}px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add subtle parallax effect
        window.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            milestones.forEach(milestone => {
                if (milestone.classList.contains('milestone-visible')) {
                    milestone.style.transform = `translateY(0) translateX(${moveX}px)`;
                }
            });
            
            const pathLine = document.querySelector('.path-line');
            if (pathLine) {
                pathLine.style.transform = `translateX(calc(-50% + ${moveX * 0.5}px))`;
            }
        });
    }
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Menu button functionality
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    // Create overlay element for menu background
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', function() {
            // Toggle active classes
            menuButton.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking the overlay
        overlay.addEventListener('click', function() {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu when clicking on a nav link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menuButton.classList.remove('active');
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Close menu when resizing to desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Existing code...
    
    // Slide Menu functionality
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuButton && navLinks) {
        menuButton.addEventListener('click', function() {
            // Toggle active classes
            menuButton.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a nav link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menuButton.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Listen for escape key to close menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                menuButton.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu when resizing to desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            menuButton.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    
    // Toggle menu on button click
    menuButton.addEventListener('click', function() {
        this.classList.toggle('open');
        fullscreenMenu.classList.toggle('open');
        
        // Prevent body scrolling when menu is open
        if (fullscreenMenu.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking links
    const menuLinks = fullscreenMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuButton.classList.remove('open');
            fullscreenMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenMenu.classList.contains('open')) {
            menuButton.classList.remove('open');
            fullscreenMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mouse movement effect for visual elements
    const visualElements = document.querySelector('.visual-elements');
    const gridBox = document.querySelector('.grid-box');
    const circle = document.querySelector('.circle');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Subtle parallax effect on visual elements
        gridBox.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px) rotate(${mouseX * 5}deg)`;
        circle.style.transform = `translate(${mouseX * -40}px, ${mouseY * 40}px)`;
    });
    
    // Text scramble effect
    const text = document.querySelector('h1');
    const originalText = text.textContent;
    let isAnimating = false;
    
    function scrambleText() {
        if (isAnimating) return;
        isAnimating = true;
        
        let iteration = 0;
        const maxIterations = 15;
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        const interval = setInterval(() => {
            text.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    
                    if (letter === ' ') return ' ';
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");
            
            if (iteration >= originalText.length) {
                clearInterval(interval);
                isAnimating = false;
            }
            
            iteration += 1 / 3;
        }, 30);
    }
    
    // Initial animation
    setTimeout(scrambleText, 500);
    
    // Cursor effect
    const cursor = document.createElement('div');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .scroll-indicator');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only proceed if the link has a hash
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                
                // Try to find the target element by ID first
                let targetSection = document.querySelector(targetId);
                
                // If not found by ID, try finding by class name
                if (!targetSection) {
                    // Remove the # and try as a class name
                    const className = targetId.substring(1);
                    targetSection = document.querySelector('.' + className);
                }
                
                if (targetSection) {
                    // Smooth scroll to the target section
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Mobile menu toggle
    const menuButton = document.querySelector('.menu-button');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (menuButton && navLinksContainer) {
        menuButton.addEventListener('click', function() {
            navLinksContainer.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
            
            const toggle = this.querySelector('.question-toggle');
            if (toggle) {
                toggle.textContent = parent.classList.contains('active') ? '−' : '+';
            }
        });
    });
});
