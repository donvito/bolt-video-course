import React from 'react'
import { Lesson } from '../types'

interface VideoPlayerProps {
  video: Lesson
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{video.title}</h2>
        <p className="text-gray-600 leading-relaxed">{video.description}</p>
      </div>
    </div>
  )
}

export default VideoPlayer