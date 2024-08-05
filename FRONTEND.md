# Must learn from

---
* https://www.linkedin.com/feed/update/urn:li:activity:7217405412189323265?utm_source=share&utm_medium=member_desktop
* https://type-level-typescript.com/
* https://edu.devstyle.pl/login
* https://exercism.org/
* https://egghead.io/q/resources-by-dan-abramov
* https://www.epicweb.dev/
* https://dev.to/coursesity/react-libraries-to-use-in-2021-15-top-picks-37d7
* https://tworcastron.pl/kursy/node-kurs-kompletny
* fiszki aktualna strona react: 24

# YouTube channels

---

* [Jack Herrington](https://www.youtube.com/@jherr/videos)


# Acronyms

---
* Development process
  * [SOLID in React](https://konstantinlebedev.com/solid-in-react/)
    * Single responsibility principle (SRP) - “every function/module/component should do exactly one thing”
    * Open-closed principle (OCP) -  structuring our components in a way that allows them to be extended without changing their original source code
    * Liskov substitution principle (LSP)
    * Interface segregation principle (ISP)
    * Dependency inversion principle (DIP)
  * [DRY - Don't Repeat Yourself](https://devcode.pl/dry-kiss-yagni/#Dont_Repeat_Yourself/)
  * [YAGNI - You Aren't Gonna Need It](https://devcode.pl/dry-kiss-yagni/#You_Arent_Gonna_Need_It/)
    * Don't write code that you aren't use
  * [KISS - Keep It Simple Stupid](https://devcode.pl/dry-kiss-yagni/#Keep_It_Simple_Stupid)
  * TDD - Test Driven Development - tests first, write code only to green tests, then refactor tests and code, then repeat
  * DDD
    * koncentruje się na głębokim zrozumieniu specyfiki działalności
    * założeniem jest stworzenie modelu dziedziny, czyli abstrakcyjnego reprezentanta biznesowej rzeczywistości, który będzie w pełni zgodny z realiami przedsiębiorstwa
    * Promuje silną współpracę między zespołem deweloperskim a ekspertami od strony biznesowej
    * "budowanie bloków" odnosi się do fundamentalnych elementów, z których składają się modele domenowe: agregatów, encji i wartości obiektów
    * Encje są obiektami z unikalną tożsamością, które pozwalają na śledzenie ich przez cykl życia aplikacji, nawet jeśli ich atrybuty ulegną zmianie
    * Wartości obiektów, w przeciwieństwie do encji, definiowane są przez ich atrybuty i nie posiadają własnej tożsamości
    * Agregaty zaś grupują jeden lub więcej obiektów domenowych (encje i wartości obiektów) w większe całości, określając granice i zasady ich współpracy
    * Każdy agregat posiada korzeń agregatu, który jest encją służącą jako punkt wejścia do agregatu i gwarantuje spójność całej grupy
    * Przyjęcie tych konceptów pozwala na tworzenie bardziej zorganizowanych, spójnych i łatwych w utrzymaniu modeli domenowych, które są lepiej zrozumiałe dla wszystkich członków zespołu projektowego.
    * pozwala na budowanie aplikacji, które są łatwiejsze do testowania, rozbudowy i utrzymania, gdyż są one silnie sprzężone z regułami i procesami biznesowymi
    * Sprawia, że w przypadku zmian w biznesie, zwykle wystarczy jedynie niewielka modyfikacja kodu
* Security
  * CSP - Content Security Policy - zapobiega cross-site scripting, clickjacking i innym atakom polegającym na wstrzykiwaniu kodu. Twórca aplikacji webowej określa z jakich źródeł może aplikacja pobierać zasoby. Nagłówek HTTP: `Content-Security-Policy` w odpowiedzi serwera. Webowo określa DNSy z których przeglądarka może pobierać wszelkie zasoby
  * SOP - Same Origin Policy - polityka tego samego pochodzenia: Funkcja zabezpieczeń przeglądarki, która ogranicza sposób uzyskiwania dostępu do zasobów przez różne aplikacje internetowe. Ta zasada wymaga, aby zasób pochodził z tego samego źródła, co aplikacja internetowa próbująca uzyskać do niego dostęp.
    * wyjątki:
      * obrazy, audio, video
      * css
      * skrypty ale mogą one uzyskiwać dostęp do elementów DPM i manipulować nimi tylko ze źródła w którym zostały załadowane
      * iframe
  * CORS - Cross-Origin Resource Sharing
    * wysyła Preflight/Options przez GET/POST itp.
    * steruje SOP'em określając źródła z których można zaciągać zasoby
    * umożliwia serwerom wskazanie źródeł, z których przeglądarki mogą żądać zasobów
    * najczęściej chodzi o to, zeby zasób pochodził z tego samego źródła co aplikacja webowa próbująca uzyskać do niego dostęp
    * wykorzystuje nagłówki żądań i odpowiedzi HTTP do komunikacji z serwerem zasobów i uzyskiwania od niego pozwolenia
    * zmniejsza ryzyko CSRF cross-site request forgery
* Atacks
  * CSRF - cross-site request forgery
    * zabezpieczany za pomocą CORS
    * metoda ataku na serwis internetowy, nie na przeglądarkę czy to co widzi użytkownik
    * Ofiarami CSRF stają się użytkownicy nieświadomie przesyłający do serwera żądania spreparowane przez osoby o wrogich zamiarach
    * Celem crackera jest wykorzystanie uprawnień ofiary do wykonania operacji
  * XSS - cross-site scripting
    * zabezpieczany za pomocą CSP
    * sposób ataku na serwis WWW polegający na osadzeniu w treści atakowanej strony kodu (zazwyczaj JavaScript), który wyświetlony innym użytkownikom może doprowadzić do wykonania przez nich niepożądanych akcji


# Tech stack / Tools

---
* Gatsby - TODO
* Sentry - TODO
* performing monitoring - TODO
* modern build tools - TODO


# Design Patterns

---

* [React] `hooks`
* [React] `HoC`
* [React] `Client side rendering`
* [React] `Server side rendering`
* [React] `Compound Components/Pattern` (Komponenty złożone)

      export default function FlyoutMenu() {
        return ( 
          <FlyOut>
            <FlyOut.Toggle />
            <FlyOut.List>
              <FlyOut.Item>Edit</FlyOut.Item>
              <FlyOut.Item>Delete</FlyOut.Item>
            </FlyOut.List>
          </FlyOut>
        );
      }
* [React] `Render Props Pattern`

      <Title render={() => <h1>I am a render prop!</h1>} />
      const Title = (props) => props.render();

* [React] `Progressive Hydration` - Przy SSR najpierw są zaczytywane html'e a dopiero potem handlery pozwalające na interakcję

* [TypeScript]
* [JavaScript] `Command` (Polecenie)

      manager.placeOrder("Pad Thai");
      >
      manager.execute(new PlaceOrderCommand("Pad Thai"));
* [JavaScript] `Factory` (Fabryka)

      const user1 = createUser({ firstName: "John" ...});
* [JavaScript] `Mediator/Middleware Pattern`


# React

---

## Basics
* `prop drilling` - konieczność przekazywania propsów wiele poziomów w drzewie DOM. Zamiast tego można użyć np. Context/Redux
* `komponent kontrolowany` - react stanem kontroluje stan pól formularza (poprzez atrybut value), które normalnie (gdy są niekontrolowane) mają własny stan
* `HoC` - opakowuje komponent w kontenter mający dodatkowe możliwości
* `Pure Component` - zwraca taki sam wynika jeśli poda mu się takie same props i state. Jest prawie jak zwykły komponent reactowy ale porównanie props i state stanu poprzedniego z aktualnym jest płytkie (shallow)
* `error boundary` - granice błędów - wrapują część drzewa dom i jeśli wystąpi wewnątrz błąd wówczas renderują komponent zastępczy
* `setState` - jest metodą asynchroniczną a jej wywołania są grupowane ze względu na wydajność
* `useState`
  * `useState(() => loadBigData())` - gwarantuje wykonanie obliczeń tylko raz. `useMemo` tego nie gwarantuje 

# TypeScript

---

# JavaScript

---
## Tips
* conditional array element

      const array = ['first', ...(true ? ['second'] : [])]
* conditional object property

      const element = {...(true && {a: 5})}