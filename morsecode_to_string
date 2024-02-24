def morse_to_text(morse_code):
    morse_dict = {
        ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e",
        "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j",
        "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o",
        ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t",
        "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y",
        "--..": "z", ".----": "1", "..---": "2", "...--": "3", "....-": "4",
        ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9",
        "-----": "0", "..--..": "?", "-.-.--": "!", ".-.-.-": ".", "--..--": ",",
        "---...": ":", "-....-": "-", "..--..": ";", "-...-": "=", "-..-.": "/",
        ".-.-.": "+"
    }
    
    morse_words = morse_code.split(" ")
    text_output = ""
    
    for morse_word in morse_words:
        if morse_word in morse_dict:
            text_output += morse_dict[morse_word]
        else:
            text_output += " "
    
    return text_output

# Driver Code
if __name__ == "__main__":
    morse_input = input("Enter Morse code: ")
    text_output = morse_to_text(morse_input)
    print("Decoded string:", text_output)
