# Example Theia Extension

An example extension for the Theia Web-IDE accompanied by a working Dockerfile that can be used to start the application

## Features

- This extension replaces the default pre-loading screen with a custom pre-loading screen that displays your name in h2 font-size.
- The extension adds a menu item called "Watch Youtube video" as the bottom-last item in the context-sensitive menu when you right click on the theia web-IDE
code-editor
- On clicking the "Watch Youtube video" menu-item in the code-editor context-sensitive menu, a panel opens from the right hand toolbar of the editor where an embedded youtube video can be played

## Running the extension

    yarn 
    docker build -t imageName:tagName .
    docker run -it -p 3000:3000 imageName:tagName

Open http://localhost:3000 in the browser.

