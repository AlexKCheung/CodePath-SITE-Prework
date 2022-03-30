# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's internship Program. 

Submitted by: **Alex Cheung**

Time spent: **3.5** hours spent in total

Link to project: https://glitch.com/edit/#!/marshy-aspiring-henley 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
Starting Screen
![](https://github.com/AlexKCheung/CodePath-SITE-Prework/blob/main/Gifs/game%20starting.gif)
Game win
![](https://github.com/AlexKCheung/CodePath-SITE-Prework/blob/main/Gifs/game%20win.gif)
Game lose
![](https://github.com/AlexKCheung/CodePath-SITE-Prework/blob/main/Gifs/game%20lose.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used CodePath's required steps guide. I also used Mozilla's developer docs for Math.random() in which I modified a little to help generate an integer 1-4 so that the user can have a different random secret pattern every time the game is played. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? 

A challenge I encountered in this project was handling the game logic. Although there was a helpful infographic showing the logic to how the player wins the game, I still became confused from the nested if else conditions. Thankfully, I found out that there was a code snippet of how to implement the logic direclty under the graph, in the hidden bullet point. 

Another challenge I encountered, was while testing my webpage locally on my computer, my game's index.html file was not imporing the style.css and script.js files. Luckily, after a few minutes of debugging, I solved this problem by first pathing out of the folder, then back in to import the file I want. For example, instead of "/style.css", I changed it to "../CodePath-SITE-Prework/style.css". This allowed me to view my project's website on my local computer in addition to the glitch site. 

3. What questions about web development do you have after completing your submission? 

I was wondering how to connect the database to the cloud. Maybe if there was a login button and everyone can create an account to store their score, how would the database be managed? In one of my personal projects, I was able to connect a database to my website, but only host locally, so I was wondering how to expand upon this functionality. 

note: added random pattern
4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. 

Further ideas that come up to my mind is maybe adding more games into this website. When the user enters the site, they can be greeted by several games, one of which is this light and sound memory game, another perhaps tic tac toe, etc. This essentially can be a hub for a user to play an assortment of games. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1hjLthWOn_Y6poBmUOJEsJcBjOv2ET4Cn/view?usp=sharing)

Sorry video quality isn't the best...


## Thank you for your time and consideration of my application!!! 
## License

    Copyright [Alex Cheung]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.