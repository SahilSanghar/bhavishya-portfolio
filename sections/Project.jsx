"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RiShareCircleFill } from "react-icons/ri"; 

const Project = () => {
    const handleClick = () => {
      // Open the URL in a new tab
      window.open('https://prompt-debugger-lbgzisv3qa-uc.a.run.app/', '_blank');
    };

  const handleClick2 = () => {
    // Open the URL in a new tab
    window.open('https://giftly-446244708560.us-central1.run.app/', '_blank');
  };

  const handleClick3 = () => {
    // Open the URL in a new tab
    window.open('https://resumatepro-446244708560.us-central1.run.app/', '_blank');
  };

  const handleClick4 = () => {
    // Open the URL in a new tab
    window.open('https://model-matrimony-446244708560.us-central1.run.app/', '_blank');
  };

  const handleClick5 = () => {
    // Open the URL in a new tab
    window.open('https://model-matrimony-446244708560.us-central1.run.app/', '_blank');
  };

return (
    <div className="lg:max-w-5xl mx-auto py-12" id='projects'>
        <p className="max-sm:text-5xl lg:text-7xl text-center">Projects</p>
        <hr className="w-[18%] mx-auto border-t-4 rounded-xl border-gray-500 mt-5" />
        <Tabs defaultValue="Prompt-Debugger" className="w-full py-10">
            <TabsList>
                <TabsTrigger value="Prompt-Debugger">Prompt Debugger</TabsTrigger>
                <TabsTrigger value="giftly">Giftly</TabsTrigger>
                <TabsTrigger value="resuMate-pro">ResuMate Pro</TabsTrigger>
                <TabsTrigger value="model-matrimony">Model Matrimony</TabsTrigger>
                <TabsTrigger value="auto-fine-tuner">Auto Fine Tuner</TabsTrigger>
            </TabsList>
            <TabsContent value="Prompt-Debugger">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Grid - Text Content */}
            <div className='pt-24 px-7'>
                <p>
                  Prompt Debugger has been used over 30,000 times!
                  <br />
                  It's a FREE-to-use tool I built that automates Prompt Engineering for you.
                </p>
                <br />
                <p>
                  It has 2 features: Debug Prompt and Refine Prompt
                  <br />
                  <strong>Debug Prompt</strong> - helps you tweak the prompt based on the desired output.
                  <br />
                  <strong>Refine Prompt</strong> - refines your existing prompt based on best practices of writing a prompt.
                </p>
                <button onClick={handleClick} className='flex items-center border-2 px-5 py-2 rounded-full justify-center mx-auto my-5'>Visit site <RiShareCircleFill className='ms-2' /></button>
              </div>

              {/* Right Grid - Video */}
              <div className="flex justify-center items-center">
              <video
        className="w-full h-64 sm:h-96"
        src="/prompt.mp4"  // Replace with your video URL
        title="Prompt Debugger Video"
        loop
        autoPlay
        muted
        playsInline
      > 
        </video>
              </div>
            </div>
            </TabsContent>
            <TabsContent value="giftly">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Grid - Text Content */}
        <div>
          <p>An Agent for Valentine’s Day 💘</p>
          <br />
          <p>
            I built an agentic no-code tool that helps you with gift and experience recommendations in 3 simple steps:
          </p>
          <br />
          <p>
            Step 1: Give the Gemini API key
            <br />
            Step 2: Select filters
            <br />
            Step 3: Share the likes/dislikes
          </p>
          <br />
          <p>And you are good to go!</p>
          <br />
          <p>📌 Features:</p>
          <ul className="list-disc pl-5">
            <li><strong>Personalisation:</strong> Location-based responses align with culture, currency, and trends</li>
            <li><strong>Uniqueness:</strong> Highlights what makes the gift/experience special</li>
            <li><strong>Practicality:</strong> Provides pricing details and where to find it.</li>
            <li><strong>Budget-Conscious:</strong> Suggests cost-effective options unless specified otherwise.</li>
            <li><strong>Versatility:</strong> Suitable for various occasions and recipients, not just Valentine’s Day.</li>
          </ul>
          <button
            onClick={handleClick2}
            className="flex items-center border-2 px-5 py-2 rounded-full justify-center mx-auto my-5"
          >
            Visit site <RiShareCircleFill className="ms-2" />
          </button>
        </div>

        {/* Right Grid - Button */}
              <div className="flex justify-center items-center">
              <video
        className="w-full h-64 sm:h-96"
        src="/giftly.mp4"  // Replace with your video URL
        title="Giftly Video"
        loop
        autoPlay
        muted
        playsInline
      > 
        </video>
              </div>
            </div> 
            </TabsContent>
            <TabsContent value="resuMate-pro">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Grid - Text Content */}
        <div>
          <p>I am excited to share ResuMate Pro - review resume in 15 seconds - for free. 🎉</p>
          <br />
          <p>
            I built an agentic no-code tool that helps you with gift and experience recommendations in 3 simple steps:
          </p>
          <br />
          <p>
            Step 1: Give the Gemini API key
            <br />
            Step 2: Select filters
            <br />
            Step 3: Share the likes/dislikes
          </p>
          <br />
          <p>ResuMate Pro is a Gemini-powered tool that has the following features - </p>
          <ul className="list-disc pl-5">
            <li><strong>Usage:</strong> Free to use always</li>
            <li><strong>Instant Analysis:</strong> Review your resume in just 15 seconds (5 layer tests)</li>
            <li><strong>Global Language Support:</strong> Supports 133 languages</li>
            <li><strong>AI-Driven Insights:</strong> Leverages LLMs for precise, personalized ATS feedback.</li>
            <li><strong>Versatile for All Roles:</strong> Perfect for both tech and non-tech job applications.</li>
            <li><strong>Seniority Agnostic:</strong> Works for all levels of seniority and positions [from interns to executives]</li>
          </ul>
          <button
            onClick={handleClick3}
            className="flex items-center border-2 px-5 py-2 rounded-full justify-center mx-auto my-5"
          >
            Visit site <RiShareCircleFill className="ms-2" />
          </button>
        </div>

        {/* Right Grid - Button */}
              <div className="flex justify-center items-center">
              <video
        className="w-full h-64 sm:h-96"
        src="/resumate.mp4"  // Replace with your video URL
        title="Resumate Video"
        loop
        autoPlay
        muted
        playsInline
      > 
        </video>
              </div>
            </div>  
            </TabsContent>
            <TabsContent  value="model-matrimony">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Grid - Text Content */}
        <div>
          <p>I built a free-to-use tool - Model Matrimony 💍</p>
          <br />
          <p>
          It helps you find your perfect open-source LLM match in 2 Simple Steps! 
          </p>
          <br />
          <p>
          You won't have to use the same model for every task. Use the best open-source model backed by Open LLM Benchmarks for your task! 
          </p>
          <br />
          <p>Features:</p>
          <ul className="list-disc pl-5">
            <li><strong>Global Language Support:</strong> Compatible with 100+ languages for worldwide accessibility</li>
            <li><strong>Comprehensive Benchmarking:</strong> Leverages 6 different LLM benchmarks for accurate matching</li>
            <li><strong>Real-time Updates:</strong> Benchmark data refreshes every 2 hours for up-to-date recommendations</li>
            <li><strong>Quality Assured:</strong> Only suggests official, non-flagged models you can trust</li>
          </ul>
          <button
            onClick={handleClick4}
            className="flex items-center border-2 px-5 py-2 rounded-full justify-center mx-auto my-5"
          >
            Visit site <RiShareCircleFill className="ms-2" />
          </button>
        </div>

        {/* Right Grid - Button */}
              <div className="flex justify-center items-center">
              <video
        className="w-full h-64 sm:h-96"
        src="/model.mp4"  // Replace with your video URL
        title="Model Video"
        loop
        autoPlay
        muted
        playsInline
      > 
        </video>
              </div>
            </div>  
            </TabsContent>
            <TabsContent value="auto-fine-tuner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Grid - Text Content */}
        <div>
          <p>LLM to train an LLM! ️‍🔥</p>
          <br />
          <p>
          I built an agentic no-code tool that fine-tunes an LLM with the most optimal parameters in 4 simple steps.
          </p>
          <br />
          <p>
          You won't have to use the same model for every task. Use the best open-source model backed by Open LLM Benchmarks for your task! 
          </p>
          <br />
          <ul className="list-disc pl-5">
            <li>Step 1. Give the hugging face model id</li>
            <li>Step 2: Upload your data</li>
            <li>Step 3: Give instructions - what do you want the LLM to do with the data? What operations do you want it to perform? Based on this information it codes the formatting function that performs operations on the data (function calling)</li>
            <li>Step 4: This acts like a parallel grid search. You can add as many new sets of parameters as you want, and in the end, it will show you the best-performing parameter based on the least average loss.</li>
          </ul>
          <button
            onClick={handleClick5}
            className="flex items-center border-2 px-5 py-2 rounded-full justify-center mx-auto my-5"
          >
            Visit site <RiShareCircleFill className="ms-2" />
          </button>
        </div>

        {/* Right Grid - Button */}
              <div className="flex justify-center items-center">
              <video
        className="w-full h-64 sm:h-96"
        src="/tuner.mp4"  // Replace with your video URL
        title="Tuner Video"
        loop
        autoPlay
        muted
        playsInline
      > 
        </video>
              </div>
            </div>
            </TabsContent>
        </Tabs>
    </div>
)
}

export default Project