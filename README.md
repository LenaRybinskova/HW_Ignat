hw12: изменение темы приложения с помощью data аттрибутов

``` 
useEffect(() => {
        //document.documentElement обращ к <html>
        //если у эл есть атрибут theme, к нему можно обратиться как к dataset.theme
        // '' не обязательно добавлять, но для ясности что это строка - можно указать
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])
```

https://create-react-app.dev/docs/deployment/#github-pages

```yarn deploy```