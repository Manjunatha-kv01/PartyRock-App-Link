// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the HTML elements we need to interact with
    const promptInput = document.getElementById('prompt-input');
    const generateBtn = document.getElementById('generate-btn');
    const responseOutput = document.getElementById('response-output');
    const outputContainer = document.getElementById('output-container');

    // Add a click event listener to the "Generate" button
    generateBtn.addEventListener('click', handleGeneration);

    // --- Main Function to Handle Generation ---
    function handleGeneration() {
        const prompt = promptInput.value.trim();

        // Check if the prompt is empty
        if (!prompt) {
            responseOutput.textContent = "⚠️ Please enter a prompt first!";
            return;
        }

        // --- Simulate AI Thinking Process ---
        // 1. Disable the button and show a loading message
        setLoadingState(true);

        // 2. Use setTimeout to fake a delay (like an API call)
        setTimeout(() => {
            // 3. Generate the mock response based on the prompt
            const generatedResponse = generateMockResponse(prompt);

            // 4. Display the response
            responseOutput.textContent = generatedResponse;

            // 5. Re-enable the button and remove loading state
            setLoadingState(false);
        }, 2000); // 2-second delay
    }

    // --- Function to manage the UI loading state ---
    function setLoadingState(isLoading) {
        if (isLoading) {
            generateBtn.disabled = true;
            generateBtn.textContent = 'Generating...';
            responseOutput.textContent = '🧠 Thinking...';
            responseOutput.classList.add('loading');
        } else {
            generateBtn.disabled = false;
            generateBtn.textContent = 'Generate ✨';
            responseOutput.classList.remove('loading');
        }
    }

    // --- The "Fake" AI Brain ---
    // This function checks the prompt for keywords and returns a canned response.
    function generateMockResponse(prompt) {
        const lowerCasePrompt = prompt.toLowerCase();

        // Check for specific keywords
        if (lowerCasePrompt.includes('poem')) {
            return `In realms of code, where logic flows,
A new creation starts and grows.
With lines of text, a world you frame,
In the PartyRock App, you stake your claim.`;
        } 
        
        else if (lowerCasePrompt.includes('joke')) {
            return `Why don't scientists trust atoms?
            
Because they make up everything! 😄`;
        }

        else if (lowerCasePrompt.includes('recipe') && lowerCasePrompt.includes('pasta')) {
            return `**Simple Vegan Garlic & Herb Pasta**

Ingredients:
- 200g of your favorite pasta
- 4 cloves of garlic, minced
- 2 tbsp olive oil
- 1 tsp dried oregano
- 1/2 tsp red pepper flakes
- Salt and pepper to taste
- Fresh parsley, chopped

Instructions:
1. Cook pasta according to package directions.
2. While pasta cooks, heat olive oil in a pan over medium heat.
3. Add minced garlic and cook until fragrant (about 1 minute).
4. Stir in oregano and red pepper flakes.
5. Drain pasta, reserving a little pasta water.
6. Toss pasta in the pan with the garlic oil, adding pasta water if needed.
7. Season with salt, pepper, and fresh parsley. Enjoy!`;
        }
        
        else if (lowerCasePrompt.includes('code') && lowerCasePrompt.includes('python')) {
            return `Sure, here is a simple Python function to greet a user:

def greet(name):
  """This function greets the person passed in as a parameter."""
  print(f"Hello, {name}! Welcome to the PartyRock App.")

# Example usage:
greet("Developer")
`;
        }

        // Generic fallback response
        else {
            return `Here is a creative idea based on your prompt: "${prompt}"

App Name: "StorySpinner"

Concept: An app that generates a random opening line for a story. Users can then continue writing the story, or hit "Spin Again" for a new prompt. It would be great for writers suffering from block!

Key Features:
- Genre selection (Fantasy, Sci-Fi, Mystery)
- "Save to Favorites" button
- Community gallery to share stories`;
        }
    }
});