export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-70b-8192", // or llama3-8b-8192
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await res.json();
    return new Response(JSON.stringify({
      response: data.choices[0]?.message?.content || ""
    }), { status: 200 });

  } catch (error: any) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({
      error: error.message || "Something went wrong"
    }), { status: 500 });
  }
}