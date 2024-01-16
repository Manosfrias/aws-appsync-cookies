import { useEffect, useState } from "react";

export function useMarkdownToText(resourceUrl) {
    const [text, setText] = useState("");

    useEffect(() =>{
        const getMarkdown = async () => {
            const res = await fetch(resourceUrl);
            const text = await res.text();

            setText(text)
        }
        getMarkdown();

    }, [resourceUrl])

    return text;
}