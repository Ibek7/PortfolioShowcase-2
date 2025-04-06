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
                force: 8,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 120,
              duration: 0.5,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.3
              }
            }
          },
        },
        particles: {
          color: {
            value: [
              "#FFD700", // Gold
              "#FFF2AC", // Lighter gold
              "#B8860B", // Darker gold
              "#FFDF00", // Golden yellow
              "#DAA520"  // Golden rod
            ],
          },
          links: {
            color: "#FFD700",
            distance: 170,
            enable: true,
            opacity: 0.3,
            width: 1.2,
            triangles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.1
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
            trail: {
              enable: true,
              length: 3,
              fillColor: "#000000"
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 90, // Slightly increased particle count for better visibility in all sections
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.2,
              sync: false
            }
          },
          size: {
            value: { min: 1.2, max: 4.5 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.6,
              sync: false
            }
          },
          shape: {
            type: ["circle", "triangle", "star"],
            options: {
              star: {
                sides: 5
              }
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1
            }
          }
        },
        detectRetina: true,
        smooth: true
      }}
    />
  );
};

export default ParticlesBackground;