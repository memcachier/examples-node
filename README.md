# MemCachier Node.js Example App

[![BSD3 License](http://img.shields.io/badge/license-BSD3-brightgreen.svg?style=flat)][tl;dr Legal: BSD3]

[tl;dr Legal: BSD3]:
  https://tldrlegal.com/license/bsd-3-clause-license-(revised)
  "BSD3 License"

For safety we don't use any user input for the file name, instead using a SHA1
digest to name the file and writing metadata about the file and submission to a
log.
This is an example Node.js app that uses
[MemCachier](http://www.memcachier.com) to cache values. This example is
written with Node.js and the express framework.

You can view a working version of this app
[here](http://memcachier-examples-node.herokuapp.com).  Running this app on
your local machine in development will work as well, although then you won't be
using MemCachier -- you'll be using a local dummy cache. MemCachier is
currently only available with various cloud providers.

Setting up MemCachier to work in Node is very easy.

## Deploy to Heroku

You can deploy this app yourself to Heroku to play with.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Running

```
npm install
cp prod.env .env
foreman start
```

## Licensing

This library is BSD-licensed.

## Get involved!

We are happy to receive bug reports, fixes, documentation enhancements, and
other improvements.

Please report bugs via the
[github issue tracker](http://github.com/memcachier/examples-node/issues).

Master [git repository](http://github.com/memcachier/examples-node):

* `git clone git://github.com/memcachier/examples-node.git`

