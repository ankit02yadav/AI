# AI Chatbot using Gemini API (No Memory)

This project demonstrates how to create a simple AI chatbot using the Gemini API without storing any user memory. The chatbot responds to user inputs based on the current session and does not remember previous conversations.

## Prerequisites

Before running this project, you need to set up a few things:

### 1. Gemini API Key
You will need an API key from Gemini to access their API services. 

- Sign up at [Gemini](https://www.gemini.com/) to get your API key.

### 2. Install Dependencies

You will need to install some dependencies for this project. This can be done easily using `pip` (for Python projects). Below are the main dependencies for this chatbot:

```bash
pip install requests

### 3. Python Version
Make sure you are using Python 3.6 or above. You can check your Python version using the following command


```bash
python --version

Ensure that the output indicates Python 3.6 or a higher version.

##Setup
1. Clone the Repository
To start using this project, clone the repository using the following command:

````bash

git clone https://github.com/ankit02yadav/AI.git
2. Create the config.py File

Create a config.py file in the root directory of your project. This file will store your Gemini API key.

python
# config.py
# Add your Gemini API key below
GEMINI_API_KEY = 'your-api-key-here'

3. Create Your Bot Script
In the main bot file (e.g., bot.py), you'll integrate the API to handle user inputs and responses. Below is an example code snippet for that:

```python
import requests
import json

# Load the API key from the config
from config import GEMINI_API_KEY

def send_message_to_gemini(message):
    url = "https://api.gemini.com/v1/chat"  # Replace with actual Gemini API endpoint
    headers = {
        "Authorization": f"Bearer {GEMINI_API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "messages": [{"role": "user", "content": message}]
    }

    # Send POST request to Gemini API
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    
    if response.status_code == 200:
        response_data = response.json()
        return response_data['choices'][0]['message']['content']
    else:
        return f"Error: {response.status_code}"

def chat():
    print("Welcome to the AI chatbot! Type 'exit' to end the conversation.")
    
    while True:
        user_input = input("You: ")
        
        if user_input.lower() == 'exit':
            print("Goodbye!")
            break

        # Get the chatbot's response
        response = send_message_to_gemini(user_input)
        
        # Print the chatbot's response
        print(f"AI: {response}")

if __name__ == "__main__":
    chat()
This example allows the chatbot to respond to user input, sending each message to the Gemini API and receiving a response. Since the bot does not store memory, it will not remember past interactions.


## 4. Run the Bot
After setting up your config.py with your API key, you can run your chatbot by running the following command:

`` bash
python bot.py

The chatbot will prompt you to type messages, and it will respond accordingly. Type exit to end the conversation.

Features
No Memory: The bot doesn't retain any memory of past interactions. Each message is processed independently.
Real-time Interaction: The chatbot responds instantly to user queries using the Gemini API.
Notes
API Limits: Make sure to check the rate limits and quota provided by Gemini to avoid hitting the API limit.
Error Handling: The chatbot will display an error message if the API request fails or returns an error.
Customization: You can modify the code and the chatbot's behavior by adjusting the payload sent to the API and changing the logic inside bot.py.
Troubleshooting
If you run into any issues, here are a few things to check:

Make sure your API key is valid and correctly placed in the config.py file.
Ensure you have the required dependencies installed.
Double-check the API endpoint URL to make sure it is correct.
License
This project is licensed under the MIT License - see the LICENSE file for details.
