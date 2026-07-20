import React from 'react'
import { NOT_FOUND } from '../utils/constants'

export default function NotFound() {
    return (
        <div className="mt-20 text-center">
            <h2 className="text-4xl font-bold text-red-500">
                {NOT_FOUND.heading}
            </h2>

            <p className="mt-4 text-lg text-gray-400">
                {NOT_FOUND.message}
            </p>
        </div>
    )
}
