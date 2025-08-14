import React from "react";

interface UseCase {
  scenario: string;
  instructions: string;
  example: string;
}

interface UseCaseCategory {
  title: string;
  cases: UseCase[];
}

const useCaseCategories: UseCaseCategory[] = [
  {
    title: "Language and Text Generation",
    cases: [
      {
        scenario: "Creative Writing",
        instructions:
          "Craft prompts that specify genre, tone, style, and plot points to guide the AI in generating engaging narratives.",
        example: `"Write a short story about a young woman who discovers a magical portal in her attic."`,
      },
      {
        scenario: "Summarization",
        instructions:
          "Provide the AI with text and instruct it to generate concise summaries that capture key information.",
        example: `"Summarize the main points of the following news article on climate change."`,
      },
      {
        scenario: "Translation",
        instructions:
          "Specify the source and target languages to enable the AI to accurately translate text while preserving meaning and context.",
        example: `"Translate the following text from English to Spanish: 'The quick brown fox jumps over the lazy dog.'"`,
      },
      {
        scenario: "Dialogue",
        instructions:
          "Design prompts that simulate conversations, allowing the AI to generate responses that resemble human interaction.",
        example: `"You are a friendly chatbot helping users troubleshoot their computer problems."`,
      },
    ],
  },
  {
    title: "Question Answering",
    cases: [
      {
        scenario: "Open-Ended Questions",
        instructions:
          "Formulate prompts that encourage the AI to provide comprehensive and informative answers based on its knowledge base.",
        example: `"Explain the concept of quantum computing and its potential impact on the future of technology."`,
      },
      {
        scenario: "Specific Questions",
        instructions:
          "Design prompts that target specific information, enabling the AI to retrieve precise answers from the provided context or its internal knowledge base.",
        example: `"What is the capital of France?" or "According to the provided text, what are the main causes of deforestation?"`,
      },
      {
        scenario: "Multiple Choice Questions",
        instructions:
          "Present prompts with options, prompting the AI to analyze and select the most appropriate answer based on its understanding of the context.",
        example: `"Who wrote the Harry Potter series? A) J.R.R. Tolkien, B) J.K. Rowling, C) Stephen King"`,
      },
      {
        scenario: "Hypothetical Questions",
        instructions:
          "Craft prompts that explore hypothetical situations, allowing the AI to reason, speculate, and provide potential outcomes or solutions.",
        example: `"What would happen if humans could travel at the speed of light?"`,
      },
    ],
  },
  {
    title: "Code Generation",
    cases: [
      {
        scenario: "Code Completion",
        instructions:
          "Provide the AI with a partial code snippet and prompt it to suggest or complete the remaining code based on the context and programming language.",
        example: `"Write a Python function to calculate the factorial of a given number."`,
      },
      {
        scenario: "Code Translation",
        instructions:
          "Specify the source and target programming languages to enable the AI to translate code while preserving functionality and syntax.",
        example: `"Translate the following Python code to JavaScript: def greet(name): print('Hello,', name)"`,
      },
      {
        scenario: "Code Optimization",
        instructions:
          "Prompt the AI to analyze existing code and suggest improvements for efficiency, readability, or performance.",
        example: `"Optimize the following Python code to reduce its execution time."`,
      },
      {
        scenario: "Code Debugging",
        instructions:
          "Provide the AI with code containing errors and prompt it to identify and suggest potential solutions for the identified issues.",
        example: `"Debug the following Java code and explain why it is throwing a NullPointerException."`,
      },
    ],
  },
  {
    title: "Image Generation",
    cases: [
      {
        scenario: "Photorealistic Images",
        instructions:
          "Craft prompts that describe the desired image in detail, including objects, scenery, lighting, and style, to generate realistic and high-quality images.",
        example: `"A photorealistic image of a sunset over the ocean with palm trees silhouetted against the sky."`,
      },
      {
        scenario: "Artistic Images",
        instructions:
          "Design prompts that specify art styles, techniques, and subject matter to guide the AI in creating images that mimic specific artistic movements or evoke certain emotions.",
        example: `"An impressionist painting of a bustling city street with people walking under umbrellas in the rain."`,
      },
      {
        scenario: "Abstract Images",
        instructions:
          "Formulate prompts that encourage the AI to generate images that are open to interpretation, utilizing shapes, colors, and textures to evoke feelings or concepts.",
        example: `"An abstract image representing the concept of hope, using bright colors and flowing shapes."`,
      },
      {
        scenario: "Image Editing",
        instructions:
          "Provide the AI with an existing image and specify desired modifications, enabling it to edit and enhance the image according to the given instructions.",
        example: `"Change the background of this photo to a starry night sky and add a full moon." or "Remove the person from this image and replace them with a cat."`,
      },
    ],
  },
];

const UseCases: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">
        Use cases and examples of prompt engineering
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Here are some specific examples and use cases showing how prompt
        engineering helps produce customized and relevant output.
      </p>

      {useCaseCategories.map((category) => (
        <div key={category.title} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Scenario
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Instructions
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    Example Prompt
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.cases.map((c, idx) => (
                  <tr
                    key={idx}
                    className={`border-t border-gray-200 dark:border-gray-700 ${
                      idx % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800"
                    }`}
                  >
                    <td className="px-6 py-4 align-top text-gray-900 dark:text-gray-100 font-medium">
                      {c.scenario}
                    </td>
                    <td className="px-6 py-4 align-top text-gray-700 dark:text-gray-300">
                      {c.instructions}
                    </td>
                    <td className="px-6 py-4 align-top text-gray-700 dark:text-gray-300">
                      {c.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseCases;
