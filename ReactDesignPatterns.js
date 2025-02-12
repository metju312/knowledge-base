//////////////////////////////////////////////////
//  
//    Single Responsibility Principle
//  
//////////////////////////////////////////////////

// ❌ Too many responsibilities!
function BigComponent() {
  // Responsible for multiple unrelated states
  const [data, setData] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Responsible for fetching data
  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Responsible for implementing sending analytics events
  useEffect(() => {
    sendAnalyticsEvent('page_view', { page: 'big_component' });
  }, []);

  // Responsible for toggling modal
  function toggleModal() {
    setIsModalOpen(prev => !prev);
  }

  // ... other code
}

// ✅ Single responsibility: managing data through react query
export function useFetchData() {
  return useQuery({
    queryKey: ['data'],
    queryFn: () => fetch('/api/data'),
  });
}

// ✅ Single responsibility: managing analytics
export function usePageAnalytics(event: Event) {
  useEffect(() => {
    sendAnalyticsEvent('page_view', event);
  }, []);
}

// ✅ Single responsibility: managing modals
export function Modal({ children }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(prev => !prev);
  }

  return (
    <>
      <button onPress={toggleModal}>Open</button>
      {isModalOpen && children}
    </>
  );
}

// ✅ Single responsibility: put everything together
function BigComponent() {
  const data = useFetchData();

  useAnalytics();

  return <Modal>{/* ... other code */}</Modal>;
}


//////////////////////////////////////////////////
//  
//    Custom Hooks Pattern
//  
//////////////////////////////////////////////////

// ❌ All code related to `items` is directly in component.
function Component() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const filteredItems = filterItems(items, filters);
  }, [filters]);

  function handleFilters(newFilters) {
    setFilters(newFilters);
  }
}

// ✅ All code related to `items` is in custom re-usable hook
export function useFilteredItems() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const filteredItems = filterItems(items, filters);
  }, [filters]);

  function handleFilters(newFilters) {
    setFilters(newFilters);
  }

  return {
    items,
    filters,
    handleFilters,
  };
}

// ✅ Component is cleaner, and can share functionality of filtered items
function Component() {
  const { items, filters, handleFilters } = useFilteredItems();
}

//////////////////////////////////////////////////
//  
//    Higher Order Components (HOC)
//  
//////////////////////////////////////////////////


function Button(props) {
  // ❌ Styles object is duplicated
  const style = { padding: 8, margin: 12 };
  return <button style={style} {...props} />;
}

function TextInput(props) {
  // ❌ Styles object is duplicated
  const style = { padding: 8, margin: 12 };
  return <input type="text" style={style} {...props} />;
}

// ✅ Higher order component to implement styles
function withStyles(Component) {
  return props => {
    const style = { padding: 8, margin: 12 };

    // Merges component props with custom style object
    return <Component style={style} {...props} />;
  };
}

// Inner components receive style through props
function Button({ style, ...props }) {
  return <button style={style} {...props} />;
}
function TextInput({ style, ...props }) {
  return <input type="text" style={style} {...props} />;
}

// ✅ Wrap exports with HOC
export default withStyles(Button);
export default withStyles(Text);

//////////////////////////////////////////////////
//  
//    Container and Presentation Components
//  
//////////////////////////////////////////////////

// Container component responsible for logic
function ContainerComponent() {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const filteredItems = filterItems(items, filters);
  }, [filters]);

  function handleFilters(newFilters) {
    setFilters(newFilters);
  }

  // ... other business logic code

  return <PresentationComponent items={items} />;
}

// Presentation component responsible for UI
function PresentationComponent({ items }) {
  return (
    <>
      {/* ... other UI code */}
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}
      {/* ... other UI code */}
    </>
  );
}

//////////////////////////////////////////////////
//  
//    Compound Components Pattern
//  
//////////////////////////////////////////////////

import { createContext, useState } from 'react';

const ToggleContext = createContext();

// Main component exported for use in project
export default function Toggle({ children }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn(!on);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

// Compound component attached to main component
Toggle.On = function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
};

// Compound component attached to main component
Toggle.Off = function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
};

// Compound component attached to main component
Toggle.Button = function ToggleButton(props) {
  const { on, toggle } = useContext(ToggleContext);
  return <button onClick={toggle} {...props} />;
};


// Example use case with all components
function App() {
  return (
    <Toggle>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button>Toggle</Toggle.Button>
    </Toggle>
  );
}

// Example use case with different order
function App() {
  return (
    <Toggle>
      <Toggle.Button>Toggle</Toggle.Button>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.On>The button is on</Toggle.On>
    </Toggle>
  );
}

// Example use case with partial components
function App() {
  return (
    <Toggle>
      <Toggle.Button>Toggle</Toggle.Button>
    </Toggle>
  );
}

//////////////////////////////////////////////////
//  
//    Compound Components Pattern
//  
//////////////////////////////////////////////////


// Receives props as `...rest`
function Text({ children, ...rest }) {
  return (
    <span className="text-primary" {...rest}>
      {children}
    </span>
  );
}

// Button component uses `Text` component for its text
function Button({ children, textProps, ...rest }) {
  return (
    <button {...rest}>
      {/* ✅ `textProps` are forwarded */}
      <Text {...textProps}>{children}</Text>
    </button>
  );
}

// Example usage:
function App() {
  return (
    <Button textProps={{ className: 'text-red-500' }}>
      Button with red text
    </Button>
  );
}


//////////////////////////////////////////////////
//  
//    Children Components Pattern
//  
//////////////////////////////////////////////////


function Component() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      {/* ❌ Expensive component will re-render unnecessarily everytime count changes */}
      <ExpensiveComponent />
    </div>
  );
}

// Component
function Component({ children }) {
  const [count, setCount] = useState(0);

  // ✅ Children don't re-render when state changes
  return <Component>{children}</Component>;
}

// App
function App() {
  return (
    <Component>
      {/* ✅ Expensive component will not re-render when Component does */}
      <ExpensiveComponent />
    </Component>
  );
}



//////////////////////////////////////////////////
//  
//    Variant Props
//  
//////////////////////////////////////////////////

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

function Button({ variant = 'primary', size = 'md', ...rest }: ButtonProps) {
  // ✅ Styles derived based on variant and size
  const style = {
    ...styles.variant[variant],
    ...styles.size[size],
  };

  return <button style={style} {...rest} />;
}

// ✅ Custom object with clearly defined styles for every variant/size
const styles = {
  variant: {
    primary: {
      backgroundColor: 'blue',
    },
    secondary: {
      backgroundColor: 'gray',
    },
  },
  size: {
    sm: {
      minHeight: 10,
    },
    md: {
      minHeight: 12,
    },
    lg: {
      minHeight: 16,
    },
  },
};

// Example usage:
function App() {
  return (
    <div>
      <Button>Primary Button</Button>
      <Button variant="secondary" size="sm">
        Secondary Button
      </Button>
    </div>
  );
}


//////////////////////////////////////////////////
//  
//    Expose functionality through ref
//  
//////////////////////////////////////////////////

type Props = {
  componentRef: React.RefObject<{ reset: () => void }>;
};

function Component({ componentRef }: Props) {
  const [count, setCount] = useState(0);

  // ✅ Exposes custom reset function to parent through ref to change state
  useImperativeHandle(componentRef, () => ({
    reset: () => {
      setCount(0);
    },
  }));

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// And to use it, simply create a ref in the same component where it is rendered.
function App() {
  const componentRef = useRef(null);

  return (
    <>
      <Component componentRef={componentRef} />

      {/* ✅ Using the ref we can reset the inner state of Component */}
      <button onClick={() => componentRef.current?.reset()}>Reset</button>
    </>
  );
}



//////////////////////////////////////////////////
//  
//    Data management with Providers
//  
//////////////////////////////////////////////////

function Component1() {
  // ❌ User is fetched in multiple components
  const { data: user } = useFetchUser();

  // ❌ Unnecessary duplicate check for undefined user
  if (!user) {
    return <div>Loading...</div>;
  }

  // ... return JSX
}

function Component2() {
  // ❌ User is fetched in multiple components
  const { data: user } = useFetchUser();

  // ❌ Unnecessary duplicate check for undefined user
  if (!user) {
    return <div>Loading...</div>;
  }

  // ... return JSX
}


const UserContext = createContext(undefined);

function UserProvider({ children }) {
  // ✅ User fetch is done in provider
  const { data: user } = useFetchUser();

  // ✅ User check is done in provider
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    {/* ✅ User is always going to be available from here on */}
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

// Custom hook to easily access context
export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider.');
  }

  return context;
}

function App() {
  return (
    {/* ✅ Wrap every component with the provider */}
    <UserProvider>
      <Component1 />
      <Component2 />
    </UserProvider>
  );
}
function Component1() {
  // ✅ User is accessed from provider
  const { user } = useUser();

  // ✅ Can directly use user without checking if it is there
}

function Component2() {
  // ✅ User is accessed from provider
  const { user } = useUser();

  // ✅ Can directly use user without checking if it is there
}



//////////////////////////////////////////////////
//  
//    Render Props Pattern
//  
//////////////////////////////////////////////////


function Input({ value, handleChange }) {
  return <input value={value} onChange={(e) => handleChange(e.target.value)} />;
}

export default function App() {
  // ❌ Each state change could cause a re-render of all the children,
  // ❌ It can be tricky to lift state in larger applications with components that handle many children
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input value={value} handleChange={setValue} />
      <Kelvin value={value} />
      <Fahrenheit value={value} />
    </div>
  );
}

function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}


function Input(props) {
  const [value, setValue] = useState(0);

  return (
    <>
      <input
        type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.children(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input>
        {value => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  );
}

function Kelvin({ value }) {
  return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}

function Fahrenheit({ value }) {
  return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
}



//////////////////////////////////////////////////
//  
//    Prop combination
//  
//////////////////////////////////////////////////

function App() {
  const paragraphProps = {
    color: "red",
    size: "20px",
    lineHeight: "22px",
  };
  return <P {...paragraphProps}>This is a P</P>;
}

function P(props) {
  const { color, size, children, ...rest } = props;
  return (
    <p style={{ color, fontSize: size }} {...rest}>
      {children}
    </p>
  );
}


//////////////////////////////////////////////////
//  
//    Controlled inputs
//  
//////////////////////////////////////////////////


import React, { useState } from "react";

function ControlledInput() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return <input type="text" value={inputValue} onChange={handleChange} />;
}

//////////////////////////////////////////////////
//  
//    Error Boundaries Pattern
//  
//////////////////////////////////////////////////

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error or send it to a monitoring service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

import { ErrorBoundary } from 'react-error-boundary'

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function MyComponent() {
  // Some component logic that may throw JS errors
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={MyFallbackComponent}
      onReset={() => {
        // Reset the state of your app here
      }}
      resetKeys={['someKey']}
    >
      <MyComponent />
    </ErrorBoundary>
  )
}


//////////////////////////////////////////////////
//  
//    Lazy Loading Components
//  
//////////////////////////////////////////////////


// Without React.lazy()
import AboutComponent from './AboutComponent ';

// With React.lazy()
const AboutComponent = React.lazy(() => import('./AboutComponent '));

const HomeComponent = () => (
    <div>
      <AboutComponent />
    </div>
)



const AutomationDetails = lazy(() =>
  import(/* webpackChunkName: "automations::automationDetails" */ './components/ReactFlowCanvas/ReactFlowCanvas').then(
    (module) => ({
      default: module.ReactFlowCanvas,
    })
  )
);

import React, { Suspense } from "react";
const AboutComponent = React.lazy(() => import('./AboutComponent'));

const HomeComponent = () => (
    <div>
      <Suspense fallback={ <div> Please Wait... </div> }>
        <AboutComponent />
      </Suspense>
    </div>
);



//////////////////////////////////////////////////
//  
//    Control Props Pattern
//  
//////////////////////////////////////////////////


interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange }) => {
  const handleClick = () => {
    onChange(!value);
  };

  return (
    <button onClick={handleClick}>
      {value ? 'On' : 'Off'}
    </button>
  );
};


// Usage of the Toggle component controlled by props
const Example: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = (value: boolean) => {
    setIsToggled(value);
  };

  return (
    <div>
      <h1>Control Props Example</h1>
      <Toggle value={isToggled} onChange={handleToggleChange} />
      <p>The current state is: {isToggled ? 'On' : 'Off'}</p>
    </div>
  );
};


const [state, setState] = React.useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});



function App() {
  // We can create a function that returns the props of the Input component

  function getUserNameInputProps() {
    return {
      placeholder: "Type your username",
      type: "text",
    };
  }

  function getPasswordInputProps({ ...otherProps }) {
    return {
      placeholder: "Type your password",
      type: "password",
      ...otherProps,
    };
  }

  // We can also update the props of the Input component
  const updatedGetPasswordInputProps = () => {
    return getPasswordInputProps({
      placeholder: "Type your valid password",
      id: "password",
    });
  };

  return (
    <div className="App">
      <Input getInputProps={getUserNameInputProps} />
      <Input getInputProps={updatedGetPasswordInputProps} />
    </div>
  );
}

function Input(props: any) {
  const { getInputProps } = props;
  return <input {...getInputProps()} />;
}

export default App;



const [state, setState] = React.useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});

useEffect(() => {
  setState(someExpensiveComputation(props));
}, [props]);