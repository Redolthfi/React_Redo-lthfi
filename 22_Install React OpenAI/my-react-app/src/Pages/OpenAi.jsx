import React, { useState } from "react";
import OpenAI from "openai";
import AllInput from "../Component/InputanLabel";

const FormAI = () => {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const AIClick = async () => {
    setLoading(true);
    try {
      const resp = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 250,
      });
      setResult(resp.choices[0].text);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border border-black p-6 w-96 flex flex-col space-y-4">
        <AllInput
          name="text_ai"
          label="What is your question?"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={AIClick}
        >
          Submit
        </button>
        <p>{loading ? "AI is Loading...." : ""}</p>
        {result && (
          <div className="border border-black p-4">
            <p className="text-xl font-semibold">Result:</p>
            <p className="mt-2">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormAI;
