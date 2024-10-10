import React from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { Course, Lesson } from '../types'

interface CourseOutlineProps {
  courses: Course[]
  onSelectVideo: (lesson: Lesson) => void
}

const CourseOutline: React.FC<CourseOutlineProps> = ({ courses, onSelectVideo }) => {
  const [expandedCourses, setExpandedCourses] = React.useState<string[]>([])

  const toggleCourse = (courseId: string) => {
    setExpandedCourses(prev =>
      prev.includes(courseId)
        ? prev.filter(id => id !== courseId)
        : [...prev, courseId]
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Course Outline</h2>
      {courses.map(course => (
        <div key={course.id} className="mb-6">
          <button
            className="flex items-center justify-between w-full text-left font-semibold p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            onClick={() => toggleCourse(course.id)}
          >
            <span className="text-lg text-gray-800">{course.title}</span>
            {expandedCourses.includes(course.id) ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
          </button>
          {expandedCourses.includes(course.id) && (
            <ul className="mt-3 space-y-2">
              {course.lessons.map(lesson => (
                <li key={lesson.id}>
                  <button
                    className="w-full text-left p-2 rounded-md hover:bg-blue-100 transition-colors duration-200 text-blue-600 hover:text-blue-800"
                    onClick={() => onSelectVideo(lesson)}
                  >
                    {lesson.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default CourseOutline