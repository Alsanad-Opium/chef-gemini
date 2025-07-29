import { GoogleGenAI } from '@google/genai';
import { useState } from 'react';
import "../App.css";

export default function Gemini({ userInput, Show }) {

    // const [userInput, setUserInput] = useState(null)
    const [gResponse, setGResponse] = useState(null)
    const [responseShown, setResponseShown] = useState(false)
    const key = import.meta.env.VITE_GEMINI_API_KEY;



    const ai = new GoogleGenAI({ apiKey: key });

    async function API_calling() {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Answer this question  ${userInput}`,
            config: {
                systemInstruction: ` Answer in this format 
                                    <section>
                                        <h2>Chef Gemini Recommends:</h2>
                                        <article class="suggested-recipe-container" aria-live="polite">
                                            <p>...</p>
                                            <h3>Recipe Title</h3>
                                            <strong>Ingredients:</strong>
                                            <ul>
                                                <li>...</li>
                                            </ul>
                                            <strong>Instructions:</strong>
                                            <ol>
                                                <li>...</li>
                                            </ol>
                                        </article>
                                    </section> `
            }
        });
        setGResponse(response.text)
        console.log(response.text)
        setResponseShown(!responseShown)
        // alert(response.text);

    }
    if (Show && !responseShown) {
        API_calling()
    }
    return (
        <>
            {/* <input type="text" onChange={(e) => { setUserInput(e.target.value) }} placeholder='enter you text here' /> */}
            {/* <button onClick={API_calling}>Generate</button> */}
            {Show && gResponse &&
                
                < div className='gemini-response-box' dangerouslySetInnerHTML={{ __html: gResponse }}></div >
            }

        </>
    );
}
