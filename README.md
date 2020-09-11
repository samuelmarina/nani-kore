# 🇯🇵 Nani Kore 「何これ？」🇯🇵
A mobile app that allows you to point your phone at things, recognize the item using AI, and teaches you how to say it in Japanese 🇯🇵🏯

-------

![Video 1](https://media.giphy.com/media/KzJqfLoAJW42Sn15iq/giphy.gif)


## How it works
The user takes a picture either using the front or back camera of its phone, then the image is sent to the [Clarifai](https://www.clarifai.com/) server, which takes care of
the image recognition, and later [My Memory](https://mymemory.translated.net/)'s API is in charge of translating it to Japanese.

## Give it a try!
First, take a look at the [React Native Documentation](https://reactnative.dev/docs/getting-started.html) to set up a React Native environment, as well as the [Expo Documentation](https://docs.expo.io/).

```
# Clone repository
$ git clone https://github.com/samuelmarina/nani-kore.git
$ cd nani-kore
```

Get your free API key from [Clarifai](https://www.clarifai.com/) and place it in ```Clarifai.js```.

```
# Install required packages
$ yarn install || npm install

# Run Expo
$ expo start

# Press a for Android emulator, or i for iOS simulator
# Or run it in your device using the other Expo options (e.g. QR code)
```

## Feel free to contribute
* Fork the repository
* Commit your changes
* Submit a pull request

## Author
* Samuel Mariña

# Acknowledgments
This is a personal project used as part of my React Native learning process, as well as a tool to help me enhance my Japanese language skills. It is basically a clone of [Thing Translator](https://github.com/dmotz/thing-translator) 
by [dmotz](https://github.com/dmotz)
