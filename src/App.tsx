import React from 'react'
import { Book } from 'lucide-react'
import CourseOutline from './components/CourseOutline'
import VideoPlayer from './components/VideoPlayer'
import { courses } from './data/courses'

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState(courses[0].lessons[0])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto flex items-center py-4 px-6">
          <Book className="mr-3 h-8 w-8" />
          <h1 className="text-3xl font-bold">DonvitoCodes Learn</h1>
        </div>
      </header>
      <main className="container mx-auto flex-grow flex flex-col md:flex-row gap-8 p-6">
        <aside className="md:w-1/3 lg:w-1/4">
          <CourseOutline courses={courses} onSelectVideo={setSelectedVideo} />
        </aside>
        <section className="md:w-2/3 lg:w-3/4">
          <VideoPlayer video={selectedVideo} />
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 DonvitoCodes Learn. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App