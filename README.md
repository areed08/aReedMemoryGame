# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Allison Reed

Time spent: 8 hours spent in total

Link to project: 

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] List anything else that you can get done to improve the app!
- I added music that starts when the user clicks the "Start" button and stops when the user wins the game, loses the game,
  or hits the stop button.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/ILTTP1E.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
-https://www.w3schools.com/jsref/prop_audio_loop.asp
-https://mixkit.co/free-sound-effects/game/
-https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
Most of my time was spent on the timer and the inserting my own images. The timer I wanted to have it start after the sequence fully 
completed and then would restart once the player made their guesses. However, I couldn't get the timer to start at the right time and 
it would instead start as the sequence was playing. Instead of implementing the timer this way, I instead made an overall game timer;
a timer that would give the user 80 seconds to complete the whole game. The timer would restart everytime the user stoped, loss, or won
the game. I also I a hard time with hidding the images. Since in the directions its says to change the CSS file, I assumed that the hidding
and showing of the images also had to be in the CSS file. I spent way too much time on this; the normal activity without the addional work
only took me about an hour an a half. I final realized that I should base the hidding of the images on the hidding of the start and stop
buttons. I was also able to overcome these challenges thanks to coding websites such as stackOverFlow.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I am curious to learn more about html and what built in attributes come with html. I have never really worked with html, or frankly 
js or css, and I find it amazing how a few lines of code can create a whole interactive interface for the user. I would also like 
to learn more about how html interacts with CSS. I notice we made a .hidden attribute in out CSS that went with our buttons in 
html and I am curious to learn more about how that works. I am overalljust eager to learn more about the relationships between these coding languages.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I spent most of the extra time do the additional work. The timer and inserting my own images took the most time as mentioned above. I also add
a sound that plays throughout the game. I thought just the noise that came from clicking the buttons was boring and weirdly quiet. I 
find the addition of a background noise more intense and made the game more fun. The overall project took me about 8 hours, an hour
and a half of that being the main project and the rest being the additional work.


## License

    Copyright Allison Reed

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.