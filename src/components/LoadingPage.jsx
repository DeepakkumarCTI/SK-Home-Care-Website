import { useEffect, useState } from "react";

export default function LoadingPage({ onComplete, duration = 1900 }) {
    const [visible, setVisible] = useState(true);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const exitTimer = setTimeout(() => {
            setExiting(true);
        }, Math.max(0, duration - 450));

        const completeTimer = setTimeout(() => {
            setVisible(false);
            onComplete?.();
        }, duration);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [duration, onComplete]);

    if (!visible) return null;

    return (
        <div
            className={`sk-loader ${exiting ? "sk-loader-exit" : ""}`}
            role="status"
            aria-label="Loading SK Home Care website"
        >
            <div className="sk-loader-content">
                {/* Animated decorative circles */}
                <div className="sk-logo-frame">
                    <span className="sk-orbit sk-orbit-one" />
                    <span className="sk-orbit sk-orbit-two" />

                    {/* Company Logo */}
                    <img
                        src="/images/sk-home-care-logo.png"
                        alt="S.K. Home Care"
                        className="sk-loader-logo"
                    />
                </div>

                {/* Brand Name */}
                <h1 className="sk-loader-title">
                    S.K. <span>Home Care</span>
                </h1>

                <p className="sk-loader-tagline">
                    We Care Like Family
                </p>

                {/* Animated loading line */}
                <div className="sk-progress-track" aria-hidden="true">
                    <div className="sk-progress-bar" />
                </div>

                <p className="sk-loader-message">
                    Creating a little more comfort at home...
                </p>

                {/* Small decorative dots */}
                <div className="sk-loader-dots" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <style>{`
        .sk-loader {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 24px;
          background: #fffaf3;
          color: #30252a;
          opacity: 1;
          visibility: visible;
          transition:
            opacity 450ms ease,
            visibility 450ms ease;
        }

        .sk-loader::before,
        .sk-loader::after {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          pointer-events: none;
        }

        .sk-loader::before {
          top: -140px;
          left: -100px;
          background: rgba(31, 111, 166, 0.07);
        }

        .sk-loader::after {
          right: -120px;
          bottom: -150px;
          background: rgba(200, 48, 55, 0.07);
        }

        .sk-loader-content {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;
          max-width: 420px;
          flex-direction: column;
          align-items: center;
          text-align: center;
          animation: sk-content-enter 700ms ease both;
        }

        .sk-logo-frame {
          position: relative;
          display: flex;
          width: 190px;
          height: 150px;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .sk-loader-logo {
          position: relative;
          z-index: 2;
          display: block;
          width: 100%;
          max-width: 190px;
          max-height: 130px;
          object-fit: contain;
          animation: sk-logo-float 2.4s ease-in-out infinite;
        }

        .sk-orbit {
          position: absolute;
          inset: 5px;
          border: 2px solid transparent;
          border-radius: 50%;
          animation: sk-orbit-spin 2.8s linear infinite;
        }

        .sk-orbit-one {
          border-top-color: rgba(31, 111, 166, 0.65);
          border-right-color: rgba(31, 111, 166, 0.16);
        }

        .sk-orbit-two {
          inset: 12px;
          border-bottom-color: rgba(200, 48, 55, 0.6);
          border-left-color: rgba(200, 48, 55, 0.15);
          animation-direction: reverse;
          animation-duration: 3.8s;
        }

        .sk-loader-title {
          margin: 0;
          font-size: clamp(27px, 6vw, 36px);
          font-weight: 850;
          letter-spacing: -1.2px;
          line-height: 1.2;
          color: #c83037;
        }

        .sk-loader-title span {
          color: #1f6fa6;
        }

        .sk-loader-tagline {
          margin: 10px 0 0;
          color: #66565a;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1.5px;
        }

        .sk-progress-track {
          width: 190px;
          height: 4px;
          margin-top: 28px;
          overflow: hidden;
          border-radius: 99px;
          background: #eadfd8;
        }

        .sk-progress-bar {
          width: 45%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #1f6fa6, #c83037);
          animation: sk-progress-move 1.25s ease-in-out infinite;
        }

        .sk-loader-message {
          margin: 16px 0 0;
          color: #76696b;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.2px;
        }

        .sk-loader-dots {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 18px;
        }

        .sk-loader-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c83037;
          animation: sk-dot-bounce 1s ease-in-out infinite;
        }

        .sk-loader-dots span:nth-child(2) {
          background: #1f6fa6;
          animation-delay: 150ms;
        }

        .sk-loader-dots span:nth-child(3) {
          background: #c83037;
          animation-delay: 300ms;
        }

        .sk-loader-exit {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        @keyframes sk-content-enter {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sk-logo-float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.025);
          }
        }

        @keyframes sk-orbit-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes sk-progress-move {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(330%);
          }
        }

        @keyframes sk-dot-bounce {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.45;
          }
          30% {
            transform: translateY(-5px);
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .sk-logo-frame {
            width: 165px;
            height: 135px;
          }

          .sk-loader-logo {
            max-width: 165px;
            max-height: 115px;
          }

          .sk-loader-tagline {
            font-size: 12px;
          }

          .sk-loader-message {
            max-width: 260px;
            line-height: 1.7;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sk-loader-content,
          .sk-loader-logo,
          .sk-orbit,
          .sk-progress-bar,
          .sk-loader-dots span {
            animation: none !important;
          }

          .sk-loader {
            transition: none;
          }
        }
      `}</style>
        </div>
    );
}