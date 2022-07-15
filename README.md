# PS Project - ProStudenty

Webová aplikace se zápisy učiva pro střední školy zdarma.

## Dokumentace
### Přidávání předmětu

1. vytvoř složku v home dir s názvem předmětu

2. v `/předmět` vytvoř 3 soubory:
    `/předmět/predmet.json`
    `/předmět/obsah.json`
    `/předmět/temata.json`

3. vyplň soubory:
`predmet.json`
```
{
    "title": --string--,
    "color": --string typu "#00ffaa" (hsl color)--,
    "icons": [
        string,
        string, 
        ...
        * stačí jen jedna
    ]
}
```


`obsah.json`
```
// Názvy si vyplň sám, to dá rozum...
{
    "1": {
        "title": "1. ročník",
        "contents": [
            {
                "title": "Ekonomie",
                "link": "/ekonomie"
            }
            {
                "title": "Ekonomie",
                "link": "/ekonomie"
            }
        ]
    },

}
```

`temata.json`
```
{
    "ekonomie": {
        "title": "Ekonomie",
        "url": "/ekonomie",
        "icons": "ptak",
        "ukazka": "= zabývá se společenskou realitou ",
        "key_words": "ekonomika peníze výnosy zásoby"
    }
}

```

### Přidávání zápisu


### Přidávání ikony