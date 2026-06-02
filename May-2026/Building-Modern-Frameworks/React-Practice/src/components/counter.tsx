import * as React from "react"

export function Counter(){
    const [count, setCount] = React.useState<number>(0)

    const containerStyles: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1.25rem",
        maxWidth: "320px",
        margin: "1.5rem auto",
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "1rem",
        boxShadow: "0 16px 48px rgba(15, 23, 42, 0.08)",
    }

    const buttonStyles: React.CSSProperties = {
        padding: "0.8rem 1.2rem",
        border: "none",
        borderRadius: "0.75rem",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        fontWeight: 600,
        cursor: "pointer",
        minWidth: "120px",
    }

    const secondaryButtonStyles: React.CSSProperties = {
        ...buttonStyles,
        backgroundColor: "#475569",
    }

    const countStyles: React.CSSProperties = {
        margin: 0,
        color: "#111827",
        fontSize: "1.5rem",
    }

    return (
        <div style={containerStyles}>
            <button style={buttonStyles} onClick={() => { setCount(count + 1) }}>
                Increment
            </button>
            <h2 style={countStyles}>Count is {count}</h2>
            <button style={secondaryButtonStyles} onClick={() => { setCount(count - 1) }}>
                Decrement
            </button>
        </div>
    )
}