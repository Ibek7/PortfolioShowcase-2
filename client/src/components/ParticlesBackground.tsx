import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#000000", // Pure black for maximum contrast
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 10,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            }
          },
        },
        particles: {
          color: {
            value: [
              "#FFD700", // Gold
              "#FFF2AC", // Lighter gold
              "#B8860B", // Darker gold
            ],
          },
          links: {
            color: "#FFD700",
            distance: 150,
            enable: true,
            opacity: 0.6, // Further increased link opacity
            width: 1.5, // Thicker links for more visibility
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.7,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 500, // Further reduced area = even more particles
            },
            value: 100, // Further increased particle count
          },
          opacity: {
            value: 0.7, // Further increased base opacity
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.3, // Higher minimum opacity
            }
          },
          size: {
            value: { min: 1.8, max: 5 }, // Larger particles
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.8, // Larger minimum size
            }
          },
          shape: {
            type: ["circle", "triangle"]
          }
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;