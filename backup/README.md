# Warface Online

## Задача

Вёрстка на функциональных компонентах React макета

[Макет](https://www.figma.com/file/FckoLtdwRvsqJiVlVQbsoJ/WARFACE.ONLINE-(1)?node-id=477%3A2)

## Работа

1. Через Pull Request'ы
2. Сборку выгружаем на отладочный сервер (dealkgo.u-w.me). 
После выгрузки обязательно очищаем кэш в Cloudflare

## Технологии

- React, React Router
- Typescript
- CSS Modules
- Atomic Design
- SCSS
- Pixel Perfect

## Создание компонентов

1. Определить тип компонента по Atomic Design
2. Создать CamelCase папку в src/components
3. Создать tsx-файл компонента в папке. Имя компонента должно совпадать с именем папки. 
Например: src/components/atoms/Form/Form.tsx
4. Положить в папку 4 пустых файла: critical.sass, mobile.sass, tablet.sass, desktop.sass.
critical - код первого экрана любой страницы, остальные файлы начинают работать в зависимости 
от медиазапросов в src/config/breakpoints.js 
5. Типичная структура пустого tsx-компонента:

```typescript jsx
import * as React  from 'react';
// функция для объединения классов в CSS-модулях
import { concatStyles } from '../../../helpers/css-modules';

import criticalCSS from './critical.scss';
import mobileCSS from './mobile.scss';
import tabletCSS from './tablet.scss';
import desktopCSS from './desktop.scss';

// объединяем классы из 4-ёх файлов в CSS-модулях
const styles = concatStyles([
    criticalCSS,
    mobileCSS,
    tabletCSS,
    desktopCSS
]);

const Form = props => (
    // это значит, что в одном из 4-ёх sass-файлов есть класс .container
    <form className={styles.container}>
        {props.children}
    </form>
);

export default Form;
```

6. Для использования классов в компоненте вместо class пишем className (особенности React). 
Для обращения к классу в sass-файлах, обращаемся к константе styles и через точку указываем 
название класса

```typescript jsx
// это значит, что в одном из 4-ёх sass-файлов есть класс .wrapper
<div className={styles.wrapper}>
</div>
```

7. Для обращения к классу с дефисами, используем квадратные скобки: 
класс .info-date -> styles['info-date']

## Создание страниц

1. Создать новый шаблон страницы в src/components/templates
2. Подключить его в компоненте src/RouteList.tsx:

```typescript jsx
// импортируем компонент
import Landing from './templates/Landing/Landing';

// path - путь, по которому будет доступна страница (напр, http://localhost:8080/home
<Route path="/home">
    // импортированный компонент
    <Landing />
</Route>
```

## Кроссбраузерность

### Android Browser

Проблема со свойством gap в flexbox. Для решения нужно заменить все gap на margin.
Для обратной совместимости используется глобальный класс .no-flex-gap. 
В CSS модулях используется так:

```scss
:global .no-flex-gap :local .choice-text {
  margin-bottom: 12px;
}
```

1. ```:global .no-flex-gap``` включает глобальный контекст и класс .no-flex-gap
2. ```:local .choice-text``` включает локальный контекст CSS-модуля и класс .choice-text
