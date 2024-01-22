from openai import OpenAI

def query_execution(input_text):
    if not input_text.strip():
        print("Input text is empty or contains only spaces. Please provide a valid query.")
        return
    client = OpenAI(api_key="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")
    model_name = "gpt-3.5-turbo"
    response = client.chat.completions.create(
        model=model_name,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": input_text},
        ],
        temperature=0.8
    )
    assistant_reply = response.choices[0].message.content
    return assistant_reply

query = input("Please enter your query: ")
output = query_execution(query)
print(output)