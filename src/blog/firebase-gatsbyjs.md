---


title: 'The problems of gatsby and firebase'
date: '2020-03-29'
sinopsis: "So I thought about doing a Gatsby Blog that allows readers to comment, kind of basic and easy to do with, lets say wordpress. But that would be easy"
tags: [GatsbyJs, Firebase]

---


# Real Blog with Gatsby

So let's cut to the chase, we are all in quarentine now. I wanted to do something new, you know, get out of the usual MERN, or simple Gatsby stuff.

So by now, Ive done quite a couple of sites with gatsby. The most complicated issues will appear on build, not on development. Thats a fact. But also, most of the build issues are due to the static generation process of gatsby.

This time I got the idea to build a blog with gatsby, I know, super original. But I wanted to give it a twist. The ability for people to comment. At first I thought, well there are two ways, one is build a NodeAPI routing comments to a mongoDB, since we cant really interact with mongo from gatsby. But that is just the normal MERN route, except we change the R for a G. 

So I've always kind of dreaded the Idea of firebase, dont know really why, most probably because I dont know how to use it... classics, happens to all of us. 

I decided to give it a try. At first, it made it feel very easy, I had user auth in aproximatly ten minutes. I was amazed. 

So I tried a couple of things, everything was smooth... until build time.

```bash

gatsby clean && gatsby build

```

gave this error

```bash
WebpackError: TypeError: firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp is not a function gatsby

```

why? I dont know.... well I googled. Turns out it had to do with the imports at my base.js file.
I was importing like this:

```javascript
import * as firebase from "firebase/app";

```
changed it to 

```javascript
import firebase from "firebase/app";

```

And it solved that issue. But new issues came up. 
So, of course if I was doing users, I had to use a global state. Of course using context. This is my gatsby context file, Im also doing a couple of other things such as dark mode. Anyways pay attention to the authState provider.

```javascript
import React, { useState, useEffect }  from "react"
import app from './base';


export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();
export const AuthContext = React.createContext();




// From global state reducers
const initialState = {
    toggleDark: true
}


function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        toggleDark: !state.toggleDark
       
      }
    }
    case "CHANGE_ANIMATION": {
        return {
          ...state,
          
        }
      }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
      app.auth().onAuthStateChanged(setCurrentUser);
      console.log(app.auth().onAuthStateChanged(setCurrentUser))
  }, []);

  return (
      <AuthContext.Provider value={{currentUser}}>
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
    </AuthContext.Provider>
  )
}

export default GlobalContextProvider

```

This gave me access to a currentUser object. Worked fine in development mode
like so:

```javascript


import {AuthContext} from '../config/context';

 const {currentUser} = useContext(AuthContext);

```

This allowed me to get user data. But when building, I got the following error

```bash
  WebpackError: TypeError: Cannot destructure property 'currentUser' of 'Object(...)(...)' as it is undefined.   

```

mmm, kinda seen this error before. In my experience, when we get an undefined at building gatsby, most of the times it has to do with something not being available in SSR. Maybe something of the DOM, like window for example. A work around for those issues, such as window not existing is just to do the following

```javascript

 if (typeof window !== "undefined") {
     // do your stuff if window is not undefined.... this way you wont get window is undefined at build
    }

```

Since my app was working in dev, but at build I was getting an undefinded, my brain did 2+2 and got 4. A quick workaround should be to verify for undefined on your userobject.

So:

```javascript

//Import global context
import {AuthContext} from '../config/context';

    //define an empty let.
    let currentUser;
      // define my context into a var
      let realUser = useContext(AuthContext);
      // if realUser exists, but only if it exists, 
      if(realUser) {
          currentUser = test.currentUser;
      }

```

That did it folks. My app now was able to build fine.

Sure I was now getting this error 

```bash
 Warning: This is a browser-targeted Firebase bundle but it appears it is being
      run in a Node environment.  If running in a Node environment, make sure you
      are using the bundle specified by the "main" field in package.json.

      If you are using Webpack, you can specify "main" as the first item in
      "resolve.mainFields":
      https://webpack.js.org/configuration/resolve/#resolvemainfields

      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"
      as the first item in "mainFields", e.g. ['main', 'module'].
      https://github.com/rollup/rollup-plugin-node-resolve

```
But the app now builds successfully.

And thats it for now.