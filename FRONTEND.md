# YouTube channels
* [Jack Herrington](https://www.youtube.com/@jherr/videos)

# Tech stack
## Gatsby

# React

# TypeScript

# Design Patterns

## React
* hooks
* HoC
* Client side rendering
* Server side rendering
* Compound Components/Pattern (Komponenty złożone)

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
* Render Props Pattern

      <Title render={() => <h1>I am a render prop!</h1>} />
      const Title = (props) => props.render();

* Progressive Hydration

  Przy SSR najpierw są zaczytywane html'e a dopiero potem handlery pozwalające na interakcję

## TypeScript

## JavaScript
#### Command (Polecenie)
    manager.placeOrder("Pad Thai");
    >
    manager.execute(new PlaceOrderCommand("Pad Thai"));
#### Factory (Fabryka)
    const user1 = createUser({ firstName: "John" ...});
#### Mediator/Middleware Pattern
