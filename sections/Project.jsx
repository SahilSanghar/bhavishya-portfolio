import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Project = () => {
return (
    <div className="max-w-5xl mx-auto py-12" id='projects'>
        <p className="text-7xl text-center">Projects</p>
        <hr className="w-[18%] mx-auto border-t-4 rounded-xl border-gray-500 mt-5" />
        <Tabs defaultValue="Prompt-Debugger" className="w-full py-10">
            <TabsList>
                <TabsTrigger value="Prompt-Debugger">Prompt Debugger</TabsTrigger>
                <TabsTrigger value="giftly">Giftly</TabsTrigger>
                <TabsTrigger value="resuMate-pro">ResuMate Pro</TabsTrigger>
                <TabsTrigger value="model-matrimony">Model Matrimony</TabsTrigger>
                <TabsTrigger value="auto-fine-tuner">Auto Fine Tuner</TabsTrigger>
            </TabsList>
            <TabsContent value="Prompt-Debugger">Prompt Debugger has been used over 30,000 times!
            It's a FREE-to-use tool I built that automates Prompt Engineering for you 
            <br /><br />
            It has 2 features: Debug Prompt and Refine Prompt
            Debug Prompt - helps you tweak the prompt based on the desired output
            Refine Prompt - refines your existing prompt based on best practices of writing a prompt</TabsContent>
            <TabsContent value="giftly">An Agent for Valentine’s Day 💘<br /><br />
                I built an agentic no-code tool that helps you with gift and experience recommendations in 3 simple steps:
                <br /><br />
                Step 1: Give the Gemini API key <br />
                Step 2: Select filters <br />
                Step 3: Share the likes/dislikes <br />
                <br />
                And you are good to go! <br />
                <br />
                📌 Features <br />
                1. Personalisation: Location-based responses align with culture, currency, and trends <br />
                2. Uniqueness: Highlights what makes the gift/experience special <br />
                3. Practicality: Provides pricing details and where to find the it. <br />
                4. Budget-Conscious: Suggests cost-effective options unless specified otherwise. <br />
                5. Versatility: Suitable for various occasions and recipients, not just Valentine’s Day. <br />
            </TabsContent>
            <TabsContent value="resuMate-pro">
            I am excited to share ResuMate Pro - review resume in 15 seconds - for free. 🎉<br /><br />
            ResuMate Pro is a Gemini-powered tool that has the following features - <br /><br />
            1. Usage: Free to use always <br />
            2. Instant Analysis: Review your resume in just 15 seconds (5 layer tests) <br />
            3. Global Language Support: Supports 133 languages <br />
            4. AI-Driven Insights: Leverages LLMs for precise, personalized ATS feedback. <br />
            5. Versatile for All Roles: Perfect for both tech and non-tech job applications. <br />
            6. Seniority Agnostic: Works for all levels of seniority and positions [from interns to executives] <br />
            </TabsContent>
            <TabsContent  value="model-matrimony">
            I built a free-to-use tool - Model Matrimony 💍<br /><br />
            It helps you find your perfect open-source LLM match in 2 Simple Steps! <br /><br />
            You won't have to use the same model for every task. Use the best open-source model backed by Open LLM Benchmarks for your task! <br /><br />

            Features:<br />
            1. Global Language Support: Compatible with 100+ languages for worldwide accessibility<br />
            2. Comprehensive Benchmarking: Leverages 6 different LLM benchmarks for accurate matching<br />
            3. Real-time Updates: Benchmark data refreshes every 2 hours for up-to-date recommendations<br />
            4. Quality Assured: Only suggests official, non-flagged models you can trust<br />
            </TabsContent>
            <TabsContent value="auto-fine-tuner">
            LLM to train an LLM! ️‍🔥 <br /><br />
            I built an agentic no-code tool that fine-tunes an LLM with the most optimal parameters in 4 simple steps.<br /><br />

            Step 1. Give the hugging face model id<br /><br />

            Step 2: Upload your data<br /><br />

            Step 3: Give instructions - what do you want the LLM to do with the data? What operations do you want it to perform? Based on this information it codes the formatting function that performs operations on the data (function calling)<br /><br />

            Step 4: This acts like a parallel grid search. You can add as many new sets of parameters as you want, and in the end, it will show you the best-performing parameter based on the least average loss. <br /><br />
            </TabsContent>
        </Tabs>
    </div>
)
}

export default Project