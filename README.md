# F.R.I.D.A.Y
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> Mock Http Request

![F.R.I.D.A.Y.](./resources/FRIDAY.jpg)

## Install `yarn add -D @gang-of-front/friday`

## How use

> create a mock to api src/mock/auth.js

```
const auth = ({server}) => {
  server
    .get('https://my-api.app.com/auth')
    .interceptor((req, res)=>res.status(200).json({token: 'xpto'}))
}

export { auth }
```

> create src/friday.config.js

```
import { friday } from '@gang-of-front/friday'
import { auth } from './mock/auth'

const config = {
  name: 'My-Mock-Api',
  logging: false
}

const factory = friday(auth)

factory(config)
```

> add in index.js

```
if (process.env.NODE_ENV === 'development') {
  import('./friday.config')
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.gregio.net"><img src="https://avatars3.githubusercontent.com/u/806519?v=4" width="100px;" alt="Guilherme Gregio"/><br /><sub><b>Guilherme Gregio</b></sub></a><br /><a href="https://github.com/gang-of-front/F.R.I.D.A.Y/commits?author=guilhermegregio" title="Code">💻</a> <a href="https://github.com/gang-of-front/F.R.I.D.A.Y/commits?author=guilhermegregio" title="Tests">⚠️</a> <a href="https://github.com/gang-of-front/F.R.I.D.A.Y/commits?author=guilhermegregio" title="Documentation">📖</a> <a href="#ideas-guilhermegregio" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-guilhermegregio" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/rafaellucio"><img src="https://avatars3.githubusercontent.com/u/2213926?v=4" width="100px;" alt="Rafael Lucio"/><br /><sub><b>Rafael Lucio</b></sub></a><br /><a href="https://github.com/gang-of-front/F.R.I.D.A.Y/commits?author=rafaellucio" title="Code">💻</a> <a href="https://github.com/gang-of-front/F.R.I.D.A.Y/commits?author=rafaellucio" title="Tests">⚠️</a> <a href="https://github.com/gang-of-front/F.R.I.D.A.Y/commits?author=rafaellucio" title="Documentation">📖</a> <a href="#ideas-rafaellucio" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-rafaellucio" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!