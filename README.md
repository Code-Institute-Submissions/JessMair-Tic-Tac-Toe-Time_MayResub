# Tic-Tac-Toe-Time - A JavaScript Project

add image of site responsiveness 


This is my second milestone project, undertaken as part of the Code Institutes Diploma in Software Development.
Here is the link for [Tic Tac Toe Time](https://jessmair.github.io/Tic-Tac-Toe-Time/)

#  Who Is This Website For?

I have created this site for game enthusiast that enjoy simple classics such as this game "Tic Tac Toe". Better known as "Noughts and Crosses" outside of America. 
The games origins can be traced back to ancient Egypt and has had small variations of the same game through the ages. 
Although I suspect most will recall playing this classic at some point in their childhood with a pencil and some paper. 
I certainly do recall playing this game, with friends, sibling, parents, and grandparents. The beauty of this game is that it requires two players and yet can be learned by almost everyone. A game that has been shared and played over the ages, between friends and families, a true classic. I hope you enjoy visiting the site and maybe you will reminisce the days when you played a simple game of Tic Tac Toe. 

# UX - User Experience 

The project was planned in 5 stages. 

- Strategy Plane 

- Scope Plane 

- Structure Plane

- Skeleton Plane

- Surface Plane 

# The Strategy Plane 

## User Stories
-   As a user I want to be able to play the game with another person who is present in person with me
-   As a user I want see a clear set of instructions 
-   As a user I want to experience a simplistic user interface 
-   As a user I want to be able to easily navigate the game
-   As a user I want to be able to play the game repeatedly and as seamlessly as possible
-   As a user I do not want the site to be cluttered or have any information that does not serve a clear purpose in allowing me to play the game 
-   As a user I want the site to be easy to learn so that when I return in the future, the sites layout simple and easy to memorise 
-   As a user I want to be able to play this game on my mobile device and for the format to always remain tidy 

## The Owner 

-   The game should have easy to understand instructions
-   The game should be a 2-player game to be played when both players are present together, using the same device, taking turns when it is their go
-   The gameboard needs to be easy to access 
-   The user should be able to intuitively navigate the game with easy-to-follow game cues 
-   The functions of the game should be self-explanatory
-   I want the site to be fully responsive on a mobile screen as a key objective, thus making this game accessible if people wish to play it on their phone  

# The Scope Plane

The features of this project:

1 page
A set of instructions 
A boardgame 
The cursor turns into a pointer when hovering over the grid, so player knows intuits the grid is interactive
Markers that appear when the mouse is hovered over the board to allow the player to visualise which cell to place their marker in, as per their turn
A "not allowed" symbol to appear when a player hover over an already occupied cell 
A message at the end of a game, notifying of either a winner or a draw between the players
A "Restart" button, that when pressed resets the board for a new game
  
# The Structure Plane 

The website only has one page. The page contains the title, instructions and the boardgame itself. 
The goal of this page is to be very easy to understand and digest. Also, for someone who is familiar with the classic game of Tic Tac Toe, to be able to go straight to playing the game. 

<img src="assets/images/gameinprogress.png" alt="image of a game in progress"> 

The colour of the board game and the detail is complimentary and not too bright or dark, creating a good contrast and yet complimenting each other. 
The instructions are not overly wordy so that the game is quick and easy to move on to. 
The board is interactive too as it registers a click and prevents the player from being able to click on a cell that is already occupied 

IMAGE OF WINNER PAGE 
This image shows the screen that shows containing a message of which player won, "X" or "O". The "Restart" button is interactive.

<img src="assets/images/gamedraw.png" alt="image of a game that ended as a draw">   
This image shows when the game ends in a draw. The "Restart" button is interactive. 

<img src="assets/images/gamehome.png" alt="image of a game that has been reset to a clear board"> 
This image shows the screen after the "Restart" button is pressed. A clean boardgame is visible. 

# The Skeleton Plane 

The design of this project was to make the content simplistic and one of the key objectives was to make the site fully responsive to a mobile screen size, as well as the bigger screen sizes. The reason being that such games are more likely to be played on mobile phones than on desktops for example.

Below is a link to the wireframes I had completed

PAGE 1

PAGE 2 

# The Surface Plane

## Colour Palette
<img src="assets/images/midnightcolor.png" alt="Primary Background Colour, Midnight Blue">

I used the site w3schools.com's "CSS-Colours" section to select a colour combination. I used the above "Midnight Blue" as the primary colour for the actual board game as it is dark and would create a contrast to the secondary colour I selected.

<img src="assets/images/lightbluecolor.png" alt="Secondary colour for the game's details">
The light blue has been used for the details over the board game, such as the grid that divides the cells, the markers and the slightly transparent cover that displays in-between games behind the notification bearing the game's outcome. 
I found these two colours to be complimentary whilst still having a strong enough contrast to maintain the sites accessibility. 

## Font

I have used google fonts and chose 1 font called "League Gothic". I found this font to be sharp and clear whilst imparting a nostalgia. This is something I think is fitting for a game such as Tic Tac Toe, as it is a true classic.  

## Features For the Future
Below are features that I would have liked to add but have been unable to do so yet due to time constraints and not having the knowledge to do so yet either.
-   I would like to upgrade the code to include an option of playing against the computer. This is so a person who is alone can also enjoy the game. 


 Technologies used
- [HTML5](https://en.wikipedia.org/wiki/HTML) for markup 
- [CSS3](https://en.wikipedia.org/wiki/CSS) for style 
- [Google Fonts](https://fonts.google.com/) for fonts 
- [Github]( https://github.com/) to keep the file 
- [Gitpod]( https://www.gitpod.io/) for version control
- [w3schools](https://www.w3schools.com/cssref/css_colors.asp) to build a colour palette for the site 


# Resources
- [Code Institute](https://codeinstitute.net/) Course material
- [Code Institute](https://codeinstitute.net/) Slack community 
- [W3Schools]( https://www.w3schools.com/) 
- [Am I Responsive](http://ami.responsivedesign.is/) – Check the sites responsiveness
- [W3C](https://validator.w3.org/) Validate HTML code
- [W3C]( https://jigsaw.w3.org/css-validator/) CSS Validation 
- [W3Schools](https://www.w3schools.com/) - helped me in researching and fixing errors along the way
- [Stack Overflow](https://stackoverflow.com/) To troubleshoot many times when experincing issues 
- [Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe) - To research the history and origind of the game 
- [Exploratorium](https://en.wikipedia.org/wiki/Tic-tac-toe.html) - For simple game rules 


# Testing

I have had more than a few errors along the way of creating this game. I tested the site after the implementation of each section. 
Along the way, I found the following errors:

- The hover feature does not always consistently work. 

- The function to check the winner would not perform. I spent hours trying to figure out why the program kept throwing up errors in the console repeatedly. I read my code line by line and in the end a tutor from tutor support was able to spot that a capital letter was missing when defined in the functions, creating an inconsistency elsewhere in the code where it did have the capital letter at the right place. 

- The responsiveness of the game on a mobile size screen was an issue. I had to get the boardgame itself to fit the mobile phone screen as it was floating partially below the lower half of the page, thus making it only half visible when first landing on the home page. I didn't want the player to have to scroll down to play the game and therefore amended the size properties assigned to the to enable it to fit the screen and display in a way that was originally intended. 

- The biggest issue that I have faced with this project was figuring out the error in the syntax for the message that should display when "X" or "O" wins the game. This is something that I struggled to fix to the end as a tried many variations.


## User Stories Testing 
I have tested the site for achieving the goals set out in “User Stories”
-   The game is played by two players when both are present together
-   The set of instructions are clear 
-   The user interface is very simplistic 
-   The game is extremely easy to navigate 
-   The game is easy to play repeatedly and seamlessly
-   I did not find the site to be cluttered or have additional information that was not relevant to the game or serve a purpose 
-   The site is very easy to learn and memorise 
-   The game is very accessible on a mobile device and does not lose its tidy form 

## Validators 

<img src="assets/images/htmlcheck.png" alt="HTML Validation">

I checked the HTML code with W3C Jigsaw and there were no errors.

<img src="assets/images/csscheck.png" alt="CSS Validation">

I checked the CSS with W3C Jigsaw and no errors were found.

# Responsiveness 
I checked the website's responsiveness using Google Chrome Dev Tools. Mobile, tablet and desktop sizes were tested, and all worked well. 
It also responded on each breakpoint that were set up on Media Query's and no visual or functional errors found

# Version Control 

- GitHub
- Gitpod

Gitpod served as the local repository and IDE. 
GitHUb served as the remote repository. 

The following steps were followed to maintain version control;

- I created a repository on GitHub and named it 'Tic Tac Toe Time' 
- I then signed in to Gitpod and opened a new workspace via the repository name 'Tic Tac Toe Time'
- I created the pages, folders, and files on GitPod
- I saved my work on GitPod at regular intervals and pushed it to GitHub to keep it safe

This is the process I followed having completed each significant section of code, I typed the following into the terminal:
- git add . (This added the work to git)
- git commit -m "COMMIT MESSAGE" (This committed the work)
- git push (This pushed the work to GitHub)


# Deployment 

I followed the below steps on GitHub (insert link) to deploy the website. 

- Go to repository and select 'settings'. 
- Under the 'Github pages@ section, click on the live link. 
- On "Source", select "Branch: main' for Branch and click save.
- The website is now published on GitHub Pages and the link is provided on the same section

