# Must learn from

---
* https://www.linkedin.com/feed/update/urn:li:activity:7217405412189323265?utm_source=share&utm_medium=member_desktop


# YouTube channels

---

* [Jack Herrington](https://www.youtube.com/@jherr/videos)


# Acronyms

---

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
* TDD - TODO
* DDD - TODO


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

# TypeScript

---

# JavaScript

---
## Tips
* conditional array element

      const items = ['foo', ...true ? ['bar'] : []]