import { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import mixitup from 'mixitup';

// شمارنده
const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const increment = end / (duration / 16);
                    const timer = setInterval(() => {
                        start += increment;
                        if (start >= end) {
                            setCount(end);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(start));
                        }
                    }, 16);
                }
            },
            { threshold: 0.6 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};

// نوار پیشرفت
const ProgressBar = ({ label, percentage, delay = 0 }) => {
    const [width, setWidth] = useState(0);
    const barRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setWidth(percentage), delay);
                }
            },
            { threshold: 0.5 }
        );
        if (barRef.current) observer.observe(barRef.current);
        return () => observer.disconnect();
    }, [percentage, delay]);

    return (
        <div ref={barRef} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: '#212529' }}>
                <span>{label}</span>
                <span>{percentage}%</span>
            </div>
            <div style={{ height: '10px', background: '#e9ecef', borderRadius: '5px', overflow: 'hidden' }}>
                <div
                    style={{
                        height: '100%',
                        width: `${width}%`,
                        background: 'linear-gradient(90deg, #007bff, #0056b3)',
                        borderRadius: '5px',
                        transition: 'width 2s ease-out',
                    }}
                />
            </div>
        </div>
    );
};

export default function Main() {
    const typedRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const statsRef = useRef(null);
    const resumeRef = useRef(null);
    const portfolioRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const portfolioContainerRef = useRef(null);
    const mixerRef = useRef(null);

    const [activeSection, setActiveSection] = useState('home');
    const [filter, setFilter] = useState('*');
    const [skillsKey, setSkillsKey] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: false,
            mirror: true,
            offset: 100,
        });

        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
                loop: true,
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 2000,
            });
            return () => typed.destroy();
        }
    }, []);

    const scrollToSection = (ref, id) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setActiveSection(id);
    };

    useEffect(() => {
        const sections = [
            { id: 'home', ref: homeRef },
            { id: 'about', ref: aboutRef },
            { id: 'stats', ref: statsRef },
            { id: 'resume', ref: resumeRef },
            { id: 'portfolio', ref: portfolioRef },
            { id: 'services', ref: servicesRef },
            { id: 'contact', ref: contactRef },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                let visibleSection = null;
                let maxRatio = 0;
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        visibleSection = entry.target.id;
                    }
                });
                if (visibleSection) setActiveSection(visibleSection);
            },
            { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-20% 0px -60% 0px' }
        );

        sections.forEach(({ ref, id }) => {
            if (ref.current) {
                ref.current.id = id;
                observer.observe(ref.current);
            }
        });

        return () => sections.forEach(({ ref }) => ref.current && observer.unobserve(ref.current));
    }, []);

    // mixitup فعال‌سازی درست
    useEffect(() => {
        if (portfolioContainerRef.current && !mixerRef.current) {
            mixerRef.current = mixitup(portfolioContainerRef.current, {
                selectors: {
                    target: '.portfolio-item'
                },
                animation: {
                    duration: 600,
                    effects: 'fade scale(0.8) translateZ(-100px)',
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    nudge: true,
                    reverseOut: false
                },
                load: {
                    filter: '*'
                }
            });
        }

        return () => {
            if (mixerRef.current) {
                mixerRef.current.destroy();
                mixerRef.current = null;
            }
        };
    }, []);

    const resetSkillsAnimation = () => {
        setSkillsKey(prev => prev + 1);
    };

    const portfolioItems = [
        { img: 'assets/img/portfolio/app1.jpg', category: 'app', title: 'Weather App' },
        { img: 'assets/img/portfolio/product1.jpg', category: 'product', title: 'Smart Watch' },
        { img: 'assets/img/portfolio/branding1.jpg', category: 'branding', title: 'Cosmetic Brand' },
        { img: 'assets/img/portfolio/app2.jpg', category: 'app', title: 'Finance App' },
        { img: 'assets/img/portfolio/product2.jpg', category: 'product', title: 'Wireless Earbuds' },
        { img: 'assets/img/portfolio/books1.jpg', category: 'books', title: 'Book Cover Design' },
        { img: 'assets/img/portfolio/app3.jpg', category: 'app', title: 'Fitness Tracker' },
        { img: 'assets/img/portfolio/branding2.jpg', category: 'branding', title: 'Coffee Brand' },
        { img: 'assets/img/portfolio/books2.jpg', category: 'books', title: 'Magazine Layout' },
    ];

    const skills = [
        { label: 'HTML', percentage: 100 },
        { label: 'PHP', percentage: 80 },
        { label: 'CSS', percentage: 90 },
        { label: 'WORDPRESS/CMS', percentage: 90 },
        { label: 'JAVASCRIPT', percentage: 75 },
        { label: 'PHOTOSHOP', percentage: 55 },
    ];

    const navItems = [
        { id: 'home', icon: 'bi-house', label: 'Home', ref: homeRef },
        { id: 'about', icon: 'bi-person', label: 'About', ref: aboutRef },
        { id: 'stats', icon: 'bi-bar-chart', label: 'Stats', ref: statsRef },
        { id: 'resume', icon: 'bi-file-earmark-person', label: 'Resume', ref: resumeRef },
        { id: 'portfolio', icon: 'bi-images', label: 'Portfolio', ref: portfolioRef },
        { id: 'services', icon: 'bi-gear', label: 'Services', ref: servicesRef },
        { id: 'contact', icon: 'bi-envelope', label: 'Contact', ref: contactRef },
    ];

    return (
        <>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
                .app-container { display: flex; min-height: 100vh; }

                /* Sidebar + اسکرول‌بار مینیمال */
                .sidebar {
                    width: 280px;
                    background: #0f1626;
                    color: white;
                    padding: 40px 20px 30px;
                    position: fixed;
                    height: 100vh;
                    overflow-y: auto;
                    z-index: 1000;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 8px 0 30px rgba(0,0,0,0.4);
                }
                .sidebar::-webkit-scrollbar { width: 6px; }
                .sidebar::-webkit-scrollbar-track { background: transparent; }
                .sidebar::-webkit-scrollbar-thumb { background: #495057; border-radius: 3px; }
                .sidebar::-webkit-scrollbar-thumb:hover { background: #007bff; }

                .profile-img { width: 90px; height: 90px; border-radius: 50%; border: 4px solid #007bff; object-fit: cover; }
                .profile-name { font-size: 1.5rem; font-weight: 600; margin-top: 15px; color: white; }
                .social-links { display: flex; justify-content: center; gap: 10px; margin-bottom: 40px; }
                .social-links a { width: 36px; height: 36px; background: #1e2a3a; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #a0a0c0; font-size: 0.9rem; transition: all 0.3s; }
                .social-links a:hover { background: #007bff; color: white; transform: translateY(-3px); }

                .nav-menu { list-style: none; padding: 0; margin: 0; flex: 1; display: flex; flex-direction: column; gap: 8px; }
                .nav-item {
                    display: flex; align-items: center; gap: 14px; padding: 10px 20px;
                    color: #a0a0c0; font-size: 0.95rem; border-radius: 8px; transition: all 0.3s; cursor: pointer; position: relative;
                }
                .nav-item:hover { color: #007bff; background: rgba(0,123,255,0.08); }
                .nav-item.active { color: #007bff; background: rgba(0,123,255,0.15); font-weight: 600; }
                .nav-item.active::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 4px; height: 20px; background: #007bff; border-radius: 0 4px 4px 0; }

                .dropdown-item { margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); }
                .dropdown-toggle { justify-content: space-between !important; }
                .dropdown-toggle i:last-child { font-size: 0.9rem; color: #007bff; }

                /* About با فلش آبی */
                .about-info-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-size: 15px; color: #495057; }
                .about-info-item i { color: #007bff; font-weight: bold; font-size: 1.1rem; }

                /* Portfolio با mixitup */
                .filter-buttons { text-align: center; margin-bottom: 40px; }
                .filter-btn {
                    background: none;
                    border: 2px solid #007bff;
                    color: #007bff;
                    padding: 10px 24px;
                    margin: 0 8px;
                    border-radius: 50px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .filter-btn.active,
                .filter-btn:hover {
                    background: #007bff;
                    color: white;
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                @media (max-width: 992px) { .portfolio-grid { grid-template-columns: repeat(2, 1fr); } }
                @media (max-width: 576px) { .portfolio-grid { grid-template-columns: 1fr; } }

                .portfolio-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .portfolio-item img {
                    width: 100%;
                    height: 280px;
                    object-fit: cover;
                    transition: transform 0.5s;
                }
                .portfolio-item:hover img {
                    transform: scale(1.1);
                }
                .portfolio-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(transparent, rgba(0,0,0,0.9));
                    color: white;
                    padding: 30px 20px 20px;
                    transform: translateY(20px);
                    transition: transform 0.4s;
                }
                .portfolio-item:hover .portfolio-overlay {
                    transform: translateY(0);
                }

                .main-content { margin-left: 280px; flex: 1; }
                .hero { position: relative; min-height: 100vh; background: url(assets/img/hero-bg.jpg) center/cover no-repeat; display: flex; align-items: center; overflow: hidden; }
                .hero::before { content: ''; position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.75)); z-index: 1; }
                .hero-content { position: absolute; bottom: 22%; left: 8%; z-index: 2; max-width: 600px; }
                .hero-content h1 { color: #fff; font-size: 4.8rem; font-weight: 700; text-shadow: 3px 3px 12px rgba(0,0,0,0.8); }
                .hero-content p { color: #fff; font-size: 1.9rem; font-weight: 500; text-shadow: 2px 2px 10px rgba(0,0,0,0.8); }
                .hero-content .typed { color: #007bff; font-weight: 600; }
                .section { padding: 100px 0; background: white; }
                .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
                .section-title { font-size: 2.5rem; font-weight: 700; color: #212529; margin-bottom: 20px; position: relative; display: inline-block; padding-bottom: 12px; }
                .section-title::after { content: ''; position: absolute; left: 0; bottom: 0; width: 50px; height: 4px; background: #007bff; border-radius: 2px; }
                .section-desc { color: #6c757d; font-size: 15px; line-height: 1.7; margin-bottom: 40px; }
            `}</style>

            <div className="app-container">
                {/* Sidebar */}
                <aside className="sidebar">
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <img src="assets/img/my-profile-img.jpg" alt="Profile" className="profile-img" />
                        <div className="profile-name">Alex Smith</div>
                    </div>

                    <div className="social-links">
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-skype"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>

                    <ul className="nav-menu">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <div
                                    onClick={() => scrollToSection(item.ref, item.id)}
                                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    <i className={`bi ${item.icon}`}></i>
                                    <span>{item.label}</span>
                                </div>
                            </li>
                        ))}

                        <li className="dropdown-item">
                            <div className="nav-item dropdown-toggle">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                    <i className="bi bi-list"></i>
                                    <span>Dropdown</span>
                                </div>
                                <i className="bi bi-chevron-down"></i>
                            </div>
                        </li>
                    </ul>
                </aside>

                <main className="main-content">
                    {/* HERO */}
                    <section ref={homeRef} id="home" className="hero">
                        <div className="hero-content" data-aos="fade-up">
                            <h1 data-aos="fade-up" data-aos-delay="400">Alex Smith</h1>
                            <p data-aos="fade-up" data-aos-delay="600">
                                I'm <span ref={typedRef} className="typed"></span>
                            </p>
                        </div>
                    </section>

                    {/* ABOUT */}
                    <section ref={aboutRef} id="about" className="section">
                        <div className="container">
                            <h2 className="section-title" data-aos="fade-down">About</h2>
                            <p className="section-desc" data-aos="fade-up">
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem...
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
                                <div style={{ flex: '0 0 320px' }} data-aos="fade-right">
                                    <img src="assets/img/my-profile-img.jpg" alt="Alex Smith" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} />
                                </div>
                                <div style={{ flex: 1 }} data-aos="fade-left">
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '20px' }}>UI/UX Designer & Web Developer.</h3>
                                    <p style={{ fontStyle: 'italic', color: '#6c757d', marginBottom: '30px' }}>Lorem ipsum dolor sit amet...</p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                                        <div>
                                            <div className="about-info-item"><i>→</i><span><strong>Birthday:</strong> 1 May 1995</span></div>
                                            <div className="about-info-item"><i>→</i><span><strong>Website:</strong> www.example.com</span></div>
                                            <div className="about-info-item"><i>→</i><span><strong>Phone:</strong> +123 456 7890</span></div>
                                            <div className="about-info-item"><i>→</i><span><strong>City:</strong> New York, USA</span></div>
                                        </div>
                                        <div>
                                            <div className="about-info-item"><i>→</i><span><strong>Age:</strong> 30</span></div>
                                            <div className="about-info-item"><i>→</i><span><strong>Degree:</strong> Master</span></div>
                                            <div className="about-info-item"><i>→</i><span><strong>Email:</strong> email@example.com</span></div>
                                            <div className="about-info-item"><i>→</i><span><strong>Freelance:</strong> Available</span></div>
                                        </div>
                                    </div>
                                    <p style={{ marginTop: '30px', color: '#6c757d' }}>Officiis eligendi itaque labore...</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* STATS */}
                    <section ref={statsRef} id="stats" style={{ padding: '90px 0', background: '#f8f9fa' }}>
                        <div className="container">
                            <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
                                {[
                                    { icon: 'bi-emoji-smile', end: 232, title: 'Happy Clients', desc: 'consequuntur quae' },
                                    { icon: 'bi-journal-richtext', end: 521, title: 'Projects', desc: 'adipisci atque cum quia' },
                                    { icon: 'bi-headset', end: 1453, title: 'Hours Of Support', desc: 'aut commodi quaerat' },
                                    { icon: 'bi-people', end: 32, title: 'Hard Workers', desc: 'rerum asperiores dolor' },
                                ].map((item, i) => (
                                    <div key={i} style={{ flex: '0 0 25%', padding: '0 15px' }} data-aos="zoom-in" data-aos-delay={200 + i * 150}>
                                        <div style={{ textAlign: 'center' }}>
                                            <i className={`bi ${item.icon}`} style={{ fontSize: '2.8rem', color: '#007bff', marginBottom: '20px' }}></i>
                                            <span style={{ fontSize: '3.2rem', fontWeight: '700', color: '#007bff', display: 'block', margin: '15px 0' }}>
                                                <CountUp end={item.end} duration={2200} />
                                            </span>
                                            <p style={{ margin: 0, color: '#6c757d', fontSize: '15px' }}>
                                                <strong style={{ display: 'block', fontSize: '1.1rem', color: '#212529', marginBottom: '6px', fontWeight: '600' }}>{item.title}</strong>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* RESUME + SKILLS */}
                    <section ref={resumeRef} id="resume" className="section" onMouseEnter={resetSkillsAnimation}>
                        <div className="container">
                            <h2 className="section-title" data-aos="fade-down">Resume</h2>
                            <div style={{ marginBottom: '60px' }}>
                                <h3 className="section-title" style={{ fontSize: '2rem' }}>Skills</h3>
                                <p className="section-desc">Necessitatibus eius consequatur...</p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                                    <div data-aos="fade-right">
                                        {skills.slice(0, 3).map((skill, i) => (
                                            <ProgressBar key={`left-${i}-${skillsKey}`} label={skill.label} percentage={skill.percentage} delay={i * 200} />
                                        ))}
                                    </div>
                                    <div data-aos="fade-left">
                                        {skills.slice(3).map((skill, i) => (
                                            <ProgressBar key={`right-${i}-${skillsKey}`} label={skill.label} percentage={skill.percentage} delay={(i + 3) * 200} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PORTFOLIO با mixitup کامل */}
                    <section ref={portfolioRef} id="portfolio" className="section" style={{ background: '#f8f9fa' }}>
                        <div className="container">
                            <h2 className="section-title" data-aos="fade-down">Portfolio</h2>
                            <p className="section-desc" data-aos="fade-up">Magnam dolores commodi suscipit...</p>

                            <div className="filter-buttons" data-aos="fade-up">
                                <button className={`filter-btn ${filter === '*' ? 'active' : ''}`} onClick={() => { setFilter('*'); mixerRef.current?.filter('*'); }}>ALL</button>
                                <button className={`filter-btn ${filter === '.app' ? 'active' : ''}`} onClick={() => { setFilter('.app'); mixerRef.current?.filter('.app'); }}>APP</button>
                                <button className={`filter-btn ${filter === '.product' ? 'active' : ''}`} onClick={() => { setFilter('.product'); mixerRef.current?.filter('.product'); }}>PRODUCT</button>
                                <button className={`filter-btn ${filter === '.branding' ? 'active' : ''}`} onClick={() => { setFilter('.branding'); mixerRef.current?.filter('.branding'); }}>BRANDING</button>
                                <button className={`filter-btn ${filter === '.books' ? 'active' : ''}`} onClick={() => { setFilter('.books'); mixerRef.current?.filter('.books'); }}>BOOKS</button>
                            </div>

                            <div ref={portfolioContainerRef} className="portfolio-grid">
                                {portfolioItems.map((item, i) => (
                                    <div key={i} className={`portfolio-item mix ${item.category}`} data-aos="zoom-in" data-aos-delay={100 + i * 50}>
                                        <img src={item.img} alt={item.title} />
                                        <div className="portfolio-overlay">
                                            <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>{item.title}</div>
                                            <div style={{ fontSize: '0.9rem', color: '#007bff', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.category}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SERVICES & CONTACT */}
                    <section ref={servicesRef} id="services" className="section">
                        <div className="container">
                            <h2 className="section-title">Services</h2>
                            <p>Coming soon...</p>
                        </div>
                    </section>

                    <section ref={contactRef} id="contact" className="section">
                        <div className="container">
                            <h2 className="section-title">Contact</h2>
                            <p>Coming soon...</p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}