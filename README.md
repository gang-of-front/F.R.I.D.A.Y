# F.R.I.D.A.Y

> Mock Http Request

![F.R.I.D.A.Y.](./resources/FRIDAY.jpg)

## Install `yarn add -D @gang-of-front/friday`

## How use

> add in index.js

```
//mock/auth.js
const auth = ({server}) => {
  server
    .get('https://my-api.app.com/auth')
    .interceptor((req, res)=>res.status(200).json({token: 'xpto'}))
}

export { auth }
```

```
//friday.config.js
import { friday } from '@gang-of-front/friday'
import { auth } from './mock/auth'

const config = {
  name: 'My-Mock-Api',
  logging: false
}

const factory = friday(auth)

factory(config)
```

```
//index.js
if (process.env.NODE_ENV === 'development') {
  import('./friday.config')
}
```
