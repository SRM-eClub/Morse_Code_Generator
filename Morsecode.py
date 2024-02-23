def morseEncode(x):
    # Morse code dictionary
    morse_code = {
        'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.", 'g': "--.",
        'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..", 'm': "--", 'n': "-.",
        'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.", 's': "...", 't': "-", 'u': "..-",
        'v': "...-", 'w': ".--", 'x': "-..-", 'y': "-.--", 'z': "--..",
        '1': ".----", '2': "..---", '3': "...--", '4': "....-", '5': ".....",
        '6': "-....", '7': "--...", '8': "---..", '9': "----.", '0': "-----",
        '?': "..--..", '!': "-.-.--", '.': ".-.-.-", ',': "--..--", ';': "..--..",
        ':': "---...", '+': ".-.-.-", '-': "-....-", '/': "-..-.", '=': "-...-",
    }
    
    # Lookup the Morse code for the given character
    return morse_code.get(x.lower(), '')

def morseCode(s):
    for character in s:
        print(morseEncode(character), end=" ")

# Driver Code
if __name__ == "__main__":
    s = input("Enter a string to convert to Morse code: ")
    morseCode(s)
