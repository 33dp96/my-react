'use client';
import { useEffect, useRef, useState, useCallback } from "react";

// --- کتابخانه‌ها ---
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import { gsap } from 'gsap';
import mixitup from 'mixitup';

// --- کامپوننت‌های داخلی ---
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
                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
};

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

// --- کامپوننت اصلی ---
export default function Main() {
    const typedRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const statsRef = useRef(null);
    const resumeRef = useRef(null);
    const portfolioRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
    const footerRef = useRef(null);
    const sendButtonRef = useRef(null);
    const sendIconRef = useRef(null);
    const cursorRef = useRef(null);
    const scrollTopBtnRef = useRef(null);
    const portfolioContainerRef = useRef(null);

    const [activeSection, setActiveSection] = useState('home');
    const [filter, setFilter] = useState('*');
    const [skillsKey, setSkillsKey] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const currentYear = new Date().getFullYear();

    const sectionRefs = {
        home: homeRef,
        about: aboutRef,
        stats: statsRef,
        resume: resumeRef,
        portfolio: portfolioRef,
        services: servicesRef,
        contact: contactRef,
        footer: footerRef,
    };

    // --- اسکرول اولیه ---
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // --- دکمه بازگشت به بالا ---
    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // --- AOS ---
    useEffect(() => {
        AOS.init({ duration: 1200, easing: 'ease-out-cubic', once: false, offset: 100 });
        return () => AOS.refresh();
    }, []);

    // --- Typed.js ---
    useEffect(() => {
        if (!typedRef.current) return;
        const typed = new Typed(typedRef.current, {
            strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
            loop: true,
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 2000,
        });
        return () => typed.destroy();
    }, []);

    // --- انیمیشن دکمه ارسال (بدون as EventListener) ---
    useEffect(() => {
        if (!sendButtonRef.current || !sendIconRef.current) return;
        const button = sendButtonRef.current;
        const icon = sendIconRef.current;

        const handleClick = (e) => {
            e.preventDefault();
            button.disabled = true;
            button.style.opacity = '0.7';
            button.style.cursor = 'not-allowed';

            gsap.timeline({
                onComplete: () => {
                    alert('پیام شما با موفقیت ارسال شد!');
                    button.disabled = false;
                    button.style.opacity = '1';
                    button.style.cursor = 'pointer';
                },
            })
                .to(icon, { duration: 0.4, x: -8, y: 8, ease: 'none' })
                .to(icon, { duration: 0.4, x: '50vw', y: '-50vh', ease: 'power1.in' })
                .set(icon, { x: '-50vw', y: '50vh' })
                .to(icon, { duration: 0.3, x: 0, y: 0, ease: 'power1.out' });
        };

        // بدون as EventListener
        button.addEventListener('click', handleClick);
        return () => button.removeEventListener('click', handleClick);
    }, []);

    // --- اسکرول به بخش ---
    const scrollToSection = useCallback((id) => {
        setActiveSection(id);
        const element = sectionRefs[id].current;
        if (!element) return;
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }, []);

    // --- تشخیص بخش فعال ---
    useEffect(() => {
        const sections = Object.entries(sectionRefs).map(([id, ref]) => ({ id, ref }));
        const observer = new IntersectionObserver(
            (entries) => {
                let visible = null;
                let maxRatio = 0;
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
                        maxRatio = entry.intersectionRatio;
                        visible = entry.target.id;
                    }
                });
                if (visible) setActiveSection(visible);
            },
            { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-10% 0px -80% 0px' }
        );

        sections.forEach((s) => s.ref.current && observer.observe(s.ref.current));
        return () => sections.forEach((s) => s.ref.current && observer.unobserve(s.ref.current));
    }, []);

    // --- ماوس کاستوم (فقط دسکتاپ) ---
    useEffect(() => {
        if (typeof window === 'undefined' || window.innerWidth <= 768 || !cursorRef.current) return;
        const cursor = cursorRef.current;
        const dot = cursor.querySelector('.pointer-dot');
        const ring = cursor.querySelector('.pointer-ring');
        let mouseX = 0, mouseY = 0, dotX = 0, dotY = 0, ringX = 0, ringY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animate = () => {
            dotX += (mouseX - dotX) * 0.9;
            dotY += (mouseY - dotY) * 0.9;
            dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
            ringX += (mouseX - ringX) * 0.3;
            ringY += (mouseY - ringY) * 0.3;
            ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // --- ریست انیمیشن مهارت‌ها ---
    const resetSkillsAnimation = () => setSkillsKey((prev) => prev + 1);

    const skills = [
        { label: 'HTML', percentage: 100 },
        { label: 'CSS', percentage: 90 },
        { label: 'JAVASCRIPT', percentage: 75 },
        { label: 'PHP', percentage: 80 },
        { label: 'WORDPRESS/CMS', percentage: 90 },
        { label: 'PHOTOSHOP', percentage: 55 },
    ];

    // --- MixItUp با clampHeight ---
    useEffect(() => {
        if (!portfolioContainerRef.current) return;

        const mixer = mixitup(portfolioContainerRef.current, {
            selectors: { target: '.portfolio-item' },
            animation: {
                duration: 600,
                effects: 'fade scale(0.85) translateY(40px)',
                easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
                nudge: true,
                reverseOut: true,
                staggerSequence: (i) => i * 80,
                clampHeight: true, // درست
            },
            load: { filter: '*' },
            classNames: {
                block: 'portfolio',
                elementFilter: 'filter-btn',
                elementSort: 'sort-btn',
            },
        });

        window.mixitupInstances = window.mixitupInstances || {};
        window.mixitupInstances.portfolio = mixer;

        return () => {
            if (mixer) mixer.destroy();
            delete window.mixitupInstances?.portfolio;
        };
    }, []);

    const handleFilter = (newFilter) => {
        setFilter(newFilter);
        if (window.mixitupInstances?.portfolio) {
            window.mixitupInstances.portfolio.filter(newFilter);
        }
    };

    // --- رندر ---
    return (
        <>
            {/* --- استایل‌ها --- */}
            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        html, body { margin: 0 !important; padding: 0 !important; min-height: 100vh !important; background: #fff !important; overflow-x: hidden; }
        * { box-sizing: border-box; font-family: 'Poppins', sans-serif; }
        .app-container { min-height: 100vh; display: flex; flex-direction: column; position: relative; }
        .main-wrapper { flex: 1; display: flex; flex-direction: column; margin-left: 280px; }
        main { flex: 1; }
        .sidebar { width: 280px; background: #0f1626; color: white; padding: 40px 20px; position: fixed; height: 100vh; overflow-y: auto; z-index: 1000; box-shadow: 8px 0 30px rgba(0,0,0,0.4); }
        .profile-img { width: 90px; height: 90px; border-radius: 50%; border: 4px solid #007bff; object-fit: cover; }
        .profile-name { font-size: 1.5rem; font-weight: 600; margin-top: 15px; }
        .nav-item { padding: 12px 20px; color: #a0a0c0; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 14px; transition: all 0.3s; position: relative; }
        .nav-item:hover { color: #007bff; background: rgba(0,123,255,0.1); }
        .nav-item.active { color: #007bff; background: rgba(0,123,255,0.15); font-weight: 600; }
        .nav-item.active::before { content: ''; position: absolute; left: 0; top: 50%; transform: translateY(-50%); width: 4px; height: 20px; background: #007bff; border-radius: 0 4px 4px 0; }
        .custom-cursor { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); display: none; }
        @media (min-width: 769px) { .custom-cursor { display: block; } }
        .pointer-dot { width: 10px; height: 10px; background: #007bff; border-radius: 50%; position: absolute; top: 0; left: 0; box-shadow: 0 0 10px rgba(0, 123, 255, 0.6); }
        .pointer-ring { width: 36px; height: 36px; border: 2px solid #007bff; border-radius: 50%; position: absolute; top: -13px; left: -13px; opacity: 0.6; box-shadow: 0 0 15px rgba(0, 123, 255, 0.4); }
        .hero { min-height: 100vh; background: url(/assets/img/hero-bg.jpg) center/cover no-repeat; position: relative; }
        .hero::before { content: ''; position: absolute; inset: 0; background: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.75)); z-index: 1; }
        .hero-content { position: absolute; bottom: 22%; left: 8%; z-index: 2; }
        .hero-content h1 { color: #fff; font-size: 4.8rem; font-weight: 700; text-shadow: 3px 3px 12px rgba(0,0,0,0.8); }
        .hero-content p { color: #fff; font-size: 1.9rem; font-weight: 500; }
        .typed { color: #007bff; font-weight: 600; }
        .section { padding: 100px 0; position: relative; z-index: 1; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section-title { font-size: 2.5rem; font-weight: 700; position: relative; display: inline-block; padding-bottom: 12px; }
        .section-title::after { content: ''; position: absolute; left: 0; bottom: 0; width: 50px; height: 4px; background: #007bff; border-radius: 2px; }
        .section-desc { color: #6c757d; font-size: 15px; line-height: 1.7; margin-bottom: 40px; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 50px; }
        .service-card { background: white; padding: 40px 30px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.08); text-align: center; transition: all 0.4s ease; border: 1px solid #eee; }
        .service-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(0,123,255,0.15); border-color: #007bff; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin-top: 50px; align-items: start; }
        @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; gap: 40px; } .contact-info-wrapper { order: 2; } .contact-form { order: 1; } }
        .contact-info-box { background: #fff; padding: 30px; border-radius: 16px; box-shadow: 0 15px 35px rgba(0,0,0,0.08); border: 1px solid #eee; }
        .info-item { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #eee; }
        .info-item:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
        .info-icon { width: 44px; height: 44px; background: rgba(0,123,255,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #007bff; font-size: 1.3rem; flex-shrink: 0; }
        .contact-form { background: linear-gradient(145deg, #ffffff, #f8f9fa); padding: 50px 40px; border-radius: 24px; box-shadow: 0 25px 60px rgba(0,0,0,0.12); position: relative; overflow: hidden; }
        .contact-form::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg, #007bff, #00c6ff); border-radius: 24px 24px 0 0; }
        .input-wrapper { position: relative; margin-bottom: 24px; }
        .input-icon { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: #007bff; font-size: 1.1rem; z-index: 2; pointer-events: none; }
        .input-icon.textarea { top: 20px; transform: none; }
        .contact-form input, .contact-form textarea { width: 100%; padding: 16px 50px 16px 20px; border: none; border-radius: 16px; background: rgba(255,255,255,0.9); font-size: 1rem; transition: all 0.4s ease; direction: rtl; text-align: right; }
        .contact-form textarea { padding-top: 42px; padding-right: 50px; resize: vertical; }
        .contact-form input:focus, .contact-form textarea:focus { background: white; box-shadow: 0 0 0 4px rgba(0,123,255,0.25); outline: none; transform: translateY(-2px); }
        .send-btn { background: linear-gradient(135deg, #007bff, #0056b3); color: white; border: none; padding: 16px 48px; font-size: 1.05rem; font-weight: 600; border-radius: 50px; cursor: pointer; display: inline-flex; align-items: center; gap: 12px; box-shadow: 0 10px 25px rgba(0,123,255,0.3); transition: all 0.4s ease; }
        .send-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 35px rgba(0,123,255,0.4); }
        footer { background: #0f1626; color: #a0a0c0; padding: 80px 0 30px; margin-top: auto; }
        .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px; margin-bottom: 50px; }
        @media (max-width: 992px) { .footer-top { grid-template-columns: 1fr; gap: 30px; } }
        .footer-title { color: #fff; font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; position: relative; padding-bottom: 10px; }
        .footer-title::after { content: ''; position: absolute; left: 0; bottom: 0; width: 40px; height: 3px; background: #007bff; }
        .footer-links a { color: #a0a0c0; text-decoration: none; transition: all 0.3s; display: block; margin-bottom: 8px; }
        .footer-links a:hover { color: #007bff; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; font-size: 0.9rem; }
        .scroll-to-top { position: fixed; bottom: 30px; right: 30px; width: 56px; height: 56px; background: linear-gradient(135deg, #007bff, #00c6ff); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 10px 25px rgba(0, 123, 255, 0.3); z-index: 998; opacity: 0; visibility: hidden; transform: translateY(20px); transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); overflow: hidden; }
        .scroll-to-top.show { opacity: 1; visibility: visible; transform: translateY(0); }
        .scroll-to-top:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 15px 35px rgba(0, 123, 255, 0.45); }
        .scroll-to-top i { color: white; font-size: 1.6rem; font-weight: bold; animation: float 2s ease-in-out infinite; }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        #portfolio .portfolio-filter { text-align: center; margin-bottom: 60px; }
        #portfolio .filter-bar-inner { display: inline-flex; gap: 35px; background: white; padding: 14px 30px; border-radius: 50px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); font-weight: 600; }
        #portfolio .filter-btn { background: none; border: none; color: #6c757d; font-size: 1rem; text-transform: uppercase; letter-spacing: 1.2px; cursor: pointer; transition: color 0.3s ease; position: relative; }
        #portfolio .filter-btn.active { color: #00c6ff; }
        #portfolio .filter-btn.active::after { content: ''; position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); width: 8px; height: 8px; background: #00c6ff; border-radius: 50%; box-shadow: 0 0 15px #00c6ff; }
        #portfolio .portfolio-grid-img { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.1); }
        #portfolio .portfolio-item { position: relative; overflow: hidden; aspect-ratio: 1 / 1; transition: all 0.4s ease; }
        #portfolio .portfolio-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; display: block; }
        #portfolio .portfolio-item::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0,0.4); opacity: 0; transition: opacity 0.4s ease; z-index: 1; }
        #portfolio .portfolio-item:hover::before { opacity: 1; }
        #portfolio .portfolio-item:hover img { transform: scale(1.08); }
        #portfolio .portfolio-item:hover { z-index: 2; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        @media (max-width: 992px) { #portfolio .portfolio-grid-img { grid-template-columns: 1fr; } #portfolio .portfolio-item { aspect-ratio: 16 / 10; } }
        @media (max-width: 576px) { #portfolio .portfolio-item { aspect-ratio: 4 / 3; } }
      `}</style>

            {/* --- آیکون‌ها --- */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" />

            {/* --- ساختار --- */}
            <div className="app-container">
                <div ref={cursorRef} className="custom-cursor">
                    <div className="pointer-dot"></div>
                    <div className="pointer-ring"></div>
                </div>

                <aside className="sidebar">
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <img src="/assets/img/my-profile-img.jpg" alt="Profile" className="profile-img" loading="lazy" />
                        <div className="profile-name">Alex Smith</div>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {[
                            { id: 'home', icon: 'house', label: 'Home' },
                            { id: 'about', icon: 'person', label: 'About' },
                            { id: 'stats', icon: 'bar-chart', label: 'Stats' },
                            { id: 'resume', icon: 'file-earmark-person', label: 'Resume' },
                            { id: 'portfolio', icon: 'images', label: 'Portfolio' },
                            { id: 'services', icon: 'gear', label: 'Services' },
                            { id: 'contact', icon: 'envelope', label: 'Contact' },
                            { id: 'footer', icon: 'box-arrow-in-down', label: 'Footer' }
                        ].map(item => (
                            <li key={item.id}>
                                <div
                                    onClick={() => scrollToSection(item.id)}
                                    className={`nav-item hover-target ${activeSection === item.id ? 'active' : ''}`}
                                >
                                    <i className={`bi bi-${item.icon}`}></i>
                                    <span>{item.label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="main-wrapper">
                    <main style={{ flex: 1 }}>
                        {/* Hero */}
                        <section ref={homeRef} id="home" className="hero">
                            <div className="hero-content" data-aos="fade-up">
                                <h1 data-aos="fade-up" data-aos-delay="400">Alex Smith</h1>
                                <p data-aos="fade-up" data-aos-delay="600">I'm <span ref={typedRef} className="typed"></span></p>
                            </div>
                        </section>

                        {/* About */}
                        <section ref={aboutRef} id="about" className="section">
                            <div className="container">
                                <h2 className="section-title" data-aos="fade-down">About</h2>
                                <p className="section-desc" data-aos="fade-up">Magnam dolores commodi suscipit.</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }} data-aos="fade-up" data-aos-delay="200">
                                    <div style={{ flex: '0 0 320px' }}>
                                        <img src="/assets/img/my-profile-img.jpg" alt="Alex" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} loading="lazy" />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '20px' }}>UI/UX Designer & Web Developer.</h3>
                                        <p style={{ fontStyle: 'italic', color: '#6c757d', marginBottom: '30px' }}>Lorem ipsum dolor sit amet.</p>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                                            <div><strong>Birthday:</strong> 1 May 1995</div>
                                            <div><strong>Website:</strong> www.example.com</div>
                                            <div><strong>Phone:</strong> +98 25 1234 5678</div>
                                            <div><strong>City:</strong> Qom, Iran</div>
                                            <div><strong>Age:</strong> 30</div>
                                            <div><strong>Degree:</strong> Master</div>
                                            <div><strong>Email:</strong> email@example.com</div>
                                            <div><strong>Freelance:</strong> Available</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Stats */}
                        <section ref={statsRef} id="stats" className="section" style={{ background: '#f8f9fa' }}>
                            <div className="container">
                                <h2 className="section-title" data-aos="fade-down">Stats</h2>
                                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px', justifyContent: 'center' }} data-aos="fade-up">
                                    {[
                                        { icon: 'emoji-smile', end: 232, title: 'Happy Clients' },
                                        { icon: 'journal-richtext', end: 521, title: 'Projects' },
                                        { icon: 'headset', end: 1453, title: 'Hours Of Support' },
                                        { icon: 'people', end: 32, title: 'Hard Workers' }
                                    ].map((item, i) => (
                                        <div key={i} style={{ flex: '0 0 25%', padding: '0 15px', marginBottom: '30px' }} data-aos="zoom-in" data-aos-delay={i * 150}>
                                            <div style={{ textAlign: 'center', padding: '30px 20px', background: 'white', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                                <i className={`bi bi-${item.icon}`} style={{ fontSize: '2.8rem', color: '#007bff' }}></i>
                                                <span style={{ fontSize: '3.2rem', fontWeight: '700', color: '#007bff', display: 'block', margin: '15px 0' }}>
                                                    <CountUp end={item.end} />
                                                </span>
                                                <p style={{ fontWeight: '600', color: '#212529' }}>{item.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Resume */}
                        <section ref={resumeRef} id="resume" className="section" onMouseEnter={resetSkillsAnimation}>
                            <div className="container">
                                <h2 className="section-title" data-aos="fade-down">Resume</h2>
                                <p className="section-desc" data-aos="fade-up">Skills animation restarts on hover</p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }} key={skillsKey}>
                                    <div data-aos="fade-right">
                                        {skills.slice(0, 3).map((s, i) => <ProgressBar key={`l-${i}`} label={s.label} percentage={s.percentage} delay={i * 200} />)}
                                    </div>
                                    <div data-aos="fade-left">
                                        {skills.slice(3).map((s, i) => <ProgressBar key={`r-${i}`} label={s.label} percentage={s.percentage} delay={(i + 3) * 200} />)}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Portfolio */}
                        <section ref={portfolioRef} id="portfolio" className="section" style={{ background: '#f8f9fa', padding: '100px 0' }}>
                            <div className="container" style={{ maxWidth: '1400px' }}>
                                <div className="portfolio-filter" data-aos="fade-up">
                                    <div className="filter-bar-inner">
                                        {[
                                            { text: 'ALL', filter: '*' },
                                            { text: 'APP', filter: '.app' },
                                            { text: 'PRODUCT', filter: '.product' },
                                            { text: 'BRANDING', filter: '.branding' },
                                            { text: 'BOOKS', filter: '.books' }
                                        ].map((btn) => (
                                            <button
                                                key={btn.filter}
                                                className={`filter-btn ${filter === btn.filter ? 'active' : ''}`}
                                                onClick={() => handleFilter(btn.filter)}
                                            >
                                                {btn.text}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div ref={portfolioContainerRef} className="portfolio-grid-img" data-aos="fade-up" data-aos-delay="200">
                                    <div className="portfolio-item app"><img src="/assets/img/portfolio/app1.jpg" alt="اپ" loading="lazy" /></div>
                                    <div className="portfolio-item product"><img src="/assets/img/portfolio/product1.jpg" alt="محصول" loading="lazy" /></div>
                                    <div className="portfolio-item branding"><img src="/assets/img/portfolio/branding1.jpg" alt="برندینگ" loading="lazy" /></div>
                                    <div className="portfolio-item app"><img src="/assets/img/portfolio/app2.jpg" alt="اپ" loading="lazy" /></div>
                                    <div className="portfolio-item product"><img src="/assets/img/portfolio/product2.jpg" alt="هدفون" loading="lazy" /></div>
                                    <div className="portfolio-item branding"><img src="/assets/img/portfolio/branding2.jpg" alt="کارت" loading="lazy" /></div>
                                </div>
                            </div>
                        </section>

                        {/* Services */}
                        <section ref={servicesRef} id="services" className="section">
                            <div className="container">
                                <h2 className="section-title" data-aos="fade-down">Services</h2>
                                <p className="section-desc" data-aos="fade-up">خدمات حرفه‌ای من</p>
                                <div className="services-grid" data-aos="fade-up" data-aos-delay="200">
                                    {[
                                        { icon: 'fas fa-paint-brush', title: 'Web Design', desc: 'طراحی وب‌سایت' },
                                        { icon: 'fas fa-code', title: 'Web Development', desc: 'توسعه وب' },
                                        { icon: 'fas fa-camera', title: 'Photography', desc: 'عکاسی' },
                                        { icon: 'fas fa-mobile-alt', title: 'Responsive', desc: 'ریسپانسیو' },
                                        { icon: 'fas fa-vector-square', title: 'Graphic Design', desc: 'گرافیک' },
                                        { icon: 'fas fa-chart-line', title: 'Marketing', desc: 'مارکتینگ' }
                                    ].map((service, i) => (
                                        <div key={i} className="service-card hover-target" data-aos="fade-up" data-aos-delay={i * 100}>
                                            <i className={service.icon} style={{ fontSize: '3rem', color: '#007bff', marginBottom: '20px' }}></i>
                                            <h4 style={{ fontWeight: '600', marginBottom: '15px' }}>{service.title}</h4>
                                            <p style={{ color: '#6c757d' }}>{service.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Contact */}
                        <section ref={contactRef} id="contact" className="section">
                            <div className="container">
                                <h2 className="section-title" data-aos="fade-down">Contact</h2>
                                <p className="section-desc" data-aos="fade-up" data-aos-delay="100">با من در ارتباط باشید</p>
                                <div className="contact-grid">
                                    <div data-aos="fade-right" data-aos-delay="200" className="contact-info-wrapper">
                                        <div className="contact-info-box">
                                            <div className="info-item"><div className="info-icon"><i className="bi bi-geo-alt-fill"></i></div><div><h4>Address</h4><p>A108 Adam Street, NY</p></div></div>
                                            <div className="info-item"><div className="info-icon"><i className="bi bi-telephone-fill"></i></div><div><h4>Call Us</h4><p>+1 5589 55488 55</p></div></div>
                                            <div className="info-item"><div className="info-icon"><i className="bi bi-envelope-fill"></i></div><div><h4>Email Us</h4><p>info@example.com</p></div></div>
                                        </div>
                                        <div className="map-container" data-aos="fade-up" data-aos-delay="300">
                                            <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" style={{ border: 0, borderRadius: '12px' }} allowFullScreen loading="lazy" title="نقشه"></iframe>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="300">
                                        <form className="contact-form hover-target" onSubmit={e => e.preventDefault()}>
                                            <div className="input-wrapper" data-aos="fade-up" data-aos-delay="400"><i className="fas fa-user input-icon"></i><input type="text" placeholder="نام شما" required /></div>
                                            <div className="input-wrapper" data-aos="fade-up" data-aos-delay="500"><i className="fas fa-envelope input-icon"></i><input type="email" placeholder="ایمیل شما" required /></div>
                                            <div className="input-wrapper" data-aos="fade-up" data-aos-delay="600"><i className="fas fa-tag input-icon"></i><input type="text" placeholder="موضوع" required /></div>
                                            <div className="input-wrapper" data-aos="fade-up" data-aos-delay="700"><i className="fas fa-comment-dots input-icon textarea"></i><textarea rows={8} placeholder="پیام شما" required></textarea></div>
                                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                                <button ref={sendButtonRef} className="send-btn hover-target" type="submit" data-aos="fade-up" data-aos-delay="900">
                                                    <i ref={sendIconRef} className="fas fa-paper-plane send-icon"></i> ارسال پیام
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Footer */}
                    <footer ref={footerRef} id="footer">
                        <div className="container">
                            <div className="footer-top">
                                <div data-aos="fade-up" data-aos-delay="100"><div style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>Alex <span style={{ color: '#007bff' }}>Smith</span></div><p data-aos="fade-up" data-aos-delay="200">طراح UI/UX و توسعه‌دهنده وب</p></div>
                                <div data-aos="fade-up" data-aos-delay="300"><h4 className="footer-title">لینک‌های سریع</h4><ul className="footer-links">{['Home', 'About', 'Stats', 'Resume', 'Portfolio', 'Services', 'Contact'].map((x, i) => <li key={x} data-aos="fade-up" data-aos-delay={400 + i * 50}><a href={`#${x.toLowerCase()}`}>{x}</a></li>)}</ul></div>
                                <div data-aos="fade-up" data-aos-delay="500"><h4 className="footer-title">خدمات من</h4><ul className="footer-links"><li data-aos="fade-up" data-aos-delay="600"><a href="#">طراحی UI/UX</a></li><li data-aos="fade-up" data-aos-delay="650"><a href="#">توسعه فرانت‌اند</a></li></ul></div>
                                <div data-aos="fade-up" data-aos-delay="800"><h4 className="footer-title">تماس با من</h4><p data-aos="fade-up" data-aos-delay="900"><i className="bi bi-geo-alt-fill" style={{ marginRight: '8px' }}></i> قم، بلوار امین</p></div>
                            </div>
                            <div className="footer-bottom" data-aos="fade-up" data-aos-delay="1100">
                                <div>© {currentYear} <strong>Alex Smith</strong>. تمامی حقوق محفوظ است.</div>
                                <div>طراحی شده با <i className="bi bi-heart-fill" style={{ color: '#e91e63' }}></i> در قم</div>
                            </div>
                        </div>
                    </footer>
                </div>

                <button ref={scrollTopBtnRef} className={`scroll-to-top ${showScrollTop ? 'show' : ''}`} onClick={scrollToTop} aria-label="بازگشت به بالا">
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </>
    );
}












