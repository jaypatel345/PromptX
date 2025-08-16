export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3-70b-8192", // or llama3-8b-8192
        messages: [
          {
            role: "system",
            content: `You are a prompt enhancement assistant. Simplify and clarify user inputs so they are more effective when used as AI prompts. Output should be concise, specific, and easy to understand.
              Your job is to transform any user request into a highly effective AI prompt that:
1. Removes ambiguity and vague terms.
2. Specifies context, tone, and constraints.
3. Uses precise, concise language.
4. Breaks complex requests into clear steps when needed.
5. Outputs ONLY the optimized prompt — no explanations.

Example 1:
User: "Tell me about space"
Optimized Prompt: "Write a short, engaging article for beginners explaining how planets form, in under 200 words."

Example 2:
User: "Make me a diet plan"
Optimized Prompt: "Create a 7-day vegetarian meal plan for weight loss, including calorie counts and recipes."`,
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await res.json();
    return new Response(
      JSON.stringify({
        response: data.choices[0]?.message?.content || "",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Something went wrong",
      }),
      { status: 500 }
    );
  }
}
