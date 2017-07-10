https://www.facebook.com/events/1062498357132335/
Executing HTTP requests and working with REST API. 

## Task
Search GIFs from giphy.com

## Requirements
- [x] app displays ~~a textarea~~ an input
- [ ] search automatically, e.g. 300 ms after user types in the last letter
- [x] if there are results, display below
- [x] if there are no results, there should be a proper message
- [x] Use `fetch()` instead of jQuery, XMLHttpRequest.
- [x] API Giphy returns GIFs in several formats. Use `.mp4` format and <video> tag. 

## Giphy API 
https://developers.giphy.com/docs/

## Fetch API
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

The simplest use of `fetch()` takes one argument — the path to the resource you want to fetch — and returns a promise containing the response.

A `fetch()` promise will reject with a TypeError when a network error is encountered, although this usually means permission issues or similar — a 404 does not constitute a network error, for example. An accurate check for a successful `fetch()` would include checking that the promise resolved, then checking that the `Response.ok` property has a value of true.

## Tags:
- Fetch API
- Promise
- tag video
- debounce
