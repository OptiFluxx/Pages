// DOM Elements
const scrollElements = document.querySelectorAll('.scroll-reveal');
const workflowSteps = document.querySelectorAll('.step');

// --- Scroll Animation Observer ---
const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset
    );
};

const displayScrollElement = (element) => {
    element.classList.add('visible');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 50)) {
            displayScrollElement(el);
        }
    });
};

// Initial check
handleScrollAnimation();

// Event Listener
window.addEventListener('scroll', () => {
    handleScrollAnimation();
});


// --- Interactive Workflow Automation Demo ---
let currentStep = 0;
const totalSteps = workflowSteps.length;

const animateWorkflow = () => {
    // Reset all
    workflowSteps.forEach(step => step.classList.remove('active'));
    
    // Activate current
    workflowSteps[currentStep].classList.add('active');
    
    // Increment step
    currentStep = (currentStep + 1) % totalSteps;
};

// Run animation loop every 1.5 seconds
setInterval(animateWorkflow, 1500);

// --- Smooth Scrolling for Anchors ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
