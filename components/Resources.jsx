import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from "next/link"
import React from 'react'

const Resources = () => {
    const links = [
    {
        href: "https://www.packtpub.com/en-us/learning/how-to-tutorials/chatgpt-for-natural-language-processing-nlp?srsltid=AfmBOooWt6GVsSNkpLL9XfHvWjde_xi2Ctu-xUVw5pQSq7Xq2r5Hr9en",
        text: "ChatGPT for Natural Language Processing (NLP)",
    },
    {
        href: "https://www.packtpub.com/en-pl/learning/how-to-tutorials/gpt-for-wealth-management-enhancing-customer-experience?srsltid=AfmBOop0cPSLvuDK5E3IJmPd2ctoWuGuzcfFAoJCCbDgZJ65j_4WzW5b",
        text: "GPT for Wealth Management - Enhancing Customer Experience",
    },
    {
        href: "https://www.packtpub.com/en-us/learning/how-to-tutorials/chatgpt-for-time-series-analysis?srsltid=AfmBOopTRMNRWWH53KDGvB9rG8JoDY_pn8oog-P5zogtthjS1L66Zyyg",
        text: "ChatGPT for Time Series Analysis",
    },
    ];

    const articles = [
        { href: "https://www.datacamp.com/tutorial/llama-3-2-90b", text: "LLaMA 3 - 2.90B" },
        { href: "https://www.datacamp.com/tutorial/speculative-rag", text: "Speculative RAG" },
        { href: "https://www.datacamp.com/tutorial/flux-ai", text: "Flux AI" },
        { href: "https://www.datacamp.com/tutorial/crew-ai", text: "Crew AI" },
        { href: "https://www.datacamp.com/blog/agentic-rag", text: "Agentic RAG" },
        { href: "https://www.datacamp.com/blog/large-action-models", text: "Large Action Models" },
        { href: "https://www.datacamp.com/blog/llm-guardrails", text: "LLM Guardrails" },
        { href: "https://www.datacamp.com/blog/vlms-ai-vision-language-models", text: "Vision-Language Models (VLMs)" },
        { href: "https://www.datacamp.com/blog/ai-chips", text: "AI Chips" },
        { href: "https://www.datacamp.com/blog/mixture-of-million-experts", text: "Mixture of Million Experts" },
        { href: "https://www.datacamp.com/blog/edge-ai", text: "Edge AI" },
        { href: "https://www.datacamp.com/blog/mixture-of-experts-moe", text: "Mixture of Experts (MoE)" },
    ];

    const courses = [
    {
        href: "https://learning.oreilly.com/course/securing-llms-build/0790145714435/",
        text: "Securing LLMs: Build Secure AI Systems",
    },
    ];

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Packt</AccordionTrigger>
                <AccordionContent>
                <ul className="list-disc pl-5">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Datacamp</AccordionTrigger>
                <AccordionContent>
                <ul className="list-disc pl-5">
                    {articles.map((article, index) => (
                        <li key={index}>
                            <Link href={article.href} target="_blank" rel="noopener noreferrer">
                                {article.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>O'reilly course</AccordionTrigger>
                <AccordionContent>
                <ul className="list-disc pl-5">
                    {courses.map((course, index) => (
                        <li key={index}>
                            <Link href={course.href} target="_blank" rel="noopener noreferrer">
                                {course.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Resources