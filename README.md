# Psühhoterapeudi veebileht (Eesti keeles)

Veebileht on inspireeritud [Keri Knight](https://www.keri-knight.com/) saidist ja kohandatud eesti keelde. See on psühhoterapeudi tutvustus- ja broneerimisleht.

## Funktsioonid

- **Avaleht**: pealkiri, intro, minust, teenused (individuaalne teraapia, ADHD toetus, ressursid), CTA, blogi eelvaade
- **Minust** & **KKK**: tutvustus ja korduma kippuvad küsimused
- **Teenused**: individuaalne teraapia, ADHD toetus, ressursid ja tööriistad
- **Võta ühendust**: e-post, telefon, asukoht
- **Blogi**: nimekiri ja üksikud postitused

Kõik sisu on eesti keeles. Disain kasutab rahulikke toone (cream, warm, sage) ja selget tüpograafiat.

## Tehnoloogia

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Käivitamine

```bash
npm install
npm run dev
```

Avage [http://localhost:3000](http://localhost:3000).

## Kohandamine

- **Nimi ja kontakt**: muutke `src/app/layout.tsx` (title), `src/components/Header.tsx` (Karin Sepp), `src/components/Footer.tsx` ja `src/app/vota-uhendust/page.tsx` (e-post, telefon).
- **Sisu**: teksti saab muuta vastavates lehtede failides `src/app/**/page.tsx` ja komponentides `src/components/*.tsx`.
