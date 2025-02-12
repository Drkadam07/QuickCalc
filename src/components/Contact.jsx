'use client'
import { useState } from 'react'
import { useTheme } from './../components/context/ThemeContext';

export default function Contact() {
    const [agreed, setAgreed] = useState(false)
    const { theme } = useTheme();

    return (
        <>
            <h1>contact us </h1>
        </>
    )
}
