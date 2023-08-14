import React, { InputHTMLAttributes, forwardRef, useState } from "react"
import cn from "classnames"

export const Input = () => {
    const [input, setInput] = useState<string>('');

    return (
        <form>
            <input
            type="text"
            placeholder="start typing..."
            value={input}
            onChange={e =>  setInput(e.target.value)}
            className="" 
            />
            <button>Add task</button>
        </form>
    )
}
