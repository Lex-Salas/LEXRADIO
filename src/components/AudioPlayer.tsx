
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera"
  });
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      toast({
        title: "Radio pausada",
        description: "La transmisión se ha pausado"
      });
    } else {
      toast({
        title: "Reproduciendo LEX Radio",
        description: `Escuchando: ${currentSong.title} - ${currentSong.artist}`
      });
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
    setIsMuted(newVolume[0] === 0);
  };

  const handleShare = () => {
    toast({
      title: "¡Enlace copiado!",
      description: "Comparte LEX Radio con tus amigos"
    });
  };

  const handleLike = () => {
    toast({
      title: "❤️ ¡Canción favorita!",
      description: `${currentSong.title} añadida a favoritos`
    });
  };

  return (
    <div className="sticky bottom-0 bg-black/90 backdrop-blur-md border-t border-white/10 p-4 z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-4 flex-1">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Play className="h-6 w-6 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-white font-semibold truncate">{currentSong.title}</h3>
              <p className="text-white/60 text-sm truncate">{currentSong.artist}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLike}
              className="text-white hover:text-red-400 hidden sm:flex"
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlay}
              className="text-white hover:text-purple-400 bg-purple-600 hover:bg-purple-700"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              className="text-white hover:text-blue-400 hidden sm:flex"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center space-x-2 flex-1 justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              className="text-white hover:text-purple-400"
            >
              {isMuted || volume[0] === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
            <div className="w-24">
              <Slider
                value={isMuted ? [0] : volume}
                onValueChange={handleVolumeChange}
                max={100}
                step={1}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
