import React from 'react'

function MovieSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-72 rounded-xl bg-gray-800"></div>

      <div className="mt-4 h-5 rounded bg-gray-700"></div>

      <div className="mt-2 h-4 w-1/2 rounded bg-gray-700"></div>
    </div>
  )
}

export default MovieSkeleton