# Mercury Weather Forecast!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Спорные моменты

## Select
Есть несколько корректных способов сделать селект:
1. Частичная стилизация нативного `<select>`. Наиболее простой вариант, но не позволяет стилизовать само меню.
2. Используя тэги `<summary>` и `<details>`. Хорошо стилизуем и не требует JS кода, но также его неудобно контроллировать с JS.
3. Кастомный селект с помощью `<input>` и `<ol>/<ul>`. Хорошо стилизуем и контроллируется с JS, но придется многое написать самому.

Выбран вариант номер 3. При реализации также стоит помнить об accessibility. Селект должен быть доступен даже при работе без мышки с помощью клавиатуры. Кастомный вариант не открывается по enter из коробки и не позволяет выбирать варианты стрелками вверх/вниз. Так что этот функционал пришлось реализовывать самостоятельно.

## Grid
1. Макет подразумевает, что на экране шириной в `1440px` карточки будут занимать весь экран. В макете не представлена реализация для широкоэкранных мониторов. Если мы сделаем так, что карточки будут растягиваться по ширине экрана, на широкоформатных мониторах погода будет абсолютно нечтаемой, поэтому было решено придерживаться стандартной ширины контента для веба, т.е. `1200px`. (К сожалению, это привело к тому, что на десктопе в тексте "Forecast for a Date in the Past" "-Past" перенесся на вторую строку)
2. Многие программисты на моей памяти используют второй монитор вертикально. Так что, если растянуть карточки по высоте, тогда контент тоже получится нечитаемым. Поэтому высота карточек была ограничена до высоты наибольшей из них с помощью flexbox.
3. Также на макете указано мобильное устройство шириной в `320px`, но также на рынке имеются и устройства более широкие, не входящие в разряд планшетов. На устройствах вплоть до 500px планшетная разметка будет выглядеть ужасно, поэтому за breakpoint были взяты стандартные `576px` для мобильных устройств и `768px` для планшетов.

## Shadows
Тени карточек погоды немного обрезаются по краям около кнопок. Как я понимаю, этого не избежать, поскольку карточки в любом случае будут скроллиться, и у нас либо будут обрезаться тени, либо придется расширять контейнер как для мобилки. Во втором случае уберутся отступы для карточек, и карточки будут скроллиться под кнопками, что еще хуже, чем попорченные тени.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
