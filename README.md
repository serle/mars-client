# Mars Explorer Project

# Getting Started

The Mars Explorer project consists of two git repo's:

1) https://github.com/serle/mars-server.git (server - built in spring boot java)
2) https://github.com/serle/mars-client.git (client - built using React/Recoil/Typescript & modern CSS)

The server provides an api which handles the ability to post explorer instructions to one or more robots 
on the surface of Mars. The following is an example of a typical request. 

POST: <URL:PORT>/mars?command="5 3|1 1 E|RFRFRFRF||3 2 N|FRRFLLFFRRFLL||0 3 W|LLFFFLFLFL"

The command parameter consist of:

1) surface grid: i.e. 5 by 3
   |
2) Initial State (of robot 1) i.e 1 1 E
   Instructions (to robot 1) i.e RFRFRFRF
   ||
3) Initial State (of robot 2) i.e 3 2 N
   Instructions (to robot 2) i.e FRRFLLFFRRFLL
   ||
4) Initial State (of robot 2) i.e 0 3 W
   Instructions (to robot 2) i.e LLFFFLFLFL
   
which returns the response:

1 1 E|3 3 N LOST|2 3 S


In addition to the main POST end point, an experimental get end point is provided to get
the list of supported robot instructions. It is anticipated that these will be upgraded in
the future. Although I ran out of time, my intention was to have the client query for the 
allowable list of instructions at start-up or on a periodic basis.

## Installation

To run the project
1) Ensure that you have java jdk11 installed on your machine with the JAVA_HOME environment variable set


2) Due to an issue with git, I was not able to push the final jar file due to its size. You can download 
   the packaged jar file from the following link:  
   

https://drive.google.com/file/d/1kv5QgC4UxavbqqDwA9AA58nCEfrRbwaR/view?usp=sharing 


3) Open a terminal to the directory where you download the jar file and enter the command
   
   ####java -jar mars-explorer.jar at the terminal in the directory 

4) Open a browser on http://localhost:8080/ to open the application

5) when done hit ctr^C in the terminal window to close the application

## Release Notes

Due to time constraints as well as a git issue:

1) I have demonstrated testing and commit management, predominantly in the server repository. 

2) On the client side I used the time to focused on building out a comprehensive validation 
   framework and a good looking UI, except for the buttons which can be easily swapped out with 
   styled div's later. 

3) I would be happy to add either Cypress, Enzyme or RTL testing as required. I have left the
   normal jest test unit testing files in the client repo to be filled out as needed.
   
## Usage Notes

Once the UI loads you will be greeted with a simple command form. The first thing that
you need to do is fill in the surface grid extent. This defines a planet wide grid system of 
coordinates in which the robot commands are specified. If this is changed at any time, all the
commands are cleared as they are assumed to be relative to the surface grid. Having defined 
the surface grid there is an edit line which allows you to capture the initial state i.e.
the x, y, orientation of a given robot as well as the set of instructions you want it to execute. 
All input is validated by the edit line before the add button is enabled. Once you have added
a command line it is added as the next non-editable line in the ordered list of command lines.

Only the non-editable, validated command lines will be sent on to mars once you hit the submit 
button. You can also remove individual non-editable rows by clicking the REM button at the end 
of a given row. 

The robot report (api response) is displayed on the bottom panel and is cleared if you edit 
the command data again after the previous response has been received. This is to ensure that 
if there is a robot report, it matches the non-editable command rows, to avoid any confusion.

##Technical Debt

1) Comprehensive Unit and Integration testing on the front end
2) Although I have used rem units throughout the layout, I have not added in media queries for 
multiple device sizes
3) I have only tested in Chrome
4) Installing a custom ErrorHandler into spring boot to display user friendly messages
5) Documentation generation client and server
6) Standardise Exception message format
