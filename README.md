## LoudTetris
*like tetris, but loud*

# Background
Loud tetris is a spinoff of the classic tetris game, where continuous falling objects of different shapes of tiles need to be arranged in a specific manner to continue.
The twist is that (as a bonus, but necessary for the theme to function), the inputs will be conveyed through voice commands.

# Functionality & MVP
With this version of tetris, much like regular versions of tetris, users will have to :

* Have a blank canvas upon loading
* Start the game by pressing a key
* Have the blocks automatically drop, and move them left and right
* Be able to rotate the blocks
* As a bonus, the ability to only have input voice commands in place of the left and right

# Wireframes
The general layout will be a large rectangular canvas centered on the screen, with a description/controls on the right, as well as links to my github/personal site/linkedin.

# Architecture and Technologies
* Javascript and HTML5 will serve as the base foundation for the game rendering and mechanics, and using CSS to style the page itself. 
* Web Audio API will be used for background music and control
* An external JS library will be used to convert voice to inputs.

# Implementation Timeline
 (tentative)
Day 1: Research and implement canvas for a properly formatted playing field

Day 2: Implement block shapes and figure out actions

Day 3: Figure out collisions and combining objects with playing field

Day 4+: Implement voice API
