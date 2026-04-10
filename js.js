// Animations GSAP pour sections et barres de progression
gsap.registerPlugin(ScrollTrigger);

// Animation fade-in pour les sections
gsap.utils.toArray('.animate').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Animation des barres de progression
gsap.utils.toArray('.progress').forEach(bar => {
    gsap.fromTo(bar, 
        { width: 0 }, // Départ à 0
        {
            width: bar.style.getPropertyValue('--progress'),
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: bar.parentElement,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        }
    );
});