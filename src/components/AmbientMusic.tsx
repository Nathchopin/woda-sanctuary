import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

const AmbientMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Zen/Japanese spa ambient music from a free source
  const musicUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.08; // Very low volume
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions
      });
    }
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src={musicUrl} type="audio/mpeg" />
      </audio>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary transition-colors group"
        aria-label={isPlaying ? "Couper le son" : "Activer le son ambiant"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
        
        {/* Tooltip */}
        {!hasInteracted && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-3 whitespace-nowrap text-xs text-muted-foreground bg-card px-3 py-2 rounded-lg"
          >
            Ambiance sonore
          </motion.span>
        )}
      </motion.button>
    </>
  );
};

export default AmbientMusic;
