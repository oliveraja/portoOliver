import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../css/PreLoader.css';
import { useAnimation } from '../animation/AnimationContext';

const PreLoader = () => {
    const { setStartLandingAnimation } = useAnimation();
    const preloaderRef = useRef<HTMLDivElement>(null);
    const textContainerRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressFillRef = useRef<HTMLDivElement>(null);
    const progressTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();
        
        if (!preloaderRef.current || !textContainerRef.current || !progressFillRef.current || !progressTextRef.current) return;
        
        const spans = textContainerRef.current.querySelectorAll('span');
        
        gsap.set(spans, {
            y: 50,
            opacity: 0
        });
        gsap.set(progressFillRef.current, {
            width: '0%'
        });
        gsap.set(progressTextRef.current, {
            innerHTML: '0%'
        });
        
        // span naik satu satu
        tl.to(spans, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.3,
            ease: "power3.out"
        });

        // animasi yang progress bar
        tl.to(progressFillRef.current, {
            width: '20%',
            duration: 0.8,
            ease: "power1.inOut",
            onUpdate: () => {
                if (progressTextRef.current) {
                    const progress = Math.round(gsap.getProperty(progressFillRef.current, "width") as number);
                    progressTextRef.current.innerHTML = `${progress}%`;
                }
            }
        })
        .to(progressFillRef.current, {
            width: '45%',
            duration: 0.8,
            ease: "power1.inOut",
            onUpdate: () => {
                if (progressTextRef.current) {
                    const progress = Math.round(gsap.getProperty(progressFillRef.current, "width") as number);
                    progressTextRef.current.innerHTML = `${progress}%`;
                }
            }
        })
        .to(progressFillRef.current, {
            width: '75%',
            duration: 0.8,
            ease: "power1.inOut",
            onUpdate: () => {
                if (progressTextRef.current) {
                    const progress = Math.round(gsap.getProperty(progressFillRef.current, "width") as number);
                    progressTextRef.current.innerHTML = `${progress}%`;
                }
            }
        })
        .to(progressFillRef.current, {
            width: '99%',
            duration: 0.8,
            ease: "power1.inOut",
            onUpdate: () => {
                if (progressTextRef.current) {
                    const progress = Math.round(gsap.getProperty(progressFillRef.current, "width") as number);
                    progressTextRef.current.innerHTML = `${progress}%`;
                }
            }
        });
        
        // fade out span
        tl.to(spans, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: "power3.in"
        });
        
        // fade out progress bar
        tl.to([progressBarRef.current, progressTextRef.current], {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in"
        }, "<");
        
        // trigger untuk animation landingPage
        tl.call(() => setStartLandingAnimation(true))
        
        // preloader fade out turun
        .to(preloaderRef.current, {
            y: "100%",
            duration: 1.2,
            ease: "power2.in",
            onComplete: () => {
                if (preloaderRef.current) {
                    preloaderRef.current.style.display = 'none';
                }
            }
        });
    }, [setStartLandingAnimation]);

    return (
        <div ref={preloaderRef} className="preloader">
            <div ref={textContainerRef} className="text-container">
                <span>welcome </span>
                <span>to </span>
                <span>verver </span>
                <span>site..</span>
            </div>
            <div className="progress-container">
                <div ref={progressBarRef} className="progress-bar">
                    <div ref={progressFillRef} className="progress-fill"></div>
                </div>
                <div ref={progressTextRef} className="progress-text">0%</div>
            </div>
        </div>
    );
};

export default PreLoader;