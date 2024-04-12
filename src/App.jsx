import { useRef } from "react"

function App() {
    const inputRef = useRef()

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div style={{ maxWidth: "300px" }}>
                <div style={{ position: "relative" }}>
                    <div className="input-wrapper">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="0"
                            className="input"
                            maxLength="3"
                            onKeyDown={(event) => {
                                if (isNaN(event.key) && event.key !== "Backspace") {
                                    event.preventDefault()
                                }
                            }}
                        />
                    </div>
                    <div className="input-wrapper2">
                        <input ref={inputRef} type="text" placeholder="0" className="input" maxLength="3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
