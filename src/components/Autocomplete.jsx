import React from "react";
import { useState } from "react";


const Autocomplete = ({ options = [] }) => {
    console.log(options)

    const [value, setValue] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)
    const suggestions = options.filter(option => option.toLowerCase().includes(value.toLowerCase()))

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSuggestionClick = (suggestion) => {
        setValue(suggestion)
        setShowSuggestions(false)
    }

    return (
        <>
            <div className="autocomplete">
                <input type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter your text"
                    onFocus={() => setShowSuggestions(true)}
                />

                {showSuggestions && (
                    <ul className="suggestions">
                        {suggestions.map(suggestion =>
                            <li onClick={() => handleSuggestionClick(suggestion)} key={suggestion}>{suggestion}</li>)}
                    </ul>
                )}

                

            </div>


        </>

    )
}
export default Autocomplete;