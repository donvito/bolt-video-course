export interface Lesson {
  id: string
  title: string
  description: string
  youtubeId: string
}

export interface Course {
  id: string
  title: string
  lessons: Lesson[]
}