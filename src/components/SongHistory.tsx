
import React from 'react';
import { Music, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SongHistory = () => {
  const recentSongs = [
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      time: "15:30",
      duration: "5:55",
      liked: true
    },
    {
      title: "Hotel California",
      artist: "Eagles",
      time: "15:24",
      duration: "6:30",
      liked: false
    },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      time: "15:18",
      duration: "5:03",
      liked: true
    },
    {
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      time: "15:10",
      duration: "8:02",
      liked: false
    },
    {
      title: "Don't Stop Believin'",
      artist: "Journey",
      time: "15:05",
      duration: "4:10",
      liked: true
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Music className="h-6 w-6 text-purple-400" />
        <h2 className="text-2xl font-bold text-white">Canciones Recientes</h2>
      </div>

      <div className="space-y-3">
        {recentSongs.map((song, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Music className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-medium truncate">{song.title}</h3>
                <p className="text-white/60 text-sm truncate">{song.artist}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <Clock className="h-4 w-4" />
              <span>{song.time}</span>
              <span className="text-white/40">•</span>
              <span>{song.duration}</span>
              <Button
                variant="ghost"
                size="icon"
                className={`h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity ${
                  song.liked ? 'text-red-400' : 'text-white/60'
                }`}
              >
                <Heart className={`h-4 w-4 ${song.liked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
          Ver más canciones
        </Button>
      </div>
    </div>
  );
};

export default SongHistory;
