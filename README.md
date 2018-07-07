# Hydrocarbon Launcher
The Hydrocarbon Launcher is a utility for downloading and managing Hydrocarbon engine versions as well as creating, managing and packaging game projects. It is written in Typescript with React and uses Electron.

## About
This is a relatively simple application that handles setting up projects for the Hydrocarbon engine. It will feature:
* News page: shows blog-style posts about engine updates or important information for users. These are generated from markdown files, with a master list of all (or recent) posts updated on startup and then every hour (configurable in settings).
* Projects page: lists projects created through the Launcher. Here new projects can be made, allowing users to choose an engine version (along with configuration for engine features).
* Templates page: an online list of project templates that can be applied when making a new project. Inspired by Godot. This will only host free and open source content since asset stores are pure laissez-faire captialism evil *glares at Unity*.
* Preferences page: allows configuration of some settings for the application such as online checking rate (for updates, blog posts etc.), cache paths and clearing, etc.

At the moment it is very early in-development, with only some UI framework in place.

## Contributing
The project is set up to work in Visual Studio Code, and uses electron-webpack to handle building. Run `npm install` and you should be good to go.

## License
This application's source code is licensed under the GNU GPL v3.0 (or later). See LICENSE for more information.

Non-code assets are copyright their respective owners, who may include:
* While False Studios (graphics, text)
* Google (material icons)
* Adobe (Source Sans Pro font)