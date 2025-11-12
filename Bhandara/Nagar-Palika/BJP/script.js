document.addEventListener('DOMContentLoaded', () => {
    console.log("Nitin Gadkari Website Loaded Successfully!");

    // --- Hero Slide Text Data ---
    const slideTextData = [
        // SLIDE 1 (Index 0) - Rally Image
        {
            'en': {
                headline: 'Transforming India through Infrastructure and Innovation',
                subtext: 'Union Minister of Road Transport & Highways, Government of India.',
            },
            'mr': {
                headline: 'भारतातील विकासाचा महामार्ग – नितीन गडकरी',
                subtext: 'केंद्रीय रस्ते वाहतूक आणि महामार्ग मंत्री, भारत सरकार.',
            }
        },
        // SLIDE 2 (Index 1) - Portrait Image
        {
            'en': {
                headline: 'A Vision for Global Standard Roads',
                subtext: 'Committed to making India\'s infrastructure world-class by 2030.',
            },
            'mr': {
                headline: 'जागतिक दर्जाच्या रस्त्यांसाठी दूरदृष्टी',
                subtext: 'भारताचे पायाभूत क्षेत्र २०३० पर्यंत जागतिक दर्जाचे बनवण्याचा संकल्प.',
            }
        },
        // SLIDE 3 (Index 2) - Infrastructure Placeholder
        {
            'en': {
                headline: 'Driving Green Mobility & Future Fuels',
                subtext: 'Pioneering the use of Ethanol and sustainable alternatives to reduce pollution.',
            },
            'mr': {
                headline: 'हरित गतिशीलता आणि भविष्यवेधी इंधने',
                subtext: 'प्रदूषण कमी करण्यासाठी इथेनॉल आणि शाश्वत पर्यायांचा उपयोग.',
            }
        },
        // SLIDE 4 (Index 3) - Green Initiative Placeholder
        {
            'en': {
                headline: 'Waterways: India\'s New Economic Highway',
                subtext: 'Developing river transport as a cost-effective and environmentally friendly logistics solution.',
            },
            'mr': {
                headline: 'जलमार्ग: भारताचे नवीन आर्थिक महामार्ग',
                subtext: 'नदी जलवाहतुकीला कमी खर्चिक आणि पर्यावरणपूरक दळणवळण उपाय म्हणून विकसित करणे.',
            }
        },
    ];

    // --- Language Data (Existing) ---
    const langData = {
        'en': {
            'nav-home': 'Home', 'nav-bio': 'Biography', 'nav-achievements': 'Achievements',
            'nav-vision': 'Vision', 'nav-media': 'Media', 'nav-contact': 'Contact',
            'hero-cta': 'Know More', 
            'bio-title': 'Biography',
            'bio-text': 'Shri Nitin Jairam Gadkari is the Union Minister for Road Transport & Highways, Government of India. He has been instrumental in transforming India\'s road infrastructure and promoting sustainable development.',
            'achievements-title': 'Key Achievements',
            'card-1-title': 'World-Class Highways',
            'card-1-text': 'Successfully spearheaded the construction of record-breaking lengths of national highways and expressways.',
            'card-2-title': 'Green Energy & Ethanol',
            'card-2-text': 'Championing the use of alternative fuels like Ethanol and Hydrogen to reduce pollution and imports.',
            'card-3-title': 'River Transport',
            'card-3-text': 'Focused on developing inland waterways as an efficient and cost-effective mode of transport.',
            'card-4-title': 'Smart City Projects',
            'card-4-text': 'Integrated sustainable infrastructure and smart technology solutions into urban development.',
            'vision-title': 'Our Vision',
            'vision-quote': '"My vision is to make India\'s infrastructure the best in the world."',
            'media-title': 'Media & Events',
            'contact-title': 'Contact Us',
            'contact-name': 'Your Name',
            'contact-email': 'Your Email',
            'contact-message': 'Your Message',
            'contact-send': 'Send Message',
            'contact-office': 'Office Address',
            'office-text': 'Ministry of Road Transport & Highways, New Delhi',
            'footer-text': 'Bharatiya Janata Party | All Rights Reserved',
        },
        'mr': {
            'nav-home': 'मुख्यपृष्ठ', 'nav-bio': 'जीवन परिचय', 'nav-achievements': 'उपलब्धी',
            'nav-vision': 'संकल्पना', 'nav-media': 'माध्यम', 'nav-contact': 'संपर्क',
            'hero-cta': 'अधिक जाणून घ्या', 
            'bio-title': 'जीवन परिचय',
            'bio-text': 'श्री नितीन जयराम गडकरी हे भारत सरकारचे केंद्रीय रस्ते वाहतूक आणि महामार्ग मंत्री आहेत. त्यांनी भारताच्या पायाभूत सुविधांच्या विकासात मोलाची भूमिका बजावली आहे.',
            'achievements-title': 'प्रमुख उपलब्धी',
            'card-1-title': 'जागतिक दर्जाचे महामार्ग',
            'card-1-text': 'राष्ट्रीय महामार्ग आणि द्रुतगती मार्गांच्या विक्रमी लांबीच्या बांधकामाला यशस्वीपणे नेतृत्व दिले.',
            'card-2-title': 'हरित ऊर्जा आणि इथेनॉल',
            'card-2-text': 'प्रदूषण आणि आयातीवर नियंत्रण मिळवण्यासाठी इथेनॉल आणि हायड्रोजनसारख्या पर्यायी इंधनांच्या वापराला प्रोत्साहन.',
            'card-3-title': 'नदी जलवाहतूक विकास',
            'card-3-text': 'जलवाहतुकीचा प्रभावी आणि कमी खर्चिक मार्ग म्हणून देशांतर्गत जलमार्गांच्या विकासावर लक्ष केंद्रित केले.',
            'card-4-title': 'स्मार्ट सिटी प्रकल्प',
            'card-4-text': 'शहरी विकासामध्ये शाश्वत पायाभूत सुविधा आणि स्मार्ट तंत्रज्ञानाचे एकात्मीकरण.',
            'vision-title': 'आमची संकल्पना',
            'vision-quote': '"माझं स्वप्न आहे – भारतातील पायाभूत सुविधा जगातील सर्वोत्तम करणे."',
            'media-title': 'माध्यम आणि कार्यक्रम',
            'contact-title': 'संपर्क साधा',
            'contact-name': 'आपले नाव',
            'contact-email': 'आपला ईमेल',
            'contact-message': 'आपला संदेश',
            'contact-send': 'संदेश पाठवा',
            'contact-office': 'कार्यालयाचा पत्ता',
            'office-text': 'केंद्रीय रस्ते वाहतूक आणि महामार्ग मंत्रालय, नवी दिल्ली',
            'footer-text': 'भारतीय जनता पार्टी | सर्व हक्क राखीव',
        }
    };

    let currentLang = 'en';
    // Start at the last index so the first call to updateHeroText updates to index 0.
    let currentSlideIndex = slideTextData.length - 1; 
    const totalSlides = slideTextData.length;
    // Set duration to 8000ms (8 seconds) to match the CSS animation hold time (32s total / 4 slides).
    const slideDuration = 8000; 

    const langOptions = document.querySelectorAll('.lang-option');
    const heroHeadline = document.querySelector('[data-slide-key="headline"]');
    const heroSubtext = document.querySelector('[data-slide-key="subtext"]');


    // --- Core function to update Hero Text instantly ---
    function updateHeroText() {
        // Increment and wrap the slide index first
        currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
        
        const slide = slideTextData[currentSlideIndex];
        const langCode = currentLang;

        // *** FIX: Instant change, no slow fade/timeout! ***
        if (slide && slide[langCode]) {
            heroHeadline.textContent = slide[langCode].headline;
            heroSubtext.textContent = slide[langCode].subtext;
        }
    }


    // --- Language Switching Logic (Updated) ---
    function switchLanguage(lang) {
        currentLang = lang;
        const translations = langData[lang];

        // 1. Update general text content (non-slider elements)
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.setAttribute('placeholder', translations[key]);
                } else if (!element.hasAttribute('data-slide-key')) {
                    element.textContent = translations[key];
                } else if (element.getAttribute('data-slide-key')) {
                    // This handles the CTA button which is static but needs translation
                    const ctaKey = 'hero-cta';
                    if(element.getAttribute('data-lang-key') === ctaKey) {
                        element.textContent = translations[ctaKey];
                    }
                }
            }
        });

        // 2. Update Hero Text immediately with the new language
        // We use the *current* slide index to ensure it translates the currently visible slide.
        const slide = slideTextData[currentSlideIndex];
        const langCode = currentLang;
        
        if (slide && slide[langCode]) {
            heroHeadline.textContent = slide[langCode].headline;
            heroSubtext.textContent = slide[langCode].subtext;
        }

        // 3. Update language toggle button visual state
        langOptions.forEach(option => {
            option.classList.remove('active');
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            }
        });
    }

    // --- Hero Slider Text Interval Setup ---
    // The first call sets the text for slide 0 (since currentSlideIndex starts at 3 and wraps to 0).
    updateHeroText(); 
    // Set the interval to exactly match the 8-second hold time of the CSS animation.
    setInterval(updateHeroText, slideDuration);

    // --- Initial Load and Event Listeners (Remaining setup) ---
    switchLanguage(currentLang);
    document.getElementById('lang-toggle').addEventListener('click', (event) => {
        if (event.target.classList.contains('lang-option')) {
            const newLang = event.target.getAttribute('data-lang');
            switchLanguage(newLang);
        }
    });

    // --- Smooth Scroll Logic (Unchanged) ---
    document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                const offset = 56;
                window.scrollBy(0, -offset);
            }

            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });

    // --- AOS Initialization (Unchanged) ---
    AOS.init({
        offset: 100,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: true,
    });
});