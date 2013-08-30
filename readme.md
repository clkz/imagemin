imagemin
=============

A tool which fork from [grunt-img][grunt-img] to optimize PNG and JPG images with [optipng][optipng] & [jpegtran][jpegtran] ([jpegtran-turbo][jpegtran-turbo] on win32).

## Getting Started

First, be sure that you have [optipng][optipng] 0.7(or earlier) and [jpegtran][jpegtran] installed in your system.

### for Mac users
You can install with [homebrew][homebrew]
```shell
brew install optipng jpeg
```

### for Linux users
Debian, Ubuntu and Mint
```shell
apt-get install optipng libjpeg libjpeg-progs
```
Both libraries are easy to find for RPM distributions too.

### for Windows users
Don't worry because both libraries are included.

### Install
```shell
npm install imagemin
```

## How to use

```shell
imagemin file_path
imagemin file_path -o new_file_path
```

```js
var imagemin = require('imagemin');
imagemin(file_path, dest, callback);
```

## License

MIT License
(c) [Helder Santana](http://heldr.com) [@三水清](http://weibo.com/sanshuiqing)

Credits
---------------
* Grunt-image [Helder Santana](http://heldr.com)
* HTML5 Boilerplate [node-build-script](http://github.com/h5bp/node-build-script)

[node-build-script]: http://github.com/h5bp/node-build-script
[grunt-img]: https://github.com/heldr/grunt-img
[jpegtran]: http://jpegclub.org/jpegtran/
[jpegtran-turbo]: http://libjpeg-turbo.virtualgl.org/
[optipng]: http://optipng.sourceforge.net/
[homebrew]: http://mxcl.github.com/homebrew/