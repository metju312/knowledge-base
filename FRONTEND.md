# Must learn

---
* https://www.linkedin.com/feed/update/urn:li:activity:7217405412189323265?utm_source=share&utm_medium=member_desktop
* https://type-level-typescript.com/
* https://edu.devstyle.pl/login
* https://exercism.org/
* https://egghead.io/q/resources-by-dan-abramov
* https://www.epicweb.dev/
* https://dev.to/coursesity/react-libraries-to-use-in-2021-15-top-picks-37d7
* https://tworcastron.pl/kursy/node-kurs-kompletny
* https://www.patterns.dev/react/hooks-pattern - dokończyć
* fiszki JS, teraz 39 - TODO
* web dev simplified forad map frontend and backend
* tematy z https://kursjs.pl
* https://developer.mozilla.org/en-US/docs/Web/JavaScript - wszystko
* > project w najnowszym tech w next.js - TODO

# Courses
* AWS software development engineer
* Google Machine Learning / Data Scientist Course
* Generative AI course by Google
* Domain Driven Design & Event Storming course

# YouTube channels

---

* [Jack Herrington](https://www.youtube.com/@jherr/videos)
* [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified/videos)


# Acronyms

---
### `Development process`

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
* `TDA` - Tell Don't Ask - change state not ask in what state it is
* `CUPID`
  * `Composable` - Możliwość składania, "plays well with others"
  * `Unix` - does one thing well
  * `Predictable` - does what you expect
  * `Idiomatic` - feels natural
  * `Domain-based` - the solution domain models the problem domain in language and structure. The code should be compatible with its domain, using the problem domain’s language
* `GRASP` - TODO
* `TDD` - Test Driven Development - tests first, write code only to green tests, then refactor tests and code, then repeat
* `DDD`
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


### `Security`
* `CSP` - Content Security Policy - zapobiega cross-site scripting, clickjacking i innym atakom polegającym na wstrzykiwaniu kodu. Twórca aplikacji webowej określa z jakich źródeł może aplikacja pobierać zasoby. Nagłówek HTTP: `Content-Security-Policy` w odpowiedzi serwera. Webowo określa DNSy z których przeglądarka może pobierać wszelkie zasoby
* `SOP` - Same Origin Policy - polityka tego samego pochodzenia: Funkcja zabezpieczeń przeglądarki, która ogranicza sposób uzyskiwania dostępu do zasobów przez różne aplikacje internetowe. Ta zasada wymaga, aby zasób pochodził z tego samego źródła, co aplikacja internetowa próbująca uzyskać do niego dostęp.
  * wyjątki:
    * obrazy, audio, video
    * css
    * skrypty ale mogą one uzyskiwać dostęp do elementów DPM i manipulować nimi tylko ze źródła w którym zostały załadowane
    * iframe
* `CORS` - Cross-Origin Resource Sharing
  * wysyła Preflight/Options przez GET/POST itp.
  * steruje SOP'em określając źródła z których można zaciągać zasoby
  * umożliwia serwerom wskazanie źródeł, z których przeglądarki mogą żądać zasobów
  * najczęściej chodzi o to, zeby zasób pochodził z tego samego źródła co aplikacja webowa próbująca uzyskać do niego dostęp
  * wykorzystuje nagłówki żądań i odpowiedzi HTTP do komunikacji z serwerem zasobów i uzyskiwania od niego pozwolenia
  * zmniejsza ryzyko CSRF cross-site request forgery
### `Atacks`
* `CSRF` - cross-site request forgery
  * zabezpieczany za pomocą CORS
  * metoda ataku na serwis internetowy, nie na przeglądarkę czy to co widzi użytkownik
  * Ofiarami CSRF stają się użytkownicy nieświadomie przesyłający do serwera żądania spreparowane przez osoby o wrogich zamiarach
  * Celem crackera jest wykorzystanie uprawnień ofiary do wykonania operacji
* `XSS` - cross-site scripting
  * zabezpieczany za pomocą CSP
  * sposób ataku na serwis WWW polegający na osadzeniu w treści atakowanej strony kodu (zazwyczaj JavaScript), który wyświetlony innym użytkownikom może doprowadzić do wykonania przez nich niepożądanych akcji
* https://www.bomberbot.com/lessons/cors-csp-and-other-web-security-concepts-an-introduction-for-developers/ TODO

# Tech stack / Tools

---

* `Redux`
  * stan aplikacji jest przechowywany w 1 miejscu jako drzewo obiektów, którym jest `store`
  * `akcje` to obiekty opisujące CO zmieniło się w stanie aplikacji. Wysyłane są przez `store.dispatch()`
  * zmiany stanu następują przez `reducery`, które są funkcjami bez efektów ubocznych. Opisują JAK dane z akcji modyfikują stan
  * `store`
    * obiekt tylko do odczytu przechowujący stan aplikacji w postaci drzewa i pilnuje zmian stanu
    * jest modyfikowany akcjami
    * odczyt za pomocą `getState()`
    * rejestruje listenery za pomocą `subscribe()`
* `Redux Thunk`
  * dostarcza `middleware` pozwalający na tworzenie funkcji pozwalająctch asynchroniczne operacje po których odczytuje stan i wysyła akcje
  * dzieje się to poprzez `action creators` dzięki nim thunk opóźnia wysłanie akcji do momentu kiedy zostanie zrealizowana operacja asynchroniczna np. request do API


      function updateUserRole(role) {
        return dispatch => fetchUsers().then(
          users => dispatch(changeRoleTo(role, users)),
          users => dispatch(apologize('Failed', error))
        );
      }
      store.dispatch(updateUserRole('support'));

* `Redux Saga`
  * podobny `middleware` do `redux thunk`
  * służy do obsługi efektów ubocznych zmiany stanu
  * jest zbudowana wokół generatorów z ES6


    // Saga fetchUser czeka na wywołanie akcji USER_REQUESTED // np. dispatch({ type: 'USER_REQUESTED', payload: { userId } }) function fetchUser(action) {
    }
    const user = yield call (Api.fetchUser, action.payload.userId); yield put({ type: "USER_SUCCEEDED", user: user });
    // Wywołuje fetchUser dla każdej akcji tego typu function mySaga() {
    yield takeEvery("USER_REQUESTED", fetchUser);

* `Redux Toolkit`
  * `Why`
    * "Configuring a Redux store is too complicated"
    * "I have to add a lot of packages to get Redux to do anything useful"
    * "Redux requires too much boilerplate code"
  * `content`
    * `configureStore()` - wrap createStore, simplify configuration, add tools like `redux-thunk`
    * `createReducer()` - use `immer` lib to write simpler updates
    * `createAction()` - generates an action creator function for the given action type string
    * `createSlice()` - accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types
    * `combineSlices()` - combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.
    * `createAsyncThunk()` - accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
    * `createEntityAdapter()` - generates a set of reusable reducers and selectors to manage normalized data in the store
    * `createSelector()` - utility from the Reselect library, re-exported for ease of use.
  * `RTK Query` - Redux Toolkit Query - optional addon to data fetching and caching
    * `createApi()` - define endpoints
    * `fetchBaseQuery()` - A small wrapper around fetch that aims to simplify requests
    * `<ApiProvider />` - Can be used as a Provider if you do not already have a Redux store.
    * `setupListeners()` - A utility used to enable refetchOnMount and refetchOnReconnect behaviors.
* `Gatsby` - Cloud to build/deploy/host websites
* `Sentry` - performence monitor for websites
* `Performance Measure`
  * `Metrics`
    * `First Contentful Paint (FCP)`: The time it takes for the first piece of content to be rendered on the screen.
    * `Time to Interactive (TTI)`: The time it takes for the app to become fully interactive.
    * `React Component Render Time`: The time it takes for individual React components to render
    * `JavaScript Bundle Size`: The size of the JavaScript files downloaded and executed by the browser.
    * `Memory Usage`: The amount of memory used by the application.
  * `Tools`
    * `Chrome DevTools` - "Performance" tab
    * `React Developer Tools` - Profiler
    * `Lighthouse` - Chrome Addon - generates reports
    * `Web Vitals` - Chrome Addon - get stats of FCP, TTI e.g.
    * `Code Splitting and Lazy Loading`
* `modern build tools`
  * `webpack`
    * module bundler
    * processes your application and creates a dependency graph
    * C++ preprocessor for Javascript
  * `Vite`
    * serves your code locally during development
    * bundles your javascript, CSS, and other assets together
    * simplifies and speeds up the build process
    * It leverages (dźwignie) modules in the browser to load your code instantly
    * Rollup.js under the hood on production
    * Vite uses esbuild for dependency pre-bundling. And this leads to significant performance improvements.
  * `Parcel`
    * Zero Configuration Bundler
  * `Rollup`
    * module bundling focus is on reusable **JavaScript libraries mostly**
    * best Tree-Shaking
    * Highly Customizable Configuration
    * Extensive Plugin Ecosystem
  * `ESbuild`
    * Blazing-Fast Builds - the fastest
    * Command- Line Interface (CLI) & JavaScript API for programmatic integration
  * Fastify - fastest web framework for node.js
* `Next.js` - React framework for building full-stack web applications
* `Nest.js`
  * A progressive (additional markup to html) Node.js framework for building efficient, reliable and scalable server-side applications
  * solve Architecture problem
  * architecture is heavily inspired by Angular
* `Vercel` - cloud platform for build and release web apps 
* `Monorepo build systems`
  * Lerna - build system for JS monorepo
  * Bit
  * pnpm workspace
  * yarn workspaces
  * NX - next gen build system, support monorepo, powerful integrations
  * Rush
  * Turborepo
    * purchesed by Vercel
    * incremental build, skip what is computed
    * hashing
    * remote caching with teammates
    * parallel execution
* `Microfrontends`
  * Module Federation - TODO
  * TODO
* `Django` - web framework using python to write apps
* `CSS`
  * Tailwind - TODO
  * LESS - TODO
  * SCSS - TODO
  * PostCSS - TODO
* `AWS` - TODO
* `GCP` - TODO
* `Firebase` - TODO
* `OpenAI API for frontend dev` - TODO
* `Databases`
  * PostgresSQL - TODO
  * MySQL - TODO
  * CosmosDB - TODO
  * DynamoDB - TODO
  * RDS - TODO
  * MongoDB - TODO
  * CouchDB - TODO
  * TODO
* `GraphQL` - TODO
* `REST` - TODO
* `Lambda` - TODO
* `Docker` - TODO
* `Websockets` - TODO
* `Sanity` - TODO
* `Hygraph` - TODO
* `Headless CMS` - Content Management System - Headless - dont have frontend (head). Can have multiple frontends because provide api for data fetching
  * `Strapi`
    * Open-source
    * self-hosted
    * or clouded
  * `Builder.io`
    * design to code
    * like figma with code generation

### `Tests`
* `RTL`
  * lightweight testing library from Kent C. Dodds
  * centered around user interactions and observable behavior
  * Render Components in Isolation
  * User-Centric Testing
* `Jest`
  * From Facebook
  * zero config setup
  * snapshot testing - specific point
  * parallel test running
  * code coverage reporting
  * można łączyć z innymi bilbiotekami, ponieważ jest nie jest stricte reactowy
* `Cypress`
  * popular end-to-end tests
  * Visual Testing
  * Network Traffic Control
  * Real Browser Testing
* `Playwright`
  * end-to-end testing
  * testuje kod na wielu przeglądarkach jednocześnie
* `Vitest` - todo
* `Mocha`
* `Chai`
* `Enzyme`
  * from Airbnb
  * rich set of tools for manipulating and inspecting React components
* `Jasmine`
  * BDD - behavior-driven development - testing framework
* `Karma`
  * Multiple Browser Support

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

### `Basics`
* `prop drilling` - konieczność przekazywania propsów wiele poziomów w drzewie DOM. Zamiast tego można użyć np. Context/Redux
* `komponent kontrolowany` - react stanem kontroluje stan pól formularza (poprzez atrybut value), które normalnie (gdy są niekontrolowane) mają własny stan
* `HoC` - opakowuje komponent w kontenter mający dodatkowe możliwości
* `Pure Component` - zwraca taki sam wynik jeśli poda mu się takie same props i state. Jest prawie jak zwykły komponent reactowy ale porównanie props i state stanu poprzedniego z aktualnym jest płytkie (shallow)
* `error boundary` - granice błędów - wrapują część drzewa dom i jeśli wystąpi wewnątrz błąd wówczas renderują komponent zastępczy
* `state`
  * `setState` - jest metodą asynchroniczną a jej wywołania są grupowane ze względu na wydajność
  * `useState(() => loadBigData())` - gwarantuje wykonanie obliczeń tylko raz. `useMemo` tego nie gwarantuje
  * nie należy zmieniać this.state, ponieważ React nie potrafiłby rozpoznać, kiedy przerenderować komponent
* `React.memo(component)` - HoC, który optymalizuje liczbę rerenderów, ponieważ z pełnego porównywania propsów, wykonuje porównanie płytkie, shallow (wszystkie prymitywy najwyższego poziomu itrzymują kopię z wyłączeniem obiektów, które nadal są połączone z oryginalną wartością)
* `HTML Events vs React Events` - w React przerywa się stack zdarzeń poprzez preventDefault()
* `SyntheticEvent` - "zdarzenie syntetyczne" - obiekt opakowujący zdarzenie będący częścią systemu zdarzeń Reacta. Zapewnia identyczne działanie zdarzeń dla każdej przeglądarki
* `key` - pomagają Reactowi identyfikować elementy kolekcji do rerendera/dodania/usunięcia. Do optymalizacji rerenderowania
* `routing`
  * `BrowserRouter`
    * używa History API z HTML5 do nawigacji i utrzymywania URL
    * korzysta z pełnej części ścieżki URL
    * wymaga konfiguracji po stronie serwera, żeby zwracał tą samą stronę HTML niezależnie od ścieżki
  * `HashRouter`
    * do nawigacji używa części hash z URL np. `#/users/guest`
    * konfiguracja serwera nie jest wymagana
  * `MemoryRouter` - przechowuje informacje o URL i jego zimanach w pamięci. Nie modyfikuje przy tym adresu strony pasku adresu przeglądarki

---

### `React Versions`
* `17`
  * TODO
* `18`
  * TODO

# TypeScript

---

# JavaScript

---

### `Basics`
* `JavaScript`
  * skryptowy(programy automatyzujące zadania uruchamiane w środowiskach skryptowych wykonywane jeden po drugim)
  * oraz wieloparadygmatowy język programowania (jest wiele sposobów na rozwiązanie tego samego programu)
  * stworzony przez firmę Netscape
  * first class function - posiada funkcje, które są traktowane jak każda inna zmienna
* `EcmaScript`
  * ECMA-European Association for Standardizing Information and Communication Systems
  * EcmaScript - ustandaryzowana specyfikacja obiektowego języka programowania
  * Najbardziej znane implementacje: JavaScript, JScript, ActionScript
* `ES6 (2015)`
  * let + const
  * arrow functions
  * classes
  * modules
  * destructors
  * default parameters in functions
  * promises
  * spread and rest operators
  * template strings `${}`
* `Vanilla JavaScript` - kod JavaScriptowy pisany bez żadnego frameworka
* `Proxy` - to obiekt w javascript, który opakowuje obiekt lub funkcję i monitoruje go za pomocą czegoś, co nazywa się target. Nadaje dowolnemu obiektowi nową funkcjonalność, taką, że przy próbie modyfikacji tego obiektu uruchamiana jest funkcja walidująca. let person= new Proxy(person1,ageValidate)
* `iterators`


    const tab = ["Ala", "Bala", "Cala"];
    const iterator = tab[Symbol.iterator]();

    console.log(iterator.next()); //{value: "Ala", done: false}
    console.log(iterator.next()); //{value: "Bala", done: false}
    console.log(iterator.next()); //{value: "Cala", done: false}
    console.log(iterator.next()); //{value: undefined, done: true}
* `generators`


    function* generateId() {
      let id = 1
      
      while (true) {
        const increment = yield id
        if (increment != null) {
          id = id + increment
        } else {
          id++
        }
      }
    }
    
    const gen = generateId()
    console.log(gen.next().value)
    // 1
    console.log(gen.next(3).value)
    // 4
    console.log(gen.next().value)
    // 5
* `Object`
  * `Object.keys(ob)` - Zwraca tablicę kluczy danego obiektu
  * `Object.values(ob)` - Zwraca tablicę wartości danego obiektu
  * `Object.entries(ob)` - Zwraca tablicę par [klucz-wartość]
* `strict mode` - tryb bardziej restrykcyjny
  * `"use strict";`
  * wyrzuca błędy JS gdzie w zwykłym trybie są to błędy ciche
  * naprawie błędy optymalizacyjne JS'a - kod jest szybszy
  * poprawia komunikowanie o błędach
    * zapobiega przypadkowemu tworzeniu zmiennych w global scope
    * wyłapuje powtórzone parametry w deklaracji funkcji
    * zapobiega tworzeniu zmiennych ze słów kluczowych np. let private = 1
    * zgłasza błedy przy niepoprawnym użyciu delete
  * można go definiować dla całej aplikacji lub dla konkretnych funkcji
  * zmiany przewidujące ewolucję ES
* `eval()`
  * uruchamia kod JS'owy zapisany stringiem
  * bardzo niebezpieczne
* `event loop` - nieskończona jednowątkowa pętla, która jest bazą java scripta. Wykonuje zadania z `call stacka`, `task queue` oraz `render queue`
  * `heap` - sterta - tu są przechowywane obiekty
  * `task quene` - zadania do wykonania w następnej kolejności przez event loop, np. callbacki funkcji asynchronicznych
  * `render queue` - kolejka renderowania, tu są wszystkie operacje zmieniające wygląd strony
  * `call stack` - stos wywołań, typów prostych i referencji - tu trafiają wszystkie użyte funkcje. Działa w LIFO
    * `micro tasks` - Promise.resolve().then/catch/finally, kontynuacja async, requestAnimationFrame()
    * `macro tasks` - ostatnie. setTimout, setInterval, 
  * `loop:`
    * 1. Wykonaj wszystkie zadania z `call stack`
    * 2. wykonaj wszystkie operacje z `render queue`
    * 3. Sprawdź czy coś jest w `task queue`
      * jeśli jest wówczas
        * sprawdź czy `call stack` jest pusty
          * jeśli jest pusty to weź jedno zadanie z `task queue` i przenieś na `call stack`
* `optional channing`
  * `?.`
  * from JS ES2020
  * frm ts 3.7
* `czyszczenie tablicy`
  * `array = []`
  * `array.lenght = 0`
  * `array.splice(0, array.lenght)`
* `let vs var`
  * `var` - function scope
  * `let` - block scope
  * wszystkie deklaracje (function, var, let, const, class) są hoistowane
  * ale tylko `var` są inicjalizowane przez undefined
  * `let` i `const` pozostają niezainicjalizowane


    function func() {
      console.log(a); // undefined
      console.log(b); // ReferenceError
      if() {
        var a = 1;
        var b = 2;
      }
      console.log(a); // 1
      console.log(b); // ReferenceError
    }
* `typy danych w JS`
  * Undefined
  * Boolean
  * Number
  * String
  * BigInt
  * Symbol
  * Object
  * Null
  * Function - typeof wskazuje na object, ponieważ każdy konstruktor funkcji dziedziczy po konstruktorze Object
* `jak utworzyć obiekt`
  * konstruktorem: `function Poo(title)(this.title = title)`; `new Poo('cos')`
  * Object Literal: `{title: 'cos'}`
  * new Object(): `const poo = new Object()`; `poo.title = 'cos'`
  * Object.create: `const poo = Object.create()`; `poo.title = 'cos'`
* `falsy values` - są traktowane jak false przy porównaniach, np. if
  * false - domyślna wartość boolean
  * null - brak wartości
  * undefined - wartość niezdefiniowana
  * NaN - nie jest liczbą, np.: `"abc" / 4`
  * "" - pusty string
  * 0 - liczba 0
  * -0 - liczba -0
  * 0n - wartość 0 jako BigInt
* `null vs undefined`
  * undefined - zmienna zadeklarowana ale nie posiada jeszcze wartości
  * null - wartość do przypisywania do zmiennej
* `spread operator`
  * rozwija wyrażenie w miejscach potrzebującytch wiele argumentów/elementów
* `rest operator`
  * używany do destrukturyzacji obiektów i tablic
* `tworzenie URL'a`
  * `encodeURI(uri)`
  * koduje wszystkie znaki z wyjątkiem specjalnych: `<,/?:@&=+$#>`
  * dekoduje się poprzez `decodeURI(encodedURI)`
* `call vs apply`
  * służą do podmiany kontekstu funkcji czyli wskaźnika `this`
  * `numbers.push.apply(numbers, others)` 
* `bind`
  * `bind` w porównaniu do call i apply nie zwraca wyniku ale funkcję, którą można wykonać w przyszłości
  * `const addFn = numbers.push.bind(numbers)` - funkcja addFn niezależnie kiedy będzie wykonana będzie znała znacznik this
* `slice vs splice`
  * `slice`
    * nie modyfikuje tablicy
    * zwraca część tablicy jako nową tablicę
    * służy do wybierania elementów z tablicy
  * `splice`
    * modyfikuje tablicę
    * zwraca usunięte elementy tablicy
    * służy do dodawania lub usuwania elementów z listy
* `scope`
  * zakres zmiennych określający ich widoczność i dostępność w różnych miejscach kodu
  * `let` - block scope
  * `var` - widoczne wewnątrz funkcji nawet po opuszczeniu bloku kodu w którym zostały zdefiniowane
    * zakres okraniczony jest do funkcji `function scope`
    * jeśli został zadeklarowany poza funkcją wówczas do przestrzeni globalnej
* `dziedziczenie prototypowe`
  * dziedziczą właściwości i metody po obiektach - rodzicach
  * `Prototype` jest obiektem który służy jako szablon podczas tworzenia innych obiektów
  * `Dog.prototype = Object.create(Animal.prototype)` - Dog będzie miał dostęp do funkcji Animal'a
* `hoisting`
  * mechanizm JS'a przenoszący deklaracje funkcji oraz zmiennych na samą górę, tzn do zasięgu funkcji lub globalnego zasięgu
* `closure`
  * domknięcie to funkcja wewnętrzna, która ma dostęp do:
    * zmiennych, które sama definiuje
    * zmiennych w scope funkcji zewnętrznej
    * zmiennych globalnych


    const add = x => y => x + y;
    const add10 = add(10); // add10 to domknięcie funkcji add

    add10(20) //30
    add10(50) //60
* `IIFE`
  * Immediately Invoked Function Expression
  * funkcja która jest wykonywana bezpośrednio po jej odczytaniu
  * używa się aby zapobiec wydostawaniu się zmiennych do zewnętrznego scopeu
  * może przyjmować argumenty i zwracać wynik


    var message = (function () {
      var tempMsg = 'hello';
      return tempMsg;
    })()
    console.log(message) //hello
* `zmiana kontekstu wywołania funkcji`
  * polega na wywołaniu metody z jednej klasy na obiekcie innej klasy
  * polega na podmianie wskaźnika `this` za pomocą `call`, `apply` lub `bind`


    cat.say('meows', 'hello!');
    cat.say.apply(dog, ['barks', 'apply!'])
    cat.say.call(dog, 'barks', 'apply!')

    const dogFn = cat.say.bind(dog);
    dogFn('barks', 'bind!');
* `Object.freeze() vs Object.seal`
  * objek na którym wykonanu freeze() staje się immutable i nie można zmieniać jego wartości
  * seal - można zmieniać jego istniejące wartości ale nie można dodawać nowych ani usuwać istniejących

### Persistent Data Structures
* Trwałe struktury danych
* Zachowują poprzednie wersje kiedy są modyfikowane
* czyli są `immutable`
* najłatwiej jest skorzystać z biblioteki `import { Map } from 'immutable'`

### console
* console.log
* console.time - do mierzenia czasu wykonania
* console.table - do wyświetlania zawartości tablic

### zabezpieczenie obiektu przed rozszerzaniem
* `Object.preventExtensions()` - uniemożliwia tylko dodawanie nowych właściwości
* `Object.seal()` - możliwa będzie zmiana istniejących właściwości
* `Object.freeze()` - nic nie można zrobić

### function
* `first class functions` - możliwość zapisywania funkcji do zmiennych
* `higher order functions` - funkcje, które operują na innych funkcjach
  * przyujmują funkcje jako argument
  * zwracają funkcje jako wynik swojego działania
* `pure function`
  * jest deterministyczna
  * wynik zależy tylko od parametrów wywołania
  * nie modyfikuje zewnętrznych wartości ani zmiennych poza swoim zakresem
  * nie ma efektów ubocznych takich jak manipulacja DOM, zapytania HTTP, operacje I/O

### event bubbling ^ & event capturing v
* `event bubbling`
  * typ propagacji zdarzeń gdzie zdarzenia obsługiwane są w pierwszej kolejności przez element najbardziej wewnętrzny a dalej przez kolejne parenty
  * jest to domyślnie ustawione
  * można przerwać poprzez wykonanie `event.stopPropagation()`
  * `element.addEventListener('click', handle);`
* `event capturing`
  * pierwszy jest parent potem schodzi się do childów
  * `element.addEventListener('click', handle, true);`

### event delegation - delegacja zdarzeń
* jeśli mamy wiele elementów drzewa DOM obsługiwanych w ten sam sposób
* to zamiast tworzyć handlery dla każdego z nich
* tworzymy 1 handler nadrzędny do którego będziemy delegować wsystkie elementy
* np. `<ul` ma 1 handler dla wszystkich `<li`
* informacja który element został kliknięty znajduje się w `event.target`
* `form.addEventListener('input', function(event){event.target})`
---
## Tips
* conditional array element


    const array = ['first', ...(true ? ['second'] : [])]
* conditional object property


    const element = {...(true && {a: 5})}
* literal string union from object


    const carsDictionary = {
      AUDI: 'Audi',
      BMW: 'BMW',
    } as const;

    type CarName = typeof carsDictionary[keyof typeof carsDictionary];

* literal string union from array of strings


    const fruitsArray = ['apple', 'banana', 'orange', 'watermelon'] as const;

    type Fruit = typeof fruitsArray[number];

---

# Next.js

---

### `Setup`
* `sudo pnpm create next-app@latest <project-name>` - create app in projects folder
* `sudo chown -R msadlo next-js-ai-project` - recursively change owner of folders files to actual user - dont need to use sudo any more
* Use pnpm because is faster and better than yarn and npm
  * `brew install pnpm` - better
  * `npm install -g pnpm`
* `App Router vs Pages Router`
  * `App Router`
    * is a newer router that allows you to use React's latest features, such as Server Components and Streaming
    * `use app folder`
    * [routing convention](https://nextjs.org/docs/getting-started/project-structure#app-routing-conventions)
  * `Pages Router`
    * is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.
    * use `pages folder
* `pnpm dev` - run dev server with live edit
* `pnpm add prettier prettier-plugin-tailwindcss` - add prietter
* `.prettierrc`


    {
      "arrowParens": "avoid",
      "singleQuote": true,
      "jsxSingleQuote": true,
      "tabWidth": 2,
      "trailingComma": "none",
      "semi": false,
      "proseWrap": "always",
      "printWidth": 80,
      "plugins": ["prettier-plugin-tailwindcss"]
    }


* [important root folder files](https://nextjs.org/docs/getting-started/project-structure#top-level-files)
* https://nextjs.org/learn/dashboard-app/getting-started potem TODO


---

# Bash

---

* `ls -lah` - show list of files with permisions and owner users 
* `whereis pnpm` - show path of program


---

# VSC - Visual Studio Code

---

# Shortcuts

### `Ctrl Shift P`
* search for commands e.g.: 
  * `reload window`